import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Lock from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';



function Login() {
    const navigation = useNavigation();
        return (
            <View>
                <Text style={styles.logo}> AskShia </Text>
                <View style={styles.inputView} >
                  <View style={styles.iconV}>
                    <Icon name="user-o" size={22} color="white"/>
                  </View>
                <TextInput  
                    style={styles.inputText}
                    placeholder="Username..." 
                    placeholderTextColor="#C4C4C4" />
                </View>
                <View style={styles.inputView2} >
                    <View style={styles.pass}>
                        <Lock name="lock" size={22} color="white"/>
                    </View>
                <TextInput
                    secureTextEntry={true}
                    style={styles.inputText2}
                    placeholder="Password..." 
                    placeholderTextColor="#C4C4C4" />
                </View>
                <Text style={styles.forgotText}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.loginBtn}>
                        <Text style={styles.logText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => navigation.push('Signup')}>
                        <Text style={styles.signUp}>Not registered ?</Text>
                    </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    logo:{
        fontSize: 40,
        color:"#2DB02A",
        left: 120,
        top: 80,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 135,
        left: 30
      },
      inputText:{
        color: 'white',
        left: 60,
        fontSize: 14,
        top: -20
      },
      inputView2: {
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 162,
        left: 30
      },
      iconV: {
          left: 20,
          top: 15
      },
      inputText2: {
        color: 'white',
        left: 60,
        fontSize: 14,
        top: -20
      },
      pass: {
          left: 20,
          top: 15
      },
      forgotText: {
          fontSize: 14,
          left: 131,
          top: 185
      },
      loginBtn: {
        width:"40%",
        backgroundColor:"#fb5b5a",
        borderRadius:20,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:220,
        left: 105
      },
      logText: {
        color: "#FFFFFF",
        fontWeight: 'bold'
      },
      signUp: {
          left: 138,
          top: 10,
          fontWeight: '500'
      }
});


export default Login;