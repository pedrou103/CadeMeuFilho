import { VStack, HStack, Text, Center, Image, Box } from "native-base"
import { useAuth } from "../hooks/useAuth";

export function Settings() {
    const { user } = useAuth();

    const profile_path = user.picture;

    console.log(profile_path)

    return (
        <VStack flex={1} bgColor='black.900'>
            {/* <Center > */}
                <HStack borderBottomColor="black.300" borderBottomWidth={1} mt={16} px={8} py={2}>
                    <Box>
                        <Image source={{
                            uri: user.picture
                        }} alt="Imagem de perfil" size="md" borderRadius={100} />
                    </Box>
                    <Text
                        color="white"
                        fontSize="2xl"
                        fontFamily="medium"
                        mx={4}
                        mt={2}
                    >
                        Olá, {'\n'}
                        {user.name}
                    </Text>
                </HStack>
            {/* </Center> */}
        </VStack>
    )
}