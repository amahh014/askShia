import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class AddPost extends Component {
    render() {
        return (
            <View>
                <View style={styles.avatarView}>
                    <Text style={styles.avatarText}>A</Text>
                </View>
                <Text style={styles.username}>amahh_014</Text>
                <View style={styles.public}>
                    <View style={styles.publicBorder}>
                    <Text style={styles.publicText}>Public</Text>
                    </View>
                </View>
                <View style={styles.inputTextView}>
                    <TextInput
                    style={styles.inputTitle}
                    placeholder="Type your question tittle here ..."
                    multiline={true}
                    />
                </View>
                <View style={styles.inputTextViewTwo}>
                <TextInput
                    style={styles.inputTwoText}
                    placeholder="What's on your mind?"
                    multiline={true}
                    />
                </View>
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
        width: 90,
        height: 40,
        left: 78,
        top: -25,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 15
    },
    public: {
        width: 50,
        height: 15,
        left: 78,
        top: -42
    },
    publicText: {
        fontSize: 12,
    },
    publicBorder: {
        borderColor: "rgba(196, 196, 196, 0.57)",
        borderWidth: 2,
        borderRadius: 5,
        height: 25,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTitle: {
        borderWidth: 2,  // size/width of the border
        borderColor: 'lightgrey',  // color of the border
        paddingLeft: 20,
        height: 50,
        borderRadius: 10,
    },
    inputTextView: {
        width: 350,
        height: 30,
        left: 17
    },
    inputTextViewTwo: {
        top: 35,
        width: 310
    },
    inputTwoText: {
        left: 17,
        fontSize: 18
    }
});