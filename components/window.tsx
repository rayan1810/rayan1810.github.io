import React from "react";
import { Box, HStack, Flex, useMediaQuery } from "native-base";

export function Window(props) {
  const isLargerThan512 = useMediaQuery({ minWidth: 600 });

  return (
    <Box bg="gray.800" w="80%" h="80%" rounded={8}>
      <Flex
        direction="row"
        p={3}
        bg="gray.700"
        roundedTop={8}
        alignContent="center"
      >
        <HStack space="xs" mt={1}>
          <Box p={2} bg="red.500" rounded="full" />
          <Box p={2} bg="yellow.500" rounded="full" />
          <Box p={2} bg="green.500" rounded="full" />
        </HStack>
        <Box _text={{ color: "gray.400" }} flex={1} alignItems="center">
          {isLargerThan512[0]
            ? "Made with ❤️ using NextJS and NativeBase 3.0"
            : "Update Coming Soon..."}
        </Box>
      </Flex>
      {props.children}
    </Box>
  );
}
