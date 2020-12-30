<template>
    <div>
      <ul class="sideBar">
        <li  v-for="(item, index) in menuList" :key="item.index" @click="show(item , index)">
          <div class='list-item'>
            <span>{{item.name}}</span>
          </div>
          <el-collapse-transition>
            <ul class='subSideBar' v-if="item.subMenu" v-show='item.isShow' @click.stop="stop">
              <li v-for="subItem in  item.subMenu" :key="subItem.index">
                  <div class='list-subItem'>
                    <span @click='goLink(subItem.route ,item.name,subItem.name)'>{{subItem.name}}</span>
                  </div>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
          show3:false,
          menuList:[
            {
              name:"基础语法",
              route:'/mobanyufa',
              isShow:false,
              subMenu:[
                {
                  name:'状态集',
                  route:'/vuex'
                },
                {
                  name:'vue语法',
                  route:'/mobanyufa'
                },
                {
                  name:'API',
                  route:'/api'
                },
                {
                  name:'$attrs',
                  route:'/attrs'
                }
              ]
            },
            {
              name:"基础二级",
              route:'/vuex',
              isShow:false,
              subMenu:[
                {
                  name:'状态集',
                  route:'vuex'
                },
                {
                  name:'路由传参',
                  route:'params'
                },
                {
                  name:'axios',
                  route:'axios'
                },
                  {
                  name:'2-1',
                },
                {
                  name:'2-2'
                }
              ]
            },
             {
              name:"基础二级",
              route:'/vuex',
              isShow:false,
              subMenu:[
                {
                  name:'2-1',
                },
                {
                  name:'2-2'
                },
                {
                  name:'2-3'
                }
              ]
            },
            {
                name:"基础三级",
                isShow:false,
                subMenu:[
                {
                  name:'2-1',
                },
                {
                  name:'2-2'
                },
                {
                  name:'2-3'
                }
              ]
            },
            {
                name:"基础三级",
                isShow:false,
                subMenu:[
                {
                  name:'2-1',
                },
                {
                  name:'2-2'
                },
                {
                  name:'2-3'
                }
              ]
            },
            {
                name:"基础三级",
                isShow:false,
                subMenu:[
                {
                  name:'2-1',
                },
                {
                  name:'2-2'
                },
                {
                  name:'2-3'
                }
              ]
            },
            {
                name:"基础三级",
                isShow:false,
                subMenu:[
                {
                  name:'2-1',
                },
                {
                  name:'2-2'
                },
                {
                  name:'2-3'
                }
              ]
            },

          ]
        }
    },
    mounted() {
      // console.log(this.$route);
    },
    methods:{
      show(item , index) {
        this.menuList.forEach((i) => {
          if(i.isShow !== this.menuList[index].isShow) {
            i.isShow = false;
          }
        })
        item.isShow = !item.isShow;
      },
      stop() {
      },
      goLink(route , title , subTitle) {
        if( this.$route.path!== route && typeof route !== 'undefined') {
          this.$router.push({
            path:`${route}`,
            query:{
              title,
              subTitle
            },
          });
          this.$info(4 , `为您切换到${subTitle}`);
        }else {
            this.$info(1 , '检查是否重复点击或未添加路由');
        }
      }
    }
};
</script>
<style scoped>
.sideBar {
  width: 200px;
  height: 100%;
  user-select: none;
  border: 1px solid #000;
  border-radius: 0  8px  8px 0;
  background: #000;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.75);
}
.sideBar .list-item {
  height: 50px;
  line-height: 50px;
  color: gray;
  text-align: center;
}
.list-item:hover {
  font-weight: 600;
  color: #fff;
}
.sideBar .list-subItem {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: gray;
}
.list-subItem:hover {
  color: #fff;
}
</style>
