import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
  } from 'react-native';
  

  function Home() {
    const [posts, setPosts] = useState([]);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  useEffect(() => {
  if (data) {
  setPosts(data.getPosts);
      }
    }, [data]);

    const { card, h1, h2, footer, h3, h4 } = styles
  return (
      <View>
        <Text>Son Postlar</Text>
       {loading ? (
         <Text>Loading ...</Text>
       ) : (
         <ScrollView>
         <View>
        
          {posts &&
          posts.map((post) => (
            <View style={card}>
            <Text style={h2}>{post.body}</Text>
            <Text style={h3}>created by : {post.username}</Text>
            <View style={footer}>
            <Text style={h3}>likes: {post.likeCount}</Text>
            {/* <Text style={h4}>{post.createdAt}</Text> */}
            </View>
            </View>
          ))}
        
        </View>
        </ScrollView>
       )}
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
  card: {
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: 'blue',
    padding: 25,
    height: 350,
    marginBottom: 20
  },
  h1: {
    fontFamily: '3270Narrow',
    color: '#dbdbdb',
    fontSize: 18
  },
  h2: {
    //fontFamily: '3270Narrow',
    color: '#6a676a',
    marginVertical: 15,
    fontSize: 13,
    letterSpacing: 0.92,
    flexGrow: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  h3: {
    color: '#cfcfcf',
    fontFamily: '3270Narrow',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 0.97
  },
  h4: {
    color: '#cfcfcf',
    fontFamily: '3270Narrow',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 1.17
  }
})

export default Home;