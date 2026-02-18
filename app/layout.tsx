import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Provider } from "@components/ui/provider"
import "./globals.css";
import LayoutSplitter from "@components/LayoutSplitter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Fintech App",
  description: "Developed by Friday Joshua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        <Provider>
          <LayoutSplitter>
            {children}
          </LayoutSplitter>
        </Provider>
      </body>
    </html>
  );
}
