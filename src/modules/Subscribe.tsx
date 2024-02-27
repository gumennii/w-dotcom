"use client";

import { useState, FormEvent } from "react";
import classNames from "classnames";
import { Text, Button } from "@/components";
import Link from "next/link";

export type SubscribeProps = {
  title: string;
  descriprion: string;
  className?: string;
  variant?: "tight" | "wide" | "modal";
};

export const Subscribe = ({ title, descriprion, className, variant = "tight" }: SubscribeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setErrorMsg(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
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
        "w-full flex flex-col gap-y-4 justify-between items-center lg:gap-y-6",
        variant === "wide" ? "lg:flex-row" : "",
        variant === "modal" ? "text-primary p-0" : "text-white py-8 px-4 sm:p-10",
        className
      )}
    >
      <div className={classNames("w-full", variant === "wide" ? "lg:w-[38%] lg:pl-2 xl:w-[36%]" : "")}>
        <Text type={variant === "modal" ? "h4" : "h2"} className={variant === "modal" ? "mb-1" : "mb-2 sm:mb-4"}>
          {title}
        </Text>
        <Text type="p">{descriprion}</Text>
      </div>
      <div className={classNames("w-full", variant === "wide" ? "lg:w-[58%] xl:w-[60%]" : "")}>
        <form
          onSubmit={onSubmit}
          className={classNames(
            "flex flex-col gap-y-4 justify-between items-center md:gap-4",
            variant === "modal" ? "md:flex-col" : "md:flex-row"
          )}
        >
          <div
            className={classNames("flex flex-col gap-4 w-full", variant === "modal" ? "sm:flex-col" : "sm:flex-row")}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-4 rounded w-full text-primary shadow"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-4 rounded w-full text-primary shadow"
            />
          </div>
          <Button
            style="secondary"
            copy={isLoading ? "Loading" : "Sign up"}
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
                className="font-normal ml-2 text-sm lg:text-base underline hover:underline-offset-4"
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
