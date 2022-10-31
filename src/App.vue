<template>
  <div class="main-container">
    <OperatorButton />
    <KeepAlive :include="keepList">
      <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </KeepAlive>
    <router-view :key="$route.fullPath" v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
  </div>
</template>

<script lang="ts">
import OperatorButton from '@/components/OperatorButton.vue';

export default {
  components: {
    OperatorButton,
  },
  setup() {
    const keepList: string[] = ['Main'];
    return { keepList };
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
