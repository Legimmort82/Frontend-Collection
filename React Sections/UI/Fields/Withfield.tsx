import React from "react";
import { useController, Control, FieldValues, FieldPath } from "react-hook-form";

// HOC with generics
function withField<TFieldValues extends FieldValues, TProps extends object>(
  Comp: React.ComponentType<TProps & { error?: string; required?: string | boolean }>
) {
  type FieldProps = {
    name: FieldPath<TFieldValues>;
    control: Control<TFieldValues>;
    required?: string | boolean;
  } & Omit<TProps, "required" | "error">; // Prevent duplication

  const FieldComponent: React.FC<FieldProps> = ({ name, control, required, ...props }) => {
    const {
      field: { ref, ...field },
      fieldState,
    } = useController({
      name,
      control,
    });

    return (
      <Comp
        {...(props as TProps)}
        {...field}
        required={required}
        error={fieldState.error?.message}
      />
    );
  };

  FieldComponent.displayName = `withField(${Comp.displayName || Comp.name || "Component"})`;

  return FieldComponent;
}

export default withField;
