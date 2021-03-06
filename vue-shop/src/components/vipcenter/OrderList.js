export const OrderList = {
	data() {
		return {
			orderList: [{
				orderId: '201607220001',
				orderStatus: 1,
				orderDate: '2016-07-22 10:00:00',
				customerName: '王二麻子',
				address: '广东省深圳市罗湖区东门南路101号',
				phone: '13012345678',
				shipmentDate: '2016-07-23',
				shipmentTime: '9:00-15:00',
				payMethod: '在线支付',
				goodsAmount: 200.00,
				freightAmount: 6.00,
				rebateAmount: 10.00,
				totalAmount: 196.00,
				orderItems: [{
					title: '华为（HUAWEI）荣耀路由 百兆入户带宽大户穿墙王1200Mbps千兆WiFi智能无线路由器（陶瓷白）',
					price: 200.00,
					quantity: 1,
					img: '/src/assets/images/huawei.jpg'
				}]
			}, {
				orderId: '201607220002',
				orderStatus: 2,
				orderDate: '2016-07-22 10:00:00',
				customerName: '王二麻子',
				address: '广东省深圳市罗湖区东门南路102号',
				phone: '13012345678',
				shipmentDate: '2016-07-23',
				shipmentTime: '9:00-15:00',
				payMethod: '在线支付',
				goodsAmount: 45.00,
				freightAmount: 6.00,
				rebateAmount: 0.00,
				totalAmount: 51.00,
				orderItems: [{
					title: 'heisou 750ml可拆洗内胆飘逸杯男女居家用办公耐热玻璃茶杯泡茶壶具玲珑杯KC60',
					price: 45.00,
					quantity: 1,
					img: '/src/assets/images/beizi.jpg'
				}]
			}, {
				orderId: '201607220003',
				orderStatus: 3,
				orderDate: '2016-07-22 10:00:00',
				customerName: '王二麻子',
				address: '广东省深圳市罗湖区东门南路103号',
				phone: '13012345678',
				shipmentDate: '2016-07-23',
				shipmentTime: '9:00-15:00',
				payMethod: '在线支付',
				goodsAmount: 249.00,
				freightAmount: 0.00,
				rebateAmount: 0.00,
				totalAmount: 249.00,
				orderItems: [{
					title: '漫步者（EDIFIER） H850  HIFI级音乐耳机 手机耳机 头戴式耳机 黑色',
					price: 249.00,
					quantity: 1,
					img: '/src/assets/images/erji.jpg'
				}]
			},{
				orderId: '201607220004',
				orderStatus: 3,
				orderDate: '2016-07-22 10:00:00',
				customerName: '王二麻子',
				address: '广东省深圳市罗湖区东门南路103号',
				phone: '13012345678',
				shipmentDate: '2016-07-23',
				shipmentTime: '9:00-15:00',
				payMethod: '在线支付',
				goodsAmount: 118.80,
				freightAmount: 0.00,
				rebateAmount: 0.00,
				totalAmount: 118.80,
				orderItems: [{
					title: 'SIMELO 保温壶 2.0L不锈钢印象京都系列 平安蓝色SM1497',
					price: 99.00,
					quantity: 1,
					img: '/src/assets/images/shuihu.jpg'
				},{
					title: '馨牌 毛巾家纺 全棉深层护肤毛巾 33*72cm 绿色',
					price: 9.90,
					quantity: 2,
					img: '/src/assets/images/maojin.jpg'
				}]
			}]
		}
	}
}