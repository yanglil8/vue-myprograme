import Vue from 'vue'

Vue.filter('transformVisitCount',function(value) {
  if(value >= 10000){
    value = value/10000
  }
})