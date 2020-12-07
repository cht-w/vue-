<template>
  <div>
      <el-card>
        我是一个子组件，测试专用
        <el-button type="primary" size="mini" @click="getParent">$parent</el-button>

        <div>我的名字是{{name}}</div>
      </el-card>
  </div>
</template>
<script>
export default {
  props:['name'],
  data() {
    return {
      inheritAttrs:true,
      value:'Test'
    }
  },
  mounted() {
    console.log("测试attrs=======",this.$attrs);
  },
  methods:{
    getParent() {
      console.log(this.$parent.addid); // 获取父组件（最近一级的方法）
      // console.log(this.$parent);
    }
  }
}
</script>
<style scoped>

</style>
