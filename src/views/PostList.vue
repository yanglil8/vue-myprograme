<template>
  <div class="postlist">
    <div v-if="PostList.length">
      <post-item v-bind="post" v-for="post in PostList" :key="post.id" />
    </div>
    <el-skeleton v-else :rows="19" animated />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import {mapActions,mapState} from 'vuex'
export default {
  components: { PostItem },
  computed:{
    ...mapState({
      PostList:state => state.PostList.list
    })
  },
  watch:{
    '$route.params.tab':{
      handler(value){
        const tab = value || 'all'
        this.getPosts(tab)
      },
      immediate:true
    }
  },
  methods:{
    ...mapActions(['getPosts'])
  },
// created(){
//   this.$store.dispatch('getPosts',this.$route.params.tab || 'all')
// }
}
</script>

<style>

</style>