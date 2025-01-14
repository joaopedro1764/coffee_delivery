import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const defaultStyle =
  "py-2 px-3 rounded-md border border-base-button focus:outline-none focus:ring-1 focus:ring-yellow-dark placeholder:text-base-text";

export function Input(props: InputProps) {
  return <input {...props} className={`${defaultStyle + props.className}`} />;
}
