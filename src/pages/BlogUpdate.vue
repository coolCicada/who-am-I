<template>
  <div class="update-container">
    <div class="header">
      <Button @click="save" type="primary" size="small">{{ id ? '更新' : '保存'  }}</Button>
    </div>
    <article class="editor markdown-body">
      <textarea
        ref="mytextarea"
        class="input"
        :value="input"
        @input="update"
        @keydown="tabFunc"
      ></textarea>
      <div v-highlight class="output" v-html="output"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'
import { Button, Message } from 'element-ui';
import { useRoute } from '@/utils/vueApi';
import { getOneBlog, saveOneBlog } from '@/api/blog';

const input = ref('# 第一部分')

const output = computed(() => marked(input.value))

const id = ref(useRoute().params.id);

async function getBolgDetail() {
  const { data, error } = await getOneBlog(id.value);
  if (!error && data) {
    input.value = data.content;
  }
}

if (id.value !== undefined && id.value !== null) {
  getBolgDetail();
}

const update = debounce((e) => {
  input.value = e.target.value
}, 100)

async function save() {
  const { error, data } = await saveOneBlog({ content: input.value });
  if (!error && data) {
    Message({ type: 'success', message: '保存成功' });
  }
}

const mytextarea = ref(null) as any;

function tabFunc(e: any) {
  const dom = e.target;
  if(e.keyCode == 9) {
    e.preventDefault();
    const startPos = dom.selectionStart;
    const endPos = dom.selectionEnd;
    if (startPos === undefined || endPos === undefined) return
    const  txt = dom.value;
    const  result = txt.substring(0, startPos) + '  ' + txt.substring(endPos)
    dom.value = result;
    dom.focus();
    dom.selectionStart = startPos + '  '.length;
    dom.selectionEnd = startPos + '  '.length;
  }
}
</script>

<style scoped lang="scss">
.update-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    flex-shrink: 0;
    height: 49px;
    background-color:aliceblue;
    border-bottom: 1px solid #ccc;
  }
}
.editor {
  flex: 1;
  display: flex;
  overflow-y: auto;
}

.input,
.output {
  overflow-y: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>