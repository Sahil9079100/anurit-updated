"use client"

import { useLayoutEffect, useRef } from "react"

interface ContactFieldProps {
  id: string
  name: string
  label: string
  line: string
  value: string
  onChange: (value: string) => void
  type?: string
  multiline?: boolean
  error?: string
  readOnly?: boolean
  autoComplete?: string
  className?: string
}

const controlClass =
  "block w-full bg-transparent p-0 mb-1 border-0 outline-none font-['Plus_Jakarta_Sans:Regular'] font-normal text-sm leading-5 text-black placeholder:text-gray-500"

export default function ContactField({
  id,
  name,
  label,
  line,
  value,
  onChange,
  type = "text",
  multiline = false,
  error,
  readOnly = false,
  autoComplete,
  className = "",
}: ContactFieldProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const errorId = `${id}-error`

  useLayoutEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }, [value])

  const sharedProps = {
    id,
    name,
    value,
    placeholder: label,
    "aria-label": label,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    readOnly,
    autoComplete,
  }

  return (
    <div className={className}>
      {multiline ? (
        <textarea
          {...sharedProps}
          ref={textareaRef}
          rows={1}
          onChange={(event) => onChange(event.target.value)}
          className={`${controlClass} resize-none overflow-hidden`}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          onChange={(event) => onChange(event.target.value)}
          className={`${controlClass} h-5`}
        />
      )}
      <div className="relative h-0">
        <img
          alt=""
          className="block"
          style={{ width: "100%", height: 1 }}
          src={line}
        />
        {error && (
          <p
            id={errorId}
            className="absolute left-0 top-1.5 font-['Plus_Jakarta_Sans:Regular'] text-xs leading-none text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
