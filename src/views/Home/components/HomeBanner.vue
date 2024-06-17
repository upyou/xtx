<script setup>
import {getBanner} from '@/api/LayoutApi'
import {ref} from 'vue'
const Banner = ref([])
const BannerList = (async()=>{
  const re = await getBanner()
  Banner.value = re.data.result
})
BannerList()

</script>



<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in Banner" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 990px;
  height: 500px;
  margin-left:250px ;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>