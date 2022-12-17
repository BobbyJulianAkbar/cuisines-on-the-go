import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from "../screen/authScreen/SignInWelcomeScreen";
import { SignInScreen } from "../screen/authScreen/SignInScreen";
import HomeScreen from "../screen/HomeScreen";
import RootClientTabs from "./ClientTabs";
import RestaurantMapScreen from "../screen/RestaurantMapScreen";
import DrawerNav from "./DrawerNav";

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "DrawerNav"
                component = {DrawerNav}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "RestaurantMapScreen"
                component = {RestaurantMapScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}