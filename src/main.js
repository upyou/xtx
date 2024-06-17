import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import {lazyPlugin} from '@/directives/index'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
// app.directive('img-lazy',{
//   mounted(el,binding){
//     console.log(el,binding.value);

//     el.src = binding.value;
//   }
// })

//实现图片懒加载


