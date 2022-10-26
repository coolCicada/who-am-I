import request from "./base";
import { Res } from './types';

function getBlogList(): Promise<Res> {
  return request.get(`/blog`);
}

function getOneBlog(id: string): Promise<Res>{
  return request.get(`/blog/${id}`);
}

function saveOneBlog(params: any): Promise<Res> {
  return request.post('/blog', params);
}

export {
  getBlogList,
  getOneBlog,
  saveOneBlog,
}