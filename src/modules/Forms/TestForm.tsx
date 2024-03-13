"use client";

import { useState, FormEvent } from "react";
import classNames from "classnames";
import { Text, Button } from "@/components";
import Select, { SelectOption } from "@/components/Select";
import Link from "next/link";

export type TestFormProps = {
  title: string;
  descriprion: string;
  className?: string;
};

export const TestForm = ({ title, descriprion, className }: TestFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [select, setSelect] = useState<string>("default");

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
        "w-full flex flex-col gap-y-4 justify-between items-center lg:gap-y-6 p-8 text-white",
        className
      )}
    >
      <div className="w-full text-center">
        <Text type="h2">{title}</Text>
        <Text type="p">{descriprion}</Text>
      </div>
      <div className="w-full">
        <form onSubmit={onSubmit} className="flex flex-col gap-y-4 justify-between items-center md:gap-4 md:flex-col">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full md:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-4 rounded-md w-full text-primary shadow"
              />
              <Select value={select} onChange={event => setSelect(event.target.value)} className="rounded-md w-full">
                <SelectOption value={"default"}>Participant Grade Level</SelectOption>
                <SelectOption value={"Level1"}>Level 1</SelectOption>
                <SelectOption value={"Level2"}>Level 2</SelectOption>
                <SelectOption value={"Level3"}>Level 3</SelectOption>
              </Select>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-md w-full text-primary shadow"
            />
          </div>
          <Button
            style="secondary"
            copy={isLoading ? "Loading" : "Sign up"}
            rounded
            className={classNames(isLoading ? "pointer-events-none opacity-50" : "", "w-full")}
          />
        </form>
        <div className="mt-4 text-center">
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
                className="font-normal ml-2 text-base lg:text-base underline hover:underline-offset-4"
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
