import React, { useState } from "react";
import RadioButton from "./RadioButton";

const RadioGroup = ({ options, name, onChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div>
      {options.map((option) => (
        <RadioButton
          name={name}
          key={option.value}
          value={option.value}
          label={option.label}
          selectedValue={selectedValue}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
