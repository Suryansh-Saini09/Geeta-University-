import React from "react";

interface ProgramContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function ProgramContainer({
  children,
  className = "",
  size = "default",
}: ProgramContainerProps) {
  const maxWidthClass =
    size === "narrow"
      ? "max-w-[1020px]"
      : size === "wide"
      ? "max-w-[1400px]"
      : "max-w-[1280px]";

  return (
    <div
      className={`w-full ${maxWidthClass} mx-auto px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}
