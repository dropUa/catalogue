import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = React.memo(
  ({ children, className = '' }) => {
    return <div className={`${className} px-3`}>{children}</div>;
  }
);
