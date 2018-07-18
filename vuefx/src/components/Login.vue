<!--自定义组件-->
<template>
	<!--结构层-->
	
	<div class="login">
		<div class="top">
			<div class="home" @click="home()"><img src="../../static/img/ss.png"></div>
		</div>
		<section>
			<div class="item">
				<input type="text" placeholder="手机号" id="" v-model="username" />
			</div>
			<div class="item">
				<input type="text" placeholder="密码" id="" v-model="password" />
				<div class="right"></div>
			</div>
			<button @click="login()">登录</button>
			<div class="icon">
				<span class="left">
					<span>忘记密码</span>
				</span>
				<span class="right"><span @click="zhuce()">快速注册</span>
				</span>
			</div>
		</section>
	</div>
	
</template>
<script>
//	行为
	export default{
		name:"login",
		data:function(){
			return{
				username:"",
				password:""
			}
		},
		created(){
			console.log(this.$router.history)
			this.username=this.$router.history.current.params.username;
			this.password=this.$router.history.current.params.password;
		},
		methods:{
			zhuce(){
				this.$router.push({path:"/Register"})
			},
			home:function(){
	  			this.$router.go(-1);
	  		},
	  		login(){
				var cellphone=this.$route.params.telephone;
				var passwrod=this.$route.params.password;
				var params={
					cellphone:this.username,
					passwrod:this.password
				}
				var telephoneRegular=/^1[0-9]{10}$/;
        		if(telephoneRegular.test(this.username)){
        			this.$ajax.post('http://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f',params).then((res)=>{
						console.log(111)
						console.log(res)
						if(res.data.code!=200){
							alert("登录成功！")
//							this.$router.push({path:"/seconds"})
							this.$router.push({path:'/seconds',query:{name:this.username}})
//							console.log(username)
						}else{
							alert("登录失败！")
						}
					})
        		}else{
        			alert("请输入正确的账号密码。")
        		}
			}
		}
	}
</script>
<style scoped="scoped">
	
.top .home img
	{
		width: 100%;
		height: 50px;
		/*background: aqua;*/
	}
	.login
	{
		background-image: url(../../static/img/qq.jpg);
		width:100%;
		height: 100%;
	}
	input
	{
			margin-top: 15px;
			width: 98%;
			height: 30px;
	}
	button
	{
		margin-top: 15px;
		width: 100%;
		height: 30px;
	}
	.left span
	{
		float: left;
		padding-top: 20px;
	}
	.right span
	{
		float: right;
		padding-top: 20px;
	}
</style>