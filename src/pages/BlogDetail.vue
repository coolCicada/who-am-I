<template>
  <div class="markdown-body">
    <h1 style="text-align: center;">{{ model.title }}</h1>
    <div v-highlight class="output" v-html="output"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { marked } from 'marked'
import { getOneBlog } from '@/api/blog';
import { useRoute } from '@/utils/vueApi';
const id = ref(useRoute().params.id);

const model = ref({ content: '' }) as any;

const output = computed(() => marked(model.value.content))

async function getBolgDetail() {
  const { data, error } = await getOneBlog(id.value);
  if (!error && data) {
    model.value = data;
  }
}

getBolgDetail();

</script>

<style scoped lang="scss">
.markdown-body {
  box-sizing: border-box;
  padding: 25px;
}
@media screen and (max-width:500px) {
    .markdown-body {
      width: 100%;
    }
}

@media screen and (min-width:500px) {
    .markdown-body {
      width: 750px;
      margin: 0 auto;
    }
}
</style>
