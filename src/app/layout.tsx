import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://karanpahlani.com'),
  title: "Karan Pahlani - Senior Software Engineer",
  description: "Senior Software Engineer with expertise in scalable, customer-centric applications. Specializing in Go, Java, Python, and distributed systems architecture.",
  keywords: ["software engineer", "go", "java", "python", "microservices", "aws", "react", "distributed systems"],
  authors: [{ name: "Karan Pahlani" }],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Karan Pahlani - Senior Software Engineer",
    description: "Senior Software Engineer with expertise in scalable, customer-centric applications. Specializing in Go, Java, Python, and distributed systems architecture.",
    images: [
      {
        url: "/karan-headshot.png",
        width: 1200,
        height: 630,
        alt: "Karan Pahlani - Senior Software Engineer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
