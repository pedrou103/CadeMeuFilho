import { NavigationContainer } from "@react-navigation/native"
import { Box } from "native-base"
import { RoutesConfig } from "./app.routes"

export function Routes () {
    return (
        <Box>
            <NavigationContainer>
                <RoutesConfig/>
            </NavigationContainer>
        </Box>
    )

}