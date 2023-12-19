<!-- 获取米游币 界面 -->

<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" @scroll="onMyScroll"
		:style="'height: ' + ScHeight + 'px;'">

		<view class="top">
			<view class="left">
				<view class="v1">
					<image class="img1" src="../../static/my/coin/coin.png" mode="widthFix"></image>
					<text class="t1">9999W</text>
				</view>

				<view class="v2" @click="goToGetHistory">
					<text class="t2">获取记录</text>
					<uni-icons type="forward" color="white"></uni-icons>
				</view>

			</view>

			<view class="right" @click="goToCoinPut">
				<image class="img2" src="../../static/my/coin/shop.png" mode="widthFix"></image>
				<text class="t3">兑换中心</text>
			</view>
		</view>


		<!-- 自制分段区域 -->
		<view class="choose-back">
			<view class="choose">
				<view class="item" @click="onClickItem(0)">
					<text class="t1" v-if="pan === 1">米游币任务</text>
					<text class="t2" v-if="pan === 0">米游币任务</text>
					<view class="v" v-if="pan === 0"></view>
				</view>
				<view class="item" @click="onClickItem(1)">
					<text class="t1" v-if="pan === 0">米游币活动</text>
					<text class="t2" v-if="pan === 1">米游币活动</text>
					<view class="v" v-if="pan === 1"></view>
				</view>
			</view>
		</view>


		<view class="my-content">
			<view class="panel-1" v-if="pan === 0">
				<view class="panel">
					<view class="panel-top">
						<text class="title">每日任务</text>
						<view class="title-2">
							<text class="t1">今日获取米游币上限</text>
							<text class="t2">0</text>
							<text class="t3">/110</text>
						</view>

					</view>
					<view class="panel-detail">
						<view class="item">
							<view class="left">
								<image class="img1" src="../../static/my/coin/sign_in.png" mode=""></image>
								<view>
									<text class="t1">签到</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+30</text>
									</view>
								</view>

							</view>
							<view class="right">
								<view>
									<text align="right" style="color: #1aa1f9">0</text>
									<text align="right">/1</text>
								</view>
								<progress class="progress-detail" :percent="0" stroke-width="7" activeColor="#1aa1f9"
									border-radius="20" />
							</view>
						</view>
						<view class="item">
							<view class="left">
								<image class="img1" src="../../static/my/coin/browse.png" mode=""></image>

								<view>
									<text class="t1">浏览3个帖子</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+20</text>
									</view>
								</view>

							</view>
							<view class="right">
								<view>
									<text align="right" style="color: #1aa1f9">2</text>
									<text align="right">/3</text>
								</view>
								<progress class="progress-detail" :percent="66.66" stroke-width="7"
									activeColor="#1aa1f9" border-radius="20" />
							</view>
						</view>
						<view class="item">
							<view class="left">
								<image class="img1" src="../../static/my/coin/like.png" mode=""></image>

								<view>
									<text class="t1">完成5次点赞</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+30</text>
									</view>
								</view>

							</view>
							<view class="right">
								<view>
									<text align="right" style="color: #1aa1f9">0</text>
									<text align="right">/5</text>
								</view>
								<progress class="progress-detail" :percent="0" stroke-width="7" activeColor="#1aa1f9"
									border-radius="20" />
							</view>
						</view>
						<view class="item">
							<view class="left">
								<image class="img1" src="../../static/my/coin/share.png" mode=""></image>

								<view>
									<text class="t1">分享帖子</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+10</text>
									</view>
								</view>

							</view>
							<view class="right">
								<view>
									<text align="right" style="color: #1aa1f9">0</text>
									<text align="right">/1</text>
								</view>
								<progress class="progress-detail" :percent="0" stroke-width="7" activeColor="#1aa1f9"
									border-radius="20" />
							</view>
						</view>
					</view>
				</view>

				<view class="panel">
					<view class="panel-top">
						<text class="title">更多任务</text>
					</view>
					<view class="panel-detail">
						<view class="item">
							<view class="left2">
								<image class="img1" src="../../static/my/coin/binding.png" mode=""></image>

								<view>
									<text class="t1">绑定游戏角色</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+80</text>
									</view>
								</view>

							</view>
							<view class="right2">
								已完成
							</view>
						</view>
						<view class="item">
							<view class="left2">
								<image class="img1" src="../../static/my/coin/right_name.png" mode=""></image>

								<view>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+80</text>
									</view>
								</view>
								<text class="t1">完成实名认证</text>

							</view>
							<view class="right2">
								已完成
							</view>
						</view>
						<view class="item">
							<view class="left2">
								<image class="img1" src="../../static/my/coin/pen.png" mode=""></image>

								<view>
									<text class="t1">修改个性签名</text>
									<view>
										<image class="img" src="../../static/my/coin/coin.png" mode="widthFix"></image>
										<text class="t2">+80</text>
									</view>
								</view>

							</view>
							<view class="right2">
								已完成
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="panel-2" v-if="pan === 1">

				<view class="title">
					<text>本月活动获取米游币上限</text>
					<text style="color: #f29f5c; padding-left: 10rpx;">0</text>
					<text>/7000</text>
				</view>

				<block v-for="(item, i) in actives" :key="i">
					<view class="item">
						<image class="img" :src="'../../static/my/coin/' + item[0]" mode="widthFix"></image>
						<text class="t1">{{item[1]}}</text>
						<text class="t2">{{item[2]}}</text>
					</view>
				</block>
			</view>
		</view>


	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				pan: 0,
				actives: [
					['active-1.jpg', '米游币抽抽乐-原神专场现已开启！', '参与活动即有机会获得原石、摩拉、实物周边等奖励！'],
					['active-2.png', '【大别墅】没几十年春节阅历，还真答不出这些题！', '年味浓度测试（米游社卷）已出炉！点击挑战>>'],
					['active-3.png', '【米游币祈愿盒】周边上新，快来挑选吧！', '精美周边数量有限，先到先得~'],
					['active-4.png', '【大别墅】【Oh！阿姬】四十三话 新春新气象', '新的一年，该准备用的新东西了！'],
				],
				bg: 0,
				ScHeight: 0,
			};
		},

		methods: {
			onClickItem(e) {
				var index = null;
				if (e === 0) {
					index = 0
				} else {
					index = 1
				}

				if (index !== this.pan) {
					this.pan = index
				}
			},

			// 跳转到 兑换中心 界面
			goToCoinPut() {
				uni.navigateTo({
					url: "../../subpkg/coin_put/coin_put"
				})
			},

			// 跳转到 获取记录 界面
			goToGetHistory() {
				uni.navigateTo({
					url: "../../subpkg/get_history/get_history"
				})
			},


			onMyScroll(e) {
				if (e.detail.scrollTop >= 80 && this.bg === 0) {
					uni.setNavigationBarColor({
						frontColor: "#000000",
						backgroundColor: "#f8f8f8"
					})
					this.bg = 1
				}

				if (e.detail.scrollTop < 80 && this.bg === 1) {
					uni.setNavigationBarColor({
						frontColor: "#ffffff",
						backgroundColor: "#19a3fc"
					})
					this.bg = 0
				}
			},
		},

		onLoad() {
			this.ScHeight = uni.getSystemInfoSync().windowHeight
		},
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


	.progress-detail ::v-deep .uni-progress-bar {
		// 这主要是加上deep才能改变它原来的样式 
		border-radius: 10px !important;
		overflow: hidden;
	}

	.progress-detail ::v-deep .uni-progress-inner-bar {
		// 这主要是加上deep才能改变它原来的样式
		border-radius: 10px !important;
		overflow: hidden;
		// background:linear-gradient(to right, #F137C8, #AA2AF9);
		background: #1aa1f9;
	}


	.top {
		display: flex;
		justify-content: space-between;
		background-color: #19a3fc;
		padding: 30rpx;

		.left {
			display: flex;
			background-color: #168bda;
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
					color: white;
					font-size: 50rpx;
				}
			}

			.v2 {
				.t2 {
					padding-left: 20rpx;
					color: white;
					font-size: 25rpx;
				}
			}


		}

		.right {
			display: flex;
			background-color: #168bda;
			border-radius: 10rpx;
			align-items: center;
			padding: 10rpx;

			.img2 {
				width: 60rpx;
			}

			.t3 {
				padding-left: 10rpx;
				padding-right: 10rpx;
				color: white;
			}
		}
	}

	.choose-back {
		background-color: #19a3fc;
	}

	.choose {
		background-color: #f8f8f8;
		// margin-top: 30rpx;
		padding-top: 40rpx;
		display: flex;
		justify-content: space-around;
		// border-bottom: 1rpx solid #f8f8f8;
		border-radius: 25rpx 25rpx 0 0;

		padding-left: 120rpx;
		padding-right: 120rpx;

		.item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

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
				margin: 0 auto;
				border: 6rpx solid #1aa1f9;
				border-radius: 25rpx;
				margin-bottom: 4rpx;
			}
		}
	}

	.panel-1 {
		.panel {
			.panel-top {
				background-color: #f8f8f8;
				padding: 25rpx;
				padding-bottom: 0;
				display: flex;
				flex-direction: column;

				.title {
					font-weight: bold;
				}

				.title-2 {
					padding-top: 10rpx;
					color: #999999;
					font-size: 25rpx;

					.t2 {
						padding-left: 15rpx;
						color: #e39b55;
						// font-weight: bold;
					}

					.t3 {
						padding-left: 5rpx;
					}
				}
			}

			.panel-detail {
				padding: 25rpx;
				padding-top: 0;
				background-color: #f8f8f8;

				.item {
					background-color: white;
					margin-top: 25rpx;
					border-radius: 10rpx;
					padding: 25rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.left {
						.img1 {
							width: 80rpx;
							;
							height: 80rpx;
							padding-right: 15rpx;
						}

						display: flex;
						justify-content: center;

						// flex-direction: column;
						.t1 {
							// font-size: 30rpx;
							font-weight: 600;
							font-size: 30rpx;
						}

						.t2 {
							color: #f29f5c;
						}

						.img {
							padding-top: 10rpx;
							width: 30rpx;
						}
					}

					.right {
						text-align: right;
						width: 20%;

						.progress-detail {
							padding-top: 10rpx;
						}
					}

					.left2 {
						display: flex;
						// flex-direction: column;
						justify-content: center;

						.img1 {
							width: 80rpx;
							;
							height: 80rpx;
							padding-right: 15rpx;
						}

						.t1 {
							// font-size: 30rpx;
							font-weight: 600;
							font-size: 30rpx;
							color: #818181;
						}

						.t2 {
							color: #818181;
						}

						.img {
							padding-top: 10rpx;
							filter: grayscale(100%);
							width: 30rpx;

						}
					}

					.right2 {
						padding: 10rpx;
						padding-left: 30rpx;
						padding-right: 30rpx;
						background-color: #f0f1f5;
						color: #393939;
					}
				}
			}

		}
	}

	.panel-2 {
		.title {
			color: #999999;
			padding: 25rpx;
			padding-bottom: 0;
		}

		.item {
			display: flex;
			flex-direction: column;
			padding: 25rpx;
			padding-bottom: 50rpx;

			.img {
				width: 100%;
				border-radius: 25rpx;
			}

			.t1 {
				padding-top: 25rpx;
				font-weight: bold;
			}

			.t2 {
				padding-top: 10rpx;
				color: #999999;
			}
		}
	}
</style>