import { HStack, Spinner } from "native-base";

export function Loading() {
    return (
        <HStack flex={1} bg="black.900" justifyContent="center">
            <Spinner
                color="cyan.500"
                size="xl"
            />
        </HStack >
    );
}