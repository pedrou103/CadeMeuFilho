import { Center, Text, VStack } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Register() {
    const childrens = [
        {
            name: "Elquiane",
            age: 21
        },
        {
            name: "Elquiane Lima",
            age: 12
        },
        {
            name: "Elquiane Ferreira",
            age: 9
        },        
    ];

    const children = ['childrens', JSON.stringify(childrens)];

    //coisas do nome
    const [name, setName] = useState();
    const [newName, setNewName] = useState();


    //handle do nome
    // const handleSave = async () => {
    //     if(name != ''){
    //         await AsyncStorage.setItem('@name', newName);
    //         setName(newName); //já mostrando o valor que será salvo
    //         setNewName(''); //limpando o input
    //     }
    // }

    //handle do array de objetos
    const handleSave = async () => {
        try {
          await AsyncStorage.multiSet([children]);
        } catch (error) {
          console.log(error);
        }
    };

    //pegando mais de um valor
    const getMultipleData = async () => {
        try {
          const savedData = await AsyncStorage.multiGet(["childrens"]);
          console.log(savedData);
        } catch (error) {
          console.log(error);
        }
      };

    const getName = async () => {
        const n = await AsyncStorage.getItem('@name');
        setName(n);
    }


    //para rodar assim que o app for buildado
    useEffect(() => {
        getMultipleData();
    }, []);

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
                    onChangeText={setNewName}
                    value={newName}
                />
                <Button 
                    title="Cadastrar"
                    onPress={handleSave}
                />
                <Text color="white" textAlign="center" mt={4} fontFamily="regular" fontSize="md"> 
                    Após o cadastro o seu filho somente poderá ser retirado através da opção "Retirada".
                    {/* {name} */}
                </Text>
            </Center>
        </VStack >
    )
}