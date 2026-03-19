import React from 'react';

interface SurfaceProps {
  children: React.ReactNode;
  /* [MIGRATED] Added 'secondary' to the variant type definition */
  variant?: 'base' | 'machine' | 'glass' | 'secondary';
  style?: React.CSSProperties;
}

const Surface = ({ children, variant = 'base', style }: SurfaceProps) => {
  const variants = {
    base: { backgroundColor: 'var(--surface-base)' },
    machine: { backgroundColor: 'var(--surface-machine)' },
    /* [MIGRATED] Added secondary variant mapping to gray-400 token */
    secondary: { backgroundColor: 'var(--surface-secondary)' },
    glass: { 
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)' 
    }
  };

  return (
    <div style={{ ...variants[variant], ...style }}>
      {children}
    </div>
  );
};

export default Surface;