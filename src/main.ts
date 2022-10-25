import Vue from 'vue'
import App from './App.vue';
import router from './router';
import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import 'github-markdown-css/github-markdown.css';

Vue.directive("highlight", function(el){
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block: any) => {
      hljs.highlightBlock(block);
  })
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
