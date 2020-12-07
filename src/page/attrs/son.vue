<template>
  <div>
    <p class="bg">son组件拿到name----------{{name}}</p>
    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
  </div>
</template>
<script>
import Grandson from './grandson'
export default {
  props:['name'],
  components:{ Grandson },
  data(){
    return {}
  },
  methods:{},
  mounted() {
    console.log(this.$attrs);
    console.log("listeners==========",this.$listeners);
  }
}
</script>
<style scoped>
.bg {
  background: lightblue;
}
</style>
