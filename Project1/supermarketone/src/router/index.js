import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const Categories = () => import("../views/categories/Categories")
const My = () => import("../views/my/My")
const Shop = () => import("../views/shop/Shop")

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/categories",
    component: Categories,
    meta: {
      title: "分类"
    }
  },
  {
    path: "/my",
    component: My,
    meta: {
      title: "我的"
    }
  },
  {
    path: "/shop",
    component: Shop,
    meta: {
      title: "购物车"
    }
  },
]


const router = new VueRouter({
  routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  //不用matched的话，初始页面中的meta是空值，无法找到对应的title
  //用matched的原因是为了在开始的初始页面中找到title值
  document.title = to.matched[0].meta.title
  // console.log(to);
  // console.log("+++++++++++++++");
  next() 
})

export default router 