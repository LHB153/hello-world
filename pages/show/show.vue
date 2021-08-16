<template>
	<view>
		<button class="add" @click="add">点击添加植株</button>
		<!--data表示拿到的数据-->
		<unicloud-db  v-slot:default="{data, loading, error, options}" collection="class">
			<view v-if="error">{{error.message}}</view>
			<view v-else>
				<uni-list>
					<uni-list-item v-for="item in data" :key="item._id" :title="item.name" :thumb="item.iconurl"  :note="'ID:'+item.ID" link @tap="openinfo(item.ID,item.name)">
						
					</uni-list-item>
					
				</uni-list>
			</view>
		</unicloud-db>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				res:'hello'
			}
		},
		onLoad() {
			uniCloud.callFunction({
				name:"add",
				success: (e) => {
					this.res = e
				}
			})
		},
		methods:{
			openinfo(ID,name){
				uni.navigateTo({
					url: '../info/info?ID='+ID+'&name='+decodeURIComponent(name),
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			add(){
				uni.navigateTo({
					url:'../add-plant/add-plant'
				})
			},
		}
	}
</script>

<style>
	.add{
		color: #007AFF;
		text-align: center;
	}
</style>
