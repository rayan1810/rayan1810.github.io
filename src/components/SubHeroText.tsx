import React from "react";
import { Heading, IHeadingProps } from "native-base";

interface ISubHeroTextProps extends IHeadingProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const SubHeroText = ({ children, ...props }: ISubHeroTextProps) => {
  return (
    <Heading size="2xl"  {...props}>
      {children}
    </Heading>
  );
};
