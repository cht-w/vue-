<template>
  <div>
    <AddCount></AddCount>
    <p>===========================</p>
    <DeCount></DeCount>
  </div>
</template>
<script>
  import AddCount from './../.././components/addCount'
  import DeCount from '../../components/deCount'
  export default  {
    components:{ AddCount  , DeCount},
    data() {
      return {}
    },
    created() {
    }

  }
</script>
<style>

</style>
