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
  title: "Karan Pahlani - Senior Software Engineer",
  description: "Senior Software Engineer with expertise in scalable, customer-centric applications. Specializing in Go, Java, Python, and distributed systems architecture.",
  keywords: ["software engineer", "go", "java", "python", "microservices", "aws", "react", "distributed systems"],
  authors: [{ name: "Karan Pahlani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Karan Pahlani - Senior Software Engineer",
    description: "Senior Software Engineer with expertise in scalable, customer-centric applications. Specializing in Go, Java, Python, and distributed systems architecture.",
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
          <main className="bg-background pt-20">
            {children}
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
