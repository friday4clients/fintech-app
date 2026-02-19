import { AbsoluteCenter, Box, Button, EmptyState, Heading, Image, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box h="full" pos="relative">
      <Heading size="2xl" fontWeight={"bold"} color="gray.900">Welcome, Tabitha</Heading>
      <Text fontSize="sm" color="gray.500">Here's an overview of your fund</Text>

      <AbsoluteCenter>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <Image src="/folder.png" mx="auto" boxSize={"20"} />
            </EmptyState.Indicator>
            <Stack textAlign="center" gap="0">
              <EmptyState.Title fontSize="md" fontWeight={"semibold"} color="gray.900">No entity setup yet</EmptyState.Title>
              <EmptyState.Description fontSize="sm" color="gray.500">
                No entity setup yet. Create one to get started.
              </EmptyState.Description>
            </Stack>
            <Button >Create fund</Button>
          </EmptyState.Content>
        </EmptyState.Root>
      </AbsoluteCenter>

    </Box>
  );
}
