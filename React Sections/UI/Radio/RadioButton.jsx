import React from 'react';

const RadioButton = React.forwardRef(({ value, label, name, onChange, onBlur }, ref) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
      {label}
    </label>
  );
});

export default RadioButton;