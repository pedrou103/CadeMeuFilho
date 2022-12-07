import { NavigationContainer } from "@react-navigation/native"
import { Box } from "native-base"
import { Login } from "../screens/Login";
import { RoutesConfig } from "./app.routes"

import * as Location from 'expo-location';

export function Routes () {
    const user = {
        name: 'Pedro',
    };

    return (
        <Box flex={1} bg="gray.900">
            <NavigationContainer>
                {user.name ? <RoutesConfig /> : <Login />}
            </NavigationContainer>
        </Box>
    )

}