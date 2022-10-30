<template>
  <div class="main-container">
    <div class="buttons">
      <Button @click="login" type="success" icon="el-icon-user-solid" circle></Button>
      <Button v-if="isLogin" @click="add" type="success" icon="el-icon-plus" circle></Button>
      <Button @click="toFirstPage" type="success" icon="el-icon-s-home" circle></Button>
    </div>
    <KeepAlive :include="keepList">
      <router-view v-if="$route.meta && $route.meta.keepAlive"></router-view>
    </KeepAlive>
    <router-view :key="$route.fullPath" v-if="!$route.meta || !$route.meta.keepAlive"></router-view>
    <Dialog title="登录信息" :visible.sync="dialogTableVisible">
      <Form :rules="rules" ref="formRef" :model="input" label-width="80px">
        <FormItem prop="username" label="姓名">
          <Input v-model="input.username"></Input>
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
import { Button, Form, FormItem, Input, Dialog, Message } from 'element-ui';
import { useRouter } from '@/utils/vueApi';
import { loginApi } from '@/api/login';
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
      username: '',
      password: '',
    });
    const rules = {
      username: [
        { required: true, message: '昵称不能为空', trigger: ['blur', 'change'] }
      ],
      password: [
        { required: true, message: '密码不能为空', trigger: ['blur', 'change'] }
      ]
    }
    function login() {
      dialogTableVisible.value = true;
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
    
    let isLogin = ref(false);
    async function save() {
      await await validate();
      const { error, data } = await loginApi({ ...input.value });
      if (!error && data) {
        Message({ type: 'success', message: '登录成功' });
        dialogTableVisible.value = false;
        localStorage.setItem("token", data.token);
        isLogin.value = true;
      } else {
        Message({ type: 'error', message: error.msg });
      }
    }

    return { keepList, add, toFirstPage, login, dialogTableVisible, input, rules, save, formRef, isLogin };
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

.buttons {
  .el-button {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 999;
}
</style>
