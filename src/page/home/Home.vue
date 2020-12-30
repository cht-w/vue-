<template>
    <div>
        <Header></Header>
        <div class='wrapper'>   
            <div class="sideBar">
                <SideBar></SideBar>
            </div>
            <div class='main'>
                <router-view></router-view>
                11111111
                <!-- {{app.name}} -->
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/layout/header'
import SideBar from '../../components/layout/sideBar'
import { getList } from '../../utils/api/base'
import axios from 'axios'
// 使用方式一：
// import { app } from '@/utils/gloable'

// 使用方式二：
// import app from '@/utils/gloable'   // gloable默认导出一个app, 这边可以换成别的 例如 app1    相当于 app1  = app 一样的使用

// 使用方式三：
// import { app , mobile } from '@/utils/gloable'
export default {
    components:{Header , SideBar},
    data() {
        return {
            // app:app
        }
    },
    mounted() {
        this.get();
    },
    methods:{
        get(){
            getList().then(res=> {
                console.log(res);
            })
        }
    }
        
}
</script>
<style scoped>
    .wrapper {
        display: flex;
        margin-top: 10px;
    }
    .main {
        width: 100%;
        padding: 0 20px 20px 20px;
    }
</style>