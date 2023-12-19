<!-- 获取记录 界面 -->
<template>
	<view>
		<!-- 自制分段区域 -->
		<view class="choose-back">
			<view class="choose">
				<view class="item" @click="onClickItem(0)">
					<text class="t1" v-if="pan === 1">获取记录</text>
					<text class="t2" v-if="pan === 0">获取记录</text>
					<view class="v" v-if="pan === 0"></view>
				</view>
				<view class="item" @click="onClickItem(1)">
					<text class="t1" v-if="pan === 0">消耗记录</text>
					<text class="t2" v-if="pan === 1">消耗记录</text>
					<view class="v" v-if="pan === 1"></view>
				</view>
			</view>
		</view>

		<view class="my-content">
			<view class="panel" v-if="pan === 0">

				<block v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i">
					<view class="item">
						<view class="left">
							<text class="t1">浏览3个帖子</text>
							<text class="t2">米游币任务</text>
						</view>
						<view class="right">
							<text class="t1">+20</text>
							<text class="t2">米游币</text>
							<view class="t3">
								<text>2023-01-3 11:1{{i}}</text>
							</view>
						</view>
					</view>

					<view class="line" />
				</block>

				<block v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i">
					<view class="item">
						<view class="left">
							<text class="t1">签到</text>
							<text class="t2">米游币任务</text>
						</view>
						<view class="right">
							<text class="t1">+30</text>
							<text class="t2">米游币</text>
							<view class="t3">
								<text>2023-01-0{{i+1}} 11:1{{i}}</text>
							</view>
						</view>
					</view>

					<view class="line" />
				</block>



			</view>
			<view class="panel" v-if="pan === 1">
				<block v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i">
					<view class="item">
						<view class="left">
							<text class="t1">【原神】10/26许愿池消耗</text>
							<text class="t2">米游币活动</text>
						</view>
						<view class="right">
							<text class="t1">-150</text>
							<text class="t2">米游币</text>
							<view class="t3">
								<text>2023-01-3 11:1{{i}}</text>
							</view>
						</view>
					</view>

					<view class="line" />
				</block>

				<block v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i">
					<view class="item">
						<view class="left">
							<text class="t1">【崩坏3】12/11 许愿池消耗</text>
							<text class="t2">米游币活动</text>
						</view>
						<view class="right">
							<text class="t1">-150</text>
							<text class="t2">米游币</text>
							<view class="t3">
								<text>2023-01-0{{i+1}} 11:1{{i}}</text>
							</view>
						</view>
					</view>

					<view class="line" />
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pan: 0,
			};
		},

		methods: {
			onClickItem(e) {
				var index = null;
				if (e === 0) {
					index = 0
				} else {
					index = 1
				}

				if (index !== this.pan) {
					this.pan = index
				}
			},
		}
	}
</script>

<style lang="scss">
	.choose {
		background-color: #f8f8f8;
		padding-top: 40rpx;
		display: flex;
		justify-content: space-around;
		border-radius: 25rpx 25rpx 0 0;

		padding-left: 120rpx;
		padding-right: 120rpx;

		.item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.t1,
			.t2 {
				padding-bottom: 20rpx;
			}

			.t1 {
				color: #999999;
			}

			.t2 {
				color: #393939;
				font-weight: 900;
			}

			.v {
				content: " ";
				background-color: #1aa1f9;
				width: 25%;
				display: block;
				margin: 0 auto;
				border: 6rpx solid #1aa1f9;
				border-radius: 25rpx;
				margin-bottom: 4rpx;
			}
		}
	}

	.panel {
		background-color: white;

		.item {
			display: flex;
			justify-content: space-between;
			padding: 25rpx;

			.left {
				display: flex;
				flex-direction: column;

				.t1 {}

				.t2 {
					padding-top: 10rpx;
					color: #999999;
				}
			}

			.right {
				text-align: right;
				color: #999999;

				.t1 {
					color: #f29f5c;
					font-weight: bolder;
					padding-right: 10rpx;
				}

				.t3 {
					padding-top: 10rpx;
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