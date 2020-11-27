<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-img-click" src="~assets/img/homeClick.png" alt="" />
        <img slot="item-img" src="~assets/img/home.png" alt="" />
        <div slot="item-context">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/categories">
        <img slot="item-img-click" src="~assets/img/classifyClick.png" alt="" />
        <img slot="item-img" src="~assets/img/classify.png" alt="" />
        <div slot="item-context">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <img slot="item-img-click" src="~assets/img/shoppingClick.png" alt="" />
        <img slot="item-img" src="~assets/img/shopping.png" alt="" />
        <div slot="item-context">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img slot="item-img-click" src="~assets/img/myClick.png" alt="" />
        <img slot="item-img" src="~assets/img/my.png" alt="" />
        <div slot="item-context">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from '../common/tabbar/TabBarItem.vue';

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>

</style>