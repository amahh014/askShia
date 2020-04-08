import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import CommentIcon from 'react-native-vector-icons/Octicons';
import Reaction from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';

import Comments from './Comments';

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
// import { FETCH_POST_QUERY } from './queries';

const Detail = ({route}) => {
    const {id} = route.params;

    const {
        data,
        loading,
        error
      } = useQuery(FETCH_POST_QUERY, {
        variables: {
          id
        }
      });

      console.log(data)

      if (loading){
        return <Text>Loading...</Text>
      }

      if (error){
        return <Text>Error occured...</Text>
      }

     
      const {
        body,
        username,
        createdAt,
        likeCount,
        unlikeCount,
        commentCount,
        comments
      } = data.getPost;


        return (
            <ScrollView>
              <View style={styles.avatarView}>
                <Text style={styles.avatarText}>{username[0].toUpperCase()}</Text>
              </View>

              <TouchableOpacity style={styles.optionButton}>
                <Reaction name="options" color="#000000" size={22}/>
              </TouchableOpacity>

              <Text style={styles.username}>{username}</Text>
              <Text style={styles.date}>{moment(createdAt).calendar()}</Text>
              <Text style={styles.bodyText}>{body}</Text>
              <Text style={styles.question_two}>Question What does Islam say about the control of contagious diseases and protecting oneself against them? Is there any soorah in the Qur’an which explains precautions that must be taken to control or prevent infection? The Jews, for examples, have a book called the Book of Leviticus which speaks about such matters. Question What does Islam say about the control of contagious diseases and protecting oneself against them? Is there any soorah in the Qur’an which explains precautions that must be taken to control or prevent infection? The Jews, for examples, have a book called the Book of Leviticus which speaks about such matters.</Text>
                <View style={styles.likesUnlikes}>
              <TouchableOpacity style={styles.unlikeCountIcon}>
                <Icon name="down" color="rgba(65, 131, 215, 1)" size={22}/>
              </TouchableOpacity>
              <Text style={styles.unlikeCount}>{unlikeCount}</Text>

              <TouchableOpacity style={styles.likeCountIcon}>
                <Icon name="up" color="rgba(65, 131, 215, 1)" size={22}/>
              </TouchableOpacity>
              <Text style={styles.likeCount}>{likeCount}</Text>

              <TouchableOpacity style={styles.commentCountIcon}>
                <CommentIcon name="comment-discussion" color="rgba(65, 131, 215, 1)" size={22}/>
              </TouchableOpacity>
              <Text style={styles.commentCount}>{commentCount}</Text>
              </View>
              <View
                style={{
                  borderBottomColor: '#C4C4C4',
                  borderBottomWidth: 10,
                  top: -45,
                }}
              />
              
              <View style={styles.reactionIcon}>
                <Reaction name="directions" size={22}/>
              </View>
              <Text style={styles.reactionText}>{likeCount + unlikeCount + commentCount}</Text>
              
                <Comments data={comments}/>

            </ScrollView>
        )
}

const FETCH_POST_QUERY = gql`
  query($id: ID!){
    getPost(postId: $id){
      id
      body
      createdAt
      username
      likeCount
      unlikeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

const styles = StyleSheet.create({
  bodyText: {
    width: 380,
    left: 30,
    top: 90,
    height: 140,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#000000'
  },
  username: {
    position: 'absolute',
    width: 85,
    height: 35,
    left: 68,
    top: 35,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 14,
    color: '#000000'
  },
  date: {
    position: 'absolute',
    width: 160,
    height: 20,
    left: 68,
    top: 55,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 11,
    color: 'rgba(0, 0, 0, 0.47)'
  },
  question_two: {
    width: 370,
    height: 275,
    left: 32,
    top: 0,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000'
  },
  likeCount: {
    width: 20,
    height: 12,
    left: 130,
    top: -42,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 15,
    color: 'rgba(45, 176, 42, 0.61)'
},
unlikeCount: {
    width: 20,
    height: 12,
    left: 68,
    top: -14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 15,
    color: '#F8121F'
},
commentCount: {
    width: 20,
    height: 13,
    left: 190,
    top: -72,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 15,
    color: 'rgba(18, 15, 15, 0.64)'
},
unlikeCountIcon:{
    width: 21,
    height: 17.65,
    left: 35
},
likeCountIcon: {
    width: 21,
    height: 17.65,
    left: 95,
    top: -28
},
commentCountIcon: {
    width: 23,
    height: 17.65,
    left: 155,
    top: -60
},
reactionText: {
  width: 20,
  height: 22,
  left: 52,
  top: -55,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 15,
  lineHeight: 15,
},
reactionIcon: {
  width: 25,
  height: 25,
  left: 20,
  top: -35
},
replyUserName: {
  position: 'absolute',
  width: 105,
  height: 18,
  left: 65,
  top: 545,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 14,
  lineHeight: 14,
  alignItems: 'flex-end',
  textAlign: "center",
  color: '#000000'
},
replyPoint: {
  position: 'absolute',
  width: 6,
  height: 21,
  left: 52,
  top: 540,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 18,
  lineHeight: 21
},
optionButton: {
  position: 'absolute',
  width: 35,
  height: 25,
  left: 360,
  top: 35,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 22,
  lineHeight: 21,
  color: 'rgba(65, 131, 215, 1)'
},
avatarView: {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: 40,
  height: 40,
  left: 16,
  borderRadius: 50,
  top: 33,
  backgroundColor: '#DAD5F8'
},
avatarText: {
  position: 'absolute',
  width: 24,
  height: 24,
  left: 13,
  top: 7,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: 20,
  lineHeight: 24,
  color: 'green'
},
replyAvatarView: {
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  width: 40,
  height: 40,
  left: 6,
  borderRadius: 50,
  top: 540,
  backgroundColor: 'rgba(45, 176, 42, 0.76)'
},
replyAvatarText: {
  fontWeight: 'bold',
  fontSize: 18,
  color: '#FFFFFF'
},
replyComment: {
  position: 'absolute',
  width: 340,
  height: 103,
  left: 62,
  top: 500,
  fontSize: 12.5,
  lineHeight: 14
},
replyUnlikeCount: {
  position: 'absolute',
  width: 22,
  height: 12,
  left: 252,
  top: 648,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 13,
  lineHeight: 13,
  color: '#F8121F'
},
replyLikeCount: {
  position: 'absolute',
  width: 22,
  height: 12,
  left: 302,
  top: 648,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 13,
  lineHeight: 13,
  color: 'rgba(45, 176, 42, 0.61)'
},
replyUnlikeCountIcon: {
  position: 'absolute',
  width: 18,
  height: 14,
  left: 230,
  top: 645
},
replyLikeCountIcon: {
  position: 'absolute',
  width: 18,
  height: 14,
  left: 280,
  top: 645
},
likesUnlikes: {
  top: 5
}
});


export default Detail;