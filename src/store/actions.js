export default  {
    asyncAdd(context) {
      setTimeout(()=> {
        context.commit('add');
      } , 1000)
    },
    asyncSub(context) {
      setTimeout(()=> {
        context.commit("sub");
      } , 1000)
    }
}

