<template>
  <div id="app">
    <my-header />
    <section>
      <router-view></router-view>
    </section>

  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
export default {
  components: { MyHeader },
  data(){
    return {
      nav:['全部','精华','分享','问答','招聘','客户端测试']
    }
  }
};
</script>

<style lang="scss" scoped>
section{
  width: 60%;
  margin: 8rem auto 0 auto;
  max-width: 140rem;
  min-height: 60rem;
  
}
</style>