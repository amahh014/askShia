import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

function Login() {
        return (
            <View>
                <Text style={styles.askShia}> AskShia </Text>
                <View style={styles.inputView}>
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Username..." 
                        placeholderTextColor="#C4C4C4" />
                </View>
                <View style={styles.inputView2}>
                    <TextInput  
                        style={styles.inputText}
                        placeholder="Email..." 
                        placeholderTextColor="#C4C4C4" />
                </View>
                <View style={styles.inputView3}>
                    <TextInput  
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#C4C4C4" />
                </View>
                <View style={styles.inputView4}>
                    <TextInput  
                        secureTextEntry={true}
                        style={styles.inputText}
                        placeholder="Confirm Password..." 
                        placeholderTextColor="#C4C4C4" />
                </View>
                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={styles.signUpText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        )
}


const styles = StyleSheet.create({
    askShia: {
        left: 37,
        top: 70,
        fontWeight: 'bold',
        fontSize: 35,
        color: '#2DB02A'
    },
    inputView: {
        width:"78%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 120,
        left: 30
      },
    inputText: {
        color: 'white',
        left: 30,
        fontSize: 14,
    },
    inputView2: {
        width:"78%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 145,
        left: 30
    },
    inputView3: {
        width:"78%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 170,
        left: 30
    },
    inputView4: {
        width:"78%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        top: 195,
        left: 30
    },
    signUpBtn: {
        width:"40%",
        backgroundColor:"#fb5b5a",
        borderRadius:20,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:232,
        left: 105
      },
      signUpText: {
        color: "#FFFFFF",
        fontWeight: 'bold'
      },
});

export default Login;