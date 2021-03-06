import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 相当于
new Vue({
  el: '#app',
  render: h => h(App)
})