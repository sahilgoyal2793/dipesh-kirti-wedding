"use client"

import GlassFolder, { type ArtRecipe } from "@/components/ui/glass-folder-cards"
import { asset } from "@/lib/wedding"

/** The site's own palette, painted as liquid marble: rose, maroon, marigold and sandstone. */
const HAVELI: ArtRecipe = {
  style: "marble",
  colors: ["#2a0a14", "#4a1020", "#7a1f35", "#3b2a24", "#c98a2b", "#f3dcae", "#f6ecdc"],
  scale: 0.7,
  warp: 3.4,
  angle: 0.9,
  gloss: 0.5,
  veins: 0.45,
}

export function WeddingFolders() {
  return (
    <div className="folders">
      <GlassFolder
        label="Our Photos"
        image={asset("/img/couple_full.jpg")}
        action="none"
        width={320}
        files={[
          { name: "Together", meta: "Photo", image: asset("/img/couple_full.jpg"), href: asset("/img/couple_full.jpg") },
          { name: "Mehndi hands", meta: "Photo", image: asset("/img/couple_close.jpg"), href: asset("/img/couple_close.jpg") },
        ]}
      />
      <GlassFolder
        label="The Wedding"
        meta="3–4 Jan 2027"
        tone="dark"
        art={HAVELI}
        seed={7}
        action="none"
        labelPlacement="top-right"
        width={320}
        appearDelay={140}
        files={[
          { name: "Day 1", meta: "Sun, 3 January", art: HAVELI, href: "#events" },
          { name: "Day 2", meta: "Mon, 4 January", art: "dusk", href: "#events" },
          { name: "Venue & travel", meta: "Krishna Hotel & Resort", href: "#venue" },
          { name: "RSVP", meta: "Reply on WhatsApp", href: "#rsvp" },
        ]}
      />
    </div>
  )
}
