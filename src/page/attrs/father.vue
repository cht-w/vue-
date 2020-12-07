<template>
  <div>
    <el-card>
      <p>需求：</p>
      <p>1.son 组件需要拿 father 组件中的 name 属性</p>
      <p>2. grandson 组件需要拿 father 组件中的age属性</p>
    </el-card>
    <el-card>
      <Son :name="name" :age="age" :job="job" :style="{width:sty.width+'px',height:sty.height+'px'}" @click="myName" @fatherHandle="updateChange"></Son>
      <p>money:{{money}}元</p>
    </el-card>
    <p>关于 inheriAttrs</p>
    <InheriAttrs type="text"></InheriAttrs>

  </div>
</template>
<script>
import Son from './son'
import InheriAttrs from './inheriAttrs'
import EventBus from '../../utils/eventbus'
export default {
  components:{ Son , InheriAttrs },
  data() {
    return {
      name:'cht',
      age:'23',
      job:'IT',
      sty:{
        height:200,
        width:800
      },
      // 测试 EventBus
      money:1
    }
  },
  created() {
    EventBus.$on('change',(num)=> {
        console.log("这是孙子组件通过EventBus触发的事件")
      this.money = num;
    })
  },
  methods:{
    updateChange(val) {
      this.name = val;
    },
    myName() {
      console.log('1')
    },
  }
}
</script>
<style scoped>
.bor {
  border: 1px solid black;
}
</style>
