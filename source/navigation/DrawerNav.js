import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screen/BusinessConsoleScreen";
import DrawerContent from "../component/DrawerContent";

const Drawer = createDrawerNavigator()

export default function DrawerNav(){
    return(
        <Drawer.Navigator
                drawerContent = {props => <DrawerContent {...props} />}
            >
            <Drawer.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    title : 'Client',
                    drawerIcon : ({focussed, size}) => (
                        <Icon
                            type = "material-community"
                            name = "home"
                            color = {focussed ? '#7cc' : colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name = "BusinessConsoleScreen"
                component = {BusinessConsoleScreen}
                options = {{
                    title : 'Business Console',
                    drawerIcon : ({focussed, size}) => (
                        <Icon
                            type = "material"
                            name = "business"
                            color = {focussed ? '#7cc' : colors.grey2}
                            size = {size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}