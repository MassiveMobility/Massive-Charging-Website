import React from 'react';

const Container = ({ children, style }: { children: React.ReactNode, style?: React.CSSProperties }) => (
  <div className="container" style={{ ...style }}>
    {children}
  </div>
);

export default Container;