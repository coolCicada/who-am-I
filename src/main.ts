import Vue from 'vue'
import App from './App.vue';
import router from './router';
import 'github-markdown-css/github-markdown.css';

Vue.config.productionTip = false

Vue.directive('highlight', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted (el) {
    // 聚焦元素
    if ((window as any).highlightDom) {
      (window as any).highlightDom(el);
    } else {
      window.addEventListener('load', () => {
        (window as any).highlightDom(el);
      });
    }
  },
  update(el) {
    (window as any).highlightDom(el);
  }
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
