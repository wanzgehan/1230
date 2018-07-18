<!--自定义组件-->
<template>
	<!--结构层-->
	<div class="login">
		<div class="wang">
			<div class="home" @click="home()"><img src="../../static/img/fh.png"></div>
		</div>
		<section>
			<form action="" method="post">
				<div class="item">
					<input type="text" @blur="testHintBlur()" v-model="testCode" class="inp1" placeholder="验证码">
					<img @click="testImg()" :src="testPicImg" class="yz" />
				</div>
				<div class="items">
					<input type="text" @blur="testTelephone()" v-model="telephone" class="inp2" placeholder="请输入手机号">
					<span  @click="gainNoteAuthCode()">获取验证码</span>
				</div>
				<div class="item">
					<input type="text" v-model="telephoneHintCode" class="inp3" placeholder="请输入短信验证码">
					<div class="right"></div>
				</div>
				<div class="item">
					<input type="password" v-model="password" @blur="testpassword()" class="inp3" placeholder="密码">
				</div>
				<button @click="loginBtn()" type="button" class="btn">注册</button>
			</form>
		</section>
		
	</div>
</template>
<script>
//	行为
	import $ from 'jquery'
	export default{
        name: "register",
        data(){
        	return {
        		testPicImg:"http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f",
        		testCode:'',
        		telephone:'',
        		regularFlag:false,
        		telephoneFlag:false,
        		passwordFlag:false,
        		password:'',
        		telephoneHintCode:''
        	}
        },
        methods:{
        	home(){
        		this.$router.go(-1)
        	},
        	tck(val){
        		$('.tck').text(val)
        			$('.tck').show()
    				setTimeout(function () {
    					$('.tck').hide()
    				},2000)
        	},
        	testImg(){
        		let key=Math.random()*10000;
        		this.testPicImg='http://vueshop.glbuys.com/api/vcode/chkcode?token=1ec949a15fb709370f&key='+key;
        	},
        	testHintBlur(){
        		this.$ajax.post(`http://vueshop.glbuys.com/api/home/user/checkvcode?token=1ec949a15fb709370f`).then((res)=>{
        			if (this.testCode==""){
        				this.tck('请进行图文验证')
        			}else if(res.data.code == 201){
        				this.tck('验证码正确')
        				this.regularFlag=true;
        			}else{
        				this.tck('验证码错误')
        				this.regularFlag=false;
        			}
        		})
        	},
        	testTelephone(){
        		let telephoneRegular=/^1[0-9]{10}$/;
        		if (this.telephone=="") {
        			this.tck('电话号不能为空')
        		} else if(telephoneRegular.test(this.telephone)){
        			alert('电话号格式正确')
        			this.telephoneFlag=true;
        		}else{
        			this.tck('电话号格式错误')
        			this.telephoneFlag=false;
        		}
        	},
        	testpassword(){
        		let passwordRegular=/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/;
        		if(passwordRegular.test(this.password)){
        			this.passwordFlag=true;
        		}else{
        			this.passwordFlag=false;
        		}
        	},
        	gainNoteAuthCode(){
        		if(this.regularFlag&&this.telephoneFlag){
        			let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        			't','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N',
        			'O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
					let code="";
					for(let i=0;i<4;i++){
						code+=arr[Math.floor(Math.random()*62)];
					}
					window.sessionStorage.setItem("telephoneHint",code);
					alert('短信验证码已发送')
        			this.tck(code)
        		}else{
        			if(!this.regularFlag){
        				this.tck('请先验证图文验证码')
        			}else if(!this.telephoneFlag){
        				this.tck('请输入正确的手机号码')
        			}
        		}
        	},
        	loginBtn(){
        		console.log(window.sessionStorage.getItem("telephoneHint"))
        		if(this.regularFlag){
        			if(this.telephone!=""){
	        				if(this.telephoneFlag){
	        					if(this.telephoneHintCode!=""){
			        				var telephoneHint=window.sessionStorage.getItem("telephoneHint");
				        			var telephoneHintFlag=false;
				        			if(telephoneHint.toLowerCase()==this.telephoneHintCode.toLowerCase()||telephoneHint.toUpperCase()==this.telephoneHintCode.toUpperCase()){
				        				telephoneHintFlag=true;
				        				if(this.password!=""){
				        					if(this.passwordFlag){
				        						alert("注册成功")
				        						this.$router.push({path:"/Login"});
				        					}
				        				}else{
				        					this.tck('密码不能为空')
				        				}
				        			}else{
				        				this.tck('手机验证码错误')
				        			}
			        			}else{
			        				this.tck('手机验证码不能为空')
			        			}
	        				}else{
	        					this.tck('手机号码格式错误')
	        				}
        			}else{
        				this.tck('手机号码不能为空')
        			}
        		}else{
        			this.tck('请进行图文验证')
        		}
        	}
        }
	}
</script>
<style scoped="scoped" >
	.login
	{
		width: 100%;
		height: 100%;
	}
	.login
	{
		background-image: url(../../static/img/qq.jpg);
		width:100%;
		height: 100%;
	}
	.wang .home img
	{
		width: 100%;
		height: 50px;
	}
	input
	{
		margin-top: 15px;
	}
	.inp1
	{
		width: 75%;
		height: 30px;
		border: 1px solid black;
		border-top: none;
	}
	.yz img
	{
		/*padding-top: 15px;*/
		/*margin-top: 10px;*/
		width: 20%;
		height: 30px;
	}
	.inp2
	{
		width: 75%;
		height: 30px;
		
		border: 1px solid black;
		border-top: none;
	}
	.inp3
	{
		width: 98%;
		height: 30px;
		border: 1px solid black;
		border-top: none;
	}
	.btn
	{
		margin-top: 15px;
		width: 100%;
		height: 30px;
	}
</style>