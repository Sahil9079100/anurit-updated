import { imgVector19, imgVector20, imgVector21 } from "../assets"

export type SubmitStatus = "idle" | "submitting" | "submitted"

interface SubmitButtonProps {
  status?: SubmitStatus
}

const labels: Record<SubmitStatus, string> = {
  idle: "Submit",
  submitting: "Submitting...",
  submitted: "Submitted",
}

export default function SubmitButton({ status = "idle" }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={status === "submitting"}
      aria-busy={status === "submitting"}
      className="relative bg-black rounded-[8px] overflow-hidden w-[355px] h-[52px] flex items-center cursor-pointer disabled:cursor-progress"
    >
      <div
        className="absolute flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ width: 255, height: 134, left: 129, top: -32 }}
      >
        <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
          <div className="relative" style={{ width: 248, height: 117 }}>
            <div
              className="absolute"
              style={{ inset: "-17.15% -8.1% -17.16% -8.1%" }}
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector19}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ width: 256, height: 134, left: 148, top: -15 }}
      >
        <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
          <div className="relative" style={{ width: 249, height: 117 }}>
            <div
              className="absolute"
              style={{ inset: "-17.15% -8.06% -17.16% -8.06%" }}
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector20}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ width: 255, height: 134, left: 170, top: 7 }}
      >
        <div style={{ transform: "rotate(-4.04deg) skewX(0.04deg)" }}>
          <div className="relative" style={{ width: 248, height: 117 }}>
            <div
              className="absolute"
              style={{ inset: "-17.15% -8.1% -17.16% -8.1%" }}
            >
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector21}
              />
            </div>
          </div>
        </div>
      </div>
      <span className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[16px] text-white ml-5">
        {labels[status]}
      </span>
      <span className="relative z-10 font-['Plus_Jakarta_Sans:Regular'] font-normal text-[24px] text-white ml-auto mr-4">
        {status === "submitting" ? (
          <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white align-middle" />
        ) : status === "submitted" ? (
          "✓"
        ) : (
          "→"
        )}
      </span>
    </button>
  )
}
