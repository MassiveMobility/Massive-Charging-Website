import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'min' | 'mid' | 'glow'; 
  children: React.ReactNode;
}

const Button = ({ variant = 'mid', children, style, onMouseEnter, onMouseLeave, ...props }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Logic for the background color: Blue at rest, Green on hover
  const backgroundColor = isHovered ? 'var(--action-glow)' : `var(--action-${variant})`;

  return (
    <button 
      className="btn-machine"
      onMouseEnter={(e) => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor, 
        color: 'var(--text-on-action)',
        padding: 'var(--space-2)', 
        borderRadius: 'var(--radius-2)',
        fontSize: 'var(--text-3)', 
        fontWeight: 'var(--weight-700)',
        lineHeight: '1',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'all 0.2s ease',
        ...style
      }}
      {...props}
    >
      <style>{`
        .btn-machine:active {
          transform: scale(0.98);
          /* Multi-layered Green Glow effect */
          box-shadow: 0 0 15px var(--p-green-live), 0 0 30px var(--p-green-live);
          filter: brightness(1.2);
        }
      `}</style>
      {children}
    </button>
  );
};

export default Button;