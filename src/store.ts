import Vue from 'vue';
import Vuex from 'vuex';
import { infoApi } from '@/api/login';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userType: 0,
    userName: '',
  },
  mutations: {
    setUserType(state, userType) {
      return state.userType = userType;
    },
    setUserName(state, userName) {
      return state.userName = userName;
    }
  },
  actions: {
    async initUserType(context) {
      const { error, data } = await infoApi({});
      if (!error && data && data.userType) {
        context.commit('setUserType', data.userType);
      } else {
        context.commit('setUserType', 0);
      }
    }
  }
});
