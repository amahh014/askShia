import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import {useNavigation} from '@react-navigation/native';

function Profile() {
    const navigation = useNavigation();
        return (
            <ScrollView>
            <View style={styles.view}>
                <View style={styles.avatarView}>
                    <Text style={styles.avatarText}>A</Text>
                </View>
                <Text style={styles.username}>amahh_014</Text>
                <View style={styles.line} />
                <Text style={styles.post}>Posts</Text>
                <View style={styles.avatarViewZ}>
                    <Text style={styles.avatarTextZ}>A</Text>
                </View>
                <TouchableOpacity 
                  style={styles.inputText}
                  onPress={() => navigation.push('Create Post')}>
                <Text style={styles.mindText}>What's on your mind?</Text>
                </TouchableOpacity>
                <View style={styles.line2} />
            </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    avatarView: {
        width: 50,
        height: 50,
        left: 110,
        top: -10,
        backgroundColor: "#DAD5F8",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        padding: 50,
        height: 500
    },
    username: {
        width: 115,
        height: 28,
        left: 90,
        top: 0,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20
    },
    avatarText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green'
      },
    line: {
        borderBottomWidth: 12,
        borderColor: '#f1f1f1',
        top: 25,
        width: 415,
        left: -50
    },
    post: {
        width: 60,
        height: 28,
        top: 40,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        left: -25
    },
    avatarViewZ: {
        width: 50,
        height: 50,
        left: -30,
        top: 55,
        backgroundColor: "#DAD5F8",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarTextZ: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green'
      },
    inputText: {
        left: 42,
        top: 15
    },
    mindText: {
        color: "#C4C4C4"
    },
    line2: {
        borderBottomWidth: 1.5,
        borderColor: '#f1f1f1',
        top: 60,
        width: 415,
        left: -50
    }
});


export default Profile;