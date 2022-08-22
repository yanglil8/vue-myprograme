<template>
  <header class="header">
    <h1>
      <router-link to="/all"><img src="../assets/logo.png" alt="" /></router-link>
    </h1>
    <nav>
      <el-menu
        :default-active="activeIndex1"
        class="el-menu-demo"
        mode="horizontal"
      
      >
        <el-menu-item index="1"
          ><router-link to="/all">首页</router-link></el-menu-item
        >
        <el-menu-item index="2"
          ><router-link to="/message">未读消息</router-link></el-menu-item
        >
        <el-menu-item index="3"
          ><router-link to="/about">关于</router-link></el-menu-item
        >
   >
        <el-menu-item index="4"
          ><router-link to="/">退出</router-link></el-menu-item
        >
      </el-menu>
    </nav>

    <el-button type="primary"
      ><router-link to="/login" class="denglu">登录</router-link></el-button
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex1: "1",
      activeIndex2: "1",
    };
  },

};
</script>

<style lang="scss" scoped>
.header {
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 8%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  h1 {
    height: 5rem;
    display: flex;
    align-items: center;
    img {
      height: 4rem;
    }
  }
  nav {
    display: flex;
    flex: 1 1 5rem;
    margin-left: 4rem;
  }
  .denglu {
    color: #fff;
  }
}
</style> 