import instance from '@/utils/request'

export const getPay=(id)=> {
  return instance.get(`/member/order/${id}`)
}

export const getLikeListAPI = ({ limit = 4 }) => {
  return instance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}

export const getUserOrder = (params) => {
  return instance({
    url:'/member/order',
    method:'GET',
    params
  })
}