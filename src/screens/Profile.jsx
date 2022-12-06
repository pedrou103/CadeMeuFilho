import { VStack, Text } from "native-base"

export function Profile() {
    return (
        <VStack flex={1} bgColor='black.900'>
            <VStack mt={8} mx={5} alignItems="center">

                <Text color="white">
                    Tela de perfil
                </Text>
            </VStack>
        </VStack>
    )
}