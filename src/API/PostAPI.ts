import axios from 'axios';
import {PostType} from '../types/types';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const PostAPI = {
  async getPosts() {
    const response = await instance.get<PostType[]>('posts')
    return response.data
  }
}