<template>
  <div class="scroll-load">
    <slot></slot>
    <div
      v-if="loadOver"
      class="loaded"
    >
      <span>加载完毕</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from 'lodash-es';

interface Props {
  loadOver: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loadOver: false,
});

const emit = defineEmits(['load'])

document.body.addEventListener('scroll', debounce(({ target }) => {
  const scrollTop = target.scrollTop;
  const clientHight = target.clientHeight;
  const scrollHeight = target.scrollHeight;
  console.log(scrollTop, clientHight, scrollHeight)
  if (scrollHeight - scrollTop - clientHight < 300 && !props.loadOver) {
    emit('load');
  }
}, 500), true);

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
