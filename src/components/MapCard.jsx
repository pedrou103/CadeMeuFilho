import { StyleSheet } from 'react-native'
import React from 'react'
import { Actionsheet, Box, Button, Center, Text, useDisclose } from 'native-base';

const MapCard = () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <Center flex={1} position="absolute" bottom={16} left={3}>
      <Button color="green.500" onPress={onOpen}>Ver Filhos</Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
              color: "gray.300"
            }}>
              Filhos
            </Text>
          </Box>
          <Actionsheet.Item>
            Onde vão os filhos, se eu conseguir colocar um componente aqui dentro
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});

export default MapCard