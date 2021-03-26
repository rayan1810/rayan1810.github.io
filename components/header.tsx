import React from "react";
import { Center, Avatar, Box, Heading, HStack } from "native-base";

export function Header() {
  return (
    <Center flexX={1} mt={3}>
      <Box w="85%">
        <HStack space={4} m={3} alignItems="center">
          <Avatar
            size={24}
            w={{ md: 24, sm: 16 }}
            h={{ md: 24, sm: 16 }}
            borderWidth={1}
            source={{
              uri:
                "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
            }}
          >
            RS
          </Avatar>
          <Heading>Hey, It's Rohit 😉</Heading>
        </HStack>
      </Box>
    </Center>
  );
}
