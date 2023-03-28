<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3>{{ isCollapse ? "后台" : "后台通用管理系统" }}</h3>
      <el-menu-item
        :index="item.name"
        v-for="item in noChildren"
        :key="item.name"
        @click="clickMenu(item)"
      >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.label"
        v-for="item in hasChildren"
        :key="item.label"
      >
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="subItem in item.children"
          :key="subItem.path"
        >
          <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">{{
            subItem.label
          }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      // 当页面路由的路径与跳转的路由路径不相同时才允许跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
      // console.log(item);
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    menuData() {
      // 判断当前数据 如果缓存中没有 就从store中获取
      return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu;
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border-right: 0;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
