import { Center, Text, VStack } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
// import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export function Register() {
    // const {signIn, user} = useAuth();
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <VStack flex={1} bgColor='black.900'>
            <Center p={7}>
                <Text
                    color="white"
                    textAlign="center"
                    mt={4}
                    mb={4}
                    fontSize="5xl"
                    fontFamily="medium"
                >
                    Cadastro de filho
                </Text>
                <Input
                    mb={2}
                    mt={2}
                    placeholder="Name"
                    onChangeText={setName}
                    value={name}
                />
                <Input
                    mt={2}
                    mb={4}
                    placeholder="Senha"
                    onChangeText={setPassword}
                    value={password}
                />
                <Button 
                    title="Cadastrar"
                />
            </Center>
        </VStack >
    )
}