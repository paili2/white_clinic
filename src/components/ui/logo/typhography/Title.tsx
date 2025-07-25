import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const style = {
  h1: "",
};

const Title = ({ children }: TitleProps) => {
  return <span className="text-5xl font-bold text-[#1f70ab]">{children}</span>;
};

export default Title;
