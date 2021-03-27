import React from "react";
import {
  Center,
  Box,
  Heading,
  Text,
  HStack,
  Link,
  Icon,
  useMediaQuery,
  VStack,
} from "native-base";

export function Desc() {
  const isLargerThan600 = useMediaQuery({ minWidth: 600 });
  return (
    <Center flexX={1}>
      <Box
        w="80%"
        justifyContent="center"
        alignItems={isLargerThan600[0] ? "flex-start" : "center"}
      >
        <Heading>👨🏻‍💻 About Me</Heading>
        <VStack space={2} mt={2} pl={isLargerThan600[0] ? 9 : 0}>
          <Text>
            🔭I’m currently working as an Intern on React Native at Geekyants
          </Text>
          <Text>
            🤔 Exploring new technologies and developing software solutions.
          </Text>
          <Text>
            🎓 Studying Computer Science Engineering from Chitkara University.
          </Text>
          <Text>💼 Full Stack Developer.</Text>
          <Text>🌱 Enthusiast in Artificial Intelligence </Text>
        </VStack >
      </Box>
      <Box
        w="80%"
        my={3}
        mt={4}
        justifyContent="center"
        alignItems={isLargerThan600[0] ? "flex-start" : "center"}
      >
        <Heading>Social Links</Heading>
        <HStack space={3} mt={2}>
          <Link href="https://linkedin.com/in/rayan1810/" isExternal>
            <Icon name="linkedin-square" type="AntDesign" />
          </Link>
          <Link href="https://www.instagram.com/ro.hit.si.ngh/" isExternal>
            <Icon name="instagram" type="AntDesign" />
          </Link>
          <Link href="https://github.com/rayan1810" isExternal>
            <Icon name="github" type="AntDesign" />
          </Link>
        </HStack>
      </Box>
    </Center>
  );
}
