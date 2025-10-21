import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Sri Lankan Chauffeur Guide",
  description: "Private drivers and tours across Sri Lanka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sri Lankan Chauffeur Guide
        </footer>
      </body>
    </html>
  );
}
