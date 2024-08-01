import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import NavigationBar from "@/components/navigation-bar";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M-a-S",
  description: "We touch where you want to",
  icons: {
    icon: "/logo11.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="h-screen overflow-y-auto dark:bg-[#000] bg-[#fff] px-4">
            <NavigationBar />
            <div className="pt-20 h-full">
              {children}
            </div>
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
