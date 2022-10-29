<template>
  <div class="blog-list">
    <div class="scroll-container">
      <ScrollLoad
        @load="load" 
        :load-over="loadOver"
        :loading="loading"
      >
        <div
          v-for="item in list"
          :key="item.id"
          class="article"
        >
          <div @click="toDetail(item.id)">
            <div class="title">{{ item.title ? item.title : '省略' }}</div>
            <div class="content">
              {{ item.desc }}
            </div>
          </div>
          <div class="operators">
            <Button
              type="text"
              @click="toEdit(item.id)"
            >
              编辑
            </Button>
          </div>
        </div>
      </ScrollLoad>
    </div>
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
let loading = ref(false);
let total = 0;
let pageNum = 1;
let pageSize = 10;

async function getList() {
  loading.value = true;
  try {
    const { data, error } = await getBlogList({ pageNum, pageSize });
    if(!error && data) {
      pageNum += 1;
      total = data.total;
      list.value.push(...data.list);
      if (list.value.length >= total) {
        loadOver.value = true;
      }
    }
  } finally {
    loading.value = false;
  }
}

getList();

let loadOver = ref(false);

async function load() {
  if(loadOver.value || loading.value) return;
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
  display: flex;
  .scroll-container {
    flex: 1;
    .article {
      position: relative;
      margin: 20px auto;
      box-sizing: border-box;
      .title {
        font-size: 2em;
        margin-bottom: 20px;
      }

      .operators {
        height: 20;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
  
  @media screen and (max-width:500px) {
    .article {
      width: 95%;
      border: 1px solid ghostwhite;
      border-radius: 25px;
      padding: 10px 15px;
      background-color: white;
    }
  }

  @media screen and (min-width:500px) {
    .article {
      max-width: 800px;
      border-top: 1px solid gainsboro;
      padding: 20px;
    }
  }
}
</style>