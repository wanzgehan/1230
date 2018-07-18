<template>
	  <div class="first">
     		<div class="pro">
     			<div class="fh" @click="fh()"><</div>
     			<div class="title1">{{tit}}</div>
     		</div>
     		<div class="pri">
     			<div>5000米</div>
     			<div>全部分类</div>
     			<select @change="list_sort()" v-model="val">
     				<option value="综合排序">综合排序</option>	
     				<option value="价格排序">价格排序</option>	
     				<option value="评分排序">评分排序</option>	
     			</select>
     			<div>更多筛选</div>
     		</div>
     		<div class="doll">
     			<pull-to :bottom-load-method="refresh">
     			<dl v-for="val,index in list" @click="shop(val)">
     				<dt>
     					<p class="dianname">{{val.name}}</p>
							<span class="ddv"><star :starnum="val.biz_ext.rating"></star></span>
     					<p class="urll">{{val.biz_ext.cost}}条评价   人均{{val.biz_ext.cost}}</p>
     					<p class="address">   {{val.adname}}   500米</p>
     					<p class="nma">{{val.type}}</p>
     			    </dt>
     			    <dd><img v-lazy="val.photos[0].url"/></dd>
     			</dl>
     			</pull-to>
     		</div>
     </div>
</template>

<script>
import axios from 'axios'
import star from './star'
  import PullTo from 'vue-pull-to'
	export default {
		name: 'info',
		data:function(){
			return{
				tit:"",
				list:"",
				val:"综合排序",
				num:20
			}
		},created(){
		  	this.tit=this.$route.query.name
		  	this.list_sort()
		  },
		  methods:{
		  	fh()
		  	{
		  		this.$router.go(-1)
		  	},
		  	 refresh(loaded) {
		  	 	this.num=this.num+10
      	   axios.get('http://restapi.amap.com/v3/place/text?key=79b99a404fdb2f1a0a0f985f87bca0d4&keywords='+this.tit+'&city=北京&children=1&offset='+this.num+'&page=1&extensions=all').then((res)=>{
				  		this.list=res.data.pois
				  		console.log(this.list)
				  		loaded('done')
				  	})
      	},
		  	shop(val)
		  	{
		  		this.$router.push({path:'/xq',query:{id:val}})
		  	},
		  	list_sort()
		  	{
		  		if(this.val=="综合排序"){
		  			console.log(1)
		  			axios.get('http://restapi.amap.com/v3/place/text?key=79b99a404fdb2f1a0a0f985f87bca0d4&keywords='+this.tit+'&city=北京&children=1&offset=20&page=1&extensions=all').then((res)=>{
				  		this.list=res.data.pois
//				  		console.log(this.list)
				  	})
		  		}else if(this.val=="价格排序"){
		  			console.log(2)
		  			axios.get('http://restapi.amap.com/v3/place/text?key=79b99a404fdb2f1a0a0f985f87bca0d4&keywords='+this.tit+'&city=北京&children=1&offset=20&page=1&extensions=all').then((res)=>{
				  		var arr=res.data.pois
				  		arr.sort(function(a,b){
				  			return a.biz_ext.cost-b.biz_ext.cost
				  		})
				  		this.list=arr
//				  		console.log(this.list)
				  	})
		  		}else if(this.val=="评分排序"){
		  			console.log(3)
		  			axios.get('http://restapi.amap.com/v3/place/text?key=79b99a404fdb2f1a0a0f985f87bca0d4&keywords='+this.tit+'&city=北京&children=1&offset=20&page=1&extensions=all').then((res)=>{
				  		var arr=res.data.pois
				  		arr.sort(function(a,b){
				  			return b.biz_ext.rating-a.biz_ext.rating
				  		})
				  		this.list=arr
//				  		console.log(this.list)
				  	})
		  		}
		  	}
		  },
	  components:
		  {
		  'star':star,
		   PullTo
		  }
	}
</script>

<style>
	.first{
		width: 100%;
		height: 100%;
		display:flex;
		flex-direction: column;
	}
	.pro{
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #CCCCCC;
	}
	.pri{
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #CCCCCC;
	}
	.pri div{
		flex: 1;
		text-align: center;
		line-height: 3rem;
		
	}
	.pro div{
		flex: 1;
		line-height: 3rem;
	}
	.pro div img{
		width: 5rem;
		height: 2rem;
	}
	.fh{
		margin-left: 1rem;
	}
	.tit{
		text-align: center;
	}
	.tp{
		text-align: center;
	}
	.doll{
		flex: 1;
		overflow: scroll;
	}
	.doll dl{
		width: 100%;
		height: 8rem;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;

		border-bottom: 1px solid #ccc;
		}
		.doll dt{
			flex: 6;
			padding-left: 10px;
			padding-top: 10px;		 
		}
		.doll dd{
			flex: 3;
		}
		.urll{
			color: #737373;
		}
		dd img
		{
			width: 100px;
			height: 100px;
			margin-top: 10px;
		}
		.nma
		{
			font-size: 12px;
			padding-top: 5px;
			width: 100%;
			height: 20px;
		}
		.dianname
		{
			font-size: 14px;
		}
		.address
		{
			padding-top: 7px;
		}
		.ddv{
			padding-top: 5px;
		}
		.title1
		{
			color: black;
			padding-right:20px ;
		}
		.fh
		{
			color: #000000;
		}
		select
		{
			  background: transparent;
    border:none;
    outline: none;
			      appearance:none;
		}
</style>