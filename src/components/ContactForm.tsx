"use client"

import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import ContactField from "./ContactField"
import SubmitButton from "./SubmitButton"
import type { SubmitStatus } from "./SubmitButton"
import { imgLine1, imgLine3 } from "../assets"

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

export default function ContactForm({ className = "" }: { className?: string }) {
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
    <form noValidate onSubmit={handleSubmit} className={`w-full min-w-0 ${className}`}>
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
  )
}
