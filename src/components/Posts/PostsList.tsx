import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import {PostType} from '../../types/types';
import {allPosts} from '../../store/Posts/postReducer';

const PostsList = () => {

  const posts = useSelector(allPosts)

  return (
    <div>
      {
        posts.map((post: PostType) => <Post key={post.id} {...post}/>)
      }
    </div>
  );
};

export default PostsList;