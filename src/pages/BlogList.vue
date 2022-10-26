<template>
  <div class="blog-list">
    <ScrollLoad @load="load" :load-over="loadOver"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getBlogList } from '@/api/blog';
import ScrollLoad from '@/components/ScrollLoad.vue';

let list = ref([]);

async function getList() {
  const { data, error } = await getBlogList();
  if(!error && data) {
    list.value = data;
  }
}

getList();

const loadOver = ref(false);

function load() {
  console.log('load!');
}
</script>

<style lang="scss">
.blog-list {
  height: 100vh;
}
</style>