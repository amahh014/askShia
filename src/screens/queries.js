import {gql} from 'apollo-boost';


export const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId){
          id
          username
          body
          likeCount
          unlikeCount
          commentCount
      }
  }
`;