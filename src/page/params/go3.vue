<template>
    <div>
        go3 页面
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted() {
        console.log(this.$route);
        console.log(this.$route.query.userId)
    }
}
</script>