import { Center, Text, VStack } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function Register() {
    const [name, setName] = useState();

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
                    mb={4}
                    mt={4}
                    placeholder="Informe o nome do seu filho"
                    onChangeText={setName}
                    value={name}
                />
                <Button 
                    title="Cadastrar"
                />
                <Text color="white" textAlign="center" mt={4} fontFamily="regular" fontSize="md"> 
                    Após o cadastro o seu filho somente poderá ser retirado através da opção "Retirada".
                </Text>
            </Center>
        </VStack >
    )
}