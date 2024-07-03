"use client";

import * as React from "react";
import cn from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, placeholder, ...props }, ref) => {
    return (
      <div className={cn("flex w-full flex-col items-start justify-start", className)}>
        {label && (
          <label htmlFor={label} className="mb-2 font-inter text-xs leading-normal lg:text-lg">
            {label} <span className="text-[#DC461D]">*</span>
          </label>
        )}
        <input
          type={type}
          className={cn(
            "ring-offset-background focus-visible:ring-ring w-full rounded-lg bg-white p-4 font-inter text-xxs leading-normal text-[#61636B] file:border-0 file:bg-transparent file:text-lg file:font-medium placeholder:font-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:p-6 lg:text-lg",
            {
              "border border-error text-error placeholder:text-error focus-visible:ring-0 focus-visible:ring-offset-0":
                error,
            }
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
