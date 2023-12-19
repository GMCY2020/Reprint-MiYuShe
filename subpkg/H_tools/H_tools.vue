<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">
		<block v-for="(detail, pan, index) in ToolsData[gamePan]">
			<view class="panel">
				<view class="title">
					{{pan}}
				</view>
				<view class="items">
					<block v-for="(de_img, de_text, de_index) in detail">
						<view class="item">
							<image class="img" :src="'../../static/home/' + de_img" mode="widthFix"></image>
							<text>{{de_text}}</text>
						</view>
					</block>
				</view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				ScHeight: 0,
				ToolsData: {
					"原神": {
						"工具": {
							"原神战绩": "tools/y-a-1.png",
							"旅行者札记": "tools/y-a-2.png",
							"养成计算器": "tools/y-a-3.png",
							"阵容模拟器": "tools/y-a-4.png",
							"卡牌广场": "tools/y-a-5.png",
							"大地图": "tools/y-a-6.png",
							"观测枢": "tools/y-a-7.png",
							"招募广场": "tools/y-a-8.png",
							"米游铺": "tools/y-a-9.png",
							"壁纸": "tools/y-a-10.png",
							"漫画": "tools/y-a-11.png",
							"客服": "tools/y-a-12.png",
							"留影叙佳节": "tools/y-a-13.png",
							"电子杂志": "tools/y-a-14.png",
							"同人征集": "tools/y-a-15.png",
							"摹本交流页": "tools/y-a-16.png",
						},
						"小游戏": {
							"无忧梦乡": "tools/y-b-1.png",
							"绘忆星辰": "tools/y-b-2.png",
							"纸间奇遇": "tools/y-b-3.png",
							"蹦蹦史莱姆": "tools/y-b-4.png",
							"之夜": "tools/y-b-5.png",
							"铭记之旅": "tools/y-b-6.png",
							"许愿池": "tools/y-b-7.png",
							"丘丘梦工坊": "tools/y-b-8.png",
							"史莱姆乐园": "tools/y-b-9.png",
							"飞行挑战": "tools/y-b-10.png",
							"弦上回音": "tools/y-b-11.png",
							"剪彩映虹": "tools/y-b-12.png",
						},
						"版本活动": {
							"3.4版本": "tools/y-c-1.png",
							"神工天巧": "tools/y-c-2.png",
						},
					},

					"崩坏3": {
						"游戏工具": {
							"手账": "tools/b3-a-1.png",
							"周报": "tools/b3-a-2.png",
							"自助查询": "tools/b3-a-3.png",
							"活动日历": "tools/b3-a-4.png",
							"乐土阵容榜": "tools/b3-a-5.png",
						},
						"更多功能": {
							"祈愿盒": "tools/b3-b-1.png",
							"许愿池": "tools/b3-b-2.png",
							"漫画": "tools/b3-b-3.png",
							"神州折剑录": "tools/b3-b-4.png",
							"游戏壁纸": "tools/b3-b-5.png",
							"星海绘卷": "tools/b3-b-6.png",
							"电子杂志": "tools/b3-b-7.png",
							"英栏关系网": "tools/b3-b-8.png",
							"时光礼物盒": "tools/b3-b-9.png",
						},
						"月光社": {
							"作业中心": "tools/b3-c-1.png",
						},
					},

					"大别墅": {
						"常驻功能": {
							"许愿池": "tools/d-a-1.png",
							"祈愿盒子": "tools/d-a-2.png",
							"小黑屋": "tools/d-a-3.png",
						},
						"周年回忆": {
							"中二冒险": "tools/d-b-1.png",
							"晴空邀约": "tools/d-b-2.png",
							"侦探笔记": "tools/d-b-3.png",
						},
						"往期玩法": {
							"夏日游园会": "tools/d-c-1.png",
							"年度报告": "tools/d-c-2.png",
						},
					},
				},

				gamePan: null,
			};
		},

		onLoad(options) {
			this.ScHeight = uni.getSystemInfoSync().windowHeight - 1 + 1
			this.gamePan = options.gamePan

			if (this.gamePan === "原神") {
				uni.setNavigationBarTitle({
					title: "旅行工具"
				})
			} else if (this.gamePan === "崩坏3") {
				uni.setNavigationBarTitle({
					title: "米游社崩坏3百宝箱"
				})
			} else if (this.gamePan === "大别墅") {
				uni.setNavigationBarTitle({
					title: "米游社大别墅百宝箱"
				})
			}
		}
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
		padding: 25rpx;
		background-color: white;
		margin-bottom: 25rpx;

		.title {
			font-weight: bold;
			font-size: 35rpx;
			padding-left: 30rpx;
		}

		.items {
			display: flex;
			flex-wrap: wrap;
			padding: 10rpx;

			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 25%;
				padding-top: 25rpx;

				.img {
					width: 120rpx;
				}
			}
		}
	}
</style>