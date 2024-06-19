"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button } from "../../ui/Button/Button";
import Link from "next/link";
import { Container, Text } from "@/components/ui";
import { MaxWidth } from "@/utils/styling";

type CookieConsentProps = {
  content?: string;
  btnText?: string;
};

export const CookieConsent = ({
  content = "This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our",
  btnText = "Accept",
}: CookieConsentProps) => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99] bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 py-6 lg:py-8">
        <Container maxWidth={MaxWidth.Footer} className="flex items-center justify-between">
          <div className="mr-8 max-w-3xl text-primary lg:mr-16">
            <Text type="p">
              {content}{" "}
              <Link href="https://stacksports.com/legal-privacy" className="text-sx underline md:text-sm">
                {" "}
                Privacy Statement.
              </Link>
            </Text>
          </div>
          <Button style="secondary" copy={btnText} rounded onClick={() => acceptCookie()} />
        </Container>
      </div>
    </div>
  );
};
