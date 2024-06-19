"use client";

import { useState, FormEvent } from "react";
import classNames from "classnames";
import { Text, Button } from "@/components/ui";
import Link from "next/link";
import { trackEvent } from "@/customerio";

export type SubscribeProps = {
  title: string;
  descriprion: string;
  className?: string;
  trackingFields?: string;
  variant?: "tight" | "wide" | "modal";
};

export const Subscribe = ({ title, descriprion, className, variant = "tight", trackingFields }: SubscribeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await trackEvent("Newsletter Signup", {
        ...formData,
        programKey: trackingFields,
        lead_score: 1,
      });

      if (!response) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error) {
      setErrorMsg((error as Error).message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      className={classNames(
        "flex w-full flex-col items-center justify-between gap-y-4 lg:gap-y-6",
        variant === "wide" ? "px-0 sm:px-0 sm:py-16 md:px-0 lg:flex-row" : "",
        variant === "modal" ? "p-0 text-primary" : "px-0 py-8 text-white sm:p-10",
        className
      )}
    >
      <div className={classNames("w-full", variant === "wide" ? "lg:w-[38%] xl:w-[36%]" : "")}>
        <Text type="h2" className={variant === "modal" ? "mb-1" : "mb-2 sm:mb-4"}>
          {title}
        </Text>
        <Text type="p">{descriprion}</Text>
      </div>
      <div className={classNames("w-full", variant === "wide" ? "lg:w-[58%] xl:w-[60%]" : "")}>
        <form
          onSubmit={onSubmit}
          className={classNames(
            "flex flex-col items-center justify-between gap-y-4 md:gap-4",
            variant === "modal" ? "md:flex-col" : "md:flex-row"
          )}
        >
          <div
            className={classNames("flex w-full flex-col gap-4", variant === "modal" ? "sm:flex-col" : "sm:flex-row")}
          >
            <input type="text" name="name" placeholder="Your Name" className="w-full rounded p-4 text-primary shadow" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full rounded p-4 text-primary shadow"
            />
          </div>
          <Button
            style="secondary"
            copy={isLoading ? "Loading" : "Subscribe"}
            rounded
            className={classNames(
              isLoading ? "pointer-events-none opacity-50" : "",
              variant === "modal" ? "w-full" : "w-full md:w-auto"
            )}
          />
        </form>
        <div className="mt-4">
          {errorMsg ? (
            <Text type="p" className="text-error">
              {errorMsg}
            </Text>
          ) : (
            <Text type="p">
              We care about the protection of your data. Read our
              <Link
                href="https://stacksports.com/legal-privacy"
                target="_blank"
                className="ml-2 text-base font-normal underline hover:underline-offset-4 lg:text-base"
              >
                Privacy Policy.
              </Link>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
