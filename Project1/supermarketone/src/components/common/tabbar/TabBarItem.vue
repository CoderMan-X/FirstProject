<template>
  <div class="tab-bar-item" @click="activeClick">
    <div v-if="isActive"><slot name="item-img"></slot></div>
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
    number:String
  },
  data() {
    return {
      commonActiveObj
    }
  },
  computed: {
    isActive(){
      return this.commonActiveObj.number==this.number
    }
  },
  methods: {
    activeClick(){
      this.commonActiveObj.number=this.number
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 58px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 26px;
  height: 26px;
  margin-top: 6px;
  vertical-align: middle;
  margin-bottom: 1px;
}

.active{
  color: #f92f2d;
}
</style>