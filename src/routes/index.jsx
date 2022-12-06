import { NavigationContainer } from "@react-navigation/native"
import { Box } from "native-base"
import { Login } from "../screens/Login";
import { RoutesConfig } from "./app.routes"

export function Routes () {
    const user = {
        name: 'Pedro',
    };

    return (
        <Box>
            <NavigationContainer flex={1} bg="gray.900">
                {/* {user.name K} */}
                {/* {user.name ? <RoutesConfig /> : <Login />} */}
                <RoutesConfig />
            </NavigationContainer>
        </Box>
    )

}