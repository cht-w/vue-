<template>
    <div>
        <el-card class="card">
            <div class='flex'>
                <el-breadcrumb class='bread'>
                    <el-breadcrumb-item>{{$route.query.title}}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$route.query.subTitle}}</el-breadcrumb-item>
                </el-breadcrumb>
                <el-button  type="primary" size="mini">查看demo</el-button>
            </div>
<!--            <mavon-editor v-model="value" :toolbars="markdownOption" @save='save'/>-->
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        let storage = window.localStorage;
        console.log(storage.getItem('mobanyufa'));
        this.value = storage.getItem('mobanyufa');
    },
    methods: {
        // 保存并存储到 localStorage中
        save(value , render) {
            if(!window.location) {
                this.$info(1 , "不支持");
                return ;
            }
            let storage = window.localStorage;
            storage.setItem('mobanyufa', value);
        }
    },
}
</script>
<style scoped>
    .card {
        background:#d5d5d5;
    }
    .bread{
        margin-bottom: 20px;
        font-size: 18px;
    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
</style>
