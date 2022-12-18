import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screen/SearchScreen";
import SearchResultScreen from "../screen/SearchResultScreen";
import RestaurantHomeScreen from "../screen/RestaurantHomeScreen";

const clientSearch = createStackNavigator()

export default function ClientStack(){
    return(
        <clientSearch.Navigator>
            <clientSearch.Screen
                name = "SearchScreen"
                component = {SearchScreen}
                options = {
                    () => ({
                        headerShown : false
                    })
                }
            />
            <clientSearch.Screen
                name = "SearchResultScreen"
                component = {SearchResultScreen}
                options = {
                    () => ({
                        headerShown : false
                    })
                }
            />
            <clientSearch.Screen
                name = "RestaurantHomeScreen"
                component = {RestaurantHomeScreen}
                options = {
                    () => ({
                        headerShown : false
                    })
                }
            />
        </clientSearch.Navigator>
    )
}

const styles = StyleSheet.create({})