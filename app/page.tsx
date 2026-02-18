import { AbsoluteCenter, Box, Button, EmptyState, Heading, Image, Stack, Text } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box h="full" pos="relative">
      <Heading>Welcome, Tabitha</Heading>
      <Text fontSize="xs" color="fg.subtle">Here's an overview of your fund</Text>

      <AbsoluteCenter>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <Image src="/folder.png" mx="auto" boxSize={"20"} />
            </EmptyState.Indicator>
            <Stack textAlign="center" gap="0">
              <EmptyState.Title fontSize="sm">No entity setup yet</EmptyState.Title>
              <EmptyState.Description fontSize="xs">
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
