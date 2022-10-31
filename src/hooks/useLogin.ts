import { ref } from 'vue';
import { infoApi } from '@/api/login';

export default function useLoginStatus() {
  const isLogin = ref(false);

  async function getInfo() {
    const { error, data } = await infoApi({});
    if (!error && data && data.userType) {
      isLogin.value = true;
    }
  }

  function changeLoginStatus(loginStatus: boolean) {
    isLogin.value = loginStatus
  }

  getInfo();

  return { isLogin, changeLoginStatus };
}