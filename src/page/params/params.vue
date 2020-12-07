<template>
    <div>
        <el-button type='primary' @click='go1'>跳转1</el-button>
        <el-button type='primary' @click='go2'>跳转2</el-button>
        <router-link  :to="{path:'/go3', query:{userId:456,job:'It'}}">go3</router-link>
    </div>
</template>
<script>
export default {
    methods:{
        go1() {
            
            //用这种方法传参，必须这么些，不能写path,否则你在取参数的时候this.$router.params.userId就是undefined.这是因为，params只能用name来引入路由，
            this.$router.push({
                name:"par",//这个name就是你刚刚配置在router里边的name
                params:{
                    userId:"10011",
                    age:10
                }
            })

        },
        go2() {
            this.$router.push({
                path:'/go2',
                query: {
                    userId:123,
                    job:'It'
                }
            })
        }
    }
}
</script>

