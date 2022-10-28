<template>
  <div>
    <KeepAlive :include="keepList">
      <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </KeepAlive>
    <router-view v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const keepList: string[] = ['Main'];
    return { keepList };
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
