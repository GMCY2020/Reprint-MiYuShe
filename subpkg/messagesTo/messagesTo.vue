<template>
	<view v-if="e === '回复我的'">
		<view class="top">
			<view> </view>
			<view class="right">
				<text>所有回复</text>
				<uni-icons type="right"></uni-icons>
			</view>
		</view>

		<view class="none">
			<image class="img" src="../../static/messages/none.png" mode="widthFix"></image>
			<text>暂时还没有收到私信消息哦</text>
		</view>
	</view>

	<view v-if="e === '@我的'">
		<view class="top">
			<view> </view>
			<view class="right">
				<text>所有转发@</text>
				<uni-icons type="right"></uni-icons>
			</view>
		</view>

		<view class="none">
			<image class="img" src="../../static/messages/none.png" mode="widthFix"></image>
			<text>暂时还没有收到私信消息哦</text>
		</view>
	</view>

	<view v-if="e === '收到的赞'">
		<view class="top">
			<view> </view>
			<view class="right">
				<text>所有赞</text>
				<uni-icons type="right"></uni-icons>
			</view>

		</view>

		<view class="line" />

		<view class="all">
			<view class="item">
				<view class="item-top">
					<view class="left">
						<image class="img" src="../../static/messages/game-ys.jpg" mode="widthFix"></image>
						<text class="t1">name</text>
						<text class="t2">赞了我的帖子</text>
					</view>

					<text class="t3">2022-01-31</text>
				</view>
				<view class="item-mid">
					<image class="img" src="../../static/messages/active_3.png" mode="aspectFill"></image>
					<text class="t4">活动名字</text>
				</view>

				<view class="line" />

			</view>

			<view class="item">
				<view class="item-top">
					<view class="left">
						<image class="img" src="../../static/messages/game-ys.jpg" mode="widthFix"></image>
						<text class="t1">name</text>
						<text class="t2">赞了我的帖子</text>
					</view>

					<text class="t3">2022-01-31</text>
				</view>
				<view class="item-mid">
					<image class="img" src="../../static/messages/active_3.png" mode="aspectFill"></image>
					<text class="t4">活动名字</text>
				</view>

				<view class="line" />

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				e: '',
			};
		},

		onLoad(option) {
			uni.setNavigationBarTitle({
				title: option.e
			})

			this.e = option.e
		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: space-between;
		padding: 25rpx;
	}

	.all {
		.item {
			padding: 25rpx;

			.item-top {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.left {
					display: flex;
					align-items: center;

					.img {
						width: 70rpx;
						border-radius: 50%;
					}

					.t1 {
						padding-left: 10rpx;
						color: #7d7d7d;
					}

					.t2 {
						padding-left: 10rpx;
						color: #c2c2c2;
					}
				}

				.t3 {
					color: #bfbfbf;
				}

			}

			.item-mid {
				background-color: #f8f8f8;
				margin-top: 20rpx;
				margin-left: 80rpx;
				display: flex;
				align-items: center;
				border-radius: 15rpx;

				.img {
					border-radius: 15rpx 0 0 15rpx;
					width: 150rpx;
					height: 150rpx;
				}

				.t4 {
					padding-left: 25rpx;
					font-size: 35rpx;
					color: #7d7d7d;
				}
			}
		}
	}

	.none {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 300rpx;
		color: #a9a9a9;

		.img {
			width: 400rpx;
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