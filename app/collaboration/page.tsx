import { AbsoluteCenter, ButtonGroup, EmptyState, Stack, Button } from "@chakra-ui/react";

export default function Page() {
    return (
        <AbsoluteCenter>
            <EmptyState.Root>
                <EmptyState.Content>
                    <EmptyState.Indicator>
                    </EmptyState.Indicator>
                    <Stack textAlign="center">
                        <EmptyState.Title>Coming Soon</EmptyState.Title>
                        <EmptyState.Description>
                            This feature is currently under development
                        </EmptyState.Description>
                    </Stack>
                    <Button>Back to home</Button>
                </EmptyState.Content>
            </EmptyState.Root>
        </AbsoluteCenter>
    )
}