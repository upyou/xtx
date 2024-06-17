import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/api/CategoryApi'
import {useCateStore} from './CateStore'
import router from '@/router'
import {mergeCart} from '@/api/CartApi'
export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  const CateStore = useCateStore()
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.data.result
    await mergeCart(CateStore.cateList.map(item => {
      return{
        skuId: item.skuId,
        selected:item.selected,
        count: item.count,
    }
  }))
  CateStore.newCateList()
  }
  const clearUserInfo = () => {
    userInfo.value = {}
    CateStore.clearcateList()
    router.push('/login')
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true,
}
)