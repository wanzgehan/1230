<template>
	<div class="shop">
		<div class="bjt" :style="{backgroundImage:'url('+data.photos[0].url+')' }">
     		<div class="pro">
     			<div class="fh" @click="fh()"> < </div>
     			<div class="tit"></div>
     			<div class="tp"></div>
     		</div>
     	</div>
     	<div class="dpname">
     		<p class="dianname1">{{data.name}}</p>
     		<star class="ddd" :starnum="data.biz_ext.rating"></star>
				<span class="ms">￥人均{{data.biz_ext.cost}}</span>
				
				<img src="../../static/img/路线.png" class="lx" />
     	</div>
     	<div class="jjl">
     		<p class="dd">{{data.address}}</p>
     		<p class="dd" v-if="data" >营业时间:{{data.opentime}}</p>
     	</div>
     	<div class="cptj">
     		<div class="pri">
     			<div class="fh">网友推荐菜</div>
     			<div class="tit"></div>
     			<div class="tp">查看推荐菜》  </div>
     		</div>
     		<p>{{data.tag}}</p>
     	</div>
     </div>
</template>

<script>
	import star from './star'
	import axios from 'axios'
		export default {
		name: 'xq',
		components:{
			'star':star
		},
		data:function(){
			return{
				data:[]
			}
		},created(){
		  	this.data=this.$route.query.id
		  
		  },
		  methods:{
		  	fh()
		  	{
		  		this.$router.go(-1)
		  	}
		  }
		
	}
</script>

<style>
	.shop
	{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.bjt
	{
		flex: 3;
		background-size: 100% 100%;
	}
	.dpname
	{
		flex: 2;
		background-color: #007Aff;
		color: white;
	}
	.jjl
	{
		flex: 2;
		width: 100%;
		/*background: red;*/
	}
	.jjl .dd
	{
		height: 60px;
		background: #C0C0C0;
		line-height: 60px;
		font-size: 18px;
		/*width: 80%;*/
		
	}
	.cptj
	{
		flex: 4;
	}
	.cptj p
	{
		margin: 0.5rem;
	}
	.pro
	{
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction:row ;
		color: white;
	}
	.dianname1{
		font-size: 19px;
		margin: 1rem;
		padding-top: 6px;
	}
	.pri
	{
		width: 100%;
		height: 3rem;
		display: flex;
		flex-direction:row ;
	}
	.pri .fh
	{
		flex: 1;
		margin-left: 1rem;
		line-height: 3rem;
	}
	.pri .tp
	{
		flex: 1;
		line-height: 3rem;
		text-align: right;
		margin-right: 1rem;
		font-size: 15px;
		color: #555555;
	}
	.ddd
	{
		padding-left: 20px;
	}
	.lx{
				width: 70px;
				position: absolute;
				right: 1rem;
				top: 9.5rem;
			}
			.ms
			{
				padding-left: 18px;
				padding-top: 5px;
			}
			.ddd
			{
				padding-top: -5px;
			}
</style>