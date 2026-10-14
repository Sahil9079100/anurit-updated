import { NextResponse } from "next/server"

/**
 * Contact form → Azure Function email proxy.
 *
 * Mirrors the main/production site's setup: the browser posts the form to this
 * route, which forwards it to the Azure Function that actually sends the email.
 *
 * Env vars (see .env.local):
 *   - AZURE_CONTACT_FUNCTION_URL : URL of the "sendContactEmail" Azure Function
 *   - CONTACT_TO_EMAIL           : where form submissions are delivered
 *   - CONTACT_FROM_EMAIL         : the "From" address used by the function
 */
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "amrit@anuritinnovation.com"

const LOCAL_AZURE_FUNCTION_URL = "http://localhost:7071/api/sendContactEmail"

function getAzureFunctionUrl(): string {
  const useLocal =
    process.env.USE_LOCAL_AZURE_FUNCTION === "true" ||
    process.env.USE_LOCAL_AZURE_FUNCTION === "1"
  if (useLocal) return LOCAL_AZURE_FUNCTION_URL

  const fromEnv =
    process.env.AZURE_FUNCTION_URL || process.env.AZURE_CONTACT_FUNCTION_URL || ""
  if (fromEnv) return fromEnv

  if (process.env.NODE_ENV === "development") return LOCAL_AZURE_FUNCTION_URL
  return ""
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, interest, message } = body as {
      name?: string
      email?: string
      interest?: string
      message?: string
    }

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 },
      )
    }

    const azureFunctionUrl = getAzureFunctionUrl()
    if (!azureFunctionUrl) {
      console.error("AZURE_FUNCTION_URL / AZURE_CONTACT_FUNCTION_URL is not set")
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      )
    }

    const response = await fetch(azureFunctionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: TO_EMAIL,
        from: process.env.CONTACT_FROM_EMAIL || TO_EMAIL,
        replyTo: email,
        subject: `Contact form: ${interest || "General enquiry"} from ${
          name || email
        }`,
        name: name || "",
        email,
        interest: interest || "",
        message,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error")
      console.error("Azure Function error:", errorText)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      )
    }

    const result = await response.json().catch(() => ({ success: true }))
    return NextResponse.json({ success: true, ...result })
  } catch (err) {
    console.error("Contact API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}