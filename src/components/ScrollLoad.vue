<template>
  <div
    ref="scrollContent"
    @scroll="scrollM"
    class="scroll-load"
  >
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
import { ref } from 'vue';
import { debounce } from 'lodash-es';

interface Props {
  loadOver: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loadOver: false,
});

const emit = defineEmits(['load'])

const scrollContent: any = ref(null);

const scrollM = debounce(() => {
  const scrollTop = scrollContent.value.scrollTop;
  const clientHight = scrollContent.value.clientHeight;
  const scrollHeight = scrollContent.value.scrollHeight;
  if (scrollHeight - scrollTop - clientHight < 50 && !props.loadOver) {
    emit('load');
  }
}, 500);
</script>

<style lang="scss" scoped>
.scroll-load {
  overflow-y: auto;
  height: 100%;
  .loaded {
    height: 50px;
    text-align: center;
    color: grey;
  }
}

</style>
