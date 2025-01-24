import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean;
};

export const Radio = forwardRef(function Radio(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <label
      data-state={isSelected}
      className="min-w-52 flex gap-x-2 items-center text-base-text text-text-s font-roboto rounded-md bg-base-button border-2 p-3 data-[state=true]:border-purple data-[state=true]:bg-purple-light"
    >
      <input className="hidden" type="radio" ref={ref} {...rest} />
      {children}
    </label>
  );
});
