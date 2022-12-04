import { Button as ButtonByNativeBase, Text } from "native-base"

export function Button({title, ...rest}) {
    return (
        <ButtonByNativeBase
            w={35}
            h={14}
            bg="black.300"
            rounded="sm"
            _pressed={{
                bg:"black.300"
            }}
            _loading={{
                _spinner: { color: "white" }
            }}
            {...rest}
        >
            <Text
                fontSize="md"
                fontFamily="bold"
                color="white"
            >
                {title}
            </Text>
        </ButtonByNativeBase>
    );
}