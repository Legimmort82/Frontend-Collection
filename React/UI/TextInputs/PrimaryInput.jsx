import { forwardRef, useState } from "react";

const PrimaryInput = forwardRef(
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
    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
      setFocus(true);
    };
    const handleBlur = (e) => {
      setFocus(false);
    };

    return (
      <div>
        <input
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
          className={`bg-Primary-100 px-2 outline-none w-full border-b-[5px] h-11 border-b-Primary-600 placeholder:text-[30px] duration-1000 py-5 text-[30px] font-semibold rounded-md dark:bg-dark-300 dark:text-white hover:shadow-lg hover:shadow-gray-400 ${
            focus ? "scale-[1.02]" : ""
          } ${className}`}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

export default PrimaryInput;
