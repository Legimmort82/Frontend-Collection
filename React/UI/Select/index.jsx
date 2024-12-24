import Image from "next/image";
import dropDownIcon from "@/assets/icons/dropdown.svg";
import PropTypes from "prop-types";
import { forwardRef, useEffect, useRef, useState } from "react";

const Select = forwardRef(
  (
    {
      z = false,
      placeholder,
      id,
      className,
      name,
      optionClass,
      defaultValue,
      disabled,
      error,
      arrowIcon = true,
      getValue = () => {},
      onChange,
      required,
      setPhoneCode,
      options = ["Iran", "Germany", "Italy", "England"],
      // options = [ {value: 1, label: "Germany"}, {value: 2, label: "Italy"}]
    },
    ref
  ) => {
    const [showOpt, setShowOpt] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const selectRef = useRef();
    const [isFocused, setIsFocused] = useState(false);
    const showOptions = () => {
      setShowOpt(!showOpt);
    };
    const setValue = (item, index) => {
      setSelectedValue(item.name ? item.name : item);
      if (item.phonecode) {
        setPhoneCode(item.phonecode);
      }
      selectRef.current=true
      getValue(index + 1);
      setShowOpt(false);
    };
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e) => {
      setIsFocused(false);
    };

    useEffect(() => {
      const handleFolder = (event) => {
        const closeInput = event.target.closest("contain");
        if (!closeInput) {
          setShowOpt(false);
        }
      };
      if (showOpt) {
        setTimeout(() => {
          document.body.addEventListener("click", handleFolder);
        });
      }
      return () => {
        document.body.removeEventListener("click", handleFolder);
      };
    }, [showOpt]);

    return (
      <div className={`flex font-Vazir gap-[10px] ${error && "mb-4"}`}>
        {required && (
          <div className="text-State-error  mt-[14px] sm:mt-[18px]">*</div>
        )}
        <div
          className={`w-full h-[44px] sm:h-[54px] relative ${
            z ? "z-20" : "z-10"
          }`}
        >
          <input
            readOnly
            id={id}
            name={name}
            ref={ref}
            onClick={showOptions}
            onFocus={handleFocus}
            disabled={disabled}
            onBlur={handleBlur}
            onChange={onChange}
            defaultValue={defaultValue}
            placeholder={placeholder}
            value={selectedValue ? selectedValue : defaultValue}
            className={`w-full h-full outline-none border-[1px] rtl:text-right ltr:text-left px-4 text-black border-Neutral-300 rounded-lg cursor-pointer ${
              isFocused && "border-Primary-600"
            } ${error && !selectRef.current && "border-State-error"} ${className}`}
          />
          {arrowIcon && (
            <Image
              src={dropDownIcon}
              className="absolute top-5 sm:top-6 sm:rtl:left-5 rtl:left-4 ltr:right-4 sm:ltr:right-5"
              alt="dropdown"
            />
          )}

          {error && !selectRef.current && (
            <p className=" mt-[7px] text-xs text-State-error">{error}</p>
          )}

          {showOpt && (
            <div className="absolute contain  shadow-sm shadow-black top-12 rounded-lg w-full mt-3 bg-white max-h-[200px] overflow-auto">
              {options.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`h-[44px] sm:h-[54px] shadow-black shadow-sm w-full cursor-pointer pr-4 bg-white hover:bg-[#F0F0F0]  hover:text[18px] flex items-center ${optionClass}`}
                    onClick={() => setValue(item, index)}
                    dir="rtl"
                  >
                    {item.name ? item.name : item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Select.displayName = "Select";
Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  ref: PropTypes.string,
  arrowIcon: PropTypes.bool,
  z: PropTypes.bool,
  required: PropTypes.bool,
};
export default Select;
