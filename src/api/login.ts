import request from "./base";
import { Res } from './types';

function loginApi(params: any): Promise<Res> {
  return request.post('/user', params);
}

function infoApi(params: any): Promise<Res> {
  return request.get('/user/info', params);
}

export {
  loginApi,
  infoApi,
};