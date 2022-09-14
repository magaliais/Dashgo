import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Magalhães</Text>
          <Text color="gray.300" fontSize="small">
            gabriel.ashm@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Magalhães"
        src="https://github.com/magaliais.png"
      />
    </Flex>
  );
}