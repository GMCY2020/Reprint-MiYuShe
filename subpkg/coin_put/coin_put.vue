<!-- 兑换中心 界面 -->

<template>
	<view class="top">
		<view class="left">
			<view class="v1">
				<image class="img1" src="../../static/my/coin/coin.png" mode="widthFix"></image>
				<text class="t1">9999W</text>
			</view>

			<view class="v2">
				<text class="t2">获取记录</text>
				<uni-icons type="forward" color="white"></uni-icons>
			</view>

		</view>

		<view class="right" @click="goToCoinGet">
			<image class="img2" src="../../static/my/coin/wallet.png" mode="widthFix"></image>
			<text class="t3">获取米游币</text>
		</view>
	</view>

	<!-- 自制分段区域 -->
	<scroll-view class="community" scroll-x :style="'top:' + windowTop + 'px'">
		<!-- <view class="choose"> -->
		<view class="item" @click="onClickItem(0)">
			<text class="t1" v-if="pan !== 0">全部商品</text>
			<text class="t2" v-if="pan === 0">全部商品</text>
			<view class="v" v-if="pan === 0"></view>
		</view>
		<view class="item" @click="onClickItem(1)">
			<text class="t1" v-if="pan !== 1">崩坏3</text>
			<text class="t2" v-if="pan === 1">崩坏3</text>
			<view class="v" v-if="pan === 1"></view>
		</view>
		<view class="item" @click="onClickItem(2)">
			<text class="t1" v-if="pan !== 2">原神</text>
			<text class="t2" v-if="pan === 2">原神</text>
			<view class="v" v-if="pan === 2"></view>
		</view>
		<view class="item" @click="onClickItem(3)">
			<text class="t1" v-if="pan !== 3">崩坏学园2</text>
			<text class="t2" v-if="pan === 3">崩坏学园2</text>
			<view class="v" v-if="pan === 3"></view>
		</view>
		<view class="item" @click="onClickItem(4)">
			<text class="t1" v-if="pan !== 4">未定事件簿</text>
			<text class="t2" v-if="pan === 4">未定事件簿</text>
			<view class="v" v-if="pan === 4"></view>
		</view>
		<view class="item" @click="onClickItem(5)">
			<text class="t1" v-if="pan !== 5">米游社</text>
			<text class="t2" v-if="pan === 5">米游社</text>
			<view class="v" v-if="pan === 5"></view>
		</view>
	</scroll-view>


	<view class="panel" v-if="pan === 0">
		<block v-for="(item, i) in shops" :key="i">
			<block v-for="(item2, i2) in item" :key="i2">
				<view class="item" @click="goToGoodsDetail(item2)">
					<image class="img" :src="'../../static/my/coin/' + item2[0]" mode="widthFix"></image>
					<text class="title">{{item2[1]}}</text>
					<view class="under">
						<view class="u">
							<text class="money">{{item2[2]}}</text>
							<text>米游币</text>
						</view>
						<text>库存1200</text>
					</view>
				</view>
			</block>
		</block>
	</view>

	<view class="panel" v-if="pan === 1">
		<block v-for="(item, i) in shops['崩坏3']" :key="i">
			<view class="item" @click="goToGoodsDetail(item)">
				<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
				<text class="title">{{item[1]}}</text>
				<view class="under">
					<view class="u">
						<text class="money">{{item[2]}}</text>
						<text>米游币</text>
					</view>
					<text>库存1200</text>
				</view>
			</view>
		</block>
		<view class="item" style="background-color: #f8f8f8;"></view>
	</view>

	<view class="panel" v-if="pan === 2">
		<block v-for="(item, i) in shops['原神']" :key="i">
			<view class="item" @click="goToGoodsDetail(item)">
				<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
				<text class="title">{{item[1]}}</text>
				<view class="under">
					<view class="u">
						<text class="money">{{item[2]}}</text>
						<text>米游币</text>
					</view>
					<text>库存1200</text>
				</view>
			</view>
		</block>
	</view>

	<view class="panel" v-if="pan === 3">
		<block v-for="(item, i) in shops['崩坏学园2']" :key="i">
			<view class="item" @click="goToGoodsDetail(item)">
				<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
				<text class="title">{{item[1]}}</text>
				<view class="under">
					<view class="u">
						<text class="money">{{item[2]}}</text>
						<text>米游币</text>
					</view>
					<text>库存1200</text>
				</view>
			</view>
		</block>
	</view>

	<view class="panel" v-if="pan === 4">
		<block v-for="(item, i) in shops['未定事件簿']" :key="i">
			<view class="item" @click="goToGoodsDetail(item)">
				<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
				<text class="title">{{item[1]}}</text>
				<view class="under">
					<view class="u">
						<text class="money">{{item[2]}}</text>
						<text>米游币</text>
					</view>
					<text>库存1200</text>
				</view>
			</view>
		</block>
	</view>

	<view class="panel" v-if="pan === 5">
		<block v-for="(item, i) in shops['米游社']" :key="i">
			<view class="item" @click="goToGoodsDetail(item)">
				<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
				<text class="title">{{item[1]}}</text>
				<view class="under">
					<view class="u">
						<text class="money">{{item[2]}}</text>
						<text>米游币</text>
					</view>
					<text>库存1200</text>
				</view>
			</view>
		</block>
		<view class="item" style="background-color: #f8f8f8;"></view>
	</view>
	<view class="bottom">
		<text>我是有底线的的(～￣▽￣)～</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pan: 0,
				shops: {
					"米游社": [
						['shop-m-1.png', '【米游社】米游姬牛角包围巾', '12500'],
						['shop-m-2.png', '【米游社】米游姬亚克力立牌挂件', '6500'],
						['shop-m-3.png', '【米游社】米游姬立绘系列抱枕', '12500'],
						['shop-m-4.png', '【米游社】米游兔 亚克力挂件（随机一款）', '12500'],
						['shop-m-5.png', '【米游社】日常系列鼠标垫', '13800'],
						['shop-m-6.png', '【米游社】晴空邀约系列米游姬挂画', '13400'],
						['shop-m-7.png', '【米游社】小米 Air2 SE真无线蓝牙耳机', '30000'],
					],

					"未定事件簿": [
						['shop-w-1.jpg', '【未定事件簿】未定2023新春头像挂件「明灯启新途」', '2000'],
						['shop-w-2.jpg', '【未定事件簿】2021新年系列 Q版亚克力立牌（每个角色20份，共80份）', '8800'],
						['shop-w-3.jpg', '【未定事件簿】花语系列 Q版亚克力挂件（每个角色20份，共80份）', '6400'],
						['shop-w-4.png', '亚克力手机支架（单人）（各5个，共20个）', '1000'],
						['shop-w-5.jpg', '【未定事件簿】甜趣派对系列 Q版桌面收纳盒（每个角色20份，共80份）', '8800'],
						['shop-w-6.png', '【未定事件簿】礼物系列 Q版软胶挂件（单人）（各5个，共20份）', '5600'],
					],

					"崩坏学园2": [
						['shop-b2-1.jpg', '【崩坏学园2】琪亚娜星光乐耀镭射立牌（共30份）', '11000'],
						['shop-b2-2.png', '【崩坏学园2】温泉系列 镭射色纸樱波吕泉汤（共30份）', '6900'],
						['shop-b2-3.jpg', '【崩坏学园2】温泉系列浴衣立牌-伊瑟琳（共40份）', '11000'],
						['shop-b2-4.jpg', '【崩坏学园2】温泉系列浴衣立牌-丽塔（共30份）', '11000'],
						['shop-b2-5.jpg', '【崩坏学园2】异形抱枕琪亚娜（共40份）', '14000'],
						['shop-b2-6.png', '【崩坏学园2】【限时八折】琪亚娜·月光公主毛绒空调毯（共30份）', '16000'],
					],

					"原神": [
						['shop-y-1.png', '【原神】原石*60', '1800'],
						['shop-y-2.png', '【原神】摩拉*50000', '1500'],
						['shop-y-3.png', '【原神】大英雄的经验*5', '1500'],
						['shop-y-4.png', '【原神】角色台词软胶挂件-胡桃', '7800'],
						['shop-y-5.png', '【原神】角色台词软胶挂件-雷电将军', '7800'],
						['shop-y-6.png', '【原神】交响入梦系列 票夹-北斗', '6600'],
					],

					"崩坏3": [
						['shop-b3-1.png', '【崩坏3】水晶*100', '3000'],
						['shop-b3-2.png', '【崩坏3】小不点英桀系列抱枕-科斯魔', '13800'],
						['shop-b3-3.png', '【崩坏3】小不点英桀系列抱枕-华', '13800'],
						['shop-b3-4.png', '【崩坏3】女武神亚克力立体拼插画 霓裳拜年祭', '13500'],
						['shop-b3-5.png', '【崩坏3】悠游夏日系列立牌-符华·识之律者', '12000'],
						['shop-b3-6.png', '【崩坏3】悠游夏日系列立牌-八重樱', '12000'],
						['shop-b3-7.png', '【崩坏3】悠游夏日系列立牌-希儿', '12000'],
					]

				},

				windowTop: 44,
				ScHeight: 0,
			};
		},

		methods: {
			onClickItem(e) {
				var index = null;
				if (e === 0) {
					index = 0
				} else {
					index = e
				}

				if (index !== this.pan) {
					this.pan = index
				}
			},

			// 跳转到 获取米游币 界面
			goToCoinGet() {
				uni.navigateTo({
					url: "../../subpkg/coin_get/coin_get"
				})
			},

			// 跳转到商品详情界面
			goToGoodsDetail(item) {
				uni.navigateTo({
					url: "../../subpkg/goods-detail/goods-detail?item=" + item
				})
			},
		},

		onLoad() {
			const res = uni.getSystemInfoSync()
			this.windowTop = res.windowTop

		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: space-between;
		background-color: white;
		padding: 30rpx;

		.left {
			display: flex;
			background-color: #f8f8f8;
			border-radius: 10rpx;
			align-items: center;
			padding: 10rpx;
			justify-content: space-between;

			.v1 {
				display: flex;
				align-items: center;
				padding-left: 10rpx;

				.img1 {
					width: 60rpx;
				}

				.t1 {
					padding-left: 10rpx;
					color: orange;
					font-size: 50rpx;
				}
			}

			.v2 {
				.t2 {
					padding-left: 20rpx;
					color: #f8f8f8;
					font-size: 25rpx;
				}
			}


		}

		.right {
			display: flex;
			background-color: #f8f8f8;
			border-radius: 10rpx;
			align-items: center;
			padding: 10rpx;

			.img2 {
				width: 60rpx;
			}

			.t3 {
				padding-left: 10rpx;
				padding-right: 10rpx;
			}
		}
	}


	scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		color: transparent;
		display: none;
	}

	.community,
	.choose {
		position: sticky;
		z-index: 999;

		background-color: white;
		padding-top: 25rpx;
		display: flex;

		.item {
			padding-left: 20rpx;
			padding-right: 20rpx;
			display: inline-block;
			align-items: center;

			.t1,
			.t2 {
				padding-bottom: 20rpx;
			}

			.t1 {
				color: #999999;
			}

			.t2 {
				color: #393939;
				font-weight: 900;
			}

			.v {
				content: " ";
				background-color: #1aa1f9;
				width: 25%;
				display: block;
				margin: 25rpx auto;
				border: 6rpx solid #1aa1f9;
				border-radius: 25rpx;
				margin-bottom: 4rpx;
			}
		}
	}

	.community {
		white-space: nowrap;
	}

	.panel {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		.item {
			width: 45%;
			background-color: white;
			border-radius: 12rpx;
			// padding: 30rpx;
			margin-top: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.img {
				width: 100%;
				border-radius: 12rpx 12rpx 0 0;
			}

			.title {}

			.under {
				display: flex;
				justify-content: space-between;
				color: #999999;
				font-size: 25rpx;
				align-items: center;
				padding: 10rpx;

				.u {
					display: flex;
					align-items: center;
				}
			}

			.money {
				color: #f29f5c;
				font-size: 40rpx;
				padding-right: 10rpx;
			}
		}
	}

	.bottom {
		display: flex;
		justify-content: center;
		padding: 50rpx;
		color: #999999;
	}
</style>