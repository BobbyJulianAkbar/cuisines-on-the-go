import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./authNavigation";
import { AppStack }from "./appStack";
import { SignInContext } from "../content/authContent";

export default function RootNavigator(){
    const {signedIn,} = useContext(SignInContext)
    return(
        <NavigationContainer>
            {signedIn.userToken === null ? <AuthStack/> : <AppStack/>} 
        </NavigationContainer>
    )
}