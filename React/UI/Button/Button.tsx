type ButtonProps = {
  children: React.ReactNode;
  variant: "outline" | "fill";
  radius: "none" | "sm" | "md" | "lg" | "xl" | "xxl" | "full";
  color: string;
  padding: "sm" | "md" | "lg" | "xl";
  disabled: boolean;
  className: string;
  onClick: () => void;
  type: "button" | "submit";
  loading: boolean;
};
const Button = ({
  children,
  variant,
  radius,
  color,
  padding,
  disabled,
  className,
  onClick,
  type = "button",
  loading = false,
}: ButtonProps) => {
  const radiuses = {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    xxl: "32px",
    full: "100%",
  };

  const variants = {
    outline: `text-${color} border border-${color}`,
    fill: `text-white bg-${color} `,
  };

  const paddings = {
    sm: "py-2 px-4",
    md: "py-2 px-6 ",
    lg: "py-4 px-6",
    xl: "py-4 px-8",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 ${variants[variant]} ${paddings[padding]} rounded-[${radiuses[radius]}] ${className}`}
    >
      {loading ? "loading..." : children}
    </button>
  );
};

export default Button;
