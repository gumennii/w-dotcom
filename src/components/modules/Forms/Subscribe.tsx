"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { trackEvent, associateEvent } from "@/customerio";
import cn from "@/utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useAppContext } from "@/providers/appContext";
import { Button } from "@/components/ui";
import { useUtmContext } from "@/providers/utmContext";
import { useSearchParams } from "next/navigation";
import useAmplitudeContext from "@/hooks/amplitude";

export type SubscribeProps = {
  title: string;
  descriprion: string;
  className?: string;
  trackingFields?: string;
  variant?: "tight" | "wide" | "modal";
  trackingName?: string;
};

export const Subscribe = ({
  title,
  descriprion,
  className,
  variant = "tight",
  trackingFields,
  trackingName,
}: SubscribeProps) => {
  const searchParams = useSearchParams();
  const { utmParams, setUtmParams } = useUtmContext();

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const clickPolicy = () => {
    trackAmplitudeEvent("click", {
      button: "Privacy Policy",
      location: "[Form] - Subscribe Form",
    });
  };

  const trakingSubscribe = (action: string, location: string) => {
    trackAmplitudeEvent(action, {
      button: "[Form] - Subscribe Form",
      location: location,
    });
  };

  useEffect(() => {
    if (searchParams && Object.keys(Object.fromEntries(new URLSearchParams(searchParams))).length !== 0) {
      setUtmParams(Object.fromEntries(new URLSearchParams(searchParams)));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { isUserSubscribed, setIsUserSubscribed } = useAppContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
      const response = await trackEvent("Signed Up Newsletter", {
        ...formData,
        programKey: trackingFields,
        lead_score: 1,
        utm: utmParams,
      });

      if (!response?.success) {
        setErrorMsg("Failed to submit the data. Please try again.");
        throw new Error("Failed to submit the data. Please try again.");
      } else {
        const anonymous = await associateEvent({
          ...formData,
          anonymous_id: formData.email,
          created_at: Math.floor(Date.now() / 1000).toString(),
        });
        console.log("Associate Event:", anonymous);
        if (trackingName) trakingSubscribe("[Form] Submitted", trackingName);
      }
    } catch (error) {
      setErrorMsg((error as Error).message);
      if (trackingName) trakingSubscribe("[Form] Failed", trackingName);
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsUserSubscribed(true);
    }
  }

  return (
    <>
      {isUserSubscribed ? (
        <div
          className={cn(
            "flex w-full flex-col items-center gap-y-4 p-6 lg:gap-y-6 lg:p-8",
            {
              "items-start px-0 py-12 lg:flex-row lg:py-16": variant === "wide",
            },
            className
          )}
        >
          <div
            className={cn("flex flex-col items-center gap-y-4 px-10 py-4 lg:gap-y-6", {
              "items-start p-0": variant === "wide",
              "p-0": variant === "modal",
            })}
          >
            <h2 className="font-roboto text-xl font-semibold leading-normal">
              Thank you for subscribing to our news and updates.
            </h2>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex w-full flex-col items-center justify-between gap-y-4 lg:gap-y-6",
            {
              "px-0 py-12 lg:flex-row lg:py-16": variant === "wide",
            },
            className
          )}
        >
          <div className={cn("w-full", variant === "wide" ? "lg:w-[38%] xl:w-[36%]" : "")}>
            <h2 className="mb-2 font-roboto text-xl font-bold leading-normal lg:text-3xl">{title}</h2>
            <p className="font-inter text-xs font-normal leading-normal lg:text-base">{descriprion}</p>
          </div>
          <div className={cn("w-full", variant === "wide" ? "lg:w-[58%] xl:w-[60%]" : "")}>
            <form
              onSubmit={onSubmit}
              className={cn(
                "flex flex-col justify-between gap-y-4 md:gap-4",
                variant === "modal" ? "md:flex-col" : "md:flex-row"
              )}
            >
              <div
                className={cn(
                  "grid w-full grid-cols-1 gap-x-4 font-inter text-xxs leading-[1.313rem] md:grid-cols-2 md:gap-y-2",
                  variant === "modal" ? "md:grid-cols-1 md:gap-y-0" : "sm:flex-row"
                )}
              >
                <input
                  type="text"
                  name="first_name"
                  placeholder="Your Name"
                  className={cn("mb-4 w-full rounded p-4 text-primary shadow md:mb-0", {
                    "md:mb-4 lg:p-6 lg:text-sm lg:leading-[1.375rem]": variant === "modal",
                  })}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={cn("mb-2 w-full rounded p-4 text-primary shadow md:mb-0", {
                    "md:mb-2 lg:p-6 lg:text-sm lg:leading-[1.375rem]": variant === "modal",
                  })}
                />
                <span className={cn("sm:invisible")}></span>
                <div className="flex flex-col gap-2">
                  {errorMsg && (
                    <div className="flex items-center gap-x-1 rounded bg-error-foreground px-2 py-1 text-error">
                      <FontAwesomeIcon icon={faTriangleExclamation as IconProp} />
                      <p className="font-inter text-[0.75rem] leading-normal lg:leading-5">{errorMsg}</p>
                    </div>
                  )}
                </div>
              </div>
              <Button
                style="secondary"
                copy={isLoading ? "Loading" : "Subscribe"}
                rounded
                className={cn(
                  isLoading ? "pointer-events-none opacity-50" : "",
                  variant === "modal" ? "w-full" : "w-full md:w-auto"
                )}
              />
            </form>
            <div className="mt-4">
              <p
                className={cn("font-inter text-xxs font-normal leading-relaxed lg:text-sm", {
                  "lg:text-xs": variant === "modal",
                })}
              >
                We care about the protection of your data. Read our
                <Link
                  href="https://stacksports.com/legal-privacy"
                  target="_blank"
                  className={cn(
                    "ml-2 font-inter text-xxs font-medium leading-relaxed underline hover:underline-offset-4 lg:text-sm",
                    {
                      "lg:font-semibold": variant === "modal",
                    }
                  )}
                  onClick={clickPolicy}
                >
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
