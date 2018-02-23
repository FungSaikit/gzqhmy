// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/_header'
import Footer from './components/_footer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#page_top',
  router,
  components: { Header },
  template: '<Header/>'
})

new Vue ({
  el: '#page_bottom',
  router,
  components: { Footer },
  template: '<Footer/>'
})
