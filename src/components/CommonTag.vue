<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },

  methods: {
    ...mapMutations(["closeTag"]),
    changeMenu(item) {
      // 点击tag跳转的功能
      //   console.log(item, "#####");
      this.$router.push({ name: item.name });
    },
    handleClose(item, index) {
      // 点击tag删除的功能

      // 调用store中的mutation
      this.closeTag(item);
      const length = this.tags.length;
      //删除之后的跳转逻辑
      // 如果删除的不是当前路由tag 直接return
      if (item.name !== this.$route.name) {
        return;
      }
      //如果删除的是最后一项,路由跳转到前面一位
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>



<style lang="less" scoped>
.tabs{
    margin: 20px;
   .el-tag{
    margin-right: 15px;
    cursor: pointer;
   }
}
</style>
