import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const route = new Router({
  routes:[
    {
      path:'/',
      name:'home',
      component:resolve => require(['@/page/home/home'],resolve),
      children:[
        {
          path: '/vuex',
          name: 'vuex',
          component: resolve => require(['@/page/vuex/vuex'] , resolve)
        },
        {
          path:'/mobanyufa',
          name:'mobanyufa',
          component:resolve=> require(['@/page/mobanyufa/mobanyufa'] , resolve)
        },
        {
          path:'/axios',
          name:'axios',
          component:resolve => require(['@/page/axios/axios'], resolve)
        }
      ]
    },
  ]
})
export default route;

// const route = new Router({
//   routes:[
//     {
//       path:'/',
//       name:'Home',
//       component:()=>import("@/page/home/home")
//     }
//   ]
// })
//
// export default route;
