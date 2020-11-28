<template>
  <div>
    <nav-bar class="nav-bar"><div slot="centre">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    });
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(248, 198, 104);
  color: white;
}
</style>