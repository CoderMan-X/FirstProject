<template>
  <div id="main-tab-bar">
    <div id="tabbar">
      <div class="tabbaritem">
        <img src="~assets/img/all.png" alt="" />
        <div>首页</div>
      </div>
      <div class="tabbaritem">
        <img src="~assets/img/classify.png" alt="" />
        <div>分类</div>
      </div>
      <div class="tabbaritem">
        <img src="~assets/img/shopping.png" alt="" />
        <div>购物车</div>
      </div>
      <div class="tabbaritem">
        <img src="~assets/img/my.png" alt="" />
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTabBar",
};
</script>

<style scoped>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0px 5px 50px rgba(100, 100, 100, 0.5);
}

.tabbaritem {
  flex: 1;
  text-align: center;
  height: 58px;
  font-size: 14px;
}

.tabbaritem img {
  width: 26px;
  height: 26px;
  margin-top: 6px;
  vertical-align: middle;
  margin-bottom: 1px;
}
</style>