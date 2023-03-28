import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
// import { Row, Button } from "element-ui";
import "./api/mock";
import Cookie from "js-cookie";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
//  Vue.use(Row);
//  Vue.use(Button);
// 添加全局导航前置守卫
router.beforeEach((to, from, next) => {
  const token = Cookie.get("token");
  // 判断token是否存在
  // 1.token不存在的时候,表示用户还没有登录
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    // 2.token存在  说明用户登录 想跳登录页直接跳转到首页
    next({ name: "home" });
  } else {
    // 3.token存在 跳转其他页面 直接放行
    next();
  }
});

new Vue({
  render: (h) => h(App),
  router,
  store,
  created(){
    store.commit('addMenu',router)
  }
}).$mount("#app");
