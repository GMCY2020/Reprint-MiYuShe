<!-- 社区频道等级 界面 -->
<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<!-- 顶部区域 -->
		<view class="top">

			<view class="card">
				<image class="img" src="../../static/channel/Lv5.png"></image>
			</view>

			<view class="all-progress">
				<text class="t1">Lv.5</text>
				<progress class="all-progress-detail" :percent="40" stroke-width="12" activeColor="#ffe14d"
					border-radius="20rpx" />
				<text class="t2">Lv.6</text>
			</view>

			<view class="line" />

			<view class="experience">
				<view class="experience-today">
					<text class="t1">今日获得经验:</text>
					<text class="t2">0</text>
				</view>
				<view class="experience-history" @click="goToGDT">
					<text class="t">今日获取明细</text>
					<uni-icons type="forward" color="#999999"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 自制分段区域 -->
		<view class="choose">
			<view class="item" @click="onClickItem(0)">
				<text class="t1" v-if="pan === 1">升级攻略</text>
				<text class="t2" v-if="pan === 0">升级攻略</text>
				<view class="v" v-if="pan === 0"></view>
			</view>
			<view class="item" @click="onClickItem(1)">
				<text class="t1" v-if="pan === 0">等级成长</text>
				<text class="t2" v-if="pan === 1">等级成长</text>
				<view class="v" v-if="pan === 1"></view>
			</view>
		</view>

		<view class="my-content">
			<view v-if="pan === 0">
				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">签到</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+5</text>
								<text>，每日获取1次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/1次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">发主帖</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+6</text>
								<text>，每日获取2次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/2次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">发评论</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+3</text>
								<text>，每日获取3次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/3次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">点赞</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+1</text>
								<text>，每日获取10次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/10次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">被点赞</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+2</text>
								<text>，每日获取10次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/10次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">被回复</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+4</text>
								<text>，每日获取10次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/10次</text>
						</view>
					</view>
				</view>

				<view class="line" />

				<view class="panel">
					<view class="item">
						<view class="left">
							<text class="t1">被收藏</text>
							<view class="t2">
								<text>经验值</text>
								<text class="num">+2</text>
								<text>，每日获取10次</text>
							</view>
						</view>
						<view class="right">
							<progress class="pro-detail" :percent="7" stroke-width="9" activeColor="#ffe14d"
								border-radius="20" />
							<text>0/10次</text>
						</view>
					</view>
				</view>

				<view class="line" />
			</view>
			<view v-if="pan === 1">
				<view class="panel2">
					<image class="img" src="../../static/channel/Lv.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				pan: 0,
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

			// 跳转到 今日获取明细 界面
			goToGDT() {
				uni.navigateTo({
					url: "../../subpkg/GDT/GDT"
				})
			}
		},

		onLoad(options) {
			uni.setNavigationBarTitle({
				title: options.item + "频道等级"
			})
			this.ScHeight = uni.getSystemInfoSync().windowHeight
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


	.all-progress-detail ::v-deep .uni-progress-bar {
		border-radius: 10px !important;
		overflow: hidden;
	}

	.all-progress-detail ::v-deep .uni-progress-inner-bar {
		border-radius: 10px !important;
		overflow: hidden;
		background: #ffe14d;
	}

	.pro-detail ::v-deep .uni-progress-bar {
		border-radius: 10px !important;
		overflow: hidden;
	}

	.pro-detail ::v-deep .uni-progress-inner-bar {
		border-radius: 10px !important;
		overflow: hidden;
		background: #ffe14d;
	}


	.top {
		background-color: white;

		.card {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 30rpx;

			.img {
				width: 150rpx;
				height: 150rpx;
			}

		}

		.all-progress {
			display: flex;
			justify-content: space-between;

			.all-progress-detail {
				width: 66%;
			}

			.t1 {
				padding-left: 50rpx;
			}

			.t2 {
				padding-right: 50rpx;
			}
		}

		.experience {
			display: flex;
			justify-content: space-between;
			padding: 25rpx;

			.experience-today {
				.t2 {
					padding-left: 25rpx;
					color: #ffe14d;
				}
			}

			.experience-history {
				.t {
					color: #999999;
				}
			}
		}

	}

	.choose {
		background-color: white;
		margin-top: 30rpx;
		padding-top: 25rpx;
		display: flex;
		justify-content: space-around;
		border-bottom: 1rpx solid #f8f8f8;

		padding-left: 180rpx;
		padding-right: 180rpx;

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
				background-color: #ffe14d;
				width: 50%;
				display: block;
				margin: 0 auto;
				border: 6rpx solid #ffe14d;
				border-radius: 25rpx;
				margin-bottom: 4rpx;
			}
		}
	}

	.my-content {
		background-color: white;

		.panel {
			.item {
				padding: 25rpx;
				display: flex;
				justify-content: space-between;

				.left {
					.t1 {
						font-size: 30rpx;
					}

					.t2 {
						font-size: 25rpx;
						color: #999999;

						.num {
							color: #e5b029;
						}
					}
				}

				.right {
					display: flex;
					justify-content: center;
					align-items: center;

					.pro-detail {
						padding-right: 25rpx;
						width: 170rpx;
					}

					font-size: 28rpx;
					color: #999999;
				}
			}
		}

		.panel2 {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 25rpx;

			.img {
				width: 100%;
			}
		}
	}



	.line::after {
		content: '';
		width: 90%;
		height: 1px;
		display: block;
		margin: 0 auto;
		border-bottom: 1px solid #f8f8f8;
		padding: 1px;
	}
</style>