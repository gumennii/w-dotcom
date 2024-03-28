import "../styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AmplitudeContextProvider from "@/providers/amplitude";
import { Navigation } from "@/components/modules";

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
        <AmplitudeContextProvider>
          <section className="min-h-screen">
            <Navigation>
              <main>
                <div className="min-h-screen">{children}</div>
              </main>
            </Navigation>
          </section>

          <SpeedInsights />
        </AmplitudeContextProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_GTM_ID ?? ""} />
    </html>
  );
}
