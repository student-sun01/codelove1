import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from "element-ui";
// import { Row, Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false
Vue.use(ElementUI);
//  Vue.use(Row);
//  Vue.use(Button);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
