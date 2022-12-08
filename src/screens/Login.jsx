import { Center, Text, Icon, VStack, Button as ButtonByNativeBase } from "native-base"
import { Image } from "react-native"
import { Fontisto, AntDesign } from '@expo/vector-icons';

import { Input } from "../components/Input"
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export function Login() {
    const {signIn, user} = useAuth();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <VStack flex={1} bgColor='gray.900'>
            <Center bgColor='black.600' p={8}>
                <Image source={require('../assets/image2.png')}/>
            </Center>
            <Center p={7}>
                <Text
                    color="white"
                    textAlign="center"
                    mt={4}
                    mb={4}
                    fontSize="5xl"
                    fontFamily="medium"
                >
                    Cadê Meu Fi?
                </Text>
                <Input
                    mb={2}
                    mt={2}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    value={email}
                />
                <Input
                    mt={2}
                    mb={4}
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                />
                <Button 
                    title="Login"
                    endIcon={<Icon as={AntDesign} name="login" color="white" size="md" />}
                />
            </Center>
            <Center borderTopColor="black.300" borderTopWidth={1}>
                <Text color="white" textAlign="center" mt={4} fontFamily="regular" fontSize="md"> 
                    ou faça login com
                </Text>
                <ButtonByNativeBase 
                    mt={4}
                    w={15}
                    h={15}
                    rounded={100}
                    leftIcon={<Icon as={Fontisto} name="google" color="white" size="lg"/>}
                    bg="black.300"
                    _pressed="black.600"
                    _loading={{
                        _spinner: {color: "yellow"}
                    }}
                    onPress={signIn}
                />
            </Center>
        </VStack >
    )
}