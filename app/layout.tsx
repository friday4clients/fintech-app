import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { Provider } from "@components/ui/provider"
import "./globals.css";
import LayoutSplitter from "@components/LayoutSplitter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Add display swap for better performance
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap", // Add display swap
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmSans.variable} antialiased`}>
      <body>
        <Provider>
          <LayoutSplitter>
            {children}
          </LayoutSplitter>
        </Provider>
      </body>
    </html>
  );
}
