<!-- 通行证账号与安全 界面 -->

<template>
	<view>
		<view class="container">
			<view class="item">
				<text>管理收货地址</text>
				<uni-icons type="forward"></uni-icons>
			</view>
			<view class="line" />
			<view class="item">
				<text>修改密码</text>
				<uni-icons type="forward"></uni-icons>
			</view>
			<view class="line" />
			<view class="item">
				<text>账号安全设置</text>
				<uni-icons type="forward"></uni-icons>
			</view>
			<view class="line" />
			<view class="item">
				<text>注销账号</text>
				<uni-icons type="forward"></uni-icons>
			</view>
			<view class="line" />
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
	.container {
		background-color: white;

		.item {
			display: flex;
			padding: 30rpx;
			justify-content: space-between;
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