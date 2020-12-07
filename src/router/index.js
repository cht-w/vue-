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
        },
        {
          path:'/api',
          name:'api',
          component:resolve => require(['@/page/api/api'], resolve)
        },
        {
          path:'/attrs',
          name:'attrs',
          component:resolve => require(['@/page/attrs/father'], resolve)
        },
        {
          path:'/params',
          name:'params',
          component:resolve => require(['@/page/params/params'], resolve)
        },
        {
          path:'/par/:userId',
          name:'par',
          component:resolve => require(['@/page/params/par'], resolve)
        },
        {
          path:'/go2',
          component:resolve => require(['@/page/params/go2'], resolve)
        },
        {
          path:'/go3',
          component:resolve => require(['@/page/params/go3'], resolve)
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
