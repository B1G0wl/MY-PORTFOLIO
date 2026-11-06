import type { Metadata, Viewport } from "next";
// @ts-ignore: CSS module declaration may not be present in this environment
import "./globals.css";

const title = "Adesh Kadu | Web Developer & AI Data Science Student";
const description =
  "Portfolio of Adesh Kadu, a final-year B.E. Artificial Intelligence & Data Science student with interests in web development, UI/UX, Java backend development, Python, MySQL, cybersecurity, and practical software projects.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Build with Adesh",
  authors: [{ name: "Adesh Kadu", url: "https://github.com/B1G0wl" }],
  creator: "Adesh Kadu",
  keywords: [
    "Adesh Kadu",
    "Build with Adesh",
    "Web Developer",
    "Frontend Developer",
    "Software Development",
    "UI UX Design",
    "AI Data Science Student",
    "Java Intern",
    "Intrusion Detection System",
    "Navi Mumbai Portfolio"
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Build with Adesh",
    images: [{ url: "/images/adesh-hero.jpeg", width: 1200, height: 1200, alt: "Adesh Kadu" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/adesh-hero.jpeg"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050611"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
