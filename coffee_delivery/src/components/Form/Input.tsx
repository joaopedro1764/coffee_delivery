import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const defaultStyle =
  "py-2 px-3 rounded-md border-2 border-base-button bg-base-input text-text-s font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-dark placeholder:text-base-text";

export function Input(props: InputProps) {
  return <input {...props} className={`${defaultStyle + props.className} text-base-text`} />;
}
