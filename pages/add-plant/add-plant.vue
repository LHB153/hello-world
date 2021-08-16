<template>
	<view>
		<uni-easyinput  v-model.number="item.ID" placeholder="植株的编号ID" />
		<uni-easyinput  v-model="item.name" placeholder="植株的名字" />
		<uni-group >
			<uni-file-picker  class="pic_limit" @success="success"     @select="select"  ref="files" limit="1" title="选择植株的照片"></uni-file-picker>
		</uni-group>
		<button type="default" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				item:{
					"ID":0,
					"name":"",
					"iconurl":"",
				}
			}
		},
		methods:{
			upload(){
				this.$refs.files.upload()
			},
			// 获取上传状态
			select(e){
				console.log('选择文件：',e)
			},
			// 上传成功
			success(e){
			    console.log('上传成功'),
				console.log(e.tempFilePaths[0])
				this.item.iconurl = e.tempFilePaths[0]
				console.log(this.iconurl)
			},
			submit(){
				const db = uniCloud.database();
				db.collection('class').add(this.item).then(e=>{
					console.log(e); 
				});
				success:{
					uni.navigateTo({
						url:'../info/info',
					})
				}
			}
		}
	}
</script>

<style>
	.pic_limit{
		width: 1000upx;
	}
</style>
