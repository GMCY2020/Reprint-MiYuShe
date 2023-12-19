<!-- 我的 界面 -->
<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<!-- 顶部区域 -->
		<view class="top">
			<!-- 背景 -->
			<image src="../../static/item/top_bg1.jpg" class="img" :style="'width: ' + this.screenSize.Width + 'px'">
			</image>
			<view class="btn">
				<!-- 扫码 -->
				<image src="../../static/my/top/catch.png" class="img1" @click="goToCatch"></image>
				<!-- 设置 -->
				<image src="../../static/my/top/set.png" class="img2" @click="goToSet"></image>
			</view>
		</view>

		<!-- 头像 -->
		<view class="head-portrait" @click="goToPerson">
			<image src="../../static/item/HeadPortrait_default.png" class="img" @click="goToPerson"></image>
		</view>
		<!-- 头像装饰 -->
		<view class="head-portrait-s" @click="goToPerson">
			<image src="../../static/item/HeadPortrait_default-s.png" class="img"></image>
		</view>

		<!-- 个人主页 -->
		<view class="person-home">
			<view class="btn" @click="goToPerson">
				<text style="padding-right: 20rpx; padding-left: 20rpx; font-size: 30rpx;">个人主页</text>
				<uni-icons type="forward"></uni-icons>
			</view>
		</view>

		<!-- 用户信息区域 -->
		<view class="user-messages">
			<!-- 用户名 -->
			<text class="user-name">GMCY</text>
			<!-- 通行证id -->
			<text class="user-id">通行证ID: XXXXXXX</text>
			<!-- 社区等级频道 -->
		</view>

		<!-- 社区频道等级 -->
		<scroll-view class="community" scroll-x="true">
			<view class="item" @click="goToChannel('原神')">
				<text class="t1">原神</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('崩坏3')">
				<text class="t1">崩坏3</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('绝区零')">
				<text class="t1">绝区零</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('大别墅')">
				<text class="t1">大别墅</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('崩坏: 星穹铁道')">
				<text class="t1">崩坏: 星穹铁道</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('未定事件簿')">
				<text class="t1">未定事件簿</text>
				<text>Lv5</text>
			</view>
			<view class="item" @click="goToChannel('崩坏学园2')">
				<text class="t1">崩坏学园2</text>
				<text>Lv5</text>
			</view>
		</scroll-view>

		<view class="v" style="background-color: white;"></view>

		<!-- 粉丝相关区域 -->
		<view class="fen">

			<view class="item">
				<text class="num">9999W</text>
				<text class="t2">粉丝</text>
			</view>
			<view class="item">
				<text class="num">1</text>
				<text class="t2">关注</text>
			</view>
			<view class="item">
				<text class="num">9999W</text>
				<text class="t2">获赞</text>
			</view>
		</view>

		<!-- 米游币相关区域 -->
		<view class="coin">
			<view class="money">
				<text class="t1">米游币</text>
				<view class="t2">
					<image src="../../static/my/coin/coin.png" class="img"></image>
					<text class="t3">9999W</text>
				</view>
			</view>
			<view class="item">
				<view class="item-detail" @click="goToCoinGet">
					<image src="../../static/my/coin/wallet.png" class="img" mode="widthFix"></image>
					<view class="item-text">
						<text class="t1">获取米游币</text>
						<text class="t2">今日还可获得 77</text>
					</view>
				</view>
				<view class="item-detail" @click="goToCoinPut">
					<image src="../../static/my/coin/shop.png" class="img" mode="widthFix"></image>
					<view class="item-text">
						<text class="t1">兑换中心</text>
						<text class="t2">原神抽抽乐已开启</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 其它区域1 -->
		<view class="other1">
			<view class="item" @click="goToMyRole">
				<image src="../../static/my/other1/role.png" class="img" mode="widthFix"></image>
				<text>我的角色</text>
			</view>
			<view class="item" @click="goToGames">
				<image src="../../static/my/other1/games.png" class="img" mode="widthFix"></image>
				<text>游戏中心</text>
			</view>
			<view class="item" @click="goToCollect">
				<image src="../../static/my/other1/collect.png" class="img" mode="widthFix"></image>
				<text>收藏</text>
			</view>
			<view class="item" @click="goToHistory">
				<image src="../../static/my/other1/history.png" class="img" mode="widthFix"></image>
				<text>浏览历史</text>
			</view>
			<view class="item" @click="goToShopM">
				<image src="../../static/my/other1/shop-m.png" class="img" mode="widthFix"></image>
				<text>米游铺</text>
			</view>
			<view class="item" @click="goToMake">
				<image src="../../static/my/other1/make.png" class="img" mode="widthFix"></image>
				<text>创作中心</text>
			</view>
			<view class="item" @click="goToCommunity">
				<image src="../../static/my/other1/community.png" class="img" mode="widthFix"></image>
				<text>社区中心</text>
			</view>

		</view>

		<!-- 其它区域2 -->
		<view class="other2">
			<view class="item" @click="goToTimeActivities">
				<view class="item-detail">
					<image src="../../static/my/other2/time_activities.png" mode="widthFix" class="img"></image>
					<text>限时活动</text>
				</view>
				<view class="item-detail-2">
					<text style="padding-right: 12rpx;">星穹铁道招募开启</text>
					<uni-icons type="forward" color="#c3c4c6"></uni-icons>
				</view>

			</view>
			<view class="v"></view>
			<view class="item" @click="goToPrize">
				<view class="item-detail">
					<image src="../../static/my/other2/prize.png" mode="widthFix" class="img"></image>
					<text>我的奖品</text>
				</view>
				<uni-icons type="forward" color="#c3c4c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToService">
				<view class="item-detail">
					<image src="../../static/my/other2/service.png" mode="widthFix" class="img"></image>
					<text>联系客服</text>
				</view>
				<uni-icons type="forward" color="#c3c4c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToTeenager">
				<view class="item-detail">
					<image src="../../static/my/other2/teenager.png" mode="widthFix" class="img"></image>
					<text>青少年模式</text>
				</view>
				<uni-icons type="forward" color="#c3c4c6"></uni-icons>
			</view>
		</view>

		<view class="end">

		</view>

	</scroll-view>
</template>



<script>
	export default {
		data() {
			return {
				screenSize: {},
				ScHeight: 0,
			};
		},

		methods: {
			async getScreenSize() {
				const res = await uni.getSystemInfoSync()
				this.screenSize = {
					Height: res.screenHeight,
					Width: res.screenWidth
				}
				this.ScHeight = res.windowHeight
			},

			// 跳转到 设置 界面
			goToSet() {
				uni.navigateTo({
					url: "../../subpkg/set/set"
				})
			},

			// 跳转到 扫一扫 界面
			goToCatch() {
				uni.navigateTo({
					url: "../../subpkg/catch/catch"
				})
			},
			// 跳转到 个人主页 界面
			goToPerson() {
				uni.navigateTo({
					url: "../../subpkg/person/person"
				})
			},

			// 跳转到 社区频道等级 界面
			goToChannel(item) {
				// console.log(item)
				uni.navigateTo({
					url: "../../subpkg/channel/channel?item=" + item
				})
			},

			// 跳转到 获取米游币 界面
			goToCoinGet() {
				uni.navigateTo({
					url: "../../subpkg/coin_get/coin_get"
				})
			},

			// 跳转到 兑换中心 界面
			goToCoinPut() {
				uni.navigateTo({
					url: "../../subpkg/coin_put/coin_put"
				})
			},

			// 跳转到 我的角色 界面
			goToMyRole() {
				uni.navigateTo({
					url: "../../subpkg/my_roles/my_roles"
				})
			},

			// 跳转到 游戏中心 界面
			goToGames() {
				uni.navigateTo({
					url: "../../subpkg/games/games"
				})
			},

			// 跳转到 收藏 界面
			goToCollect() {
				uni.navigateTo({
					url: "../../subpkg/collect/collect"
				})
			},

			// 跳转到 浏览历史 界面
			goToHistory() {
				uni.navigateTo({
					url: "../../subpkg/history/history"
				})
			},

			// 跳转到 米游店铺 界面
			goToShopM() {
				uni.navigateTo({
					url: "../../subpkg/shop_m/shop_m"
				})
			},

			// 跳转到 创作中心 界面
			goToMake() {
				uni.navigateTo({
					url: "../../subpkg/make/make"
				})
			},

			// 跳转到 社区中心 界面
			goToCommunity() {
				uni.navigateTo({
					url: "../../subpkg/community/community"
				})
			},

			// 跳转到 限时活动 界面
			goToTimeActivities() {
				uni.navigateTo({
					url: "../../subpkg/time_activity/time_activity"
				})
			},
			// 跳转到 我的奖品 界面
			goToPrize() {
				uni.navigateTo({
					url: "../../subpkg/prize/prize"
				})
			},

			// 跳转到 联系客服 界面
			goToService() {
				uni.navigateTo({
					url: "../../subpkg/service/service"
				})
			},

			// 跳转到 青少年模式 界面
			goToTeenager() {
				uni.navigateTo({
					url: "../../subpkg/teenager/teenager"
				})
			},
		},

		onLoad() {
			this.getScreenSize()
		}
	}
</script>

<style lang="scss">
	scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		color: transparent;
		display: none;
	}

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
		color: transparent;
		display: none;
	}


	.top {
		display: inline-block;
		background-color: white;
		border-radius: 0 0 10rpx 10rpx;
		height: 270rpx;

		.img {
			height: 270rpx;
			border-radius: 0 0 10rpx 10rpx;
		}

		.btn {
			position: absolute;
			display: flex;
			top: 100rpx;
			right: 20rpx;

			.img1 {
				width: 80rpx;
				height: 80rpx;
			}

			.img2 {
				padding-left: 20rpx;
				width: 80rpx;
				height: 80rpx;

			}
		}
	}

	.head-portrait {
		display: inline-block;
		position: absolute;
		top: 225rpx;
		left: 40rpx;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;

		.img {
			border-radius: 50%;
			width: 150rpx;
			height: 150rpx;
		}
	}

	.head-portrait-s {
		display: inline-block;
		position: absolute;
		top: 200rpx;
		left: -10rpx;
		width: 250rpx;
		height: 250rpx;

		.img {
			width: 250rpx;
			height: 250rpx;
		}
	}

	.person-home {
		display: inline-block;
		height: 130rpx;
		background-color: white;

		display: flex;
		align-items: center;

		.btn {
			position: absolute;
			right: 0;
			background-color: #f1f0f6;
			border-radius: 10rpx 0 0 10rpx;
			padding: 15rpx;
		}
	}

	.user-messages {
		display: inline-block;
		background-color: white;
		display: flex;
		flex-direction: column;
		padding-left: 25rpx;

		.user-name {
			font-size: 40rpx;
			font-weight: bold;
		}

		.user-id {
			padding-top: 25rpx;
		}
	}

	.community {
		display: inline-block;
		background-color: white;
		white-space: nowrap;
		display: flex;
		padding-bottom: 25rpx;

		.item {
			display: inline-block;
			text-align: center;
			font-size: 36rpx;
			border: 1rpx solid #c3c4c6;
			border-radius: 10rpx;
			margin-right: 10rpx;
			margin-left: 10rpx;
			margin-top: 25rpx;
			padding: 10rpx;
			font-size: 25rpx;
			color: #7f7f7f;

			.t1 {
				padding-right: 10rpx;
			}
		}

		.item-r {
			display: inline-block;
		}
	}

	.fen {
		display: inline-block;
		display: flex;
		background-color: white;
		padding: 25rpx;
		padding-top: 40rpx;
		padding-bottom: 40rpx;

		.item {
			padding-right: 40rpx;

			.num {
				padding-right: 10rpx;
			}

			.t2 {
				color: #c3c4c6;
			}
		}
	}

	.coin {
		background-color: white;
		margin-top: 20rpx;
		padding-bottom: 20rpx;

		.money {
			padding-top: 25rpx;
			padding-left: 25rpx;

			display: flex;
			align-items: center;

			.t1 {
				font-weight: bold;
			}

			.t2 {
				display: flex;
				align-items: center;
				margin: 20rpx;
				background-color: #f8f8f8;
				border-radius: 30rpx;

				.img {
					width: 50rpx;
					height: 50rpx;
				}

				.t3 {
					padding-left: 10rpx;
					padding-right: 10rpx;
					font-weight: bold;
					color: #f29f5c;
				}
			}



		}

		.item {
			display: flex;
			justify-content: space-between;
			padding: 25rpx;

			.item-detail {
				background-color: #f8f8f8;
				border-radius: 20rpx;
				display: flex;
				padding: 25rpx;

				.img {
					width: 80rpx;
				}

				.item-text {
					padding-left: 15rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.t1 {
						font-size: 30rpx;
					}

					.t2 {
						font-size: 25rpx;
						color: #f29f5c;
					}
				}
			}
		}
	}

	.other1 {
		background-color: white;
		margin-top: 20rpx;
		display: flex;
		flex-wrap: wrap;

		.item {
			width: 25%;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 25rpx;
			padding-bottom: 25rpx;

			.img {
				width: 70rpx;
			}
		}
	}

	.other2 {
		background-color: white;
		margin-top: 20rpx;

		.item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 25rpx;
			;
			font-size: 35rpx;

			.item-detail {
				display: flex;
				align-items: center;

				.img {
					width: 60rpx;
				}
			}

			.item-detail-2 {
				color: #c3c4c6;
			}

		}
	}

	.end {
		height: 200rpx;
	}

	.v::after {
		content: '';
		width: 90%;
		height: 1px;
		display: block;
		margin: 0 auto;
		border-bottom: 1px solid #f8f8f8;
		padding: 1px;
	}
</style>