"use client";

import React, { useTransition } from "react";
import { Loader2 } from "lucide-react";

interface CmsActionButtonProps {
  label: string;
  loadingLabel?: string;
  onClick: () => Promise<void> | void;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

export function CmsActionButton({
  label,
  loadingLabel,
  onClick,
  className,
  icon: Icon,
  variant = "primary",
  disabled = false,
}: CmsActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all disabled:cursor-not-allowed disabled:opacity-60";
  const variantStyles = {
    primary: "bg-[#E8871A] hover:bg-[#d67a15] text-white shadow-sm",
    secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  const handleClick = () => {
    startTransition(async () => {
      await onClick();
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending || disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className || "rounded-lg px-4 py-2.5 text-sm"}`}
    >
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-current" />
          <span>{loadingLabel || "Processing..."}</span>
        </>
      ) : (
        <>
          {Icon && <Icon className="h-4 w-4" />}
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
