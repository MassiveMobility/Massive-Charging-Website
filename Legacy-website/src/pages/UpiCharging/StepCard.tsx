import React from "react";
import "./StepCard.css";

interface StepCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <div className="step-card">
      <img className="step-card__icon" src={icon} alt={title} />
      <p className="step-card__title">{title}</p>
      <p className="step-card__description">{description}</p>
    </div>
  );
}
