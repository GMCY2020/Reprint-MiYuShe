<!-- 商品详情 界面 -->

<template>
	<view>
		<view class="top">
			<image class="img" :src="'../../static/my/coin/' + shop[0]" mode="widthFix"></image>
			<view class="title1">
				<image class="img-coin" src="../../static/my/coin/coin.png" mode="widthFix"></image>
				<text class="money">{{shop[2]}}</text>
				<text>米游币</text>
			</view>
			<text class="title2">{{shop[1]}}</text>
		</view>

		<view class="mid">
			<view>
				<text class="t">商品描述：</text>
				<text>{{shop[1].split("】")[1]}}</text>
			</view>
			<view>
				<text class="t">兑换限制：</text>
				<text>{{shop[1].split("】")[0].split("【")[1]}} 等级≥4</text>
			</view>

		</view>

		<view class="under">
			<view class="button" @click="open">
				立即兑换
			</view>

		</view>



		<uni-popup ref="popup" type="bottom">
			<view class="my-popup">
				<view class="popup-top">
					<text>兑换情况</text>
					<uni-icons type="closeempty" size="40rpx" color="#999999" @click="close"></uni-icons>
				</view>

				<view class="line" />

				<view class="popup-mid">
					<text>购买数量</text>

					<view class="my-number-box">
						<text class="l">-</text>
						<text class="num">1</text>
						<text class="r">+</text>
						<!-- <uni-icons class="r" type="plusempty" size="40rpx"></uni-icons> -->
					</view>
				</view>

				<view class="line" />

				<view class="popup-under">
					<view>
						<view class="item">
							<text class="t1">合计:</text>
							<image class="img" src="../../static/my/coin/coin.png"></image>
							<text class="t2">{{shop[2]}}</text>
						</view>
						<text class="t3">余额: 9999W米游币</text>
					</view>

					<view class="button" @click="buy">
						确认兑换
					</view>
				</view>
			</view>
		</uni-popup>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				shop: null,
			};
		},

		methods: {
			open() {
				this.$refs.popup.open('bottom')
			},

			close() {
				this.$refs.popup.close()
			},

			buy() {
				uni.showToast({
					title: '兑换成功',
					icon: 'none',
				})

				this.close()
			}
		},

		onLoad(options) {
			this.shop = options.item.split(',')
		}
	}
</script>

<style lang="scss">
	.top {
		background-color: white;
		padding-bottom: 25rpx;

		.img {
			width: 100%;
		}

		.title1 {
			display: flex;
			align-items: center;
			padding: 25rpx;
			color: #999999;

			.img-coin {
				width: 60rpx;
			}

			.money {
				color: #f29f5c;
				font-size: 50rpx;
				padding-left: 10rpx;
				padding-right: 10rpx;
			}
		}

		.title2 {
			font-weight: bold;
			padding: 25rpx;
		}
	}

	.mid {
		margin-top: 30rpx;
		background-color: white;
		padding: 25rpx;
		color: #999999;
		height: 500rpx;

		.t {
			font-weight: bold;
		}
	}

	.under {
		position: absolute;
		bottom: 0;
		background-color: white;
		padding: 25rpx;
		width: 94%;

		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #1aa1f9;
			border-radius: 10rpx;
			padding: 25rpx;
			color: white;
			font-size: 40rpx;
		}
	}

	.my-popup {
		background-color: white;
		border-radius: 25rpx 25rpx 0 0;

		.popup-top {
			padding: 25rpx;
			font-weight: bold;
			font-size: 40rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.popup-mid {
			padding: 25rpx;
			display: flex;
			justify-content: space-between;
			padding-top: 40rpx;
			padding-bottom: 40rpx;

			.my-number-box {
				font-size: 30rpx;

				.l {
					border: 1rpx solid #999999;
					border-radius: 10rpx 0 0 10rpx;
					padding-left: 25rpx;
					padding-right: 25rpx;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
				}

				.r {
					border: 1rpx solid #999999;
					border-radius: 0 10rpx 10rpx 0;
					padding-left: 25rpx;
					padding-right: 25rpx;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
				}

				.num {
					border-top: 1rpx solid #999999;
					border-bottom: 1rpx solid #999999;
					padding-left: 40rpx;
					padding-right: 40rpx;
					padding-top: 15rpx;
					padding-bottom: 15rpx;
				}
			}
		}

		.popup-under {
			display: flex;
			justify-content: space-between;
			padding: 25rpx;

			.item {
				display: flex;
				align-items: center;
			}

			.t1 {
				padding-left: 25rpx;
				font-size: 30rpx;
			}

			.img {
				padding-left: 25rpx;
				width: 50rpx;
				height: 50rpx;
			}

			.t2 {
				padding-left: 10rpx;
				color: #f29f5c;
				font-size: 50rpx;
			}

			.t3 {
				padding-left: 25rpx;
				color: #999999;
				font-size: 25rpx;
			}

			.button {
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #1aa1f9;
				color: white;
				margin-top: 7rpx;
				margin-bottom: 7rpx;
				padding-left: 50rpx;
				padding-right: 50rpx;
				border-radius: 10rpx;
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