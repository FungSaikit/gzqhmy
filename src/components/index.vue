<template>
  <div class="index">
    <div class="swiper">
      <el-carousel height="480px">
        <el-carousel-item v-for="item in swiper_img" :key="item">
          <div class="swiper_pic" :style="{background:'url(' + item + ') center center'}"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="index_content flex">
      <div class="fg">
        <div class="block_left">
          <div class="title">
            最新资讯
          </div>
          <div class="flex">
            <div class="info_swiper">
              <el-carousel height="300px">
                <el-carousel-item v-for="item in swiper_img" :key="item">
                  <div>
                    <div class="swiper_pic" :style="{background:'url(' + item + ') center center'}"></div>
                    <div class="info_swiper_title">热烈庆祝权和化工在线商城上线了热烈庆祝权和化工在线商城上线了热烈庆祝权和化工在线商城上线了</div>
                  </div>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="fg" style="margin-left: 10px;">

            </div>
          </div>
        </div>
        <div class="block_left">
          <div class="title">
            行情新闻
          </div>
        </div>
      </div>
      <div class="goods_recommend">
        <div class="title">
          热门产品
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        swiper_img: [
          '/static/img/swiper0.jpg'
        ],
        info_swiper: [
          {
            title: '权和化工商城正式上线',
            image: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>

  .swiper {
    margin: 5px auto;
    width: 100%;
    max-width: 1920px;
  }

  .swiper_pic {
    width: 100%;
    height: 100%;
  }

  .index_content {
    width: 1280px;
    margin: auto;
  }

  .goods_recommend {
    width: 400px;
    margin-left: 20px;
  }

  .title {
    font-size: 20px;
    height: 40px;
    line-height: 40px;
    margin: 5px 0 15px 0;
    border-bottom: 4px solid lightgray;
  }

  .block_left {
    height: 400px;
  }

  .info_swiper {
    width: 500px;
    height: 300px;
  }

  .info_swiper_title {
    width: 96%;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0;
    bottom: 0;
    color: #fff;
    white-space: nowrap;
    line-height: 30px;
    padding: 0 2%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
