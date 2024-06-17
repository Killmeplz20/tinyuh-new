import React, { ReactNode } from "react";

interface GridProps {
  className?: string;
  children?: ReactNode;

}

const Grid: React.FC<GridProps> = ({ className, children }) => {
  return <div className={`${className} relative`}>{children}</div>;
};

export default Grid;
