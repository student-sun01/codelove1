import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

const routes = [
  {
    path: "/",
    component: Main,
    redirect:'/home',
    children: [
      { path: "home", component: Home },
      { path: "user", component: User },
      { path: "mall", component: Mall },
      { path: "page1", component: PageOne },
      { path: "page2", component: PageTwo },
    ],
  },
];
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: "history", //没有#的模式
  routes, // (缩写) 相当于 routes: routes
});

export default router;

Vue.use(VueRouter);
