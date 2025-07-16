import { LegacyRef, forwardRef, useState } from "react";

type props = {
  type?: string;
  value?: string;
  error?: string;
  id?:string;
  placeholder?: string;
  name?: string;
  required?: boolean;
  label?: string;
  readOnly?: boolean;
  className?:string;
  onChange?: () => void;
};

const PrimaryInput = forwardRef(
  (
    {
      type = "text",
      value ="",
      error,
      placeholder,
      name,
      readOnly,
      required,
      label,
      id,
      className,
      onChange,
    }: props,
    ref : LegacyRef<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
      setFocus(true);
    };
    const handleBlur = () => {
      setFocus(false);
    };
    return (
      <div className="flex gap-4 items-center w-full">
        <label htmlFor={id} className={`text-lg ${className} min-w-[120px]`}>{label}</label>
        <input
          readOnly={readOnly}
          type={type}
          id={id}
          required={required}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full py-2 px-4 border-cyan-500 border-2 outline-none duration-200 rounded-md ${
            focus ? "bg-cyan-100" : ""
          } ${error ? "bg-red-200" : ""}`}
        />
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    );
  }
);
PrimaryInput.displayName= "Simple"

export default PrimaryInput;
