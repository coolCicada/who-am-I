<template>
  <div>
    <el-button @click="add" style="position: fixed; top: 10px; right: 10px; z-index: 999;" type="success" icon="el-icon-plus" circle></el-button>
    <KeepAlive :include="keepList">
      <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </KeepAlive>
    <router-view :key="$route.fullPath" v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
  </div>
</template>

<script lang="ts">
import { Button } from 'element-ui';
import { useRouter } from '@/utils/vueApi';

export default {
  components: {
    [Button.name]: Button,
  },
  setup() {
    const keepList: string[] = ['Main'];
    const router = useRouter();
    const add = () => {
      router.push({ name: 'BlogAdd' })
    }
    return { keepList, add };
  }
}
</script>

<style>
body, html, ul {
  margin: 0;
  padding: 0;
}

body, html {
  height: 100vh;
  overflow: auto;
}
</style>
