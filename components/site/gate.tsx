"use client"

import * as React from "react"

/** Entry gate: tap to open the haveli doors. */
export function Gate() {
  const [state, setState] = React.useState<"closed" | "open" | "gone">("closed")

  const openGate = () => {
    if (state !== "closed") return
    setState("open")
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    setTimeout(() => setState("gone"), reduce ? 0 : 1450)
  }

  return (
    <div
      className={"gate" + (state !== "closed" ? " open" : "") + (state === "gone" ? " gone" : "")}
      role="button"
      tabIndex={0}
      aria-label="Open the invitation"
      onClick={openGate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openGate()
        }
      }}
    >
      <div className="door l" />
      <div className="door r" />
      <div className="seal">
        <div className="ganesh">॥ श्री गणेशाय नमः ॥</div>
        <div className="names">Dipesh &amp; Kirti</div>
        <div className="knock" aria-hidden="true">D&nbsp;K</div>
        <small>Tap to open the invitation</small>
      </div>
    </div>
  )
}
