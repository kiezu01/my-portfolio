import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "", imgSrc, imgAlt }) => (
  <div className={`card ${className}`.trim()}>
    {imgSrc && (
      <div className="card-img">
        <img src={imgSrc} alt={imgAlt || ""} loading="lazy" />
      </div>
    )}
    <div className="card-content">{children}</div>
  </div>
);

export default Card;