import React from "react";
import { Box } from "native-base";

interface IComponentTemplateProps {
  children: JSX.Element | JSX.Element[];
}

export const ComponentTemplate = ({
  children,
  ...props
}: IComponentTemplateProps) => {
  return <Box {...props}>{children}</Box>;
};
