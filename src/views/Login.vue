<template>
  <el-form
    ref="form"
    label-width="70px"
    class="login-container"
    :inline="true"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">系统登录</h3>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" style="margin-left: 105px" @click="submit"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入账号", trigger: "blur" }],
      },
    };
  },
  methods: {
    //登录
    submit() {
      //token
      // const token = Mock.Random.guid();
      // console.log(token);
      // 校验通过
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              // token放入cookie中用于不同页面的通信
              Cookie.set("token", data.data.token);
              // 获取菜单的数据  存入到state中
              // data.data.menu
              this.$store.commit('setMenu',data.data.menu)
              this.$store.commit('addMenu',this.$router)
              // 跳转到首页
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 198px;
  }
}
</style>
