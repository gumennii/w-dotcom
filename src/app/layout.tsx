import "../styles/globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AmplitudeContextProvider from "@/providers/amplitude";
import { AppContextProvider } from "@/providers/appContext";
import { UtmContextProvider } from "@/providers/utmContext";

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
          <AppContextProvider>
            <UtmContextProvider>
              <section className="min-h-screen">
                <main>
                  <div className="min-h-screen">{children}</div>
                </main>
              </section>
              <div id="dialog-root"></div>

              <SpeedInsights />
            </UtmContextProvider>
          </AppContextProvider>
        </AmplitudeContextProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_GTM_ID ?? ""} />
    </html>
  );
}
