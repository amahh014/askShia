import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

const Comments = ({data}) => {
    return (
        <View>
            {!data && <Text>No comments...</Text>}

        {data &&
            data.map((comment) => (
                <View
                  key={comment.id}
                  style={styles.listItem}
                >
                    <View style={styles.comment}>
                    <View style={styles.replyAvatarView}>
                    <Text style={styles.replyAvatarText}>{comment.username[0].toUpperCase()}</Text>
                    </View>
                    <Text style={styles.username}>{comment.username}</Text>
                    <Text style={styles.commentText}>{comment.body}</Text>
                    <Text style={styles.commentDate}>{moment(comment.createdAt).calendar()}</Text>
                        <View>
                    <TouchableOpacity style={styles.commentUnlikeCountIcon}>
                      <Icon name="down" color="rgba(65, 131, 215, 1)" size={18}/>
                    </TouchableOpacity>
                    <Text style={styles.commentUnlikeCount}>2</Text>
                    <Text style={styles.commentLikeCount}>4</Text>
                    <TouchableOpacity style={styles.commentLikeCountIcon}>
                        <Icon name="up" color="rgba(65, 131, 215, 1)" size={18}/>
                    </TouchableOpacity>
                        </View>
                    </View>

                </View>
            ))
        }
        </View>
    )
} 

const styles = StyleSheet.create({
    listItem: {
        padding: 25,
        flex: 1
    },
    username: {
        width: 105,
        height: 18,
        left: 15,
        top: 2,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
        alignItems: 'flex-end',
        textAlign: "center",
        color: '#000000'
    },
    commentText: {
        top: 1,
        left: 34,
        width: 335,
        lineHeight: 16
    },
    replyAvatarView: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        left: -20,
        borderRadius: 50,
        top: 40,
        backgroundColor: 'rgba(45, 176, 42, 0.76)'
      },
    replyAvatarText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF'
      },
    commentDate: {
        left: 35,
        top: 2,
        color: 'rgba(0, 0, 0, 0.53)'
    },
    comment: {
        padding: 10,
        borderRadius: 10,
        marginBottom: -100,
        top: -100
    },
    commentUnlikeCount:{
        width: 22,
        height: 12,
        left: 252,
        top: -12,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        color: '#F8121F'
    },
    commentLikeCount:{
        width: 22,
        height: 12,
        left: 302,
        top: -24,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        color: 'rgba(45, 176, 42, 0.61)'
    },
    commentUnlikeCountIcon: {
        width: 18,
        height: 14,
        left: 220,
        top: -1
      },
    commentLikeCountIcon: {
        width: 18,
        height: 14,
        left: 275,
        top: -40
    }
})

export default Comments;