<template>
  <div class="tab-bar-item" :class="{backgroundcolor:isActive}" @click="routerClick">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-click"></slot></div>
    <label :class="{active:isActive}"><slot name="item-context"></slot></label>
  </div>
</template>

<script>
const commonActiveObj = {
  number:1
}
export default {
  name:"TabBarItem",
  props:{
    path:String
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!== -1
    }
  },
  methods: {
    routerClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 57px;
  font-size: 14px;
  color: black;
  border: 3px solid #f0ebeb;
}

.tab-bar-item img {
  width: 25px;
  height: 25px;
  margin-top: 7px;
  vertical-align: middle;
  margin-bottom: 2px;
  
}

.active{
  color: #e65350;
}

.backgroundcolor{
  background-color:rgb(248, 198, 104);
  border:3px solid rgb(247, 175, 41);
}
</style>