<template>
  <div class="scroll-load">
    <slot></slot>
    <div class="loaded">
      <span v-if="loadOver">加载完毕</span>
      <span v-if="loading">加载中...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es';

interface Props {
  loadOver: boolean
  loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loadOver: false,
  loading: false,
});

const emit = defineEmits(['load'])

document.body.addEventListener('scroll', debounce(({ target }) => {
  if (document.body.scrollTop !== 0) {
    console.log('update localStorage', document.body.scrollTop)
    localStorage.setItem('scrollTop', document.body.scrollTop + '');
  }
  const scrollTop = target.scrollTop;
  const clientHight = target.clientHeight;
  const scrollHeight = target.scrollHeight;
  if (scrollHeight - scrollTop - clientHight < 300 && !props.loadOver) {
    emit('load');
  }
}, 200), true);

</script>

<style lang="scss" scoped>
.scroll-load {
  .loaded {
    height: 50px;
    text-align: center;
    color: grey;
  }
}

</style>
