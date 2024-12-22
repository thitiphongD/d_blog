import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thitiphong Srisavat",
  description: "Thitiphong Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#3ecf8e",
          colorBackground: "#1a202c",
          colorInputBackground: "#2d3748",
          colorInputText: "#f2f4f6",
        },
        elements: {
          formButtonPrimary: 'rounded-lg bg-primary-500 text-white',
          card: 'bg-background-500 text-white',
        }
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
