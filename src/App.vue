<template>
  <div id="app">
    <div class="title"></div>
    <div class="main">
      <div class="name">
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: white;
}
body {
  min-height: 500px;
}
#app {
  box-sizing: border-box;
  padding-bottom: 200px;
  height: 100%;
  position: relative;
}
.main {
  width: 100%;
  height: 100%;
  position: relative;
  
  .name {
    width: 200px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    line-height: 100px;
    font-size: 5em;
    text-align: center;
  }
}
.footer {
  height: 200px;
  position: absolute;
  bottom: 0;
  background: gainsboro;
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
</style>
