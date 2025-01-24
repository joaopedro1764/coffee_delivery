import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
}

const defaultStyle =
  "py-2 px-3 rounded-md border-2 border-base-button bg-base-input text-text-s font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-dark placeholder:text-base-text";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...rest }, ref) => {
    console.log(className);

    return (
      <div className={`flex flex-col ${className}`}>
        <input
          data-error={error?.message}
          ref={ref}
          {...rest}
          className={`${defaultStyle} ${
            className || ""
          } text-base-text data-[error!=null]:bg-red-900`}
        />
        {error?.message ? (
          <label className="text-red-500 font-medium">{error.message}</label>
        ) : null}
      </div>
    );
  }
);
