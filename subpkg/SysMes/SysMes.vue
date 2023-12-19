<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<view class="SysMes">
			<view class="item">
				<view class="top">
					<view class="left">
						<image class="img" src="../../static/messages/game-ys.jpg" mode="widthFix"></image>
						<text class="t1">原神</text>
					</view>
					<text class="t2">1小时前</text>
				</view>
				<view class="mid">
					<image class="img" src="../../static/messages/active_1.jpg" mode="widthFix"></image>
				</view>
				<view class="under">
					<text class="t1">《原神》「演武传心」晒截图活动开启！</text>
					<text class="t2">发布演武传心战绩截图，赢原石奖励~</text>
				</view>
			</view>

			<view class="item">
				<view class="top">
					<view class="left">
						<image class="img" src="../../static/messages/game-bh3.jpg" mode="widthFix"></image>
						<text class="t1">崩坏3</text>
					</view>
					<text class="t2">2小时前</text>
				</view>
				<view class="mid">
					<image class="img" src="../../static/messages/active_2.png" mode="widthFix"></image>
				</view>
				<view class="under">
					<text class="t1">【崩坏3】符华生日快乐！</text>
					<text class="t2">万物复苏，春景正好~参与生日社区讨论活动即可瓜分米游币，还有机会赢取水晶&周边奖励~</text>
				</view>
			</view>

			<view class="item">
				<view class="top">
					<view class="left">
						<image class="img" src="../../static/messages/game-bh3.jpg" mode="widthFix"></image>
						<text class="t1">崩坏3</text>
					</view>
					<text class="t2">18小时前</text>
				</view>
				<view class="mid">
					<image class="img" src="../../static/messages/active_3.png" mode="widthFix"></image>
				</view>
				<view class="under">
					<text class="t1">【崩坏3】主线回顾小剧场</text>
					<text class="t2">故事的终幕即将开启。跟随她的脚步，一起回顾「崩坏」的故事......然后，向着明天。</text>
				</view>
			</view>

			<view class="item">
				<view class="top">
					<view class="left">
						<image class="img" src="../../static/messages/game-sr.png" mode="widthFix"></image>
						<text class="t1">崩坏：星穹铁道</text>
					</view>
					<text class="t2">23小时前</text>
				</view>
				<view class="mid">
					<image class="img" src="../../static/messages/active_4.png" mode="widthFix"></image>
				</view>
				<view class="under">
					<text class="t1">【星穹铁道】「百事贞吉，一心同归。」</text>
					<text class="t2">停云角色前瞻|查看技能展示、角色故事>>></text>
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

	.SysMes {
		.item {
			background-color: white;
			padding: 25rpx;
			margin-bottom: 25rpx;

			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left {
					display: flex;
					align-items: center;

					.t1 {
						padding-left: 10rpx;
						font-weight: bold;
					}

					.img {
						width: 50rpx;
						border-radius: 50% 50% 50% 50%;
					}

					.t2 {
						color: #c9c9c9;
					}
				}


			}

			.mid {
				padding-top: 25rpx;

				.img {
					width: 100%;
					border-radius: 12rpx;
				}
			}

			.under {
				display: flex;
				flex-direction: column;
				padding-top: 25rpx;

				.t1 {
					font-weight: bold;
				}

				.t2 {
					padding-top: 10rpx;
					color: #707070;
				}
			}
		}
	}
</style>