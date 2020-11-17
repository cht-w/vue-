<template>
  <div>
    <h3>当前最新的count值为:{{count}}</h3>
    <button @click="subBtn">-1</button>
    <button @click="subBtn1">-N</button>
    <button @click="subBtn2">异步-m</button>

   <div> {{showNum}}</div>
  </div>
</template>
<script>
import { mapState , mapMutations , mapActions , mapGetters}  from 'vuex'
export default {
  data() {
    return {}
  },
  methods:{
    ...mapMutations(['sub' , 'subN']),
    ...mapActions(['asyncSub']),
    subBtn() {
      this.sub();
    },
    subBtn1() {
      this.subN(3);
    },
    subBtn2() {
      this.asyncSub();
    }
  },
  computed: {
    ...mapState([ "count"]),
    ...mapGetters(['showNum'])
  }
}
</script>
<style>

</style>
