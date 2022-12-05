import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from "../screen/authScreen/SignInWelcomeScreen";
import { SignInScreen } from "../screen/authScreen/SignInScreen";

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
        </Auth.Navigator>
    )
}