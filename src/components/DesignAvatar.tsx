import React from 'react';
import { Box, Avatar } from 'native-base';

interface IDesignAvatarProps {
  children?: JSX.Element | JSX.Element[];
}

export const DesignAvatar = ({ children, ...props }: IDesignAvatarProps) => {
  return (
    <Box {...props}>
      <Avatar size="96" source={{uri:"/images/profilepic.png"}} />
    </Box>
  );
};
