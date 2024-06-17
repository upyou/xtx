import instance from '@/utils/request'

export const getCategoryList = (id)=> {
  return instance({
    url: '/category',
    method: 'get',
    params: {id}
  })
}

export const getCateFilterApi = (id)=> {
  return instance({
    url: '/category/sub/filter',
    method: 'get',
    params: {
      id
    }
  })
}

export const getSubCategoryAPI = (data) => {
  return instance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}

export const getDetail = (id) => {
  return instance({
    url: '/goods',
    params: {
      id
    }
  })
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return instance({
    url:'/goods/hot',
    params:{
      id, 
      type, 
      limit
    }
  })
}

export const loginAPI = ({account,password})=>{
  return instance({
    url:'/login',
    method:'POST',
    data:{
      account,
      password
    }
  })
}