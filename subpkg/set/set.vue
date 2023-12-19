<!-- 设置 界面 -->

<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<!-- 面板1 -->
		<view class="panel">
			<view class="item" @click="goToAS">
				<text>通行证账号与安全</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
		</view>

		<!-- 面板2 -->
		<view class="panel">
			<view class="item" @click="goToNMN">
				<text>新消息通知</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToPS">
				<text>隐私设置</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToMS">
				<text>屏蔽设置</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
		</view>

		<!-- 面板3 -->
		<view class="panel">
			<view class="item" @click="goToEPM">
				<text>护眼模式</text>
				<view class="item-detail">
					<text class="t2">关闭</text>
					<uni-icons type="forward" color="#c6c6c6"></uni-icons>
				</view>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToVA">
				<text>视频自动播放</text>
				<view class="item-detail">
					<text class="t2">仅 Wi-Fi</text>
					<uni-icons type="forward" color="#c6c6c6"></uni-icons>
				</view>

			</view>
			<view class="v"></view>
			<view class="item" @click="goToTGPA">
				<text>动图自动播放</text>
				<view class="item-detail">
					<text class="t2">智能模式</text>
					<uni-icons type="forward" color="#c6c6c6"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 面板4 -->
		<view class="panel">
			<view class="item" @click="goToATMYS">
				<text>关于米游社</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="cleanData">
				<text>清除缓存</text>
				<view class="item-detail">
					<text class="t2">40.33M</text>
					<uni-icons type="forward" color="#c6c6c6"></uni-icons>
				</view>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToSAF">
				<text>建议与反馈</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="update">
				<text>检测更新</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
		</view>

		<!-- 面板5 -->
		<view class="panel">
			<view class="item" @click="goToUA">
				<text>用户协议</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToPP">
				<text>隐私政策</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToPICL">
				<text>个人信息收集清单</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
			<view class="v"></view>
			<view class="item" @click="goToLPIST">
				<text>第三方共享个人信息清单</text>
				<uni-icons type="forward" color="#c6c6c6"></uni-icons>
			</view>
		</view>

		<!-- 退出登录 -->
		<view class="out">
			<view class="item" @click="unLoading">
				<text>退出登录</text>
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

		methods: {
			// Account and security
			// 跳转到 通行证账号与安全 界面
			goToAS() {
				uni.navigateTo({
					url: "../../subpkg/AS/AS"
				})
			},

			// New message notification
			// 跳转到 新消息通知 界面
			goToNMN() {
				uni.navigateTo({
					url: "../../subpkg/NMN/NMN"
				})
			},

			// privacy setting
			// 跳转到 隐私设置 界面
			goToPS() {
				uni.navigateTo({
					url: "../../subpkg/PS/PS"
				})
			},

			// Mask setting
			// 跳转到 屏蔽设置 界面
			goToMS() {
				uni.navigateTo({
					url: "../../subpkg/MS/MS"
				})
			},

			// Eye protection mode
			// 跳转到 护眼模式 界面
			goToEPM() {
				uni.navigateTo({
					url: "../../subpkg/EPM/EPM"
				})
			},

			// Video autoplay
			// 跳转到 视频自动播放 界面
			goToVA() {
				uni.navigateTo({
					url: "../../subpkg/VA/VA"
				})
			},

			// The giFs play automatically
			// 跳转到 动图自动播放 界面
			goToTGPA() {
				uni.navigateTo({
					url: "../../subpkg/TGPA/TGPA"
				})
			},

			// About the Mi You Sha
			// 跳转到 关于米游社 界面
			goToATMYS() {
				uni.navigateTo({
					url: "../../subpkg/ATMYS/ATMYS"
				})
			},

			// 清除缓存
			cleanData() {
				uni.showToast({
					title: "清除成功",
					icon: "none"
				})
			},

			// Suggestions and feedback
			// 跳转到 建议与反馈 界面
			goToSAF() {
				uni.navigateTo({
					url: "../../subpkg/SAF/SAF"
				})
			},

			// Detection update
			// 检测更新
			update() {
				uni.showToast({
					title: "当前已是最新版本",
					icon: "none"
				})
			},

			// user agreement
			// 跳转到 用户协议 界面
			goToUA() {
				uni.navigateTo({
					url: "../../subpkg/UA/UA"
				})
			},

			// privacy policy
			// 跳转到 隐私政策 界面
			goToPP() {
				uni.navigateTo({
					url: "../../subpkg/PP/PP"
				})
			},

			// Personal information collection list
			// 跳转到 个人信息收集清单 界面
			goToPICL() {
				uni.navigateTo({
					url: "../../subpkg/PICL/PICL"
				})
			},

			// List of personal information shared by third parties
			// 跳转到 第三方共享个人信息清单 界面
			goToLPIST() {
				uni.navigateTo({
					url: "../../subpkg/LPIST/LPIST"
				})
			},

			// 退出登录
			unLoading() {
				uni.showToast({
					title: "退出登录",
					icon: "none"
				})
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

	.panel {
		background-color: white;
		margin-top: 30rpx;

		.item {
			padding: 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.item-detail {
				display: flex;
				align-items: center;

				.t2 {
					font-size: 25rpx;
					color: #868686;
				}
			}

		}

		.v::after {
			content: '';
			width: 90%;
			height: 1px;
			display: block;
			margin: 0 auto;
			border-bottom: 1px solid #f8f8f8;
			padding: 1px;

		}
	}

	.out {
		background-color: white;
		margin-top: 30rpx;

		.item {
			padding: 25rpx;
			display: flex;
			justify-content: center;
		}
	}
</style>