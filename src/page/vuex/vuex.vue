<template>
  <div id="vuex-wrapper">
    <div class='flex'>
        <el-breadcrumb class='bread'>
            <el-breadcrumb-item>{{$route.query.title}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.query.subTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button  type="primary" size="mini">查看demo</el-button>
      </div>
    <el-card class="card-box">
        <AddCount></AddCount>
          <p>========= 上面和下面是两个不同的组件 当其中一个组件修改后，另一个组件相应改变 ==============</p>
        <DeCount></DeCount>
    </el-card>
  </div>
</template>
<script>
  import AddCount from './../.././components/addCount'
  import DeCount from '../../components/deCount'
  export default  {
    components:{ AddCount  , DeCount},
    data() {
      return {
      }
    },
    mounted() {
      console.log(this.$route);
    }
  }
</script>
<style scoped>
    .bread{
        margin-bottom: 20px;
        font-size: 18px;
    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
</style>
