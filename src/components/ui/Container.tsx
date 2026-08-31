import React from 'react';

export const Container: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};
