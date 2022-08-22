import axios from "../../plugins/axios"

// 文章列表模块
export default{
  state: () => ({
    list: []
  }),
  mutations: {
    getPosts(state,list){
      state.list = list
    }
  
  },
  actions:{
    async getPosts({commit} , tab){
      const list = await axios.get(`/topics?page=1&limit=20&tab=${tab}`)
      console.log(list);
      commit('getPosts',list.data)
    }
  }
}