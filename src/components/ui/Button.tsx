import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  style,
  ...props
}: ButtonProps) {
  // Base styling
  const baseStyle: React.CSSProperties = {
    fontFamily: "inherit",
    fontWeight: 700,
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    outline: "none",
  };

  // Variant styling mapping
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: "var(--gu-navy)",
      color: "var(--gu-white)",
    },
    secondary: {
      backgroundColor: "var(--gu-navy-mid)",
      color: "var(--gu-white)",
    },
    outline: {
      backgroundColor: "transparent",
      border: "2px solid var(--gu-border)",
      color: "var(--gu-navy)",
    },
    gold: {
      backgroundColor: "var(--gu-gold)",
      color: "var(--gu-white)",
    },
  };

  // Size styling mapping
  const sizeStyles: Record<string, React.CSSProperties> = {
    sm: {
      padding: "8px 16px",
      fontSize: "12px",
    },
    md: {
      padding: "12px 24px",
      fontSize: "14px",
    },
    lg: {
      padding: "16px 32px",
      fontSize: "16px",
    },
  };

  const finalStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button style={finalStyle} {...props}>
      {children}
    </button>
  );
}
