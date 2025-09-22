import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Restyle Renovation — Calgary Renovation Experts",
    template: "%s | Restyle Renovation",
  },
  description:
    "Full-service home renovations across Calgary and nearby communities. We handle design, permits and licensed trades to deliver durable, code-compliant remodels that increase comfort and property value — kitchens, bathrooms, basements, exteriors and more. 12+ years serving Calgary.",
  keywords: [
    "Calgary renovation",
    "home renovation Calgary",
    "kitchen remodeling Calgary",
    "bathroom renovation Calgary",
    "basement renovation Calgary",
    "home remodel Calgary",
    "licensed contractors Calgary",
    "permit assistance Calgary",
    "energy efficient renovations",
    "exterior renovation Calgary",
  ],
  authors: [{ name: "Restyle Renovation" }],
  creator: "Restyle Renovation",
  publisher: "Restyle Renovation",
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://www.restylerenovation.ca"), // change to your real site
  openGraph: {
    title: "Restyle Renovation — Calgary Renovation Experts",
    description:
      "Design-driven, permit-ready renovations across Calgary. Single-point project management, licensed trades, and durable materials tailored for Calgary living.",
    url: "https://www.restylerenovation.ca",
    siteName: "Restyle Renovation",
    images: [
      {
        url: "https://www.restylerenovation.ca/og-image.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Restyle Renovation — Calgary Renovation Experts",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restyle Renovation — Calgary Renovation Experts",
    description:
      "Full-service home renovations in Calgary — design, permits and licensed trades with 12+ years experience.",
    images: ["https://www.restylerenovation.ca/twitter-image.jpg"], // replace
    creator: "@RestyleRenov", // optional — update if you have a Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#233b75" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${onest.variable} antialiased bg-white`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
