import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { useQuery } from '@apollo/react-hooks'
import { FETCH_POST_QUERY } from './queries';

const Detail = ({route}) => {
    const {postId} = route.params;

    const {
        data,
        loading,
        error
      } = useQuery(FETCH_POST_QUERY, {
        variables: {
          postId
        }
      });

      if (loading){
        return <Text>Loading...</Text>
      }

      if (error) {
        return <Text>Error occured</Text>
      }

      const {
        body
      } = data.getPost;

        return (
            <View>
                <Text>{body}</Text>
            </View>
        )
}


export default Detail;