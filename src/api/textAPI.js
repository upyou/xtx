import instance from "@/utils/request";


export function getText() {
  return instance.get('home/category/head');
}