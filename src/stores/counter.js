import { ref} from 'vue'
import { defineStore } from "pinia"
import {getHead } from '@/api/LayoutApi'
export const useCounterStore = defineStore('counter', () => {
    const HeadList = ref([])
    const getHeadList = async()=>{
    const re = await getHead()
    HeadList.value = re.data.result
    }
    return { HeadList,getHeadList }
  },{persist: true})
