'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const index = 0
	const res = await db.collection('class').where({
	  ['students.' + index]: 'zhao'
	})
	.get()
	
	console.log('res : ', res)
	//返回数据给客户端
	return res
};
