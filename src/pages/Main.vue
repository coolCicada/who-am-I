<template>
  <div id="app">
    <div class="header"></div>
    <div class="main">
      <div class="name">
        <img src="@/assets/WechatIMG125.jpeg" alt="">
      </div>
      <div class="info">
        <h2 class="title">社交主页</h2>
        <ul>
          <li>
            <a target="_blank" href="https://juejin.cn/user/835284566556014">掘金</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/coolCicada">github</a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.cn/u/lcls/">leetcode</a>
          </li>
          <li>
            <a target="_blank" href="http://www.lssl.work/">知识共建网站</a>
          </li>
          <li>
            <a target="_blank" href="https://www.npmjs.com/~coolcicada">npm</a>
          </li>
        </ul>
        <h2 class="title">
          文章列表
        </h2>
        <BlogList />
      </div>
    </div>
    <Footer style="position: absolute; bottom: 0;"/>
  </div>
</template>

<script setup lang="ts">
import { onActivated } from 'vue';
import BlogList from '@/pages/BlogList.vue'
import Footer from '@/components/Footer.vue';

onActivated(() => {
  document.body.scrollTop = Number(localStorage.getItem('scrollTop'));
})

</script>

<style lang="scss" scoped>
html, body {
  margin: 0;
  padding: 0;
  background: white;
}

#app {
  background-color: ghostwhite;
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 200px;
  position: relative;
  .header {
    height: 20px;
    margin-bottom: 25px;
  }
  .main {
    width: 100%;
    position: relative;
    
    .name {
      height: 300px;
      width: 300px;
      margin: auto;
      border-radius: 50%;
      box-sizing: border-box;
      padding: 10px 0;
      background-color:antiquewhite;

      img {
        display: block;
        height: 280px;
        margin: auto;
        border-radius: 50%;
      }
    }

    .info {
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
          width: 150px;
          height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 20px;
          text-align: center;

          a {
            text-decoration: none;
          }
        }
      }
    }
  }
}

</style>
