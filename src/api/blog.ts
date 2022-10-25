import request from "./base";

interface Res {
  error: any
  data: any
}

function getOneBlog(id: string): Promise<Res>{
  return request.get(`/blog/${id}`);
}

function saveOneBlog(params: any): Promise<Res> {
  return request.post('/blog', params);
}

export {
  getOneBlog,
  saveOneBlog,
}