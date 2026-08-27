import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jaineel Modi — Software Developer",
  description:
    "Software developer in Toronto. I build AudioMark, a practice player used by about 5,000 dancers, and section_loop, a Dart package for A–B looping.",
  openGraph: {
    title: "Jaineel Modi — Software Developer",
    description:
      "Software developer in Toronto. AudioMark, section_loop, and a co-op on RBC's retail credit engineering team.",
    url: "https://jaineelmodi.com",
    siteName: "Jaineel Modi",
    locale: "en_CA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${instrument.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
