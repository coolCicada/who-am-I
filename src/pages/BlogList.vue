<template>
  <div class="blog-list">
    <ScrollLoad @load="load" :load-over="loadOver">
      <div
        v-for="item in list"
        :key="item.id"
        @click="toDetail(item.id)"
        class="article"
      > 
        <Button
          style="position: absolute; right: 0; bottom: 0;"
          type="text"
          @click="toEdit(item.id)"
        >
          编辑
        </Button>
        <div class="title">{{ item.title ? item.title : '省略' }}</div>
        <div class="content">
          {{ item.desc }}
        </div>
      </div>
    </ScrollLoad>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from 'element-ui';
import { getBlogList } from '@/api/blog';
import ScrollLoad from '@/components/ScrollLoad.vue';
import { useRouter } from '@/utils/vueApi';

const router = useRouter();

let list = ref([]) as any;

let total = 0;
let pageNum = 1;
let pageSize = 10;

async function getList() {
  const { data, error } = await getBlogList({ pageNum, pageSize });
  if(!error && data) {
    pageNum += 1;
    total = data.total;
    list.value.push(...data.list);
  }
}

getList();

let loadOver = ref(false);

async function load() {
  if (list.value.length >= total) {
    loadOver.value = true;
    return;
  }
  await getList();
}

function toDetail(id: string) {
  router.push({
    name: 'BlogDetail',
    params: {
      id,
    }
  })
}

function toEdit(id: string) {
  router.push({
    name: 'BlogUpdate',
    params: {
      id,
    }
  });
}
</script>

<style lang="scss" scoped>
.blog-list {
  height: 100vh;
  .article {
    position: relative;
    border-bottom: 1px solid gainsboro;
    margin: 20px auto;
    box-sizing: border-box;
    padding: 20px;
    .title {
      font-size: 2em;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width:500px) {
    .article {
      width: 100%;
    }
  }

  @media screen and (min-width:500px) {
    .article {
      max-width: 800px;
    }
  }
}
</style>