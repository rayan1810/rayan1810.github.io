import React from "react";
import { Center, Box, Heading, Text, HStack, Link, Icon } from "native-base";

export function Desc() {
  return (
    <Center flexX={1}>
      <Box w="80%">
        <Heading>👨🏻‍💻 About Me</Heading>
        <Box pl={9}>
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
        </Box>
      </Box>
      <Box w="80%" mt={3}>
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
