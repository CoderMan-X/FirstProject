<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="centre"><slot name="centre"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 2px rgba(100, 100, 100, 0.5);
    
  }
  .left, .right{
    width: 60px;
  }
  .centre{
    flex:1;
  }
</style>