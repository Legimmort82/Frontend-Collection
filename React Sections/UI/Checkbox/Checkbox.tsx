import { LegacyRef, forwardRef, useEffect, useState } from "react";

type props = {
  type?: string;
  error?: string;
  name?: string;
  required?: boolean;
  label?: string;
  className?: string;
  id?: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBoxInput = forwardRef(
  (
    {
      type = "checkbox",
      name,
      id,
      required,
      checked = false,
      label,
      onChange,
      className,
    }: props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useState(checked);

    useEffect(() => {
      if (checked) setIsChecked(true);
    }, [checked]);
    
    return (
      <>
        <div
          className="flex x items-center"
          onClick={() => setIsChecked(!isChecked)}
        >
          <label
            htmlFor={id}
            className={`text-xl cursor-pointer pl-7 ${className}`}
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            checked={isChecked}
            ref={ref}
            name={name}
            required={required}
            onChange={onChange}
            className="cursor-pointer w-5 h-5 border-2 border-cyan-400 rounded checked:bg-cyan-400 focus:outline-none duration-200"
          />
        </div>
      </>
    );
  }
);

CheckBoxInput.displayName = "Checkbox";

export default CheckBoxInput;
