import React, {useState, useRef} from "react";
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native'
import { colors, parameters, title } from "../../global/styles";
import Header from '../../component/header';
import * as Animatable from 'react-native-animatable'
import { Icon, Button } from "react-native-elements";
import { Formik } from "formik";
import auth from '@react-native-firebase/auth'
import { Alert } from "react-native";

export function SignInScreen({navigation}){

    const[TextInput2Focused, setTextInput2Focused] = useState(false)
    const[TextInput3Focused, setTextInput3Focused] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

async function signIn(data){
    try{
    const {password,email} = data
    const user = await auth().signInWithEmailAndPassword(email,password)
    if(user){
        console.log("USER SIGNED-IN")
    }
}
    catch(error){
        Alert.alert(
            error.name,
            error.message
        )
    }
}

    return(
        <View style = {styles.container}>
            
            <Header title = "MY ACCOUNT" type = "arrow-left" navigation = {navigation}/>
            <View style ={{marginLeft : 20, marginTop : 10}}>
                <Text style = {title}>Sign-In</Text>
            </View>
            <View style = {{alignItems : "center", marginTop : 10}}>
                <Text style = {styles.text1}>Please enter the email and password</Text>
                <Text style = {styles.text1}>registered with your account</Text>
            </View>
            <Formik
                initialValues = {{email:'',password:''}}
                onSubmit = {(values)=>{
                    signIn(values)
                }}
                    >
                    { (props)=>
                <View>
                <View>
                <View style = {{marginTop : 20}}></View>
                <View style = {styles.TextInput1}>
                    <Animatable.View animation = {TextInput3Focused? "" : "fadeInLeft"} duration = {400}>
                        <Icon 
                            name = "email"
                            iconStyle={{color : colors.grey3}}
                            type = "material"
                        />
                    </Animatable.View>
                    <TextInput 
                        style = {{width : "91%"}}
                        placeholder = "Email"
                        ref = {textInput1}
                        onFocus = {() => {
                            setTextInput3Focused(false)
                        }}
                        onBlur = {() => {
                            setTextInput3Focused(true)
                        }}
                        onChangeText = {props.handleChange('email')}
                        value = {props.values.email}
                    />  
                </View>
                <View style = {styles.TextInput2}>
                    <Animatable.View animation = {TextInput2Focused? "" : "fadeInLeft"} duration = {400}>
                        <Icon 
                            name = "lock"
                            iconStyle={{color : colors.grey3}}
                            type = "material"
                            style = {{}}
                        />
                    </Animatable.View>
                    <TextInput 
                        style = {{width : "80%"}}
                        placeholder = "Password"
                        ref = {textInput2}
                        onFocus = {() => {
                            setTextInput2Focused(false)
                        }}
                        onBlur = {() => {
                            setTextInput2Focused(true)
                        }}
                        onChangeText = {props.handleChange('password')}
                        value = {props.values.password}
                    />
                    <Animatable.View animation = {TextInput2Focused? "" : "fadeInLeft"} duration = {400}>
                        <Icon 
                            name = "visibility-off"
                            iconStyle={{color : colors.grey3}}
                            type = "material"
                            style = {{marginRight : 10}}
                        />
                    </Animatable.View>
                </View>
            </View>
            <View style = {{marginHorizontal : 20, marginTop : 30}}>
                <Button
                    title = "SIGN IN"
                    buttonStyle = {parameters.styleButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {props.handleSubmit}
                />
            </View>
            </View>}
            </Formik>
            
            <View style = {{alignItems : "center", marginTop : 15}}>
                <Text style = {{...styles.text1, textDecorationLine : "underline"}}>Forgot Password ?</Text>
            </View>
            <View style = {{alignItems : "center", marginTop : 20}}>
                <Text style = {{fontSize : 20, fontWeight : "bold"}}>OR</Text>
            </View>
            <View style = {{marginLeft : 20, marginTop : 25}}>
                <Text style = {{...styles.text1}}>New on Cuisines ?</Text>
            </View>
            <View style = {{alignItems : "flex-end", marginHorizontal : 20}}>
                <Button 
                    title = "Create an account"
                    buttonStyle = {styles.createButton}
                    titleStyle = {styles.createButtonTitle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container : {
        flex : 1
    },

    text1 : {
        color : colors.grey3,
        fontSize : 16
    },

    TextInput1 : {
        borderWidth : 1,
        borderColor : "#86939e",
        marginHorizontal : 20,
        borderRadius : 12,
        marginBottom : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        alignContent : "center",
        alignItems : "center",
        paddingLeft : 15
    },

    TextInput2 : {
        borderWidth : 1,
        borderRadius : 12,
        marginHorizontal : 20,
        borderColor : "#86939e",
        flexDirection : "row",
        justifyContent : "space-between",
        alignContent : "center",
        alignItems : "center",
        paddingLeft : 15
    },

    SocialIcon : {
        borderRadius : 12,
        height : 50
    },

    createButton : {
        backgroundColor : "white",
        alignContent : "center",
        justifyContent : "center",
        borderRadius : 12,
        borderWidth : 1,
        borderColor : "#2452cb",
        height : 40,
        paddingHorizontal : 20
    },

    createButtonTitle : {
        color : "#2452cb",
        fontSize : 16,
        fontWeight : "bold",
        alignItems : "center",
        justifyContent : "center",
        marginTop : -3
    }
})