<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="addBtn">+1</button>
    <button @click="addBtn1">+N</button>
    <button @click="addBtn2">异步+m</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
    addBtn() {
      // 通过  this.$store.commit('add')  调用 mutations上的某个方法
      this.$store.commit('add');
    },
    addBtn1() {
      this.$store.commit("addN" , 3);
    },
    addBtn2() {
      // 通过 this.$store.dispatch('asyncAdd') 调用 actions上的某个方法
      this.$store.dispatch("asyncAdd");
    }
  }
}
</script>
<style>

</style>
