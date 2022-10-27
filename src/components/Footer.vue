<template>
  <div class="footer">
    <a
      class="sign"
      target="_blank"
      href="https://beian.miit.gov.cn/"
    >
        京ICP备19043673号-2
    </a>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {
    height: 200px;
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
</style>
