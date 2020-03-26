import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import styled from 'styled-components/native';

import ListItem from './ListItem';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    FlatList,
    ActivityIndicator
  } from 'react-native';
  

  function Home() {
    const [posts, setPosts] = useState([]);
    const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  useEffect(() => {
  if (data) {
  setPosts(data.getPosts);
      }
    }, [data]);

    if (loading) {
      return <ActivityIndicator size="large" color="#2A86FF" />
    } else {
  return (
    <Container>
      {posts && ( <FlatList 
    data={data.getPosts}
    renderItem={({item}) => <ListItem item={item}/>}
    keyExtractor={item => item.id}
  />)}
  </Container>
  )
}
  }

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
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
`

const Card = styled.View`
  width: 348px;
  height: 120px;
  left: 11px;
`;

const Body = styled.Text`
  width: 283px;
  height: 67px;
  left: 11px;
  font-size: 14px;
  line-height: 16px;
`;

const CreatedBy = styled.Text`
  width: 64px;
  height: 11px;
  left: 295px;
  font-size: 9px;
  line-height: 11px;
`;

const Container = styled.View`
  flex: 1;
`;

export default Home;