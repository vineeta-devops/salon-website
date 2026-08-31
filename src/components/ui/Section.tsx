import React from 'react';

interface SectionProps extends React.PropsWithChildren {
  id?: string;
  className?: string;
  bgColor?: 'main' | 'alt' | 'accent';
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', bgColor = 'main' }) => {
  return (
    <section id={id} className={`section bg-${bgColor} ${className}`}>
      {children}
    </section>
  );
};
