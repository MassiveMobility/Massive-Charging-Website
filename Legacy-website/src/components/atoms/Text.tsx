import React from 'react';

interface TextProps {
  children: React.ReactNode;
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
  weight?: '400' | '500' | '700' | '900';
  color?: 'primary' | 'muted' | 'on-dark' | 'green';
  tag?: 'span' | 'p' | 'h1' | 'h2' | 'div';
  style?: React.CSSProperties;
}

const Text = ({ 
  children, 
  size = '3', 
  weight = '400', 
  color = 'primary', 
  tag: Tag = 'span',
  style 
}: TextProps) => {
  const colorMap = {
    primary: 'var(--text-primary)',
    muted: 'var(--text-muted)',
    'on-dark': 'var(--text-invert)',
    green: 'var(--p-green-live)'
  };

  return (
    <Tag style={{
      fontSize: `var(--text-${size})`,
      fontWeight: `var(--weight-${weight})`,
      color: colorMap[color],
      fontFamily: size === '1' ? 'var(--font-mono)' : 'var(--font-sans)',
      lineHeight: 'var(--lh-2)',
      ...style
    }}>
      {children}
    </Tag>
  );
};

export default Text;