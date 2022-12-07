import { VStack, Text } from "native-base"

export function Track() {
    return (
        <VStack flex={1} bgColor='black.900'>
            <VStack mt={8} mx={5} alignItems="center">

                <Text color="white">
                    Tela de Rastreio
                </Text>
            </VStack>
        </VStack>
    )
}