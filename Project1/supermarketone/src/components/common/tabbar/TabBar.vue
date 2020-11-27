<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f0ebeb;
  position: fixed;
  right: 0px;
  left: 0px;
  bottom: 1px;
  box-shadow: 0px 2px 10px rgba(100, 100, 100, 0.5);
}
</style>