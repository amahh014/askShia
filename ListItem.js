import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
import moment from 'moment'
import Icon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Octicons';


import {useNavigation} from '@react-navigation/native';

const ListItem = ({item}) => {
    const navigation = useNavigation();
    return (
        <View
        style={styles.container}
        >
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.date}>{moment(item.date).calendar()}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.description}>I was reading about colours and which colours go with one another</Text>
            <Text style={styles.unlikeCount}>-{item.unlikeCount}</Text>
            <Text style={styles.likeCount}>+{item.likeCount}</Text>
            <Text style={styles.commentCount}>{item.commentCount}</Text>
            {/* Up down */}
            <TouchableOpacity style={styles.unlikeCountIcon}>
            <Icon name="down" color="rgba(65, 131, 215, 1)"/>
            </TouchableOpacity>
            {/* Up vote */}
            <TouchableOpacity style={styles.likeCountIcon}>
                <Icon name="up" color="rgba(65, 131, 215, 1)"/>
            </TouchableOpacity>
            {/* Comment */}
            <TouchableOpacity style={styles.commentCountIcon}>
                <CommentIcon name="comment-discussion" color="rgba(65, 131, 215, 1)"/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.seeDetails}
              onPress={() => navigation.push('Detail', {
                id: item.id,
                body: item.body,
                username: item.username
            })}>
                <Text style={styles.seeDetailsText}>See Details...</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
	container: {
		padding: 92,
		borderBottomWidth: 8,
        borderColor: '#f1f1f1',
	},
	body: {
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        position: 'absolute',
        width: 283,
        height: 50,
        left:34,
        top: 55,
    },
    description: {
        position: 'absolute',
        width: 317,
        height: 13,
        left: 34,
        top: 108,
        fontSize: 10,
        lineHeight: 12
    },
    username: {
        position: 'absolute',
        width: 64,
        height: 11,
        left: 318,
        top: 35,
        fontSize: 9,
        lineHeight: 11
    },
    date: {
        position: 'absolute',
        width: 88,
        height: 11,
        left: 34,
        top: 35,
        fontSize: 9,
        lineHeight: 11
    },
    likeCount: {
        position: 'absolute',
        width: 18,
        height: 11,
        left: 94,
        top: 133,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        color: 'rgba(45, 176, 42, 0.61)'
    },
    unlikeCount: {
        position: 'absolute',
        width: 15,
        height: 11,
        left: 54,
        top: 133,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        color: '#F8121F'
    },
    commentCount: {
        position: 'absolute',
        width: 8,
        height: 11,
        left: 139,
        top: 133,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 13,
        color: 'rgba(18, 15, 15, 0.64)'
    },
    unlikeCountIcon:{
        position: 'absolute',
        width: 15,
        height: 15,
        left: 35,
        top: 133
    },
    likeCountIcon: {
        position: 'absolute',
        width: 15,
        height: 15,
        left: 75,
        top: 133
    },
    commentCountIcon: {
        position: 'absolute',
        width: 15,
        height: 15,
        left: 117,
        top: 133
    },
    seeDetails: {
        position: 'absolute',
        width: 100,
        height: 16,
        left: 275,
        top: 125,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 16
    },
    seeDetailsText: {
        color: '#2DB02A',
        fontSize: 15.5
    }
});

export default ListItem;