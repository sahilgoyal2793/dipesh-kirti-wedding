/* ===== Edit wedding details here ===== */

export type EventIcon = "diya" | "drum" | "fire" | "rings"

export type WeddingEvent = { name: string; time: string; where: string; icon: EventIcon }

export type WeddingDay = { label: string; date: string; events: WeddingEvent[] }

export const WEDDING: { start: string; whatsapp: string; days: WeddingDay[] } = {
  start: "2027-01-03T00:00:00+05:30", // countdown target (IST); update once first function time is fixed
  whatsapp: "", // RSVP number with country code, e.g. "919876543210" — to be added
  days: [
    { label: "Day 1", date: "Sunday, 3 January 2027", events: [
      { name: "", time: "", where: "", icon: "diya" },
      { name: "", time: "", where: "", icon: "drum" },
    ]},
    { label: "Day 2", date: "Monday, 4 January 2027", events: [
      { name: "", time: "", where: "", icon: "fire" },
      { name: "", time: "", where: "", icon: "rings" },
    ]},
  ],
}

/** Prefix for files in /public, so the site also works under a GitHub Pages sub-path. */
export const asset = (path: string) => (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + path
