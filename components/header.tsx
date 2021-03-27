import React from "react";
import {
  Center,
  Avatar,
  Box,
  Heading,
  Stack,
  useMediaQuery,
} from "native-base";

export function Header() {
  const isLargerThan600 = useMediaQuery({ minWidth: 600 });
  return (
    <Center flexX={1} mt={3}>
      <Box w="85%">
        <Stack
          direction={isLargerThan600[0] ? "row" : "column"}
          space={4}
          m={3}
          alignItems="center"
        >
          <Avatar
            size={24}
            borderWidth={1}
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
            }}
          >
            RS
          </Avatar>
          <Heading>Hey, It's Rohit 😉</Heading>
        </Stack>
      </Box>
    </Center>
  );
}
