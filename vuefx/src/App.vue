<template>
  	<div class="wrap" id="app">
  		<header v-show="bool">
  			<div class="img"><img src="../static/img/logo.jpg" /></div>
  			
  			<ul>
  				<li><router-link to="/seconds">分类</router-link></li>
  				<li><router-link to="/Login">登陆</router-link></li>
  				<li><router-link to="/four">搜索</router-link></li>
  			</ul>
  		</header>
  		
  		<section>
  			
  			<router-view></router-view>
  		</section>
  		
  	</div>
</template>

<script>
	
export default {
  name: 'App',
  data:function(){
  	return{
  		bool:true
  	}
  },
  watch:{
  	$route:function(val)
  	{
  		if(val.path=="/seconds"){
  			this.bool=true
  		}else
  		{
  			this.bool=false
  		}
  	}
  }
}
</script>

<style>

</style>
