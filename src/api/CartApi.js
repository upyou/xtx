import instance from '@/utils/request'
export const addCarts = ({skuId, count}) => {
  return instance.post('/member/cart', {
    skuId,
    count
  })
}

export const getCart = ()=>{
  return instance.get('/member/cart')
}

export const deleteCart = (ids) => {
  return instance.delete('/member/cart', {data:{
    ids
  }})
}

export const mergeCart = (data) => {
  return instance.post('/member/cart/merge', data)
}