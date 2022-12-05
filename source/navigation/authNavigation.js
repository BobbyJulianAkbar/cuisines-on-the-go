import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInWelcomeScreen from "../screen/authScreen/SignInWelcomeScreen";
import { SignInScreen } from "../screen/authScreen/SignInScreen";

const AuthStack = createStackNavigator();

export default function AuthStack(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <AuthStack.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                option = {{
                    headersShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </AuthStack.Navigator>
    )
}