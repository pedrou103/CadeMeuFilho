import { NavigationContainer } from "@react-navigation/native"
import { Box } from "native-base"
import { useAuth } from "../hooks/useAuth";
import { Login } from "../screens/Login";
import { RoutesConfig } from "./app.routes"

export function Routes () {
    const {user} = useAuth();

    return (
        <Box flex={1} bg="gray.900">
            <NavigationContainer>
                {user.name ? <RoutesConfig /> : <Login />}
            </NavigationContainer>
        </Box>
    )

}