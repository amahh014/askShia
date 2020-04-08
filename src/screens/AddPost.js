import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class AddPost extends Component {
    render() {
        return (
            <View>
                <View style={styles.avatarView}>
                    <Text style={styles.avatarText}>A</Text>
                </View>
                <Text style={styles.username}>amahh_014</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarView: {
        width: 50,
        height: 50,
        left: 17,
        top: 15,
        backgroundColor: "#DAD5F8",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'green'
      },
    username: {
        width: 80,
        height: 20,
        left: 78,
        top: -25,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15
    }
});