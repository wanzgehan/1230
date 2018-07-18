<template>
	<span class="stars">
		<span class="onstar" v-for="(val,index) in onnum"></span><span class="halfstar" v-for="(val,index) in halfnum"></span><span class="offstar" v-for="(val,index) in offnum"></span>
	</span>
</template>

<script>
	export default{
		name:'star',
		props:['starnum'],
//		接收上个页面传过来的评分的参数
		data(){
			return {
				onnum:"",
				offnum:"",
				halfnum:""
//				定义三个变量用来循环
			}
		},
		created(){
//			console.log(this.starnum)
			if(this.starnum>0){
//				判断上个页面传过来的值,如果不为空就赋值
				this.onnum=Math.floor(this.starnum);
				this.offnum=5-Math.round(this.starnum);
				this.halfnum=Math.round(this.starnum)>this.onnum?1:0;
			}else{
				this.offnum=5;
//				如果传过来的值为空就给黑色星星数量的变量赋值为5
			}
		}
	}
</script>

<style scoped="scoped">
	.onstar{display: inline-block; width: 1rem; height: 1rem; background: url('../../static/img/星星.png');background-size: 100% 100% ;}
	.halfstar{display: inline-block; width: 1rem; height: 1rem; background: url('../../static/img/半星.png');background-size: 100% 100% ;}
	.offstar{display: inline-block; width: 1rem; height: 1rem; background: url('../../static/img/灰星星.png');background-size: 100% 100% ;}
</style>
<!--自定义组件-->
<template>
	<!--结构层-->

		<div id="star">
			<span v-for="classn in starArrs" :class="classn" class="staritem"></span>
			<!--<span  class="staritem onstar"></span>
			<span  class="staritem onstar"></span>
			<span  class="staritem halfstar"></span>
			<span  class="staritem offstar"></span>-->
			<!--根据传递过来的分数得到对应的星星
				4.7     四颗半星
				1个位数代表的是全里亮，
				2，当分数大于等于0.5  是一个半星
				3.当全星和半星不足五个的时候，剩下的都是灰色的星星
				
			-->
			
		</div>

</template>
<script>
//	行为
	export default{
		props:['starnum'],
		created(){
			console.log("子组件");
			
		},
		mounted(){
			console.log("打印传递的分数");
		},
		computed:{
			starArrs(){
				var starArr=[];    //3.9
//				全星星的个数
				let onstar = parseInt(this.starnum);
				console.log(onstar)
//				是否有半星
				let halfStar = Math.round(this.starnum-onstar)?true:false;
//				有多少课灰色的星星

				for (var i=0;i<onstar;i++) {
					starArr.push('onstar')					
				}
				if(halfStar){
					starArr.push('halfstar')					
				}
				while(starArr.length<5){
					starArr.push('offstar')	
				}

				return starArr;
			}
		}
		
	}
</script>
<style scoped="scoped">
	/*独立作用域的样式*/
	.staritem{
		display: inline-block; 
		width:1rem;
		height: 1rem;

	}
	/*全星星*/
	.onstar{
		background: url(../../static/img/星星.png);
		background-size: 1rem;	
	}
	.halfstar{
		background: url(../../static/img/半星.png);
		background-size: 1rem;	
			
	}
	.offstar{
		background: url(../../static/img/灰星星.png);
		background-size: 1rem;	
			
	}
</style>