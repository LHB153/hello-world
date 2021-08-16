<template>
	<view>
		<uni-easyinput  v-model.number="item.ID" placeholder="植株的编号ID" />
		<uni-easyinput  v-model="item.data" placeholder="记录的日期[例如 2021-8-1]" />
		<uni-easyinput  v-model="item.tall" placeholder="算法计算的高度(cm)" />
		<uni-easyinput  v-model="item.width" placeholder="算法计算的宽度(cm)" />
		<button type="default" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				item:{
					"_id":"",
					"ID":0,
					"data":"",
					"tall":"",
					"width":""
				}
			}
		},
		onLoad({item}) {
			this.item = JSON.parse(item)
		},
		methods:{
			submit(){
				const db = uniCloud.database();
				let item = {...this.item}
				delete item._id
				db.collection('growData').doc(this.item._id).update(item).then(e=>{
					console.log(e); 
				});
				success:{
					// uni.navigateTo({
					// 	url:'../show/show',
					// })
				}
			}
		}
	}
</script>

<style>
</style>
