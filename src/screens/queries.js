import gql from 'graphql-tag';


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