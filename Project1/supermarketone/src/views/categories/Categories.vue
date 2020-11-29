<template>
  <div>
    <div class="div1">
      <ul class="list1" :style="{ left: -left + 'px' }">
        <li v-for="item in banner">
          <img :src="item.image" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";

export default {
  name: "Categories",
  components: {
    NavBar,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      index: 1,
      slideTime: null, //开始轮播图计时器
      oneSlideTime: null, //单张图片滑动计时器
      left: 0,
    };
  },
  mounted() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.banner.push(this.banner[0]);
      this.startSlide(); //进入页面开始调用轮播图
    });
  },
  methods: {
    //开始轮播图
    startSlide() {
      this.slideTime = window.setInterval(() => {
        this.switchPicture();
        this.endSlide(this.slideTime);
        this.thenSlide();
      }, 4000);
    },

    //第二个轮播图,目的是减少误差
    thenSlide() {
      this.slideTime = window.setInterval(() => {
        this.switchPicture();
      }, 4750);
    },

    //单张图片滑动
    switchPicture() {
      this.endSlide(this.oneSlideTime);
      this.oneSlideTime = window.setInterval(() => {
        this.left += 5;
        if (this.left / 750 == this.index) {
          this.index += 1;
          this.endSlide(this.oneSlideTime);
        }
        if (this.left == 3000) {
          this.left = 0;
          this.index = 1;
        }
      }, 1);
    },

    //结束轮播图
    endSlide(interval) {
      window.clearInterval(interval);
    },
  },
};
</script>

<style scoped>
.div1 {
  width: 750px;
  height: 390px;
  margin: 0px auto;
  overflow: hidden;
  position: relative;
}
.list1 {
  height: 390px;
  width: 3750px;
  position: absolute;
}
.list1 li {
  float: left;
}
</style>