import React from 'react';
import {PostType} from '../../../types/types';

const Post: React.FC<PostType> = ({id, title, body}) => {
  return (
    <div>
      <h4>{title}</h4>
      <h6>{body}</h6>
    </div>
  );
};

export default Post;