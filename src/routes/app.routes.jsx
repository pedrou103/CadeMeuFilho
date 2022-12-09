import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useTheme } from "native-base";
import { House, MapPin, UserPlus, Gear } from "phosphor-react-native";
import { Platform } from "react-native";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Settings } from "../screens/Settings";
import { Track } from "../screens/Track";

const { Navigator, Screen } = createBottomTabNavigator();

export function RoutesConfig () {
    const { colors, sizes } = useTheme();

    const size = sizes[7];

    return (
        <Navigator
            screenOptions={{
                headerShow: false,
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: colors.white,
                tabBarInactiveTintColor: colors.black[300],
                tabBarStyle: { 
                    position: "absolute",
                    height: sizes[14],
                    borderTopWidth: 0,
                    backgroundColor: colors.black[700]
                },
                tabBarItemStyle: {
                    position: "relative",
                    top: Platform.OS === "android" ? 5 : 0
                }
            }}>
            <Screen
            name="home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => <House color={ color } size={size}/>,
                tabBarLabel:'',
                header: () => null 
            }}
            />
            <Screen
            name="track"
            component={Track}
            options={{
                tabBarIcon: ({ color }) => <MapPin color={ color } size={size}/>,
                tabBarLabel: '',
                header: () => null 
            }}
            />
            <Screen
            name="register"
            component={Register}
            options={{
                tabBarIcon: ({ color }) => <UserPlus color={ color } size={size}/>,
                tabBarLabel: '',
                header: () => null 
            }}
            />
            <Screen
            name="settings"
            component={Settings}
            options={{
                tabBarIcon: ({ color }) => <Gear color={ color } size={size}/>,
                tabBarLabel: '',
                header: () => null 
            }}
            />
        </Navigator>
    )
}