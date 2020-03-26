import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { useQuery } from '@apollo/react-hooks'
import {gql} from 'apollo-boost';

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
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

const Detail = ({route}) => {
    const {postId} = route.params;

    const {
        data
      } = useQuery(FETCH_POST_QUERY, {
        variables: {
          postId
        }
      });

      const {
        body,
        username,
        likeCount, 
        unlikeCount, 
        commentCount, 
      } = data.getPost;

        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
}


export default Detail;