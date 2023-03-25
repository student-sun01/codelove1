export default {
  state: {
    isCollapse: false, //控制的菜单的展开还是收起
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ],
  },
  mutations: {
    collapseMenu(state) {
      // 修改菜单的展开收起的方法
      state.isCollapse = !state.isCollapse;
    },
    // 更新面包屑数据
    selectMenu(state, val) {
      // console.log(val);
      // 判断添加的数据是否为首页
      if (val.name !== "home") {
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        if (index === -1) {
          state.tabsList.push(val);
        }
      }
    },
  },
};
