<template>
	<!-- 顶部区域 -->
	<view class="top">
		<view class="item" @click="goToMT('回复我的')">
			<image class="img" src="../../static/messages/returnMy.png" mode="widthFix"></image>
			<text>回复我的</text>
		</view>

		<view class="item" @click="goToMT('@我的')">
			<image class="img" src="../../static/messages/@my.png" mode="widthFix"></image>
			<text>@我的</text>
		</view>

		<view class="item" @click="goToMT('收到的赞')">
			<image class="img" src="../../static/messages/Like.png" mode="widthFix"></image>
			<text>收到的赞</text>
		</view>

		<view class="item" @click="goToSysMes">
			<image class="img" src="../../static/messages/SysMes.png" mode="widthFix"></image>
			<text>系统通知</text>
		</view>
	</view>

	<view class="none">
		<image class="img" src="../../static/messages/none.png" mode="widthFix"></image>
		<text>暂时还没有收到私信消息哦</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},

		methods: {
			// 跳转到 系统通知 界面
			goToSysMes() {
				uni.navigateTo({
					url: "/subpkg/SysMes/SysMes"
				})
			},

			// 跳转到 消息跳转过来 界面
			goToMT(e) {
				// console.log(e)

				uni.navigateTo({
					url: "/subpkg/messagesTo/messagesTo?e=" + e
				})
			},


			// 跳转到 系统通知 界面
			goToSysMes() {
				uni.navigateTo({
					url: "/subpkg/SysMes/SysMes"
				})
			},
		},

	}
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: space-between;
		padding: 30rpx;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;

			.img {
				width: 120rpx;
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
</style>