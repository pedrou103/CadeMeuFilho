import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "native-base";
import { House, User } from "phosphor-react-native";
import { Platform } from "react-native";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function RoutesConfig () {
    const { colors, sizes } = useTheme();

    const size = sizes[6];

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
            options={{
                tabBarIcon: () => <House size={size}/>,
                tabBarLabel:'Home' 
            }}
            />
            <Screen
            name="profile"
            component={Profile}
            options={{
                tabBarIcon: () => <User size={size}/>,
                tabBarLabel: 'Profile' 
            }}
            />
        </Navigator>
    )
}