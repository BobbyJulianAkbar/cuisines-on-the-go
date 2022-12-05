import React, {useState, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from "react-native-elements";
import Swiper from "react-native-swiper";

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex : 1}}>
            <View style = {{flex : 3, justifyContent : 'flex-start', alignItems : 'center', paddingTop : 20}}>
                <Text style = {{fontSize : 26, color : colors.buttons, fontWeight : 'bold'}}>DISCOVER RESTAURANT</Text>
                <Text style = {{fontSize : 26, color : colors.buttons, fontWeight : 'bold'}}>IN YOUR AREA</Text>
            </View>
            <View style = {{flex : 4, justifyContent : "center"}}>
                <Swiper autoplay = {true}>
                    <View style = {styles.slide1}>
                        <Image 
                            source = {{uri:"https://cdn0-production-images-kly.akamaized.net/YHppKTMNcRz87-cP2Wrg5Ye8mFc=/1x112:1000x675/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3245094/original/043061400_1600750232-shutterstock_1786027046.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>
                    <View style = {styles.slide2}>
                        <Image 
                            source = {{uri:"https://asset.kompas.com/crops/p2QTEn_7YFMz6Tkzacj0Yi7IehE=/3x0:700x465/780x390/data/photo/2021/03/10/60481fb55ae38.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>
                    <View style = {styles.slide3}>
                        <Image 
                            source = {{uri:"https://img.okezone.com/content/2022/08/11/298/2646282/resep-nasi-goreng-rendah-kalori-cocok-untuk-diet-D8kxJ8GTcT.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>
                    <View style = {styles.slide4}>
                        <Image 
                            source = {{uri:"https://images.tokopedia.net/img/KRMmCm/2022/8/23/2ff587d4-f921-4979-a47d-0aad39519752.jpg"}}
                            style = {{height : "100%", width : "100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style = {{flex : 4, justifyContent : "flex-end", marginBottom : 20}}>
                <View style = {{marginHorizontal : 20, marginTop : 30}}>
                    <Button
                        title = "SIGN IN"
                        buttonStyle = {parameters.styleButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress = {() => {
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>
                <View style = {{marginHorizontal : 20, marginTop : 20}}>
                    <Button 
                        title = "Create an account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1 : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#9dd6eb'
    },
    slide2 : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#97cae5'
    },
    slide3 : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#92bbd9'
    },

    slide4 : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#9dd6eb'
    },

    createButton : {
        backgroundColor : "white",
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth : 1,
        borderColor : "#ff8c52",
        height : 50,
        paddingHorizontal : 20,
        borderColor : colors.buttons
    },

    createButtonTitle : {
        color : colors.grey1,
        fontSize : 20,
        fontWeight : "bold",
        alignItems : "center",
        justifyContent : "center",
        marginTop : -3
    }
})