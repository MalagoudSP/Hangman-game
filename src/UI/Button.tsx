function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "destructive";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        boxShadow: `inset 0 -2px 0 3px #140e66, 
                ${variant === "primary" ? `inset 0 1px 0 6px #3c74ff` : ""} 
                ${variant === "destructive" ? `inset 0 1px 0 6px #c642fb` : ""}
                `,
      }}
      className={`px-16 py-3 ${variant === "primary" ? "bg-blue-600 hover:bg-blue-500" : ""} ${variant === "destructive" ? "gradient-3" : ""} text-neutral-0 text-preset-8 cursor-pointer rounded-full uppercase active:scale-92 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
