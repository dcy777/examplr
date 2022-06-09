import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios,axios)

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'

axios.defaults.baseURL="https://api.apishop.net/common/joke"

new Vue({
    render:h>=h(App),
}).createApp(App).mount('#app')
