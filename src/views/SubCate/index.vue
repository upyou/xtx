<script setup>
import {getCateFilterApi} from '@/api/CategoryApi'
import { ref } from 'vue'
import {useRoute} from 'vue-router'
import {getSubCategoryAPI} from '@/api/CategoryApi'
import HomeGoodsItem from '../Home/components/HomeGoodsItem.vue'
const cateFilter = ref([])
const route = useRoute()
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})
const disabled = ref(false)
const getGoodList = async () => {
  const res = await getSubCategoryAPI(reqData.value)
  console.log(res)
  goodList.value = res.data.result.items
  console.log(goodList.value);
}
const cateId = route.params.id
const getFilter = async () => {
  const res = await getCateFilterApi(cateId)
  cateFilter.value = res.data.result
  console.log(cateFilter.value.goods);
}
const handleTabChange = ()=>{
  reqData.value.page = 1
  getGoodList(reqData.value)
}
const load = async () => {
  reqData.value.page ++
 const res = await getSubCategoryAPI(reqData.value)
  // 将新数据追加到原数组中
  goodList.value = [...goodList.value,...res.data.result.items]
  if (res.data.result.items.length === 0) {
    disabled.value = true
  }
}
getGoodList(reqData.value)
getFilter()
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${cateFilter.parentId}` }">{{cateFilter.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{cateFilter.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container " >
      <el-tabs v-model="reqData.sortField" @tab-change="handleTabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
       <div class=" body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled"
       >
         <!-- 商品列表-->
         <HomeGoodsItem v-for="goods in goodList" :key="goods.id" :good="goods"></HomeGoodsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>