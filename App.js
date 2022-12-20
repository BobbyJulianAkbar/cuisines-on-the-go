import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SignInContextProvider } from "./source/content/authContent";
import { colors } from "./source/global/styles";
import RootNavigator from "./source/navigation/RootNavigator";

export default function App(){
  return(
    <SignInContextProvider>
      <View style = {styles.container}>
        <StatusBar
          barStyle = "light-content"
          backgroundColor = {colors.statusbar}
        />
        <RootNavigator/>
      </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container : {flex : 1}
})
