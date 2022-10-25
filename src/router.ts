import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('./pages/Main.vue'/* webpackChunkName: "main" */)},
  { path: '/blogList', component: () => import('./pages/BlogList.vue'/* webpackChunkName: "blog-list" */)},
  { path: '/blogDetail/:id', component: () => import('./pages/BlogDetail.vue'/* webpackChunkName: "blog-detail" */)},
  { path: '/blogUpdate/:id', component: () => import('./pages/BlogUpdate.vue'/* webpackChunkName: "blog-update" */)},
  { path: '*', redirect: { path: '/'}},
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;