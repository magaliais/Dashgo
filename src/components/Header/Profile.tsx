import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Magalhães</Text>
        <Text color="gray.300" fontSize="small">
          gabriel.ashm@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gabriel Magalhães" src="https://github.com/magaliais.png" />
    </Flex>
  );
}