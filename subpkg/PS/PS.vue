<!-- 隐私设置 界面 -->

<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<view class="panel">
			<text class="title">社交隐私设置</text>
			<view class="panel-detail">
				<view class="item">
					<text class="t">个人主页访问权限</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text class="t">在个人中心展示我发布的帖子、动态</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text class="t">在个人中心展示我的评论</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text class="t">在个人中心展示我的收藏</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>
			</view>
		</view>

		<view class="panel">
			<view class="panel-detail">
				<view class="item">
					<text class="t">上传图片时添加水印</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text class="t">记录帖子、动态浏览记录</text>
					<view class="right">
						<switch checked color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>
			</view>
		</view>

		<view class="panel">
			<view class="panel-detail">
				<view class="item">
					<text class="t">APP隐私权限</text>
					<view class="right">
						<uni-icons type="forward"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
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
			padding: 20rpx;
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