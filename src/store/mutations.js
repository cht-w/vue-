export default  {
  add(state) {
    state.count++;
  },
  addN(state , step) {
    state.count+=step;
  },
  sub(state) {
    state.count--;
  },
  subN(state ,  step) {
    state.count-=step;
  }

}
