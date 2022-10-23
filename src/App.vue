<template>
  <div id="app">
    <div class="header"></div>
    <div class="main">
      <div class="name">
        <img src="@/assets/WechatIMG125.jpeg" alt="">
      </div>
      <div class="info">
        <div class="title">社交主页</div>
        <ul>
          <li>
            <a target="_blank" href="https://juejin.cn/user/835284566556014"><img src="@/assets/juejin.png" alt=""></a>
          </li>
          <li>
            <a target="_blank" href="https://leetcode.cn/u/lcls/"><img src="@/assets/liko.png" alt=""></a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/coolCicada"><img src="@/assets/github.png" alt=""></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <a
        class="sign"
        target="_blank"
        href="https://beian.miit.gov.cn/"
      >
          京ICP备19043673号-2
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  background: white;
}

#app {
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 200px;
  height: 100%;
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
        margin: 20px auto;
        text-align: center;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
          list-style: none;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 20px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
  .footer {
    height: 200px;
    position: absolute;
    bottom: 0;
    background: black;
    width: 100%;

    .sign {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      text-align: center;
      font-size: 1em;
      text-decoration: none;
      color: whitesmoke;
    }
  }
}

</style>
