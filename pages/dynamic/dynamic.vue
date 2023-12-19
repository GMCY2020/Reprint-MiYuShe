<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">

		<view class="choose-back">
			<view class="choose">
				<view class="left"> </view>

				<view class="mid">
					<view class="item" @click="onClickItem(0)">
						<text class="t1" v-if="pan === 1">关注</text>
						<text class="t2" v-if="pan === 0">
							关注
							<text style="font-size: 15rpx;" @click="open">▼</text>
						</text>

						<view class="v" v-if="pan === 0"></view>
					</view>
					<view class="item" @click="onClickItem(1)">
						<text class="t1" v-if="pan === 0">发现</text>
						<text class="t2" v-if="pan === 1">发现</text>
						<view class="v" v-if="pan === 1"></view>
					</view>
				</view>

				<view class="right" v-if="pan === 0">
					<!-- 发动态 -->
				</view>
				<view class="right" v-if="pan === 1">

				</view>
			</view>
		</view>

		<uni-popup ref="popup" mask-background-color="rgba(0, 0, 0, 0)">
			<view class="my-popup">
				<view class="items">
					<block v-for="(item, i) in types">
						<view class="item-index" v-if="index === i">
							{{item}}
						</view>
						<view class="item" v-else>
							{{item}}
						</view>
					</block>
				</view>
			</view>
		</uni-popup>

		<view class="find" v-if="pan === 1">
			<view class="top">
				<text class="t1">关注话题有更新</text>
				<view class="item">
					<image class="img" src="../../static/messages/naxida.jpg" mode="widthFix"></image>
					<text>纳西妲</text>
				</view>
			</view>

			<view class="my-swiper">
				<swiper class="my-swiper-de" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
					circular>
					<swiper-item>
						<image class="img" src="../../static/messages/active_1.jpg" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image class="img" src="../../static/messages/active_2.png" mode="widthFix"></image>
					</swiper-item>
					<swiper-item>
						<image class="img" src="../../static/messages/active_4.png" mode="widthFix"></image>
					</swiper-item>
				</swiper>
			</view>

			<view class="under1">
				<view class="under-top">
					<text class="title">全社热贴榜</text>
					<view class="right">
						<text>全部</text>
						<uni-icons type="right"></uni-icons>
					</view>

				</view>

				<view class="item">
					<view class="left">
						<image class="img" src="../../static/messages/1.png" mode="widthFix"></image>
						<text class="t1">【壁纸】星月偕行</text>
					</view>
					<view class="right">
						<image class="img" src="../../static/messages/hot.png" mode="widthFix"></image>
						<text class="t2">1711.2万</text>
					</view>
				</view>

				<view class="line"></view>

				<view class="item">
					<view class="left">
						<image class="img" src="../../static/messages/2.png" mode="widthFix"></image>
						<text>【公告】超弦空间临时关闭~</text>
					</view>
					<view class="right">
						<image class="img" src="../../static/messages/hot.png" mode="widthFix"></image>
						<text>1266.8万</text>
					</view>
				</view>

				<view class="line"></view>

				<view class="item">
					<view class="left">
						<image class="img" src="../../static/messages/3.png" mode="widthFix"></image>
						<text>来自阿姬的情人节礼物！</text>
					</view>
					<view class="right">
						<image class="img" src="../../static/messages/hot.png" mode="widthFix"></image>
						<text>1156.9万</text>
					</view>
				</view>

				<view class="line"></view>

				<view class="item">
					<view class="left">
						<image class="img" src="../../static/messages/4.png" mode="widthFix"></image>
						<text>【问卷调查】千壑沙地~</text>
					</view>
					<view class="right">
						<image class="img" src="../../static/messages/hot.png" mode="widthFix"></image>
						<text>1109.2万</text>
					</view>
				</view>

				<view class="line"></view>

				<view class="item">
					<view class="left">
						<image class="img" src="../../static/messages/5.png" mode="widthFix"></image>
						<text>【公告】超弦空间畏血~</text>
					</view>
					<view class="right">
						<image class="img" src="../../static/messages/hot.png" mode="widthFix"></image>
						<text>1711.2万</text>
					</view>
				</view>
			</view>


			<view class="under2">
				<view class="under2-top">
					<text>全社热搜</text>
				</view>

				<view class="items">
					<view class="item">
						<view class="left">
							1
						</view>
						<view class="right">
							白露
						</view>
					</view>
					<view class="item">
						<view class="left">
							2
						</view>
						<view class="right">
							星彩漫天
						</view>
					</view>
					<view class="item">
						<view class="left">
							3
						</view>
						<view class="right">
							跃迁测试
						</view>
					</view>
					<view class="item">
						<view class="left" style="color: #808888; background-color: #f0f1f4;">
							4
						</view>
						<view class="right">
							终焉之律者
						</view>
					</view>
					<view class="item">
						<view class="left" style="color: #808888; background-color: #f0f1f4;">
							5
						</view>
						<view class="right">
							始源之律者
						</view>
					</view>
				</view>

			</view>

			<view class="under3">
				<view class="under3-top">
					<text>全部频道</text>
				</view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-ys.jpg" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">原神</text>
									<text class="t2">49.9万人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>

						<view class="item-under">
							<view class="item-under-top">
								<text class="t1">频道每月热搜</text>
								<view>
									<text>全部</text>
									<uni-icons type="right"></uni-icons>
								</view>

							</view>

							<view class="item-under-item">
								<text class="t1">攻略</text>
								<text class="t2">草神培养最大的误区，1000精通</text>
							</view>

							<view class="item-under-item">
								<text class="t1">攻略</text>
								<text class="t2">盘点命主C前5名，你拥有几位？</text>
							</view>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-bh3.jpg" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">崩坏3</text>
									<text class="t2">25364人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>

						<view class="item-under">
							<view class="item-under-top">
								<text class="t1">频道每月热搜</text>
								<view>
									<text>全部</text>
									<uni-icons type="right"></uni-icons>
								</view>

							</view>

							<view class="item-under-item">
								<text class="t1">同人文</text>
								<text class="t2">【休伯利安小故事122】姬子姐姐和真诚的舰长弟弟</text>
							</view>

							<view class="item-under-item">
								<text class="t1">同人文</text>
								<text class="t2">伊田大小姐也喜欢撒娇~</text>
							</view>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-zzz.png" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">绝区零</text>
									<text class="t2">2105人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-wd.jpg" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">大别墅</text>
									<text class="t2">28923人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>

						<view class="item-under">
							<view class="item-under-top">
								<text class="t1">频道每月热搜</text>
								<view>
									<text>全部</text>
									<uni-icons type="right"></uni-icons>
								</view>

							</view>

							<view class="item-under-item">
								<text class="t1">同人图</text>
								<text class="t2">稿子</text>
							</view>

							<view class="item-under-item">
								<text class="t1">同人图</text>
								<text class="t2">之前为天依画的三百万粉贺图~</text>
							</view>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-zzz.png" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">崩坏：星穹铁道</text>
									<text class="t2">15217人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-wd.jpg" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">未定事件</text>
									<text class="t2">8631人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>

						<view class="item-under">
							<view class="item-under-top">
								<text class="t1">频道每月热搜</text>
								<view>
									<text>全部</text>
									<uni-icons type="right"></uni-icons>
								</view>

							</view>

							<view class="item-under-item">
								<text class="t1">同人图</text>
								<text class="t2">“让我看看你的情报课成绩”</text>
							</view>

							<view class="item-under-item">
								<text class="t1">同人文</text>
								<text class="t2">【代序朝暮|第二十二棒】(左然X你)早恋</text>
							</view>
						</view>
					</view>
				</view>

				<view class="line"></view>

				<view class="items">
					<view class="item">
						<view class="item-top">
							<view class="item-top-left">
								<image class="img" src="../../static/messages/game-bh2.jpg" mode="widthFix"></image>
								<view class="text-detail">
									<text class="t1">崩坏学园2</text>
									<text class="t2">3543人讨论</text>
								</view>
							</view>
							<uni-icons type="right" size="40rpx"></uni-icons>
						</view>

						<view class="item-under">
							<view class="item-under-top">
								<text class="t1">频道每月热搜</text>
								<view>
									<text>全部</text>
									<uni-icons type="right"></uni-icons>
								</view>

							</view>

							<view class="item-under-item">
								<text class="t1">同人图</text>
								<text class="t2">祝大家新年快乐！</text>
							</view>

							<view class="item-under-item">
								<text class="t1">同人图</text>
								<text class="t2">欢迎来到少女(?)咖啡屋</text>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>


		<view class="like" v-if="pan === 0">
			<view class="item">
				<view class="item-1">
					<image class="img" src="../../static/messages/game-ys.jpg" mode="widthFix"></image>
					<view class="r">
						<text class="t1">原神</text>
						<text class="t2">3小时前·在原神发布帖子</text>
					</view>
				</view>

				<view class="item-2">
					<view class="i1">
						<text class="t1">官</text>
						<text class="t2">艾尔海森生日快乐｜快看，艾尔海森这家伙，是不是在睡午觉啊！</text>
					</view>
					<view class="i2">
						「啊！快看，艾尔海森这家伙，是不是在睡午觉啊！」「嘘…派蒙声音太大了。」「才、才没有…我明明轻声细语的…「不过，现在该怎么办…虽然有人给我们开门了，但接下来谁去叫醒他呢…「本来听说今天是他生日，想要路过打声招呼…要不我们留张字条？「…我、我才不要去叫他呢！吵醒他的话，感觉又会被他问很多答不上来的问题！」
					</view>
				</view>

				<view class="item-3">
					<image class="img1" src="../../static/messages/like-1-1.png" mode="aspectFill"></image>
					<image class="img2" src="../../static/messages/like-1-2.jpg" mode="aspectFill"></image>
				</view>

				<view class="item-4">
					<view class="sign">
						艾尔海森
					</view>
				</view>

				<view class="item-5">
					<view class="three">
						<image class="img" src="../../static/messages/share.png" mode="widthFix"></image>
						<text class="t">12</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/talk.png" mode="widthFix"></image>
						<text class="t">277</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/add.png" mode="widthFix"></image>
						<text class="t">995</text>
					</view>
				</view>
			</view>

			<view class="item">
				<view class="item-1">
					<image class="img" src="../../static/messages/twtcbt.png" mode="widthFix"></image>
					<view class="r">
						<text class="t1">提瓦特徒步团</text>
						<text class="t2">6小时前·在原神发布帖子</text>
					</view>
				</view>

				<view class="item-2">
					<view class="i1">
						<text class="t1">官</text>
						<text class="t2">「磬弦奏华夜」原神海灯节绘画征集活动展示第四弹</text>
					</view>
					<view class="i2">
						旅行者们好呀！这里是提瓦特徒步团ヾ(✿ﾟ▽ﾟ)ノ徒步团给大家带来了「磬弦奏华夜」同人绘画征集活动的作品展示第四弹，一起来看看吧~在「磬弦奏华夜」系列活动页面内累计投票≥10次即可获得「磬弦奏华夜」米游社头像框（永久），更有原石、周边好礼、外星人（Alienware）电竞三件套装等你来拿~
					</view>
				</view>

				<view class="item-3">
					<!-- <image class="img1" src="../../static/messages/like-2-1.png" mode="aspectFill"></image> -->
					<image class="img3" src="../../static/messages/like-2-2.png" mode="widthFix"></image>
				</view>

				<view class="item-4">
					<view class="sign">
						磬弦奏华夜
					</view>
				</view>

				<view class="item-5">
					<view class="three">
						<image class="img" src="../../static/messages/share.png" mode="widthFix"></image>
						<text class="t">4万+</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/talk.png" mode="widthFix"></image>
						<text class="t">1000</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/add.png" mode="widthFix"></image>
						<text class="t">9977</text>
					</view>
				</view>
			</view>

			<view class="item">
				<view class="item-1">
					<image class="img" src="../../static/messages/game-zzz.png" mode="widthFix"></image>
					<view class="r">
						<text class="t1">崩坏星穹铁道</text>
						<text class="t2">23小时前·在崩坏：星穹铁道发布帖子</text>
					</view>
				</view>

				<view class="item-2">
					<view class="i1">
						<text class="t1">官</text>
						<text class="t2">角色介绍 | 白露</text>
					</view>
					<view class="i2">
						我是白露，丹鼎司的医士。来来，过来让我瞅瞅。你是怎么回事，哪儿不舒服…总之就是头疼？那可不行，本小姐见不得这个！先别乱动——让我释放雷劲，帮你疏通筋脉…诶，别跑啊？！
					</view>
				</view>

				<view class="item-3">
					<!-- <image class="img1" src="../../static/messages/like-2-1.png" mode="aspectFill"></image> -->
					<image class="img3" src="../../static/messages/like-3-1.png" mode="widthFix"></image>
				</view>

				<view class="item-4">
					<view class="sign">
						跃迁测试
					</view>
					<view class="sign">
						白露
					</view>
				</view>

				<view class="item-5">
					<view class="three">
						<image class="img" src="../../static/messages/share.png" mode="widthFix"></image>
						<text class="t">3万+</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/talk.png" mode="widthFix"></image>
						<text class="t">266</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/add.png" mode="widthFix"></image>
						<text class="t">3589</text>
					</view>
				</view>
			</view>

			<view class="item">
				<view class="item-1">
					<image class="img" src="../../static/messages/hutao.png" mode="widthFix"></image>
					<view class="r">
						<text class="t1">胡桃</text>
						<text class="t2">77小时前·在原神发布帖子</text>
					</view>
				</view>

				<view class="item-2">
					<view class="i1">
						<text class="t1">官</text>
						<text class="t2">是桃呀~</text>
					</view>
					<view class="i2">
						桃系少女的日常生活
					</view>
				</view>

				<view class="item-3">
					<image class="img1" src="../../static/messages/like-4-1.jpg" mode="aspectFill"></image>
					<image class="img2" src="../../static/messages/like-4-2.jpg" mode="widthFix"></image>
				</view>

				<view class="item-4">
					<view class="sign">
						胡桃
					</view>
					<view class="sign">
						老婆
					</view>
					<view class="sign">
						七七
					</view>
				</view>

				<view class="item-5">
					<view class="three">
						<image class="img" src="../../static/messages/share.png" mode="widthFix"></image>
						<text class="t">4万+</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/talk.png" mode="widthFix"></image>
						<text class="t">4774</text>
					</view>
					<view class="three">
						<image class="img" src="../../static/messages/add.png" mode="widthFix"></image>
						<text class="t">7777</text>
					</view>
				</view>
			</view>
		</view>


		<view class="end">

		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				pan: 0,
				types: [
					'全部', '官方认证', '画师',
					'同人视频作者', '攻略作者', 'Coser',
					'手工作者', '写手', '游戏领域作者',
					'动漫领域作者', '学习领域作者', '音乐作者',
					'数码领域作者', '摄影领域作者', '生活领域作者',
					'崩学家', '原学家', '未学家', '星学家'
				],
				index: 0,

				ScHeight: 0,
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

			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('top')
			},
		},

		onLoad() {
			// 	uni.hideTabBar()
			this.ScHeight = uni.getSystemInfoSync().windowHeight
			// console.log(uni.getSystemInfoSync())
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

	.choose {
		display: flex;
		justify-content: space-between;
		padding: 25rpx;


		.mid {
			display: flex;
			justify-content: space-between;
		}

		.item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			padding-left: 25rpx;
			padding-right: 25rpx;

			.t1,
			.t2 {
				padding-bottom: 20rpx;
				font-size: 35rpx;
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

	.my-popup {
		background-color: white;
		position: relative;
		top: 130rpx;

		.items {
			padding: 25rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.item {
				width: 29%;
				padding: 10rpx;
				margin-bottom: 25rpx;
				display: flex;
				border-radius: 10rpx;
				justify-content: center;
				align-items: center;
				background-color: #f0f1f5;
				color: #828284;
				font-size: 25rpx;
			}

			.item-index {
				width: 29%;
				padding: 10rpx;
				margin-bottom: 25rpx;
				display: flex;
				border-radius: 10rpx;
				justify-content: center;
				align-items: center;
				background-color: #eaf7ff;
				color: #3a9ae2;
				font-size: 25rpx;
			}
		}
	}

	.find {
		.top {
			display: flex;
			flex-direction: column;
			background-color: white;
			padding: 25rpx;

			.t1 {
				font-weight: bold;
			}

			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: min-content;
				margin-top: 25rpx;

				.img {
					width: 150rpx;
					height: 150rpx;
					border-radius: 15rpx;
					margin-bottom: 10rpx;
				}

			}

		}

		.my-swiper {
			padding: 25rpx;

			.my-swiper-de {}

			.img {
				width: 100%;
				border-radius: 15rpx;
			}
		}

		.under1 {
			background-color: white;

			.under-top {
				display: flex;
				justify-content: space-between;
				padding: 25rpx;

				.title {
					font-weight: bold;
				}

				.right {
					color: #999999;
				}
			}

			.item {
				display: flex;
				justify-content: space-between;
				padding: 25rpx;

				.left,
				.right {
					display: flex;
					align-items: center;
				}

				.left {
					font-size: 30rpx;

				}

				.right {
					color: #c0c3c7;
				}

				.img {
					width: 75rpx;
				}
			}
		}

		.under2 {
			margin-top: 25rpx;
			padding: 25rpx;

			background-color: white;

			.under2-top {
				font-weight: bold;
			}

			.items {
				display: flex;
				flex-wrap: wrap;
			}

			.item {
				background-color: #f0f1f4;
				margin: 15rpx;
				width: 42%;
				border-radius: 5rpx;
				display: flex;

				.left {
					border: 5rpx solid white;
					background-color: #fdf3eb;
					display: flex;
					width: 30rpx;
					height: 30rpx;
					align-items: center;
					justify-content: center;
					font-size: 20rpx;
					color: #e68454;
					border-radius: 2rpx;
					;
					font-weight: bold;
					position: static;
					left: 0rpx;
				}

				.right {
					padding: 10rpx;
					padding-left: 20rpx;
				}
			}

		}

		.under3 {
			background-color: white;

			.under3-top {
				padding: 25rpx;
				font-weight: bold;
			}

			.item {
				padding: 25rpx;

				.item-top {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.item-top-left {
						display: flex;

						.img {
							width: 150rpx;
							border-radius: 15rpx;
						}

						.text-detail {
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							padding: 25rpx;

							.t1 {}

							.t2 {
								color: #999999;
								font-size: 29rpx;
							}
						}
					}
				}

				.item-under {
					background-color: #f0f1f4;
					border-radius: 10rpx;
					margin-top: 15rpx;

					.item-under-top {
						padding: 25rpx;
						display: flex;
						justify-content: space-between;

						font-size: 25rpx;

						.t1 {
							font-weight: bold;
						}
					}

					.item-under-item {
						display: flex;
						align-items: center;
						padding-left: 25rpx;
						padding-right: 25rpx;
						padding-top: 15rpx;
						padding-bottom: 15rpx;

						.t1 {
							border-radius: 5rpx;
							border: 2rpx solid orangered;
							font-size: 20rpx;
							padding: 5rpx;
							color: orangered;
						}

						.t2 {
							width: 80%;
							padding-left: 25rpx;
							font-size: 30rpx;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 1;
						}
					}
				}
			}
		}


	}


	.like {
		.item {
			background-color: white;
			margin-bottom: 25rpx;

			.item-1 {
				display: flex;
				align-items: center;
				padding: 25rpx;

				.img {
					width: 70rpx;
					border-radius: 50%;
				}

				.r {
					display: flex;
					flex-direction: column;
					padding-left: 25rpx;

					.t1 {
						font-weight: bold;
						font-size: 30rpx;
					}

					.t2 {
						font-size: 25rpx;
						color: #c1c1c1;
						padding-top: 5rpx;
					}
				}
			}

			.item-2 {
				padding: 25rpx;

				.i1 {
					display: flex;

					.t1 {
						display: flex;
						justify-content: center;
						align-items: center;
						font-weight: bold;
						font-size: 30rpx;
						color: #1aa1f9;
						background-color: #e9f6ff;
						border-radius: 10rpx;
						width: 60rpx;
						height: 50rpx;
					}

					.t2 {
						padding-left: 25rpx;
						font-weight: bold;
					}
				}

				.i2 {
					padding-top: 10rpx;
					color: #848484;

					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
				}
			}

			.item-3 {
				padding-left: 25rpx;
				padding-right: 25rpx;
				display: flex;
				justify-content: space-between;

				.img1 {
					width: 49%;
					border-radius: 25rpx 0 0 25rpx;
				}

				.img2 {
					width: 49%;
					border-radius: 0 25rpx 25rpx 0;
				}

				.img3 {
					width: 100%;
					border-radius: 25rpx;
				}
			}

			.item-4 {
				display: flex;

				padding: 25rpx;

				.sign {
					margin-right: 15rpx;
					padding: 10rpx;
					padding-right: 20rpx;
					padding-left: 20rpx;
					font-size: 25rpx;
					background-color: #f5f5f5;
					color: #848484;
					border-radius: 12rpx;
				}
			}

			.item-5 {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 25rpx;
				padding-top: 0rpx;

				.three {
					display: flex;
					align-items: center;
				}

				.img {
					width: 80rpx;
				}

				.t {
					color: #c2c2c2;
				}

			}
		}
	}

	.end {
		height: 200rpx;
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