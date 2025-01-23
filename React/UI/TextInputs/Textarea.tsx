import { LegacyRef, forwardRef, useState } from "react";

type props = {
  type?: string;
  value?: string;
  error?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  label?: string;
  readOnly?: boolean;
  className?: string;
  onChange?: () => void;
};

const TextareaInp = forwardRef(
  (
    {
      value,
      error,
      placeholder,
      name,
      readOnly,
      required,
      label,
      className,
      id,
      onChange,
    }: props,
    ref: LegacyRef<HTMLTextAreaElement>
  ) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
      setFocus(true);
    };
    const handleBlur = () => {
      setFocus(false);
    };
    return (
      <div className={`flex flex-col  justify-center gap-2 w-full h-full`}>
        <label htmlFor={id} className={`text-lg ${className}`}>
          {label}
        </label>
        <textarea
          id={id}
          readOnly={readOnly}
          required={required}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full py-2 px-4 h-full resize-none bg-gray-50 outline-none focus:ring-1 focus:ring-black duration-200 rounded-md ${
            focus ? "scale-[1.03]" : ""
          } ${error ? "bg-red-200" : ""} `}
        />
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    );
  }
);
TextareaInp.displayName = "TextareaInput";

export default TextareaInp;
