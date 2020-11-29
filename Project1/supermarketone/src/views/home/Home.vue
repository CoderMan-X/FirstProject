<template>
  <div>
    <nav-bar class="nav-bar"><div slot="centre">购物街</div></nav-bar>
    <div class="slide">
      <ul class="list1" :style="{ left: -left + 'px' }">
        <li v-for="(item,index) in banner" :key="index" >
          <img :src="item.image" alt="" />
        </li>
      </ul>
      <ul class="slidepoint" :style="{ marginLeft: pointWidth + 'px' }">
        <li v-for=" indexone of bannerlength" >
          <a href="javascript:;" class="point" :class="{deactivepoint:(index)!=indexone , activepoint:(index)==indexone}" @click="pointClick(indexone)"></a>
        </li>
      </ul>
    </div>
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
      banner: [],
      bannerlength:0,
      recommend: [],
      index: 1,
      slideTime: null, //开始轮播图计时器
      oneSlideTime: null, //单张图片滑动计时器
      left: 0,
      pointWidth:0,
      slideWidth:0,
      activepoint:"activepoint"
    };
  },
  mounted() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      this.banner.push(this.banner[0]);
      this.startSlide(); //进入页面开始调用轮播图
      this.getPictureSize()
      this.bannerlength=this.banner.length-1;
    });
  },
  methods: {
    //开始轮播图
    startSlide() {
      this.endSlide(this.slideTime);
      this.slideTime = window.setInterval(() => {
        this.switchPicture();
        this.endSlide(this.slideTime); //为了避免误差开始只调用一次startSlide()
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

    //获取相片的大小
    getPictureSize(){
      let div = document.getElementsByClassName("slide")
      let ul = document.getElementsByClassName("list1")
      let point = document.getElementsByClassName("point")
      this.slideWidth = div[0].offsetWidth
      this.pointWidth = (this.slideWidth-23*this.banner.length)/2-5
      console.log(this.pointWidth);
    },

    //导航标的点击操作
    pointClick(indexone){
      this.endSlide(this.oneSlideTime);
      this.index = indexone
      this.left = (indexone-1)*this.slideWidth
      this.startSlide()
    }
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgb(248, 198, 104);
  color: white;
}
.slide {
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

.slidepoint{
  position: absolute;
  display: flex;
}

.slidepoint li{
  flex: 1;
  margin-left: 10px;
  margin-top: 320px;
}
.slidepoint .point{
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background-clip: padding-box;
  -webkit-tap-highlight-color:transparent; /*去除移动端a标签点击后出现的问题  */
}

.deactivepoint{
  background-color: rgba(255,255,255, 0.8);
  border: 3px solid transparent;
}

.activepoint{
  background-color: rgba(255,255,255);
  border: 3px solid rgba(255,255,255,0.5);
}
</style>