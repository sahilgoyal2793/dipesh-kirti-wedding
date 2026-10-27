"use client"

import * as React from "react"

const pad = (x: number) => String(x).padStart(2, "0")

export function Countdown({ start }: { start: string }) {
  const [left, setLeft] = React.useState<number | null>(null)

  React.useEffect(() => {
    const target = new Date(start).getTime()
    const tick = () => setLeft(Math.max(0, target - Date.now()) / 1000)
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [start])

  let D = "--", H = "--", M = "--", S = "--"
  if (left !== null) {
    let d = left
    const days = Math.floor(d / 86400); d -= days * 86400
    const hours = Math.floor(d / 3600); d -= hours * 3600
    const mins = Math.floor(d / 60)
    D = String(days); H = pad(hours); M = pad(mins); S = pad(Math.floor(d - mins * 60))
  }

  return (
    <div className="clock" aria-live="off">
      <div><b>{D}</b><span>Days</span></div>
      <div><b>{H}</b><span>Hours</span></div>
      <div><b>{M}</b><span>Minutes</span></div>
      <div><b>{S}</b><span>Seconds</span></div>
    </div>
  )
}
