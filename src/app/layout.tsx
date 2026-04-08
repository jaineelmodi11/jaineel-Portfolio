import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Jaineel Modi — Software Developer",
  description:
    "AI/ML-focused Software Developer based in Toronto, ON. Building intelligent systems that have real-world impact.",
  openGraph: {
    title: "Jaineel Modi — Software Developer",
    description: "AI/ML-focused Software Developer based in Toronto, ON.",
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
      className={`${inter.variable} ${jetbrains.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
