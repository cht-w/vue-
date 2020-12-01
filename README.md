# vue-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

1. 全局安装vue-cli  

   安装2.x版本命令： cnpm  i vue-cli -g    
   
   安装3.x版本命令： cnpm  i @vue/cli -g   
   
   版本查看 vue -V
   
   *如果原来已经安装了 vue-cli 的话，需要先卸载原来的再安装 
   
	卸载命令： cnpm uninstall vue-cli -g 
 
2. cd 进入项目目录  例如： cd vueProject

3. 创建一个基于webpack模板的项目  运行命令: vue init webpack vue-demo

	执行上述命令后会下载模板，然后有可供选择项具体如下：

	Project name (vue-demo) ：项目名称 （回车默认）

	Project description (A Vue.js project) : 项目描述
	
	Author：开发者
	
	Vue build (Use arrow keys)  打包方式 （回车默认选择第一个）
	Runtime + Compiler: recommended for most users   // 运行时+编译器：推荐给大多数用户
	Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
	//仅运行时：最小值为6KB，最小值为6KB，但模板（或任何特定于Vue的HTML）仅允许在.Vue文件中使用-其他地方需要呈现函数

	Install vue-router? ： 是否 安装路由
	
	
	Use ESLint to lint your code? : 是否使用ESLint来规范代码

	Set up unit tests ？ 设置单元测试
	
	
	Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
	Yes, use NPM    推荐使用npm
	Yes, use Yarn

	选项结束后，就会下载模板 模板下载结束后 会提示：
		To get started:

		  cd vue-demo
		  npm run dev
	意思是 cd vue-demo 进入刚刚我们创建的项目 ， 然后运行使用 npm run dev 启动命令
	
	启动后我们就可以看到一个项目自带的模板，至此项目搭建运行成功。
	
4. 路由是单页面应用 SPA 基础，第一步我们先改造路由。

	
	默认的，vue项目中已经帮我们配置好了路由格式，我们只需要按照模板添加路由即可。
	
	默认模板： 
		import Vue from 'vue'
		import Router from 'vue-router'
		Vue.use(Router)
		export default  new Router({
			routes:[
				{
					path:'/',
					name: 'Home',
					component: resolve => require(['@/page/home/Home'] , resolve)
				}
			]
		})
	
	

	推荐使用路由懒加载：
	
		为什么？
		
		因为像vue这种的单页面应用，如果没有使用懒加载的话，运用webpack打包后的文件会变得非常的大，会造成进入首页时需要一下子
		加载过多的内容，也就会出现首页白屏等待的情况，即使我们使用loading进行优化也不利于用户体验。运用懒加载则可以将页面进行划分，
		按需加载页面，分担首页承受的加载的压力。
		
		怎么做？
		
		一：vue 异步组件技术
		
		例如：{path:'/home' , name:'Home' , component:resolve=>(['@/page/home/Home'] , resolve)}
		
		二：ES提出的import方法,（最常用）
		
		例如： {  path:'/',  name:'Home',  component:()=>import("@/page/home/home") }  
	
	
		这里说一下，与之对应的还有 组件懒加载（组件懒加载的写法和路由懒加载相似）
	
	
		总结：路由懒加载和组件懒加载都是一种优化方式 ：component:resolve=>(['@/page/home/Home'] , resolve)}  component:()=>import("@/page/home/home") 
		
		路由跳转使用编程式路由： this.$router.push('/Home');
		
		
5.  vuex 状态管理

		1.安装命令: cnpm  i vuex --save  安装到运行依赖  安装好后，我们可以在package.json 文件中的dependencies 字段找到这个版本。
		
	介绍：
	
		state : 唯一的数据源
		
		getters ： getters 可以衍生出新的状态
		
		mutations: 更改vuex的store中的状态的唯一方法是提交 mutaition ， mutation必须是同步操作
		
		actions： action提交mutation，action可以包含任何异步操作
		
		操作步骤 ： 当 组件中的状态发生变化的时候，通过dispatch函数提交到Action， Action在通过commit函数提交到Mutations，此时状态发生改变都会实时渲染组件。
	
	
		2. 在src目录中创建 sotre 文件夹，并创建vuex中的模块名称，每一个都单独分开，便于模块化管理。
		
		store 
		  => actions.js  提交mutation
		  
		  => getters.js  派发state状态值，通过计算属性获取值
		  
		  => mutations.js   提交state的唯一状态
		  
		  => mutation-type.js  定义action 和 mutation 变量
		  
		  => index.js	相当于vuex的根目录 ， 在main.js中引入的  import store from './store'   这里自动定位到 store 下的 index.js
		  
		  => state.js   存放唯一数据源及所有的状态
		  
		  
		3. store 中的index相当于vuex的主目录，vuex中所有模块都在index.js中引入的
		
			index.js 内容如下：
			
				import Vue from 'vue'
				import Vuex from 'vuex'
				Vue.use(Vuex);

				import state from './state'
				import mutations from './mutations'
				import actions from './actions'
				import  getters from './getters'

				export default new Vuex.store({
				  state ,
				  mutations,
				  actions,
				  getters
				})
			

		4. 在 mian.js 中 引入
		
				import Vue from 'vue'
				import App from './App'
				******import store from './store' ******
				import router from './router'

				Vue.config.productionTip = false

				new Vue({
				  el: '#app',
				  router,
				  *****store,******
				  components: { App },
				  template: '<App/>'
				})

		5.  组件中访问 state 中数据两种方式：
		
				1. this.$store.state.username 
				
				2. 使用 mapState    1. 从vuex中按需导入 mapState 函数。2. 通过mapStat函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性。
				
				   具体内容：
				   首先引入: import { mapState }  from 'vuex';
				   
					利用计算属性：	computed:{
										...mapState([ 'count' ])
									}
					template使用：  <div>{{count}}</div>		
				   
		6.  Mutation 理解
		
			1. 只能通过 mutation 变更Store数据，不可以直接操作Store中的数据。
			
			2. 通过这种方式虽然操作起来繁琐一些，但是可以集中监测所有数据变化。
			
			3. mutaition的函数中，不能书写异步代码。

			记住一句话： Mutation用于变更Store中的数据。牢记： 只有Mutation中的函数才有权力修改state中的值。
			
						 
			具体用法一： 
				
				1. 在  mutations 中 声明方法
				mutations:{
					add(state) {
						state.count++;
					}		
				}
				
				2. 在组件中绑定事件， 触发 mutations上的方法  
				
				methods：{
					handle() {
						// 触发 mutations 的第一种方式
						this.$store.commit("add");
					}
				}
				   
				补充说明： 触发 mutations上的方法的时候，可以向该方法中传递参数。   
				   
				1. 在  mutations 中 声明方法
				mutations:{
					add(state) {
						state.count++ ;
					}，
					addN(state , step) {
						state.count+=step ; 
					}
				}
				
				2. 在组件中绑定事件， 触发 mutations上的方法  
				
				methods：{
					handle() {
						// 触发 mutations 的第一种方式
						this.$store.commit("addN" , 3);
					}
				}   
				   
				具体用法二：
				
				1. 从vuex 中按需导入 mapMutations 函数。
				
					import mapMutations from 'vuex'
					
				2. 将指定的 mutations 函数，映射为当前组件的 methods 方法
				
					methods：{
						...mapMutations(['add' , 'addN'])，
						
						handle() {
							this.add();
						}
					}
				补充说明： 使用mapMutations 也可以向mutations函数中传递参数
				
				1. 从vuex 中按需导入 mapMutations 函数。
				
					import mapMutations from 'vuex'
					
				2. 将指定的 mutations 函数，映射为当前组件的 methods 方法
				
					methods：{
						...mapMutations(['add' , 'addN'])，
						
						handle() {
							this.addN(3);
						}
					}
					
				上面说过 mutation中的函数不能写 异步代码，那么如果想要做一些延迟等异步操作，该怎么实现呢？

			7. Action  用于处理异步任务   如果通过异步操作变更数据，必须通过Action，而不能使用mutatio，但是在Action中还是要触发mutation的方式间接变更数据。
			
				牢记： 在 Action中 不能直接修改state中的值，必须通过 context.commit() 来触发某个 mutaition 中的函数。
			
				具体方法一： 
				
				1. 在 actions 中 定义异步方法
				
				actions ：{
					asyncAdd(context){
						setTimeout(()=> {
							context.commit('add');
						}, 1000)
					}
				}
				2. 在 组件中 触发actions上的方法    使用:this.$store.dispatch('asyncAdd')
				
				addBtn2() {
					this.$store.dispatch('asyncAdd');
				}
				
				同样的，我们也可以在actions方法中传递参数 方法类似于上面操作
				
				具体方法二：
				
				1. 从 vuex 中按需导入 mapActions 
				
					import { mapActions } from 'vuex'
					
				2. 将actions中的方法映射成当前组件 methods 中的方法
				
					methods：{
						...mapActions(['asyncAdd']);
						
						handle() {
							this.asyncAdd();
						}
					}
				
				
			8.Getter 用于对Store中的数据进行加工处理形成新的数据。	
				
				1.Getter 可以对Store中已有的数据加工处理之后形成新的数据，类似于Vue中的计算属性。
				
				2. Store 中的数据发生变化，Getter的数据也会跟着变化。
				
				具体方法一：this.$store.getters.名称
				
				具体方法二：
				1. 从vuex 中按需导入 mapGetter
				
				import { mapGetter } from 'vuex'
				
				2. 将 getters 中的方法映射成  组件中的computed中的方法
				
				computed；{
					...mapGetter(['showNum'])
				}
				
6. axios安装使用。    

				
				1. 运行命令： cnpm i axios --save
				2. 在入口文件mian.js 中：按找顺序导入

7. Element-UI安装使用。

			    1. 运行命令：cnpm i element-ui -S 
				2. 在入口文件main.js中引入 即可  
					import ElementUI from 'element-ui';

					import 'element-ui/lib/theme-chalk/index.css';

					Vue.use(ElementUI);
			
				测试： 在页面中使用：<el-button type="primary">测试</el-button>



8. 支持markdown  

				1. 运行命令: cnpm install mavon-editor --save
				2. 在入口文件中导入 

					import mavonEditor from 'mavon-editor'

					import 'mavon-editor/dist/css/index.css'

					Vue.use(mavonEditor)
				

				参考网址：https://github.com/hinesboy/mavonEditor/blob/master/README.md