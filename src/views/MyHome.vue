<template>
  <div class="heading">
    <el-row :gutter="20">
      <el-col :span="18"><div class="grid-content bg-purple"><nav>
      <el-tabs v-model="activeIndex" @tab-click="tabClick" >
        <el-tab-pane :key="item.route" v-for="item in tab" :label="item.name" :name="item.route"><post-list v-bind="item"/></el-tab-pane> 
      </el-tabs>
    </nav></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    
  </div>
</template>

<script>
import PostList from './PostList.vue';
export default {
  components: { PostList },
  data() {
    return {
      activeIndex : "/all",
      tab:[
        {
          route:'/all',
          name:'全部'
        },
        {
          route:'/good',
          name:'精华'
        },
        {
          route:'/share',
          name:'分享'
        },
        {
          route:'/ask',
          name:'问答'
        },
        {
          route:'/job',
          name:'招聘'
        },
        {
          route:'/dev',
          name:'客户端测试'
        },
      ]
    };
  },


  

  methods: {
    tabClick(tab) {
      this.$router.push({path:this.activeIndex})
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
