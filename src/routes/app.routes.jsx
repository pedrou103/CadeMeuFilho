import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "native-base";
import sizes from "native-base/lib/typescript/theme/base/sizes";
import { Platform } from "react-native";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";


const { Navigator, Screen } = createBottomTabNavigator();

export function RoutesConfig () {
    const { colors, sizes } = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShow: false,
                tabBarLabelPosition: "beside-icon",
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.black,
                tabBarStyle: { 
                    position: "absolute",
                    height: sizes[22],
                    borderTopWidth: 0,
                    backgroundColor: colors.black[700]
                },
                tabBarItemStyle: {
                    position: "relative",
                    top: Platform.OS === "android" ? -10 : 0
                }
            }}>
            <Screen
            name="home"
            component={Home}
            options={{tabBarIcon: () => <House size={32} /> }}/>
            <Screen
            name="profile"
            component={Profile}
            options={{tabBarIcon: () => <User size={32} /> }}/>
        </Navigator>
    )
}