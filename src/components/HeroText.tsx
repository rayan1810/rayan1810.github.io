import React from "react";
import { Heading, IHeadingProps } from "native-base";

interface IHeroTextProps extends IHeadingProps {
  children: string;
}

export const HeroText = ({ children, ...props }: IHeroTextProps) => {
  return (
    <Heading size="5xl" w={["full", "full", "2/3"]}>
      {children}
    </Heading>
  );
};
