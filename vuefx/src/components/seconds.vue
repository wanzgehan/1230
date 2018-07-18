<template>
  		
  <div class="seconds">
  	
     <div class="left">
     	<ul>
     		<li v-for="val,index in list" @click="inf(index)">{{val.tit}}</li>
     	</ul>
     </div>
     <div class="right">
     		<dl v-for="val,index in childlist" @click="tourl(val)">
     			<dd>
     				<img :src="val.img" />
     			</dd>
     			<dt>{{ val.name}}</dt>
     			<p>{{val.datatype}}</p>
     		</dl>
     	
     </div>
  </div>
  
</template>

<script>
	import axios from "axios"
export default {
  name: 'seconds',
  data:function(){
  	return {
  		list:[],
  		childlist:[]
  	}
},
//beforeRouteEnter(to,from,next){
//      console.log('当进入组件之前')
//      // console.log(to)
//      // console.log(this)
//      // console.log(that)
//      var name=window.localStorage.getItem("username")
//      console.log(name)
//      var user=to.query.name
//      console.log(user==undefined)
//      if(user==undefined){
//        alert("亲，请您登录后查看")
//        next({path:"/Login"})
//        return
//      }else {
//        next()
//        return
//      }
//    },

  created:function(){
  	var that=this
  	axios.get("../../static/js/list.json").then(function(res){
  		
  			that.list=res.data.type
  				
  	})
  	
  	
  	
  },
  methods:{
  	inf(index){
  		this.childlist=this.list[index].datainfo
  		console.log(this.childlist)
  	},
		 	tourl(val){
		 		this.$router.push({path:'/info',query:{name:val.name}})
		 	}
  }
  ,
	 	watch:{
//	 		if()
	 		$route:function(val){
	 			console.log(val)
	 			if(val.path=='/info'){
	 				this.bool=false
	 			}else{
	 				this.bool=true
	 			}
	 		}
	 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
