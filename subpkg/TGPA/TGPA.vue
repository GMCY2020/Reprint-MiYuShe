<!-- 动图自动播放 界面 -->
<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<view class="panel">
			<view class="panel-detail">
				<view class="item">
					<text>智能模式</text>
					<uni-icons type="checkmarkempty" color="#1a73e8" size="25" v-if="start === 1"></uni-icons>
				</view>
			</view>
			<text class="title">Wi-Fi自动播放动图，移动流量自动播放 5MB 以下的动图。</text>
		</view>

		<view class="panel">
			<view class="panel-detail">
				<view class="item">
					<text>移动流量和 Wi-Fi</text>
					<uni-icons type="checkmarkempty" color="#1a73e8" size="25" v-if="start === 2"></uni-icons>
				</view>

				<view class="line" />

				<view class="item">
					<text>仅 Wi-Fi</text>
					<uni-icons type="checkmarkempty" color="#1a73e8" size="25" v-if="start === 3"></uni-icons>
				</view>

				<view class="line" />

				<view class="item">
					<text>关闭</text>
					<uni-icons type="checkmarkempty" color="#1a73e8" size="25" v-if="start === 4"></uni-icons>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				start: 1,
				ScHeight: 0,
			};
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

	.panel {
		display: flex;
		flex-direction: column;
		margin-top: 30rpx;

		.title {
			padding-top: 5rpx;
			padding-left: 30rpx;
			color: #868686;
			font-size: 25rpx;
		}

		.panel-detail {
			background-color: white;

			.item {
				padding: 25rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.t {
					display: flex;
					align-items: center;
				}

				.right {
					display: flex;
					align-items: center;
				}
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