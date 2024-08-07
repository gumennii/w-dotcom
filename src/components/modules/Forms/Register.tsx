"use client";

import { useState, useEffect } from "react";
import { MaxWidth } from "@/utils/styling";
import {
  Container,
  Divider,
  Select,
  SelectOption,
  Form,
  FormField,
  FormItem,
  FormControl,
  Input,
} from "@/components/ui";
import { Button } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useUtmContext } from "@/providers/utmContext";
import { useSearchParams } from "next/navigation";
import useAmplitudeContext from "@/hooks/amplitude";

interface IParticipantItem {
  firstName: string;
  lastName: string;
  school: string;
  gradeLevel: string;
  shirtSize: string;
}

interface IRegister {
  first_name: string;
  email: string;
  items: IParticipantItem[];
  utmParams?: any;
}

const ParticipantSchema = z.object({
  firstName: z
    .string({
      required_error: "Enter a valid first name",
      invalid_type_error: "Enter a valid first name",
    })
    .min(2, {
      message: "First Name must be at least 2 characters.",
    })
    .max(40, {
      message: "Too many characters.",
    }),
  lastName: z
    .string({
      required_error: "Enter a valid last name",
      invalid_type_error: "Enter a valid last name",
    })
    .min(2, {
      message: "First Name must be at least 2 characters.",
    })
    .max(40, {
      message: "Too many characters.",
    }),
  school: z
    .string({
      required_error: "Enter a valid school name",
      invalid_type_error: "Enter a valid school name",
    })
    .min(2, {
      message: "School name must be at least 2 characters.",
    })
    .max(120, {
      message: "Too many characters.",
    }),
  gradeLevel: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This field is required",
    })
    .min(1, { message: "This field is required" }),
  shirtSize: z
    .string({
      required_error: "This field is required",
      invalid_type_error: "This field is required",
    })
    .min(1, { message: "This field is required" }),
});

const RegisterSchema = z.object({
  first_name: z
    .string({
      required_error: "Enter a valid full name",
      invalid_type_error: "Enter a valid full name",
    })
    .min(4, {
      message: "Full Name must be at least 4 characters.",
    })
    .max(60, {
      message: "Too many characters.",
    }),
  email: z
    .string({
      required_error: "Enter a valid email",
      invalid_type_error: "Enter a valid email",
    })
    .email("This is not a valid email")
    .min(2, { message: "This field is required" }),
  items: z.array(ParticipantSchema),
});

const defaultParticipant: IParticipantItem = {
  firstName: "",
  lastName: "",
  school: "",
  gradeLevel: "",
  shirtSize: "",
};

type RegisterProps = {
  pageSlug: string;
  pageName: string;
};

export const Register = ({ pageSlug, pageName }: RegisterProps) => {
  const searchParams = useSearchParams();
  const { utmParams, setUtmParams } = useUtmContext();

  const { trackAmplitudeEvent } = useAmplitudeContext();

  const trakingRegistration = (action: string) => {
    trackAmplitudeEvent(action, {
      button: "[Form] - Register Form",
      location: "Clinic Page",
    });
  };

  const clickHandler = () => {
    trackAmplitudeEvent("click", {
      button: "Add Participant",
      location: "[Form] - Register Form",
    });
  };

  useEffect(() => {
    if (searchParams && Object.keys(Object.fromEntries(new URLSearchParams(searchParams))).length !== 0) {
      setUtmParams(Object.fromEntries(new URLSearchParams(searchParams)));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [participant, setParticipant] = useState<IParticipantItem[]>([defaultParticipant]);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>();

  const defaultRegister: IRegister = {
    first_name: "",
    email: "",
    items: participant,
  };

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: defaultRegister,
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    setErrorMsg(null);

    fetch("/api/customer-io", {
      method: "POST",
      body: JSON.stringify({
        metod: "POST",
        eventName: "Registered Clinic",
        data: {
          ...data,
          utm: utmParams,
          pageSlug: pageSlug,
          clinicName: pageName,
          lead_score: 1,
        },
      }),
    })
      .then(response => response.json())
      .then(res => {
        console.log("Event tracked:", res);
        trakingRegistration("[Form] Submitted");
        fetch("/api/customer-io", {
          method: "POST",
          body: JSON.stringify({
            metod: "PUT",
            data: {
              ...data,
              anonymous_id: data.email,
              created_at: Math.floor(Date.now() / 1000).toString(),
            },
          }),
        })
          .then(response => response.json())
          .then(data => console.log("User data was updated:", data))
          .catch(error => console.log("Failed to update user data:", error));
      })
      .catch(error => {
        setErrorMsg("Failed to submit the data. Please try again.");
        trakingRegistration("[Form] Failed");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
        setIsRegister(true);
        fetch("/api/lead?" + new URLSearchParams({ userName: data.first_name, userEmail: data.email }))
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      });
  };

  return (
    <div className="bg-[#F3F5F8] py-8 lg:py-16">
      <Container maxWidth={MaxWidth.XSmall}>
        <h2 className="font-roboto text-3xl font-bold uppercase italic leading-normal lg:text-5xl">
          {isRegister ? <>YOu&apos;re in!</> : "REGISTER TODAY"}
        </h2>
        <p className="mt-4 font-inter text-xxs leading-loose lg:text-sm">
          {isRegister ? (
            <>
              You&apos;re registered for the <strong>Flag Football Clinic</strong> at {""}
              <strong>Merced High School</strong>. You will receive a confirmation email containing the next steps
              shortly. We can’t wait to see you!
            </>
          ) : (
            "Complete the form below for each participant prior to attending."
          )}
        </p>
        {!isRegister ? (
          <>
            <Divider className="my-6 lg:mb-8 lg:mt-12" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} id="Clinic_Registered" className="register">
                <div className="flex w-full flex-col">
                  <h4 className="mb-4 font-roboto text-base font-semibold leading-relaxed lg:mb-6 lg:text-xl">
                    Your Information
                  </h4>
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            label="Your Name"
                            placeholder="Enter your full name"
                            className="mb-4 lg:mb-6"
                            error={fieldState?.error?.message}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            label="Your Email"
                            placeholder="Enter your email address"
                            error={fieldState?.error?.message}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Divider className="my-6 lg:my-8" />
                  {participant.map((field, index) => (
                    <div key={`participant-${index}`}>
                      <h5 className="mb-4 font-roboto text-base font-semibold leading-relaxed lg:mb-6 lg:text-xl">
                        Participant {index + 1}
                      </h5>
                      <div className="mb-4 flex w-full flex-col gap-y-4 lg:mb-6 lg:flex-row lg:gap-x-8 lg:gap-y-0">
                        <FormField
                          control={form.control}
                          name={`items.${index}.firstName`}
                          render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  label="First Name"
                                  placeholder="Enter participant's first name"
                                  error={fieldState?.error?.message}
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`items.${index}.lastName`}
                          render={({ field, fieldState }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  label="Last Name"
                                  placeholder="Enter participant's last name"
                                  error={fieldState?.error?.message}
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name={`items.${index}.school`}
                        render={({ field, fieldState }) => (
                          <FormItem className="mb-4 w-full lg:mb-6">
                            <FormControl>
                              <Input
                                label="School Name"
                                placeholder="Enter participant's school"
                                error={fieldState?.error?.message}
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="flex w-full flex-col items-start justify-start">
                        <label className="mb-2 font-inter text-xs leading-normal lg:text-lg">
                          Grade Level <span className="text-[#DC461D]">*</span>
                        </label>
                        <FormField
                          control={form.control}
                          name={`items.${index}.gradeLevel`}
                          render={({ field, fieldState }) => (
                            <FormItem className="mb-4 w-full lg:mb-6">
                              <FormControl>
                                <Select
                                  name={`items.${index}.gradeLevel`}
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-full border-none shadow-none"
                                  error={fieldState.error?.message}
                                >
                                  <SelectOption value="" disabled>
                                    Select participant&apos;s grade level
                                  </SelectOption>
                                  <SelectOption value="Low">Low</SelectOption>
                                  <SelectOption value="High">High</SelectOption>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex w-full flex-col items-start justify-start">
                        <label className="mb-2 font-inter text-xs leading-normal lg:text-lg">
                          Shirt Size <span className="text-[#DC461D]">*</span>
                        </label>
                        <FormField
                          control={form.control}
                          name={`items.${index}.shirtSize`}
                          render={({ field, fieldState }) => (
                            <FormItem className="mb-4 w-full lg:mb-6">
                              <FormControl>
                                <Select
                                  name={`items.${index}.gradeLevel`}
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-full border-none shadow-none"
                                  error={fieldState.error?.message}
                                >
                                  <SelectOption value="" disabled>
                                    Select a shirt size
                                  </SelectOption>
                                  <SelectOption value="XS">Extra Small</SelectOption>
                                  <SelectOption value="S">Small</SelectOption>
                                  <SelectOption value="M">Medium</SelectOption>
                                  <SelectOption value="L">Large</SelectOption>
                                  <SelectOption value="XL">Extra Large</SelectOption>
                                </Select>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  ))}
                  <Divider className="mb-6 lg:mb-8" />
                  <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between lg:gap-y-0">
                    <Button
                      rounded
                      style="outline"
                      copy="+ ADD PARTICIPANT"
                      onClick={e => {
                        e?.preventDefault();
                        setParticipant([...participant, defaultParticipant]);
                        clickHandler();
                      }}
                      className="w-full lg:max-w-[48%]"
                      disable={isLoading}
                    />
                    <Button
                      rounded
                      style="secondary"
                      copy={isLoading ? "Sending..." : "Register"}
                      onClick={() => {}}
                      className="w-full lg:max-w-[48%]"
                      disable={isLoading}
                    />
                  </div>
                  <div className="mt-4 flex flex-col items-center">
                    {errorMsg && (
                      <div className="flex items-center gap-4 rounded bg-error-foreground p-4 text-error">
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        <p className="font-inter text-[0.75rem] leading-normal lg:leading-5">{errorMsg}</p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </Form>
          </>
        ) : null}
      </Container>
    </div>
  );
};
