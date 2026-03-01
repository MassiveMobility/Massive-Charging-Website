import React from "react";

type ButtonVariant = "primary" | "outline";

interface FrontPageButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const sharedStyles =
  "items-center gap-2 rounded-[10.72px] px-6 py-3 text-[16px] leading-[26px] tracking-[0.002em] transition-colors cursor-pointer";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#E50000] text-white hover:bg-[#c20000]",
  outline: "border border-gray-300 bg-white text-[#131313] hover:bg-gray-50",
};

const fontStyle: React.CSSProperties = {
  fontFamily: "'TT Fors Trial', Inter, sans-serif",
  fontWeight: 400,
};

export default function FrontPageButton({
  variant = "primary",
  children,
  icon,
  href,
  onClick,
  className = "",
}: FrontPageButtonProps) {
  // If className includes display overrides (like "hidden lg:inline-flex"), don't add default inline-flex
  const hasDisplayOverride = /\bhidden\b|\bflex\b|\binline-flex\b|\bblock\b/.test(className);
  const displayClass = hasDisplayOverride ? "" : "inline-flex";
  const classes = `${displayClass} ${sharedStyles} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} style={fontStyle}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} style={fontStyle}>
      {icon}
      {children}
    </button>
  );
}
