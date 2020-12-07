<template>
    <div>
        go2 页面
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted() {
        console.log(this.$route);
        // 取值方式一：
        console.log(this.$route.query.userId);
        // 取值方式二：
        console.log(this.$router.currentRoute.query.userId);
    }
}
</script>