import { Input as InputByNativeBase } from 'native-base'

export function Input ({...rest}) {
    return (
        <InputByNativeBase 
            bg="black.300"
            h={14}
            px={4}
            borderColor="black.300"
            rounded="sm"
            fontSize="md"
            fontFamily="regular"
            color="white"
            placeholderTextColor="gray.400"
            _focus={{
                bg: "black.300",
                borderColor: "black.300"
            }}
            {...rest}
        />
    )
}