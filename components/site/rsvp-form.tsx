"use client"

import * as React from "react"
import { WEDDING } from "@/lib/wedding"
import { Tbd } from "./tbd"

const FUNCTIONS = WEDDING.days.flatMap((day) =>
  day.events.map((e, i) => ({
    id: `ev_${day.label.replace(/\W/g, "")}_${i}`,
    name: e.name || `${day.label} function ${i + 1}`,
  })),
)

/** RSVP → WhatsApp: builds the reply and opens WhatsApp with it ready to send. */
export function RsvpForm() {
  const [name, setName] = React.useState("")
  const [attending, setAttending] = React.useState(true)
  const [count, setCount] = React.useState("1")
  const [chosen, setChosen] = React.useState<string[]>(FUNCTIONS.map((f) => f.name))
  const [message, setMessage] = React.useState("")
  const [error, setError] = React.useState("")
  const nameRef = React.useRef<HTMLInputElement>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError("Please enter your name so the family knows who replied.")
      nameRef.current?.focus()
      return
    }
    if (!WEDDING.whatsapp) {
      setError("The RSVP WhatsApp number hasn't been added yet, so this button can't send anything for now.")
      return
    }
    setError("")
    const lines = [
      "RSVP – Dipesh & Kirti's wedding 💍",
      `Name: ${name.trim()}`,
      attending ? `Attending: Yes 🙏 (${count} guest(s))` : "Attending: Sorry, can't make it",
    ]
    if (attending && chosen.length) lines.push(`Functions: ${chosen.join(", ")}`)
    if (message.trim()) lines.push(`Message: ${message.trim()}`)
    window.open(`https://wa.me/${WEDDING.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener")
  }

  return (
    <form className="rsvp" noValidate onSubmit={submit}>
      <div className="field">
        <label htmlFor="rName">Your name</label>
        <input ref={nameRef} type="text" id="rName" autoComplete="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <fieldset className="field">
        <legend>Will you attend?</legend>
        <div className="choices">
          <label><input type="radio" name="attend" value="yes" checked={attending} onChange={() => setAttending(true)} /> Yes, with joy</label>
          <label><input type="radio" name="attend" value="no" checked={!attending} onChange={() => setAttending(false)} /> Sorry, can&apos;t make it</label>
        </div>
      </fieldset>
      <div className="field" hidden={!attending}>
        <label htmlFor="rCount">Number of guests</label>
        <select id="rCount" value={count} onChange={(e) => setCount(e.target.value)}>
          {[1, 2, 3, 4, 5, 6].map((n) => <option key={n}>{n}</option>)}
        </select>
      </div>
      <fieldset className="field" hidden={!attending}>
        <legend>Functions you&apos;ll attend</legend>
        <div className="choices">
          {FUNCTIONS.map((f) => (
            <label key={f.id}>
              <input
                type="checkbox"
                id={f.id}
                checked={chosen.includes(f.name)}
                onChange={(e) => setChosen((c) => (e.target.checked ? [...c, f.name] : c.filter((x) => x !== f.name)))}
              />{" "}
              {f.name}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="rMsg">Message for the couple (optional)</label>
        <textarea id="rMsg" placeholder="Your blessings…" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <p className="err" hidden={!error}>{error}</p>
      <button className="btn solid" type="submit">Send RSVP on WhatsApp</button>
      <p className="by">
        Opens WhatsApp with your reply ready to send to{" "}
        {WEDDING.whatsapp ? "+" + WEDDING.whatsapp : <Tbd>the family (number to be added)</Tbd>}.
      </p>
    </form>
  )
}
