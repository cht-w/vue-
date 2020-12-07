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
            value:"",
            // markdownOption:{
            //     bold: true, // 粗体
            //     italic: true, // 斜体
            //     header: true, // 标题
            //     underline: true, // 下划线
            //     strikethrough: true, // 中划线
            //     mark: true, // 标记
            //     superscript: true, // 上角标
            //     subscript: true, // 下角标
            //     quote: true, // 引用
            //     ol: true, // 有序列表
            //     ul: true, // 无序列表
            //     link: true, // 链接
            //     imagelink: true, // 图片链接
            //     code: true, // code
            //     table: true, // 表格
            //     fullscreen: true, // 全屏编辑
            //     readmodel: true, // 沉浸式阅读
            //     htmlcode: true, // 展示html源码
            //     help: true, // 帮助
            //     undo: true, // 上一步
            //     redo: true, // 下一步
            //     trash: true, // 清空
            //     save: true, // 保存（触发events中的save事件）
            //     navigation: true, // 导航目录
            //     alignleft: true, // 左对齐
            //     aligncenter: true, // 居中
            //     alignright: true, // 右对齐
            //     subfield: true, // 单双栏模式
            //     preview: true, // 预览
            // }
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
