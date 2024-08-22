"use client";

import { useState, useEffect, useRef } from "react";
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
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useUtmContext } from "@/providers/utmContext";
import { useSearchParams } from "next/navigation";
import useAmplitudeContext from "@/hooks/amplitude";
import { v4 as uuidv4 } from "uuid";

interface IParticipantItem {
  id: string;
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
  id: z.string().min(1),
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
  id: uuidv4(),
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
    if (searchParams.size > 0 && Object.keys(Object.fromEntries(new URLSearchParams(searchParams))).length !== 0) {
      setUtmParams(Object.fromEntries(new URLSearchParams(searchParams)));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const contentRef = useRef<null | HTMLDivElement>(null);
  const scrollToForm = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  const { control } = form;
  const { append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const addParticipant = () => {
    const newParticipant = {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      school: "",
      gradeLevel: "",
      shirtSize: "",
    };
    append(newParticipant);
    setParticipant([...participant, newParticipant]);
    clickHandler();
  };

  const removeParticipant = (i: number) => {
    remove(i);
    let newParticipants = [...participant];
    newParticipants.splice(i, 1);
    setParticipant(newParticipants);
  };

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
              page_slug: pageSlug,
              clinic_name: pageName,
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
        scrollToForm();
        fetch("/api/lead", {
          method: "POST",
          body: JSON.stringify({
            ...data,
            page_slug: pageSlug,
            clinic_name: pageName,
            utmParams: utmParams,
          }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.status === 200) {
              console.log("A new lead has been added or updated:", data.status);
            } else {
              console.log("Error:", data);
            }
          })
          .catch(error => console.log(error));
      });
  };

  return (
    <div className="bg-[#F3F5F8] py-8 lg:py-16" ref={contentRef}>
      <Container maxWidth={MaxWidth.XSmall}>
        <h2 className="font-roboto text-3xl font-bold uppercase italic leading-normal lg:text-5xl">
          {isRegister ? <>YOu&apos;re in!</> : "REGISTER TODAY"}
        </h2>
        <p className="mt-4 font-inter text-xxs leading-loose lg:text-sm">
          {isRegister ? (
            <>
              You&apos;re registered for the <strong>{pageName}</strong>. You will receive a confirmation email
              containing the next steps shortly. We can’t wait to see you!
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
                  {participant.map((item, index) => (
                    <div key={item.id}>
                      <div className="mb-4 flex w-full flex-col items-center justify-between gap-y-4 lg:mb-6 lg:flex-row lg:gap-x-8 lg:gap-y-0">
                        <h5 className="font-roboto text-base font-semibold leading-relaxed lg:text-xl">
                          Participant {index + 1}
                        </h5>
                        {participant.length > 1 ? (
                          <Button
                            rounded
                            style="outline"
                            copy={`- REMOVE PARTICIPANT #${index + 1}`}
                            onClick={e => {
                              e?.preventDefault();
                              removeParticipant(index);
                            }}
                            className="lg:max-w-[33%]"
                            disable={isLoading}
                          />
                        ) : null}
                      </div>
                      <div className="mb-4 flex w-full flex-col gap-y-4 lg:mb-6 lg:flex-row lg:gap-x-8 lg:gap-y-0">
                        <FormField
                          control={control}
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
                          control={control}
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
                        control={control}
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
                          control={control}
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
                                  <SelectOption value="">Select participant&apos;s grade level</SelectOption>
                                  <SelectOption value="Kindergarten">Kindergarten</SelectOption>
                                  <SelectOption value="1st Grade">1st Grade</SelectOption>
                                  <SelectOption value="2nd Grade">2nd Grade</SelectOption>
                                  <SelectOption value="3rd Grade">3rd Grade</SelectOption>
                                  <SelectOption value="4th Grade">4th Grade</SelectOption>
                                  <SelectOption value="5th Grade">5th Grade</SelectOption>
                                  <SelectOption value="6th Grade">6th Grade</SelectOption>
                                  <SelectOption value="7th Grade">7th Grade</SelectOption>
                                  <SelectOption value="8th Grade">8th Grade</SelectOption>
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
                          control={control}
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
                                  <SelectOption value="">Select a shirt size</SelectOption>
                                  <SelectOption value="YXS">Youth Extra Small</SelectOption>
                                  <SelectOption value="YS">Youth Small</SelectOption>
                                  <SelectOption value="YM">Youth Medium</SelectOption>
                                  <SelectOption value="YL">Youth Large</SelectOption>
                                  <SelectOption value="YXL">Youth Extra Large</SelectOption>
                                  <SelectOption value="AS">Adult Small</SelectOption>
                                  <SelectOption value="AM">Adult Medium</SelectOption>
                                  <SelectOption value="AL">Adult Large</SelectOption>
                                  <SelectOption value="AXL">Adult Extra Large</SelectOption>
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
                        addParticipant();
                      }}
                      className="w-full lg:max-w-[48%]"
                      disable={isLoading}
                    />
                    <Button
                      rounded
                      style="secondary"
                      copy={isLoading ? "Sending..." : "Register"}
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
