import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Icon from 'react-native-vector-icons/Ionicons';
import Profileicon from 'react-native-vector-icons/EvilIcons';

import ListItem from './ListItem';
import {useNavigation} from '@react-navigation/native';


import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
  } from 'react-native';
  

  function Home() {
    const navigation = useNavigation();
    const { loading, data, error } = useQuery(FETCH_POSTS_QUERY);

    if (loading) {
      return <ActivityIndicator size="large" color="#2A86FF" />
    }

    if(error) {
      return <Text>Error occured...</Text>
    }

  return (
    <View>
      <View style={styles.iconsView}>
    <TouchableOpacity style={styles.create} onPress={() => navigation.push('Create Post')}>
      <Icon name="ios-add" size={45} color="black"/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.profile} onPress={() => navigation.push('Profile')}>
      <Profileicon name="user" size={42} color='black'/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.search}>
      <Icon name="md-search" size={30} color='black'/>
    </TouchableOpacity>
    </View>
    <FlatList 
    data={data.getPosts}
    renderItem={({item}) => <ListItem item={item}/>}
    keyExtractor={item => item.id}
  />
  </View>
  )
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
const styles = StyleSheet.create({
  create: {
    width: 37,
    height: 35,
    backgroundColor: 'rgba(196, 196, 196, 0.63)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconsView: {
    flexDirection: 'row',
    left: 227,
    top: 8
  },
  profile: {
    width: 42,
    height: 35,
    backgroundColor: 'rgba(196, 196, 196, 0.63)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 20
  },
  search: {
    width: 37,
    height: 35,
    backgroundColor: 'rgba(196, 196, 196, 0.63)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: 40
  },
})

export default Home;