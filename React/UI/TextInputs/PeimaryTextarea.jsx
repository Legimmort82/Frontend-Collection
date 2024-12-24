import { forwardRef, useState } from "react";

const PrimaryTextarea = forwardRef(
  (
    {
      type = "text",
      value,
      error,
      placeholder,
      name,
      className,
      required,
      maxLength,
      minLength,
      min,
      max,
      onChange,
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
      setFocus(true)
    };

    const handleBlur = () => {
      setFocus(false)
    };

    return (
      <div>
        <textarea
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          min={min}
          max={max}
          ref={ref}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`bg-Primary-100 resize-none text-[24px] rounded-lg border-[3px] w-[100%] h-[500px] lg:h-[400px] border-Primary-500 border-solid placeholder:text-gray-400 placeholder:font-medium duration-1000 p-4 dark:bg-dark-300 dark:text-white ${
            focus ? "duration-200 outline-none shadow-lg shadow-gray-500" : ""
          } ${className}`}
          />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

export default PrimaryTextarea;