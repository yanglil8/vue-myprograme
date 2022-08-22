<template>
  <div class="post-item">
    <div class="time">
      <span>{{ author.loginname }}</span>
      <span>{{ last_reply_at | moment("from" , "now")}}</span>
    </div>
    <router-link to=""><h3>{{ title }}</h3></router-link> 
    <p v-html="content"></p>
    <div class="count">
      <span><i class="el-icon-view"></i>{{transformVistCount}}</span>
      <span><i class="el-icon-chat-round"></i>{{ reply_count }}</span>
    </div>
  </div>
</template>

<script>  
export default {
  props: [  
    "author",
    "reply_count",
    "visit_count",
    "title",
    "last_reply_at",
    "content",
  ],
  computed:{
    transformVistCount:function(){
      if(this.visit_count >= 10000){
        return (this.visit_count/10000).toFixed(2) + 'w'
      }else{
        return this.visit_count
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.post-item {
  width: 98%;
  margin: 1rem auto;
  border-bottom: 0.1rem solid #ccc;
  padding-bottom: 1rem;
  h3 {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: #333;
  }
  p{
    height: 1.65rem;
    width: 30%;
    line-height: 1.65rem;
    margin-bottom: 0.8rem;
    overflow: hidden;
    position: relative;
    padding-right: 1rem;
    text-align: justify;
    &::before{
      content: "...";
      position: absolute;
      right: 0;
      bottom: 0;
    }
    &::after{
      content: "";
      background: #fff;
      width: 1rem;
      height: 1rem;
      position: absolute;
      display: inline;
      right: 0;
      margin-top: 0.5rem;

    }
  }
  .count {
    span {
      padding-right: 1.2rem;
      color: rgb(97, 96, 96);
    }
    i {
      padding: 0.3rem 0.4rem;
    }
  }
  .time {
    display: flex;
    span {
      padding: 0.5rem;
      line-height: 0.5rem;
      color: rgb(134, 134, 134);
      &:first-child {
        border-right: 0.1rem solid #e1e1e1;
        padding-left: 0;
        color: rgb(97, 96, 96);
      }
    }
  }
}
</style>