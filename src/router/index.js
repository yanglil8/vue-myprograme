import Vue from "vue";
import VueRouter from "vue-router";
import MyHome from "../views/MyHome.vue";
import PostList from "../views/PostList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "myhome",
    component: MyHome,
    children: [
      {
        path:'',
        component:PostList

      },
      {
        path: ":tab",
        component: PostList,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
