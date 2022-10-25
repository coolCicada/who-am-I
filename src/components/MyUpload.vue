<template>
  <Upload
    class="avatar-uploader"
    action="#"
    :show-file-list="false"
    :http-request="httpRequestFn">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </Upload>
</template>

<script setup lang="ts">
import { Upload } from 'element-ui';
import { ref } from 'vue';
import cos from '../api/upload';

const imageUrl = ref('');

function httpRequestFn(res: any) {
  console.log(res)
  cos.putObject({
    Bucket: 'sai-1301795958', /* 必须:存储桶 */
    Region: 'ap-beijing', /* 存储桶所在地域，必须字段 */
    Key: res.file.name, /* 必须 :文件名 */
    StorageClass: 'STANDARD', // 上传模式
    Body: res.file, // 上传文件对象
    onProgress: function(progressData: any) { // 进度条
      console.log(JSON.stringify(progressData))
    }
  }, (_: any, data: any) => { // 注意用箭头函数,否则会出现this的指向问题
    if (data) { // 上传成功
      imageUrl.value = `http://${data.Location}`;
    }
  })
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
