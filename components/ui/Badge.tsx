import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent" | "success" | "danger";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = "primary", className = "" }) => {
  // Map color prop to class
  const colorClass = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    success: "badge-success",
    danger: "badge-danger",
  }[color];

  return (
    <span className={`badge ${colorClass} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;