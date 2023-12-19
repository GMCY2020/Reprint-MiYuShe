<template>
	<view>
		<view v-if="showselected">
			<view class="tabbar">
				<view class="navigator">
					<view v-for="(item,index) in tabBar.list" :key="item.pagePath">
						<block v-if="item.text !== ''">
							<view class="navigator-item" @click="switchTab(item,index)">
								<image :src="'../../' + item.iconPath" class="icon" v-if="selectedIndex !== index" />
								<image :src="'../../' + item.selectedIconPath" class="icon" v-else />
								<text
									:class="['item-text',{'text-active':selectedIndex === index}]">{{item.text}}</text>
							</view>

						</block>
						<block v-else>
							<image :src="'../../' + item.iconPath" style="width: 80rpx;" mode="widthFix" />
						</block>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tabBar",


		watch: {
			$route: {
				immediate: true,
				handler(to) {
					if (to.meta.isTabBar) {
						// this.__path__ = this.$route.path
						this.showselected = true
						const index = this.tabBar.list.findIndex(item => to.meta.pagePath === item.pagePath)
						if (index > -1) {
							this.selectedIndex = index
						}
					}
				}
			}
		},


		data() {
			return {
				selectedIndex: uni.getStorageSync('selectedIndex') || 0,
				showselected: true, // 是否在页面使用tarBar
				tabBar: {
					list: [{
							"pagePath": "pages/home/home",
							"iconPath": "static/my/tabBar/home.png",
							"selectedIconPath": "static/my/tabBar/home-active.png",
							"text": "主页"
						}, {
							"pagePath": "pages/dynamic/dynamic",
							"iconPath": "static/my/tabBar/dynamic.png",
							"selectedIconPath": "static/my/tabBar/dynamic-active.png",
							"text": "动态"
						}, {
							"pagePath": "",
							"iconPath": "static/my/tabBar/+.png",
							"selectedIconPath": "",
							"text": ""
						}, {
							"pagePath": "pages/messages/messages",
							"iconPath": "static/my/tabBar/message.png",
							"selectedIconPath": "static/my/tabBar/message-active.png",
							"text": "消息"
						},
						{
							"pagePath": "pages/my/my",
							"iconPath": "static/my/tabBar/my.png",
							"selectedIconPath": "static/my/tabBar/my-active.png",
							"text": "我的"
						}
					]
				},

			};
		},

		methods: {
			switchTab(item, index) {
				let url = '/' + item.pagePath
				let pagePath = url
				uni.switchTab({
					url
				})
				this.tabBar.list.forEach((v, i) => {
					if (item.pagePath === v.pagePath) {
						uni.setStorageSync('selectedIndex', index);
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		z-index: 999;
		background: #F5F5F5;
		border-top: 2rpx solid #eee;
	}

	.navigator {
		display: flex;
		justify-content: space-between;
		width: 85%;
		margin: 0 auto;
		padding: 20rpx;
	}

	.navigator-item {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 50rpx;
		height: 100%;
	}

	.item-text {
		margin-top: 6rpx;
		color: #777E86;
		font-size: 24rpx;
	}

	.text-active {
		color: #2E92FD !important;
	}

	.icon {
		width: 45rpx;
		height: 45rpx;
	}
</style>