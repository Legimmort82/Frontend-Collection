import downArrow from "@/assets/icons/Common/arrow-down.svg";
import search from "@/assets/icons/Common/search.svg";
import Image from "next/image";
import useOutsideClick from "@/hooks/useOutsideClick";
import { LegacyRef, forwardRef, useEffect, useState } from "react";

type props = {
  type?: string;
  error?: string;
  getRealValue?: (value: string) => void;
  placeholder?: string;
  name?: string;
  data: { id: number; name: string }[];
  getValue?: (value: number) => void;
  className?: string;
  selectedBefore?: string;
};

const SelectableInput = forwardRef(
  (
    {
      type = "text",
      error,
      placeholder,
      name,
      data,
      selectedBefore,
      getValue,
      getRealValue,
      className,
    }: props,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const handleClickOutside = () => {
      setOpen(false);
    };

    const SelectRef = useOutsideClick({ handler: handleClickOutside });
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (selectedBefore !== undefined) {
        setSelected(selectedBefore);
      }
    }, [selectedBefore]);
    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      // setSelected(e.target.value);
      getRealValue?.(e.target.value);
    };

    return (
      <>
        <div
          ref={SelectRef as LegacyRef<HTMLDivElement> | undefined}
          className={`font-medium z-20 h-10 cursor-pointer duration-300 hover:scale-[1.02] ${className}`}
        >
          <div
            className={`bg-cyan-400 w-full px-2 py-3 flex items-center justify-between rounded-md 
          ${selected ? "text-black" : "text-gray-500"} ${
              error ? "bg-red-500" : ""
            } ${className}`}
            onClick={() => setOpen(!open)}
          >
            <p className="text-md px-1">{selected ? selected : placeholder} </p>
            <Image
              className={`w-4 h-4 duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
              src={downArrow}
              alt="downArrow"
            />
          </div>

          <ul
            className={`bg-gray-200 mt-2 overflow-y-auto  
          ${open ? "max-h-60" : "max-h-0"}`}
          >
            <div className=" flex items-center sticky top-0">
              <Image
                src={search}
                alt="search"
                className="absolute right-2 top-3 w-5 h-5"
              />
              <input
                type={type}
                ref={ref}
                value={inputValue}
                name={name}
                onChange={handleSearch}
                placeholder="انتخاب "
                className={` w-full py-2 px-9 bg-gray-50 outline-none`}
              />
            </div>

            {data &&
              data.map((item, index) => (
                <li
                  key={item?.id ? item?.id : index}
                  className={`py-2 px-4 text-sm hover:bg-sky-600 hover:text-white
                ${
                  item?.name === selected
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200"
                }
                ${item?.name?.startsWith(inputValue) ? "block" : "hidden"}`}
                  onClick={() => {
                    if (item?.name !== selected) {
                      setSelected(item?.name);
                      getValue?.(item?.id); // Optional chaining for getValue
                      getRealValue?.(item?.name); // Always defined, no error
                      setOpen(false);
                      setInputValue("");
                    }
                  }}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
);

SelectableInput.displayName = "SelectableInp";

export default SelectableInput;
