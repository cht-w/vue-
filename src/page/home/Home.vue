<template>
    <div>
        <Header></Header>
        <div class='wrapper'>   
            <div class="sideBar">
                <SideBar></SideBar>
            </div>
            <div class='main'>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '../../components/layout/header'
import SideBar from '../../components/layout/sideBar'
export default {
    components:{Header , SideBar}
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