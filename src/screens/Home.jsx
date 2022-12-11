import { useNavigation } from "@react-navigation/native";
import { VStack, Text, HStack, Box, Button, Icon, View } from "native-base"
import { Image, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';

export function Home() {
    const { navigate } = useNavigation();   

    return (
        <VStack flex={1} bgColor='black.900'>
            <VStack alignItems="center" p={4}>
                <HStack mt={12} py={2}>
                    <Box>
                        <Image source={
                            require('../assets/image1.png')
                        } alt="Logo do aplicativo" style={styles.image} />
                    </Box>
                    <Text
                        color="white"
                        fontSize="3xl"
                        fontFamily="bold"
                        mx={4}
                        mt={2}
                    >
                        Cadê {'\n'}
                        Meu Fi?
                    </Text>
                </HStack>
                <Button 
                    w="full"
                    h={10}
                    mt={2}
                    mb={2}
                    onPress={() => navigate('track')}
                    endIcon={<Icon as={AntDesign} name="arrowright" color="white" size="md" />}
                    bgColor="black.300"
                >
                Ir para o rastreio rápido 
                </Button>
            </VStack>
        </VStack>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});