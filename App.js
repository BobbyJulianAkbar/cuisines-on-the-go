import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { colors } from "./source/global/styles";
import { SignInScreen } from "./source/screen/authScreen/SignInScreen";
import SignInWelcomeScreen from "./source/screen/authScreen/SignInWelcomeScreen";

export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barStyle = "light-content"
        backgroundColor = {colors.statusbar}
      />
      <SignInWelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {flex : 1}
})