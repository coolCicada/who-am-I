<template>
  <div class="main-container">
    <el-button @click="add" style="position: fixed; bottom: 60px; right: 10px; z-index: 999;" type="success" icon="el-icon-plus" circle></el-button>
    <el-button @click="toFirstPage" style="position: fixed; bottom: 10px; right: 10px; z-index: 999;" type="success" icon="el-icon-s-home" circle></el-button>
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
    function add() {
      router.push({ name: 'BlogAdd' })
    }

    function toFirstPage() {
      router.push({ name: 'Main' })
    }

    return { keepList, add, toFirstPage };
  }
}
</script>

<style lang="scss">
body, html, ul {
  margin: 0;
  padding: 0;
}

body, html {
  height: 100vh;
  overflow: auto;
}
</style>
