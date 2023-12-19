<!-- 关于米游社 -->

<template>
	<view>
		<view class="top">
			<image class="APP-icon" src="../../static/item/miHoYo.png"></image>
			<text class="APP-name">米游社</text>
			<text class="APP-v">Version 2.44.1</text>
		</view>

		<view class="panel">
			<view class="panel-detail">
				<view class="item">
					<text class="t1">QQ群</text>
					<text class="t2">711368953</text>
				</view>
				<view class="item">
					<text class="t1">邮箱</text>
					<text class="t2">community@mihoyo.com</text>
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="b1">
				<text class="t1">米游社服务协议</text>
				<text class="t2">|</text>
				<text class="t1">米游社隐私政策</text>
			</view>
			<view class="b2">
				<text class="t3">米游社：© 2018 米哈游版权所有</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 80rpx;

		.APP-icon {
			width: 150rpx;
			height: 150rpx;
			border-radius: 25rpx;
		}

		.APP-name {
			font-weight: bold;
			font-size: 50rpx;
			padding: 25rpx;
		}

		.APP-v {
			font-size: 35rpx;
		}
	}

	.panel {
		.panel-detail {
			.item {
				display: flex;
				justify-content: space-between;
				padding-left: 80rpx;
				padding-right: 80rpx;
				padding-bottom: 60rpx;

				font-size: 35rpx;

				.t1 {
					color: #a9a9a9;
				}

				.t2 {
					color: #727272;
				}
			}
		}
	}

	.bottom {
		padding-top: 320rpx;

		.b1 {
			display: flex;
			justify-content: center;

			.t1 {
				color: #15abeb;
				font-size: 35rpx;
				font-weight: bold;
			}

			.t2 {
				color: #f0f0f0;
				font-size: 35rpx;
				padding-left: 10rpx;
				padding-right: 10rpx;
			}
		}

		.b2 {
			display: flex;
			justify-content: center;
			padding-top: 40rpx;

			.t3 {
				color: #a5a5a5;
			}
		}
	}
</style>