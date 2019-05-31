import Vue from 'vue'
import API from './httpConfig/apiList'

Vue.prototype.$api = API
Vue.use(API)