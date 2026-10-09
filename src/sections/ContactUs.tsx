import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import ContactField from "../components/ContactField"
import SubmitButton from "../components/SubmitButton"
import type { SubmitStatus } from "../components/SubmitButton"
import { imgLine1, imgLine3 } from "../assets"

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Twitter/X", href: "https://x.com/" },
  { label: "GitHub", href: "https://github.com/" },
]

type FormValues = { name: string; email: string; message: string }
type FormErrors = Partial<Record<keyof FormValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const EMPTY_VALUES: FormValues = { name: "", email: "", message: "" }
const FIELD_ORDER: (keyof FormValues)[] = ["name", "email", "message"]
const SUBMIT_DELAY_MS = 3000

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = "Name is required"
  if (!values.email.trim()) errors.email = "Email is required"
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "Enter a valid email address"
  if (!values.message.trim()) errors.message = "Message is required"
  return errors
}

export default function ContactUs() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [])

  const handleChange = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
    if (status === "submitted") setStatus("idle")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "submitting") return

    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const payload: FormValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    }

    setStatus("submitting")
    timerRef.current = window.setTimeout(() => {
      console.log("Contact form submitted:", payload)
      setValues(EMPTY_VALUES)
      setStatus("submitted")
      timerRef.current = null
    }, SUBMIT_DELAY_MS)
  }

  return (
    <section className="w-full flex justify-center items-center py-16">
      <div className="w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="w-full flex flex-col">
            <p className="font-['Pixelify_Sans:Regular'] font-normal text-[36px] text-black mb-4">
              Contact Us
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[20px] text-[#2c2c2c]">
              Ask any query to us!
            </p>

            <dl className="mt-10 space-y-6 font-['Plus_Jakarta_Sans:Regular']">
              <div>
                <dt className="text-[13px] uppercase tracking-[0.18em] text-black/40">
                  Email
                </dt>
                <dd className="mt-1 text-[18px] text-[#2c2c2c]">
                  <a href="mailto:hello@anurit.com" className="hover:text-black transition-colors">
                    hello@anurit.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] uppercase tracking-[0.18em] text-black/40">
                  Location
                </dt>
                <dd className="mt-1 text-[18px] text-[#2c2c2c]">Jaipur, Rajasthan, India</dd>
              </div>
            </dl>

            <nav aria-label="Social links" className="mt-10">
              <ul className="flex flex-wrap gap-6 font-['Plus_Jakarta_Sans:Regular'] text-[15px]">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/40 transition-colors duration-300 hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full min-w-0 xl:translate-x-16 2xl:translate-x-48"
          >
            <ContactField
              id="contact-name"
              name="name"
              label="Name"
              line={imgLine1}
              value={values.name}
              onChange={handleChange("name")}
              error={errors.name}
              readOnly={status === "submitting"}
              autoComplete="name"
              className="mb-6"
            />
            <ContactField
              id="contact-email"
              name="email"
              label="Email"
              type="email"
              line={imgLine1}
              value={values.email}
              onChange={handleChange("email")}
              error={errors.email}
              readOnly={status === "submitting"}
              autoComplete="email"
              className="mb-6 mt-8"
            />
            <ContactField
              id="contact-message"
              name="message"
              label="Message"
              multiline
              line={imgLine3}
              value={values.message}
              onChange={handleChange("message")}
              error={errors.message}
              readOnly={status === "submitting"}
              className="mb-8 mt-8"
            />
            <div className="mt-12">
              <SubmitButton status={status} />
            </div>
            <p role="status" className="sr-only">
              {status === "submitting"
                ? "Submitting your message"
                : status === "submitted"
                  ? "Your message was submitted"
                  : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
