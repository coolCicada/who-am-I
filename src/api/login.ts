import request from "./base";
import { Res } from './types';

function loginApi(params: any):Promise<Res> {
  return request.post('/user', params);
}

export {
  loginApi,
};