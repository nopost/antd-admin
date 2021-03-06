import Vue from 'vue'
import App from './App'
import router from './router'
import OwnUI from './index'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/style/main.less'
import './assets/style/display.css'
import Api from './api'
import i18n from './i18n'
import Viser from 'viser-vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './common/directive'
import Cookies from 'js-cookie'
import addRoutes from '@/router/addRoutes'
console.log('addRoutes', addRoutes)
Vue.use(mavonEditor)
Vue.use(Viser)
// import * as filters from './filter'
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Api)
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
Vue.use(OwnUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App),
})

let token = Cookies.get('token')
if (store.state.role.roleMenu.length) {
  addRoutes()
} else if (token) {
  store.dispatch('role/getMenuNav')
} else {
  router.replace({ name: 'Login' })
}
