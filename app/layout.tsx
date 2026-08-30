import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://alihassan-019.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ali Hassan | Embedded Systems Engineer",
  description:
    "Embedded Systems Engineer building reliable firmware and integrated hardware for robotics, IoT, medical devices, and real-time control systems.",
  keywords: [
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "STM32",
    "nRF52",
    "Zephyr RTOS",
    "FreeRTOS",
    "ROS 2",
    "PCB Design",
  ],
  authors: [{ name: "Ali Hassan", url: siteUrl }],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Ali Hassan | Embedded Systems Engineer",
    description:
      "Firmware and hardware integration for robotics, connected devices, and medical systems.",
    url: siteUrl,
    siteName: "Ali Hassan Portfolio",
    images: [
      {
        url: "/images/projects/stewart-control.webp",
        width: 1536,
        height: 1024,
        alt: "Autonomous Stewart platform control system developed by Ali Hassan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Hassan | Embedded Systems Engineer",
    description:
      "Firmware and hardware integration for robotics, connected devices, and medical systems.",
    images: ["/images/projects/stewart-control.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#04101a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
