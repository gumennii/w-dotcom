"use client";

import { useState, FormEvent } from "react";
import classNames from "classnames";
import { Text, Button } from "@/components";
import Link from "next/link";

export type SingUpProps = {
  title: string;
  descriprion: string;
  className?: string;
};

export const SingUp = ({ title, descriprion, className }: SingUpProps) => {
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
        "w-full text-white flex flex-col gap-y-6 justify-between items-center sm:flex-row p-10",
        className
      )}
    >
      <div className="w-full text-center sm:text-left sm:w-[30%] px-4">
        <Text type="h3" className="mb-2 sm:mb-4">
          {title}
        </Text>
        <Text type="p">{descriprion}</Text>
      </div>
      <div className="w-full sm:w-[70%] sm:px-4 lg:pl-8">
        <form onSubmit={onSubmit} className="flex justify-between items-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-4 rounded mr-4 w-[75%] text-primary"
          />
          <Button
            style="secondary"
            copy={isLoading ? "Loading" : "Sign up"}
            rounded
            className={isLoading ? "pointer-events-none opacity-50" : ""}
          />
        </form>
        <div className="mt-4">
          {errorMsg ? (
            <Text type="p" className="text-error">
              {errorMsg}
            </Text>
          ) : (
            <Text type="p">We care about the protection of your data. Read our</Text>
          )}

          <Link
            href="https://stacksports.com/legal-privacy"
            target="_blank"
            className="font-normal text-sm lg:text-base underline hover:underline-offset-4"
          >
            Privacy Policy.
          </Link>
        </div>
      </div>
    </div>
  );
};
