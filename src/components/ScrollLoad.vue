<template>
  <div
    ref="scrollContent"
    @scroll="scrollM"
    class="scroll-load"
  >
    <slot name="content"></slot>
    <div
      v-if="loadOver"
      class="loaded"
    >
      <span>加载完毕</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { throttle } from 'lodash-es';

interface Props {
  loadOver: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loadOver: false,
});

const emit = defineEmits(['load'])

const scrollContent: any = ref(null);

const scrollM = throttle(() => {
  const scrollTop = scrollContent.value.scrollTop;
  const clientHight = scrollContent.value.clientHeight;
  const scrollHeight = scrollContent.value.scrollHeight;
  if (scrollHeight - scrollTop - clientHight < 100 && !props.loadOver) {
    emit('load');
  }
});
</script>

<style lang="scss">
.scroll-load {
  overflow-y: auto;
  height: 100%;
}
</style>
