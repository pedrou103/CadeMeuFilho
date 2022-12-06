import { VStack, Text } from "native-base"

export function Home() {
    return (
        <VStack flex={1} bgColor='black.900'>
            <VStack mt={8} mx={5} alignItems="center">

                <Text color="white">
                    Tela de Home
                </Text>
            </VStack>
        </VStack>
    )
}