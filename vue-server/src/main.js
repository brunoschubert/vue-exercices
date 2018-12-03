import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-servertest.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  /*Intercept requests - Overrides methods 
  Excludes old - Puts new - Post with name*/
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {messages: response.body}}
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
