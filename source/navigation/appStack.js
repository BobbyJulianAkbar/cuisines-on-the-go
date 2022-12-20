import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantMapScreen from "../screen/RestaurantMapScreen";
import DrawerNav from "./DrawerNav";

const App = createStackNavigator();

export function AppStack(){
    return(
        <App.Navigator>
            <App.Screen
                name = "App"
                component = {DrawerNav}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <App.Screen 
                name = "RestaurantMapScreen"
                component = {RestaurantMapScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </App.Navigator>
    )          
}