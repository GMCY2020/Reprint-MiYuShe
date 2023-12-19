<!-- 新消息通知 界面 -->

<template>
	<view>
		<view class="panel">
			<text class="title">有以下消息通知我</text>
			<view class="panel-detail">
				<view class="item">
					<text>回复我</text>
					<view class="right">
						<text class="t">所有人</text>
						<uni-icons type="forward" color="#868686"></uni-icons>
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>转发@我</text>
					<view class="right">
						<text class="t">所有人</text>
						<uni-icons type="forward" color="#868686"></uni-icons>
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>主动@我</text>
					<view class="right">
						<text class="t">所有人</text>
						<uni-icons type="forward" color="#868686"></uni-icons>
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>给我点赞</text>
					<view class="right">
						<text class="t">所有人</text>
						<uni-icons type="forward" color="#868686"></uni-icons>
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>关注了我</text>
					<view class="right">
						<text class="t">所有人</text>
						<uni-icons type="forward" color="#868686"></uni-icons>
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>系统通知</text>
					<view class="right">
						<switch color="#007aff" style="transform:scale(0.9)" checked />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>私信通知</text>
					<view class="right">
						<switch color="#007aff" style="transform:scale(0.9)" checked />
					</view>
				</view>
			</view>
		</view>

		<view class="panel">
			<text class="title">陌生人私信过滤</text>
			<view class="panel-detail">
				<view class="item">
					<text>不接收未关注人私信</text>
					<view class="right">
						<switch color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>

				<view class="line" />

				<view class="item">
					<text>合并未关注人私信</text>
					<view class="right">
						<switch color="#007aff" style="transform:scale(0.9)" />
					</view>
				</view>
			</view>
		</view>

		<view class="panel">
			<text class="title">开启合并后，将不通知未关注人私信</text>
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
	.panel {
		display: flex;
		flex-direction: column;

		.title {
			padding: 20rpx;
			padding-left: 30rpx;
			color: #868686;
			font-size: 25rpx;
		}

		.panel-detail {
			background-color: white;

			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 30rpx;

				.right {
					.t {
						color: #868686;
					}
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