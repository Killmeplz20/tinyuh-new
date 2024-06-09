import React from "react";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="lg:px-20 lg:pt-20 lg:pb-10 px-10 pt-10 pb-5">
      <h1 className="text-3xl font-bold tracking-wider text-main">{title}</h1>
    </div>
  );
};

export default Title;
