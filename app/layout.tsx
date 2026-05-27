import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayesh Dhanuka — APM & Builder",
  description:
    "Engineering brain. Business lens. I don't just define products — I build them.",
  openGraph: {
    title: "Jayesh Dhanuka — APM & Builder",
    description:
      "Engineering brain. Business lens. I don't just define products — I build them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
