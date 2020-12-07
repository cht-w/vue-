<template>
  <div>
    <p class="bg">grandson组件拿到age----------{{age}}</p>
    <el-button type="primary" @click="changeName">修改father组件name</el-button>
    <p>使用事件总线触发爷爷组件上的方法</p>
    <el-button type="primary" @click="changeDate">触发爷爷组件上的方法</el-button>
  </div>
</template>
<script>
import EventBus from '../../utils/eventbus'
export default {
  props:['age'],
  data() {
    return {
      money:10
    }
  },
  methods:{
    changeName() {
      this.$emit("fatherHandle",'hhhhhhh');
    },
    changeDate() {
      EventBus.$emit('change',this.money++);
    }
  }
}
</script>
<style scoped>
.bg {
  background: lightpink;
}
</style>
