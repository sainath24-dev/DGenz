import React from 'react';
import './FlipRevealCard.css';

interface FlipRevealCardProps {
  firstContent?: React.ReactNode;
  secondContent?: React.ReactNode;
  className?: string;
  frontBg?: string;
  backBg?: string;
}

export const FlipRevealCard: React.FC<FlipRevealCardProps> = ({
  firstContent = <span>First</span>,
  secondContent = <span>Second</span>,
  className = '',
  frontBg = 'rgb(103, 225, 255)',
  backBg = 'rgb(103, 151, 255)'
}) => {
  return (
    <div 
      className={`flip-reveal-card ${className}`}
      style={{ '--card-front-bg': frontBg, '--card-back-bg': backBg } as React.CSSProperties}
    >
      <div className="first-content">
        {firstContent}
      </div>
      <div className="second-content">
        {secondContent}
      </div>
    </div>
  );
};

export default FlipRevealCard;
