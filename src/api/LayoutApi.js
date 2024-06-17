import instance from "@/utils/request";

export function getHead(){
  return instance.get('home/category/head');
}

export function getBanner(distributionSite){
  const rabbit = distributionSite || '1';
  return instance.get('home/banner',{
    params:{
      distributionSite:rabbit
    }
  });
}

export const findNewAPI = () => {
  return instance({
    url:'/home/new'
  })
}

export const getHotAPI = () => {
  return instance({
    url:'/home/hot'
  })
}

export const getGoodsAPI = () => {
  return instance({
    url:'/home/goods'
  })
}