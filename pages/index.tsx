import React,{useState,useEffect} from 'react';
import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Code,
  Link,
  VStack,
  Button,
  AspectRatio,
  Box,
} from 'native-base';
import * as Font from 'expo-font'
import { HeroText, SubHeroText,DesignAvatar } from '../src/components';
// Start editing here, save and see your changes.
export default function App() {
  return (
    <Box
      flex={1}
      px="8%"
      _dark={{ bg: 'gray.900' }}
      _light={{ bg: 'blueGray.50' }}
      // pt={[2, 4, 32]}
    >
      <Box h="100vh" justifyContent="center">
        <HeroText>Kon'nichiwa! I'm Rohit</HeroText>
        <SubHeroText mt="10">
          A Software Developer and Co-creator of NativeBase v3
        </SubHeroText>
      </Box>
      <Box h="100vh" justifyContent="center">
        <DesignAvatar/>
      </Box>
    </Box>
  );
}
// Color Switch Component
function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
      placement="bottom right"
      openDelay={300}
      closeOnClick={false}
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        accessibilityLabel="Color Mode Switch"
      />
    </Tooltip>
  );
}
