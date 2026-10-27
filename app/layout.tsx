import type { Metadata, Viewport } from "next"
import { asset } from "@/lib/wedding"
import "./globals.css"
import "./site.css"

export const metadata: Metadata = {
  title: "Dipesh & Kirti",
  description: "Dipesh & Kirti's wedding, 3–4 January 2027, Krishna Hotel & Resort, Pushkar.",
  openGraph: {
    title: "Dipesh & Kirti — Wedding Invitation",
    description: "3–4 January 2027 · Krishna Hotel & Resort, Pushkar",
    images: [asset("/img/couple_full.jpg")],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Rozha+One&family=Pinyon+Script&family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Tiro+Devanagari+Hindi&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
