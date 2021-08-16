<template>
	<div>
		<div class="login_form">
			<!--v-model 表示会将输入的数据传给变量userName-->
			<input type="text" placeholder="用户名" v-model="userName">
			<input type="text" placeholder="密码" v-model="password">
			<button type="primary" @click="login">提交</button>
		</div>
		<image src="http://43.130.10.114:8080/02.jpg" mode="">yhello</image>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello world',
				userName:'',
				password:'',
				isBtnLoading:false
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				if(this.userName == 'admin' && this.password == "123456")
				{
					this.$router.push({
					path:'/pages/show/show',
					})
				}
				else alert("请重新输入");
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
