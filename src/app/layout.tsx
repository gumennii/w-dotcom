import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation/Navigation";

export const metadata = {
  title: "Next Level Sport",
  description: "Next Level Sport",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <body>
        <section className="min-h-screen">
          <Navigation>
            <main>
              <div className="min-h-screen">{children}</div>
            </main>
          </Navigation>
        </section>
      </body>
    </html>
  );
}
