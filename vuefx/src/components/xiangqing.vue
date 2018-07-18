<template>
	<div class="xiangqing">
		<div class="banner"  v-if="list.photos" v-bind:style="{backgroundImage:'url(' + list.photos[0].url + ')'}">
			<header>
				<span @click="home()"><</span>
				<div class="cen"></div>
				<span><img src="../../static/img/share.png"/></span>
				<span><img src="../../static/img/share.png"/></span>
			</header>
			<pre class="sc"><img src="../../static/img/xj.png"/>上传照片</pre>
		</div>
		<div class="dianpu">
			<h1>{{list.name}}</h1>
			<h3 v-if="list.biz_ext">
				<star :starnum="list.biz_ext.rating"></star>
				<span class="ms">￥人均{{list.biz_ext.cost}}</span>
				<span class="ms"><img src="../../static/img/backques.jpg" alt="" /><a href="">编辑</a></span>
			</h3>
			<img src="../../static/img/路线.png" class="lx" />
		</div>
		<div class="search">
			<div class="se1">
				<i></i>
				<p>{{list.address}}</p>
				<span><img src="../../static/img/tel.png"/></span>
			</div>
			<div class="se2">
				<i></i>
				<p v-if="list.deep_info">营业时间: {{list.deep_info.opentime}}</p>
			</div>
		</div>
		<div class="tjc">
			<div class="wytjc">
				<p>网友推荐菜</p>
				<span v-if="list.deep_info">查看{{list.deep_info.recommend.split(',').length}}道网友推荐菜 ></span>
			</div>
			<ul>
				<li v-for="val,index in list.photos"><img :src="val.url"/></li>
			</ul>
			<div class="cp" v-if="list.deep_info">
				{{list.deep_info.recommend.split(',').join('&nbsp;&nbsp;&nbsp;&nbsp;')}}
			</div>
		</div>
	</div>
</template>

<script>
	import star from './star'
	export default {
		name: 'xiangqing',
		components:{
			'star':star
		},
		data:function(){
			return {
				list:[]
			}
		},
		created: function() {
			this.id=this.$route.params.id
			var url=`http://restapi.amap.com/v3/place/detail?key=e049d8ce39dc72dde3f53af5ecfe6e61&id=${this.id}`
			this.axios.get(url).then((res)=>{
				this.list=res.data.pois[0];
				console.log(this.list)
			})
		},
		methods:{
	  		home:function(){
	  			this.$router.go(-1);
	  		}
	  	}
	}
</script>
<style lang="less">
	.box(@ver: row) {
		display: flex;
		flex-direction: @ver;
	}
	.xiangqing{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
		overflow-y: scroll;
		&::-webkit-scrollbar{
			display: none;
		}
		/*position: relative;*/
		header{
			width: 100%;
			height: 1.4259rem;
			background: rgba(0,0,0,0.1);
			position: absolute;
			top: 0;
			.box;
			.cen{
				flex: 1;
			}
			span{
				font-size: 0.5555rem;
				color: #fff;
				width: 1.1111rem;
				height: 1.4259rem;
				line-height: 1.4rem;
				text-align: center;
				display: inline-block;
				text-align: center;
				img{
					width: 0.5555rem;
				}
			}
		}
		.banner{
			width: 100%;
			height: 4.3055rem;
			background: fixed top;
			position: relative;
			.sc{
				position: absolute;
				bottom: 0.2777rem;
				left: 0.2777rem;
				background: rgba(0,0,0,0.7);
				padding: 0 0.2222rem;
				border-radius:0.34rem ;
				font-size: 0.3448rem;
				line-height: 0.787rem;
				color: #fff;
				img{
					width: 0.5925rem;
				}
			}
		}
		.dianpu{
			width: 89%;
			height: 1.2962rem;
			background: #4287ff;
			line-height: 0.8333rem;
			padding: 0.6481rem 0.5555rem;
			position: relative;
			h1{
				font-size: 0.5rem;
				color: #fff;
			}
			h3{
				font-size: 0.3518rem;
				color: #fff;
				.box;
				.ms{
					margin-right: 0.1851rem;
					img{
						width: 0.437rem;
					}
					a{
						color: #C0C0C0;
					}
				}
			}
			.lx{
				width: 1.8518rem;
				position: absolute;
				right: 1rem;
				top: -1rem;
			}
		}
		.search{
			width: 100%;
			height: 3.1111rem;
			background: #fff;
			.box(column);
			.se1{
				flex: 1;
				.box;
				i{
					width: 0.4537rem;
					height: 0.5555rem;
					margin: 0.4629rem 0.4351rem;
					background: url(../../static/img/id.png) no-repeat;
					background-size: 100% 100%;
				}
				p{
					flex: 1;
					font-size: 0.3703rem;
					line-height: 0.4259rem;
					margin: 0.3518rem 0;
				}
				span{
					border-left: 0.0092rem solid #ccc;
					margin-left: 0.5092rem;
					img{
						padding: 0.4829rem 0.4351rem;
						width: 0.4637rem;
						height: 0.5555rem;
					}
				}
			}
			.se2{
				flex: 1;
				.box;
				i{
					width: 0.4537rem;
					height: 0.5555rem;
					margin: 0.4629rem 0.4351rem;
					background: url(../../static/img/time.png) no-repeat;
					background-size: 100% 100%;
				}
				p{
					flex: 1;
					font-size: 0.3703rem;
					line-height: 0.4259rem;
					margin: 0.3518rem 0;
				}
			}
		}
		.tjc{
			width: 100%;
			height: 6.1574rem;
			background: #fff;
			margin-top: 0.1574rem;
			.wytjc{
				width: 100%;
				height: 1.3888rem;
				.box;
				p{
					flex: 1;
					font-size: 0.4166rem;
					text-indent: 0.4629rem;
					line-height: 1.3888rem;
					color: #000;
				}
				span{
					line-height: 1.3888rem;
					margin-right: 0.4629rem;
					font-size: 0.3703rem;
					color: #747474;
				}
			}
			ul{
				width: 98%;
				height: 2.4074rem;
				margin: 0.1388rem 0.1388rem;
				.box;
				li{
					flex: 1;
					margin-right: 0.1388rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			.cp{
				width: 91.7%;
				height: 1.1111rem;
				line-height: 0.6018rem;
				margin: 0.6018rem 0.4166rem;
				font-size: 0.324rem;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}
		
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->