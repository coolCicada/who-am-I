<template>
  <div class="main-container">
    <Button @click="login" style="position: fixed; bottom: 110px; right: 10px; z-index: 999;" type="success" icon="el-icon-user-solid" circle></Button>
    <Button @click="add" style="position: fixed; bottom: 60px; right: 10px; z-index: 999;" type="success" icon="el-icon-plus" circle></Button>
    <Button @click="toFirstPage" style="position: fixed; bottom: 10px; right: 10px; z-index: 999;" type="success" icon="el-icon-s-home" circle></Button>
    <KeepAlive :include="keepList">
      <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </KeepAlive>
    <router-view :key="$route.fullPath" v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
    <Dialog title="登录信息" :visible.sync="dialogTableVisible">
      <Form :rules="rules" ref="formRef" :model="input" label-width="80px">
        <FormItem prop="name" label="姓名">
          <Input v-model="input.name"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input v-model="input.password"></Input>
        </FormItem>
      </Form>
      <template #footer>
        <Button @click="save">确认</Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Button, Form, FormItem, Input, Dialog } from 'element-ui';
import { useRouter } from '@/utils/vueApi';
import { ref } from 'vue';

export default {
  components: {
    Button,
    FormItem,
    Input,
    Dialog,
    Form,
  },
  setup() {
    const keepList: string[] = ['Main'];
    const router = useRouter();
    function add() {
      router.push({ name: 'BlogAdd' })
    }

    function toFirstPage() {
      router.push({ name: 'Main' })
    }


    let dialogTableVisible = ref(false);
    const input = ref({
      name: '',
      password: '',
    });
    const rules = {
      name: [
        { required: true, message: '昵称不能为空', trigger: ['blur', 'change'] }
      ],
      password: [
        { required: true, message: '密码不能为空', trigger: ['blur', 'change'] }
      ]
    }
    function login() {
      dialogTableVisible.value = true;
    }

    function save() {
      console.log('save')
    }

    return { keepList, add, toFirstPage, login, dialogTableVisible, input, rules, save };
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
