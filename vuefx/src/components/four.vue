<template>
  <div class="search">
  	<!--<input type="text" v-model="cha" @keydown="serch()" placeholder="请输入文字搜索"/>-->
  	<input type="text" placeholder="请输入要查询的内容" ref="search" @keyup="search()"/>
  	    <ul>
					<li @click="xiang(val)" v-for="val,index in rea">{{val.name}}</li>
				</ul>
  	dfdfff
	 </div>
</template>

<script>
	import axios from "axios"
	export default {
	  name: 'four',
	  data(){
	  	return{
	  		list:[],
	  		arr:[],
	  		rea:[],
	  		bool:false
	  	}
	  },
	  created(){
	  	this.$ajax.get("../../static/js/list.json").then(
	  		(res)=>{
	  			this.list=res.data.type
	  			this.arr=res.data.type[0].datainfo
	  		}
	  	)
	  },
	  mounted(){
	  },
	  methods:{
	  	show(index){
	  		axios.get("../../static/js/list.json").then(
		  		(res)=>{
		  			this.arr=res.data.type[index].datainfo
		  		}
		  	)
	  	},
	  	tiao(val){
	  		var yonghu=sessionStorage.getItem("hu")
	  		if(yonghu){
	  			this.$router.push({path:'/info',query:{name:val.name}})
	  		}else{
	  			alert("没有用户,请先进行登录")
	  			this.$router.push({path:'deng'});
	  		}		
	  	},
	  	search(){
	  		var str=this.$refs.search.value;
	  		this.$ajax(`http://restapi.amap.com/v3/assistant/inputtips?key=d67f6eb63608777013940dc88b8e4381&keywords=${str}&city=北京&datatype=all`).then(
	  			(res)=>{
	  				this.rea=res.data.tips;
	  			})
	  		for(var i=0;i<this.arr.length;i++){
	  			if(str==this.arr[i].name){
	  				this.bool=true;
	  				break
	  			}else{
	  				this.bool=false;
	  			}
	  		}
	  	},
	  	xiang(val){
	  		this.bool?this.$router.push({path:'/xq',query:{id:val}}):this.$router.push({path:'/info',query:{name:val.name}})
//	  		console.log(val)
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	input
	{
		width: 99%;
		height: 30px;
	}
	ul
	{
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	ul li
	{
		background: #ccc;
		color: #000;
		border-bottom: 1px solid white;
	}
	.search
	{
		position: relative;
	}
	.search ul
	{
		position: absolute;
		top: 33px;
		left: 0;
	}
</style>
