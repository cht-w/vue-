<template>
  <div>

    <el-tag>$nextTick的使用：</el-tag>
    <p ref="mag"> 数据展示:{{message}}</p>
    <el-button type="primary" size="mini" @click="updateMessage">更新数据</el-button>
    <Test ref="test"></Test>
    <el-divider></el-divider>
    <el-tag>$set的使用：</el-tag>
    <p>在data中声明过的对象或数组，然后通过操作向对象中添加新的属性，更新新的属性的时候，不会更新视图</p>
    <div>
        <el-button @click="addid(obj)">{{obj.id}}</el-button>
        <el-button @click="addage(obj)">{{obj.age}}</el-button>
    </div>
    <el-card>结果： data中声明过的 obj 初始age属性上 有get和set方法。但是新添加的id属性，并没有get和set方法，所以无法响应。</el-card>
    <el-divider></el-divider>
    <el-tag>data</el-tag>
    <el-card>访问原始数据对象 this.$data.a = this.a</el-card>
    <el-divider></el-divider>
    <el-tag>props</el-tag>
    <el-card>
      props:用于接收父组件传递过来的数据 props本身可以是数组，可以是对象
      <p>type 指定类型 default 默认值  required 是否必填 validator：Function--- 验证函数</p>
    </el-card>
    <el-divider></el-divider>
    <el-tag>$parent $root $ref $children</el-tag>
    <el-card>
      <p>$root  父组件实例属性和方法,如果存在多级之间获取到 根组件</p>
      <p>$parent 获取父组件属性和方法 ，如果存在多级就获取最近一级别</p>
      <p>$children 返回当前子组件的集合是一个数组</p>
      <p>$ref  给子组件标签定义ref, 然后通过$refs访问子组件实例</p>
    </el-card>
    <Test ref="testWrapper"></Test>
    <el-button @click="getChildren" type="primary" size="mini">$children</el-button>
    <el-button @click="getRoot" type="primary" size="mini">$root</el-button>
    <el-button @click="getRef" type="primary" size="mini">$ref</el-button>
    <el-divider></el-divider>
    <el-tag>$attrs 和 $listeners</el-tag>
    <el-card>
      <p>$attrs:包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用 </p>
      <p>$listeners :包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。</p>
    </el-card>
    <Test :name="name" :job="job"></Test>
    <el-divider></el-divider>
<!--    <el-tag>$on 和 $off 和 $once 和 $emit</el-tag>-->
    <el-card>
      
    </el-card>
  </div>
</template>
<script>
import Test from '../../components/test'
export default {
  components:{ Test },
  data() {
    return {
      message:"我是nextTick",
      obj:{},
      id:0,
      // 测试 $attrs
      name:'cht',
      job:'IT'
    }
  },
  mounted() {
    this.obj = { age: 18}  // 加载的时候初始化
    this.obj.id = 1;  // 加载的时候新增
    // this.$set(this.obj , 'id' , 1);
    // console.log(this.$data); //
  },
  methods:{
    updateMessage() {
      this.message = '学习nextTick';

      // console.log(this.$refs.mag.textContent);
      // console.log(this.$refs.test.$el);
      // console.log(this.$refs.test.$el.style);
      // console.log(this.$el.textContent === '学习nextTick');
      this.$nextTick(()=> {
          this.$el.textContent = "学习nextTick"
      })
    },
    addid(item) {
      item.id = item.id+1;
      console.log(item);
    },
    addage(item) {
      item.age = item.age+1;
      console.log(item);
    },
    getChildren() {
      console.log(this.$children);
      for(let i=0; i<this.$children.length;i++) {
          if(this.$children[i].value) {
            alert(this.$children[i].value);
          }
      }
    },
    getRoot() {
      console.log(this.$root);
    },
    getRef() {
      // console.log(this.$refs.testWrapper);
          console.log(this.$refs.testWrapper.value);
    }
  }
}
</script>
<style scoped>

</style>
