import request from "./base";
import { Res } from './types';

function getOtherPageListApi(params: any): Promise<Res> {
  return request.get('/other_page', { params })
}

export {
  getOtherPageListApi,
}