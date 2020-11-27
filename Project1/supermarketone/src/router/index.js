import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const Home = ()=>import("../views/home/Home")
const Categories = ()=>import("../views/categories/Categories")
const My = ()=>import("../views/my/My")
const Shop = ()=>import("../views/shop/Shop")

const routes = [
  {
    path:"",
    redirect: "/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/categories",
    component:Categories
  },
  {
    path:"/my",
    component:My
  },
  {
    path:"/shop",
    component:Shop
  },
]


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router