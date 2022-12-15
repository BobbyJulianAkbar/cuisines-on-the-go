import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import HomeScreen from "../screen/HomeScreen";
import SearchScreen from "../screen/SearchScreen"
import MyOrderScreen from "../screen/MyOrderScreen";
import MyAccountScreen from "../screen/MyAccountScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
                    screenOptions = {{
                        tabBarActiveTintColor : colors.buttons
                    }}
                >
            <ClientTabs.Screen
                name = "HomeScreen"
                component = {HomeScreen}
                options = {
                    {
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name = "home"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    {
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name = "search"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name = "MyOrderScreen"
                component = {MyOrderScreen}
                options = {
                    {
                        tabBarLabel : "My Order",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name = "view-list"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name = "MyAccount"
                component = {MyAccountScreen}
                options = {
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name = "person"
                                type = "material"
                                color = {color}
                                size = {size}
                            />
                        )
                    }
                }
            />
        </ClientTabs.Navigator>
    )
}