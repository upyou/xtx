import { ref} from 'vue'
import { defineStore } from "pinia"
import { computedAsync } from '@vueuse/core'
import {useUserStore} from './user'
import {addCarts,getCart,deleteCart} from '@/api/CartApi'
export const useCateStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computedAsync(()=>userStore.userInfo.token)
    const cateList = ref([])
    const addCart = async(goods)=>{
      if(isLogin.value){
        await addCarts({skuId:goods.skuId,count:goods.count})
       const res = await getCart()
       cateList.value = res.data.result
      }else{
        const item = cateList.value.find(item=>item.skuId===goods.skuId)
      if(item){
        item.count+=1
      }else{
        cateList.value.push(goods)
      }
    }
}
      const newCateList = async ()=>{
        const res = await getCart()
        cateList.value = res.data.result
      }
    const delCart = async(skuId)=>{
      if(isLogin.value){
        await deleteCart([skuId])
        const res = await getCart()
       cateList.value = res.data.result
      }else{
        const index = cateList.value.findIndex(item=>item.skuId===skuId)
        cateList.value.splice(index,1)
      }
    }
    const clearcateList = ()=>{
      cateList.value = []
    }
    //总数
    const totalCount = computedAsync(()=>cateList.value.reduce((acc,item)=>acc+item.count,0))
    
    //总价
    const totalPrice = computedAsync(()=>cateList.value.reduce((acc,item)=>acc+item.price*item.count,0))

    const singChexk = (skuId,selected)=>{
      const index = cateList.value.findIndex(item=>item.skuId===skuId)
      cateList.value[index].selected = selected
    }
    //全选
    const AllCheck = (selected)=>{
      cateList.value.forEach(item=>item.selected=selected)
    }
    //是否全选
    const all = computedAsync(()=>cateList.value.every(item=>item.selected))
    //选中的商品总数
    const selectedCount = computedAsync(()=>cateList.value.filter(item=>item.selected).reduce((acc,item)=>acc+item.count,0))
    //选中的商品总价
    const selectedPrice = computedAsync(()=>cateList.value.filter(item=>item.selected).reduce((acc,item)=>acc+item.count*item.price,0))

    return { cateList,addCart,delCart,totalCount,totalPrice,singChexk,all,AllCheck,selectedCount,selectedPrice,clearcateList,newCateList }
  },{persist: true})
