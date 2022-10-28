<template>
  <div class="update-container">
    <div class="header">
      <Button @click="beforeSave" type="primary" size="small">{{ id ? '更新' : '保存'  }}</Button>
    </div>
    <article class="editor markdown-body">
      <textarea
        ref="mytextarea"
        class="input"
        :value="input.content"
        @input="update"
        @keydown="tabFunc"
      ></textarea>
      <div v-highlight class="output" v-html="output"></div>
    </article>
    <Dialog title="文章信息" :visible.sync="dialogTableVisible">
      <Form :rules="rules" ref="formRef" :model="input" label-width="80px">
        <FormItem prop="title" label="标题">
          <Input v-model="input.title"></Input>
        </FormItem>
        <FormItem prop="desc" label="简介">
          <Input type="textarea" v-model="input.desc"></Input>
        </FormItem>
      </Form>
      <template #footer>
        <Button @click="save">确认</Button>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { ref, computed } from 'vue'
import { Button, Message, Form, Input, FormItem, Dialog } from 'element-ui';
import { useRoute } from '@/utils/vueApi';
import { getOneBlog, saveOneBlog } from '@/api/blog';

const dialogTableVisible = ref(false);

const input = ref({
  content: '# 内容',
  title: '',
  desc: ''
});

const output = computed(() => marked(input.value.content))

const id = ref(useRoute().params.id);

async function getBolgDetail() {
  const { data, error } = await getOneBlog(id.value);
  if (!error && data) {
    input.value = data;
  }
}

if (id.value !== undefined && id.value !== null) {
  getBolgDetail();
}

const update = debounce((e) => {
  input.value.content = e.target.value
}, 100)

function beforeSave() {
  dialogTableVisible.value = true;
}

const rules = {
  title: [
    { required: true, trigger: ['blur', 'change'] }
  ],
  desc: [
    { required: true, trigger: ['blur', 'change'] }
  ]
}
const formRef = ref(null) as any;
function validate() {
  return new Promise<void>((resolve, reject) => {
    formRef.value.validate((valid: boolean) => {
      if (valid) resolve();
      reject();
    });
  })
}

async function save() {
  await validate();
  const { error, data } = await saveOneBlog({ id: id.value, ...input.value });
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
  border-top: 1px solid gainsboro;
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