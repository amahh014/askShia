import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'

export default class Profile extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.view}>
                <View style={styles.avatarView}>
                    <Text style={styles.avatarText}>A</Text>
                </View>
                <Text style={styles.username}>amahh_014</Text>
                <View style={styles.line} />
                <Text style={styles.post}>Posts</Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    avatarView: {
        width: 50,
        height: 50,
        left: 130,
        top: -10,
        backgroundColor: "#DAD5F8",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        padding: 50
    },
    username: {
        width: 115,
        height: 28,
        left: 110,
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
        width: 55,
        height: 28,
        top: 40,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        left: -25
    }
});