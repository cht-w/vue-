<template>
    <div>
         {{id}}
    </div>
</template>
<script>
export default {
    data(){
        return { id:''}
    },
    mounted() {
        console.log(this.$route);
        this.id = this.$route.params.userId;
        console.log('路由跳转的参数-=-----',this.$route.params.userId);
    },
    
}
</script>