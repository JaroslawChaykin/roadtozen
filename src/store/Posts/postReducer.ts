import {
  AddPostActionType,
  AddPostsActionType,
  DeletePostActionType,
  PostsActionsTypes,
  PostType
} from '../../types/types';
import {AppStateType} from '../store';
import {PostAPI} from '../../API/PostAPI';
import {ThunkAction} from 'redux-thunk';

export const ADD_POST = 'POSTS/ADD_POST';
export const ADD_POSTS = 'POSTS/ADD_POSTS';
export const DELETE_POST = 'POSTS/DELETE_POST';

const initialState = {
  posts: [
    {id: 123211, title: 'Hello world', body: 'lorem ipsum'},
    {id: 42143456, title: 'Hello world 2', body: 'lorem ipsum 2'},
    {id: 13213213, title: 'Hello world 3', body: 'lorem ipsum 3'},
    {id: 4635235, title: 'Hello world 4', body: 'lorem ipsum 4'},
    {id: 626265, title: 'Hello world 5', body: 'lorem ipsum 5'},
  ] as Array<PostType>
};

type PostsType = typeof initialState

export const postReducer = (state = initialState, action: PostsActionsTypes): PostsType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      };
    case ADD_POSTS:
      return {
        ...state,
        posts: [
          ...state.posts,
          ...action.payload
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

// Actions
export const addPost = (post: PostType): AddPostActionType => ({type: ADD_POST, payload: post});
export const deletePost = (postID: number): DeletePostActionType => ({type: DELETE_POST, payload: postID});
const _addPosts = (posts: Array<PostType>): AddPostsActionType => ({type: ADD_POSTS, payload: posts});

// Thunk Actions

export const getPosts: any = (): ThunkAction<Promise<void>, any, unknown, PostsActionsTypes> => {
  return async (dispatch) => {
    const data = await PostAPI.getPosts()
    dispatch(_addPosts(data))
  }
}

// Selectors

export const allPosts = (state: AppStateType) => state.posts.posts