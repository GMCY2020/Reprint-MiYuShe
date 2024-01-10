<template>
	<scroll-view scroll-y="true" scroll-x="false" show-scrollbar="false" :style="'height: ' + ScHeight + 'px;'">
		<!-- 上面区域 -->
		<view class="up">
			<view class="bg">
				<image class="img" :src="'../../static/home/bg-' + getArrayIndex(gamePan) + '.png'" mode="widthFix">
				</image>
			</view>

			<!-- 游戏分区选择 -->
			<view class="choice-games">
				<scroll-view class="game-scroll" scroll-x="true">
					<block v-for="(detail, game) in data">
						<view class="item" @click="onClickGames(game)">
							<text class="t1" v-if="gamePan === game">{{game}}</text>
							<text class="t2" v-if="gamePan !== game">{{game}}</text>
						</view>
					</block>
				</scroll-view>
				<view class="right">
					<image class="img" src="../../static/home/set.png" mode="widthFix"></image>
				</view>
			</view>

			<!-- 搜索区域 -->
			<view class="my-search">
				<view class="left">
					<image class="img" src="../../static/home/search.png" mode="widthFix"></image>
					<textarea class="my-textarea" placeholder="胡桃" auto-height placeholder-style="color:#c1c1c1"
						disabled></textarea>
				</view>
				<view class="right">
					<image class="img" src="../../static/home/s.png" mode="widthFix"></image>
					<text class="t">签到</text>
				</view>
			</view>

			<!-- 工具区域 -->
			<view class="tools">
				<scroll-view scroll-x="true">
					<block v-for="(item, i) in data[gamePan]['工具']">
						<view class="tool" @click="goToTools(gamePan, item)">
							<view class="detail">
								<image class="img"
									:src="'../../static/home/' + getArrayIndex(gamePan) + '-' + (i + 1) +'.png'"
									mode="widthFix"></image>
								<text class="t">{{item}}</text>
							</view>
						</view>
					</block>
				</scroll-view>
			</view>
		</view>

		<!-- 下面区域 -->
		<view class="under">
			<!-- 下方分区选择 -->
			<view class="choice-under">
				<scroll-view class="game-scroll" scroll-x="true">
					<block v-for="item in data[gamePan]['下方']">
						<view class="item" @click="onClickUnder(item)">
							<text class="t1" v-if="underPan === item">{{item}}</text>
							<text class="t2" v-if="underPan !== item">{{item}}</text>
							<view class="uLine" v-if="underPan === item"></view>
						</view>
					</block>
				</scroll-view>
			</view>


			<!-- 发现 -->
			<view class="u-find" v-if="underPan === '发现'">
				<view class="GF-bg">
					<view class="GF">
						<view class="GF-top" v-if="data[gamePan]['发现']['官方咨询']">
							<view class="GF-T-l">
								<image class="T-L-img" src="../../static/home/GFF.png" mode="widthFix"></image>
								<text>官方咨询</text>
							</view>
							<view class="GF-T-r">
								<text>全部</text>
								<uni-icons type="right"></uni-icons>
							</view>
						</view>
						<block v-for="item in data[gamePan]['发现']['官方咨询']">
							<view class="GF-item">
								<text class="gi1">{{item[0]}}</text>
								<view class="gi2">
									<text class="gi2-d">{{item[1]}}</text>
								</view>
								<text class="gi3">{{item[2]}}</text>
							</view>
						</block>
					</view>
				</view>

				<block v-for="(item, i) in data[gamePan]['发现']['actives']">
					<view class="f-item">
						<view class="f-top">
							<view class="left">
								<image class="l-img" :src="'../../static/home/actives/' + item[0]" mode="widthFix">
								</image>
								<view class="r">
									<text class="r-name">{{item[1]}}</text>
									<text class="r-time">{{item[2]}}</text>
								</view>
							</view>
							<view class="right">
								<text class="r-li">+ 关注</text>
								<image class="r-img" src="../../static/home/more.png" mode="widthFix"></image>
							</view>
						</view>

						<view class="f-tm" v-if="item[8]">
							<view class="f-tm1">
								{{item[8]}}
							</view>
							<view class="f-tm2">
								{{item[9]}}
							</view>
						</view>

						<view class="f-mid">
							<image class="m-img" :src="'../../static/home/actives/' + item[3]" mode="widthFix"></image>
						</view>

						<view class="f-under">
							<view class="bids">
								<block v-for="bid in item[4]">
									<text class="bid">{{bid}}</text>
								</block>
							</view>
							<view class="fu">
								<view class="ff-item">
									<image class="i-img" src="../../static/home/look.png" mode="widthFix"></image>
									<text>{{item[5]}}</text>
								</view>
								<view class="ff-item">
									<image class="i-img" src="../../static/home/talk.png" mode="widthFix"></image>
									<text>{{item[6]}}</text>
								</view>
								<view class="ff-item">
									<image class="i-img" src="../../static/home/add.png" mode="widthFix"></image>
									<text>{{item[7]}}</text>
								</view>
							</view>

						</view>
					</view>
				</block>
			</view>


			<!-- 同人图 -->
			<view class="u-same" v-if="underPan === '同人图'">
				<!-- 同人榜 -->
				<view class="u-s-top">
					<scroll-view scroll-x="true">
						<view class="u-s-scroll-item">

						</view>
					</scroll-view>
				</view>

				<block v-for="i in '12'">
					<view class="u-s-under">
						<block v-for="(item, i) in data[gamePan]['发现']['actives']">
							<!-- {{item}} -->
							<view class="u-s-u-item">
								<image class="i-img-m" :src="'../../static/home/actives/' + item[3]" mode="widthFix">
								</image>
								<text class="i-tit">{{item[8]}}</text>
								<view class="i-und">
									<view class="left">
										<image class="l-img" :src="'../../static/home/actives/' + item[0]"
											mode="widthFix"></image>
										<text>{{item[1]}}</text>
									</view>
									<view class="right">
										<image class="r-img" src="../../static/home/add.png" mode="widthFix"></image>
										<text>{{item[5]}}</text>
									</view>
								</view>
							</view>
						</block>
					</view>
				</block>
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
				data: {
					"原神": {
						"工具": ["旅行工具", "签到福利", "攻略合集", "星彩漫天", "同人征集", "卡牌广场", "新版本咨询", "大地图", "观测枢", "攻略"],
						"下方": ["观测枢", "发现", "酒馆", "攻略", "同人图", "COS", "硬核"],
						"发现": {
							"官方咨询": [
								["活动", "【转发抽奖】艾尔海森生日活动开启！", "昨天"],
								["资讯", "原神×Wonderful Works「优菈」手办化决定！", "23小时前"],
								["活动", "【有奖活动】「演武传心」晒截图活动开启！", "02-09"]
							],
							"actives": [
								["a1.png", "迷路的史莱姆酱", "02-11", "b1.png", ["艾尔海森"], "120.1万", "4548", "34.7万"],
								["a2.png", "哈米伦的弄笛者", "02-11", "b2.png", ["胡桃", "夜兰"], "9917", "153", "3872",
									"【原神剧场】空的恋爱摇摆~！",
									"是可爱学妹胡桃还是风情的学姐夜兰？选择吧!总策划：哈米伦的弄笛者主笔/监制:大写的TY 哈米伦的弄笛者画师：萌新画渣 空亭丶 vikki同学 晓溪 zcing- 夏至君X2one 爱可乐的小红 梨子 D-Dan 长耳朵喵 魔法少女蟒蛇绞 玖玖 步汪喵噗步 一枔  陆燃_echo后期：四季の日常 低压咖喱 欧洲的玖菜 睡不醒的问号封面：北"
								],
								["a3.png", "乌可EUCO", "6小时前", "b3.jpg", ["心海", "绘画", "同人图"], "1万", "66", "2412",
									"雨季·少女·无尽夏", "画了心海，用了一直以来想画的题材~"
								],
								["a4.png", "乌拉", "02-11", "b4.jpg", ["艾尔海森"], "120.1万", "4548", "34.7万"],
							],
						},
					},

					"崩坏3": {
						"工具": ["百宝箱", "签到福利", "攻略合集", "抽抽乐", "乐土阵容榜", "新版本咨询", "战绩工具", "米游铺", "百科", "客服"],
						"下方": ["观测枢", "发现", "甲板", "同人图", "同人文"],
						"发现": {
							"官方咨询": [
								["咨询", "【壁纸】星月偕行", "02-10"],
								["资讯", "【资讯】摄影虚像|「湮壹摄影」", "02-10"],
								["咨询", "【壁纸】★符华全新壁纸分享★", "02-09"]
							],
							"actives": [
								["aa1.png", "爱酱小跟班", "02-10", "bb1.png", ["壁纸", "真理之律者"], "11.9万", "597", "33498",
									"【壁纸】星月偕行", "就对着星空许下心愿吧，这么美丽的瞬间，愿你我一同见证~"
								],
								["aa1.png", "爱酱小跟班", "02-08", "bb2.png", ["终焉归始"], "5万", "1129", "2万",
									"【视频】《崩坏3》主线回顾小剧场",
									"故事的终幕即将开启。跟随她的脚步，一起回顾「崩坏」的故事......然后，向着明天。★ 配音演员：普罗米修斯——hanser"
								],
								["aa3.png", "崩坏3米游姬", "02-02", "bb3.png", ["蜃影虚隙"], "11.8万", "2989", "31794",
									"【有奖活动】「蜃影虚隙」正式开启，参与讨论赢水晶&周边！", "「舰长，爱酱我又想出了新玩法，能帮忙测试一下吗？当然，会有报酬的哦。」"
								],
								["aa4.png", "易镜宸", "02-09", "bb4.jpg", ["绘画", "爱莉希雅"], "4644", "44", "1379",
									"【新春同人图】回应我吧！爱莉希雅！", "天上白玉京，十二楼五城。仙人抚我顶，结发受长生。"
								],
							],
						},
					},


					"绝区零": {
						"工具": ["游戏预约", "最新咨询", "活动", "官方", "许愿池", "壁纸", "最新视频"],
						"下方": ["同人图", "发现", "咖啡馆"],
						"发现": {
							"官方咨询": [
								["咨询", "良宵团圆|祝绳匠们元宵节快乐", "02-05"],
								["活动", "【已开奖】这是什么？邦布汤圆!", "02-05"],
								["活动", "【已开奖】仓库大危机!拜托了", "01-27"]
							],
							"actives": [
								["aaa1.png", "Ssziyu鱼", "02-08", "bbb1.jpg", ["可琳", "壁纸"], "8334", "132", "3992",
									"摸摸可琳～", "趁人少，和可琳贴贴"
								],
								["aaa1.png", "都没吃完了", "02-07", "bbb2.jpg", ["铃", "同人图"], "3273", "46", "1428", "铃",
									"涂鸦5"
								],
								["aaa3.png", "我才是悦悦", "02-09", "bbb3.jpg", ["铃"], "3094", "65", "1733", "铃",
									"⁄(⁄ ⁄ ⁄ω⁄ ⁄ ⁄)⁄"
								],
								["aaa4.jpg", "萝卜头村村长", "02-06", "bbb4.jpg", ["壁纸", "同人图"], "5005", "150", "2388",
									"啊呀！", "又摸了最爱的粉毛！漏了个发夹，加上"
								],
							],
						},

					},


					"大别墅": {
						"工具": ["百宝箱", "创小摊", "米游姬养成", "别野百货", "充值中心", "活动", "创作营地"],
						"下方": ["校园", "发现", "AGG", "生活", "同人图", "COS", "脑洞", "科技"],
						"发现": {
							"actives": [
								["aaaa1.png", "米游姬", "02-10", "bbbb1.png", ["米游姬情人节直播"], "18.8万", "1622", "21983",
									"来自阿姬的情人节礼物——米游姬情人节直播正式公布！", "当当！恭喜各位成功提前解锁阿姬的情人节小惊喜内容！"
								],
								["aaaa2.png", "木小树今天画画了吗", "02-09", "bbbb2.jpg", ["绘画"], "16705", "135", "8553", "稿",
									"不可以用"
								],
								["aaaa1.png", "米游姬", "02-10", "bbbb3.png", ["米游姬情人节直播"], "50475", "839", "9738",
									"【活动】心动是一种怎样的滋味？分享你的观点和故事领取奖励！", "心动是一种怎样的滋味？"
								],
								["aaaa4.png", "水小漾", "01-21", "bbbb4.png", ["手工", "米游姬"], "4717", "140", "2817",
									"【创小摊】四周年的侦探笔记系列，手办终于来啦！", "新春快乐！阿姬四周年的侦探姬手办终于在创小摊上架啦！喜欢的朋友快来围观～"
								],
							],
						},
					},


					"崩坏：星穹铁道": {
						"工具": ["游戏预约", "最新视频", "官方", "壁纸", "资格查询", "候车室", "同人作品", "许愿池"],
						"下方": ["攻略", "发现", "候车室", "同人图"],
						"发现": {
							"官方咨询": [
								["活动", "【攻略征集】「锋芒展露」", "02-10"],
								["资讯", "角色介绍|白露", "02-10"],
								["公告", "「跃迁测试」开服说明", "02-10"]
							],
							"actives": [
								["aaaaa1.png", "呜呜是个呜呜伯", "02-03", "bbbbb1.png", ["跃迁测试"], "18.4万", "1526", "12797",
									"【绘画征集】「下一站，银河！」绘画征集活动开启", "（列车播报：跃迁即将开始，请大家做好准备，3、2、1......）"
								],
								["aaaaa1.png", "呜呜是个呜呜伯", "02-08", "bbbbb2.png", ["白露", "跃迁测试"], "94721", "29034",
									"4787", "【有奖活动】白露角色PV讨论活动，参与赢测试资格及周边奖励！", "天干物燥，小心上火。内燥外调，外燥内养。要是都燥，就得吃药！"
								],
								["aaaaa1.png", "呜呜是个呜呜伯", "02-09", "bbbbb3.png", ["跃迁测试", "元宵节"], "15.6万", "32450",
									"9397", "【已开奖】欢欢喜喜闹元宵 | 参与讨论赢周边！", "元宵节快乐！"
								],
								["aaaaa1.png", "呜呜是个呜呜伯", "02-03", "bbbbb4.png", ["跃迁测试", "停云"], "23.4万", "28198",
									"14862", "【已开奖】星穹会客厅 | 停云：慧心妙舌的商团代表", "开拓者好呀，今天发布了新角色「停云」的情报~开拓者关注了吗？"
								],
							],
						},
					},
				},

				gamePan: "原神",
				underPan: "发现",

				ScHeight: 0,
			};
		},

		methods: {
			onClickGames(e) {
				if (e !== this.gamePan) {
					this.gamePan = e
					this.underPan = "发现"
				}
			},

			onClickUnder(e) {
				if (e !== this.underPan) {
					this.underPan = e
				}
			},

			getArrayIndex(gamePan) {
				var index = 1
				for (var item in this.data) {
					if (item === gamePan) {
						return index
					} else {
						index += 1
					}
				}
				return index
			},

			goToTools(gamePan, item) {
				console.log(gamePan + "-" + item)

				if (item === "旅行工具" || item === "百宝箱") {
					uni.navigateTo({
						url: "/subpkg/H_tools/H_tools?gamePan=" + gamePan
					})
				}

			}
		},

		onLoad() {
			this.ScHeight = uni.getSystemInfoSync().windowHeight
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


	.bg {
		position: absolute;
		width: 100%;

		.img {
			width: 100%;
		}
	}

	.choice-games {
		display: flex;
		align-items: center;

		padding-top: 50rpx;

		.game-scroll {
			white-space: nowrap;
			width: 100%;

			.item {
				display: inline-block;

				padding-left: 25rpx;
				padding-right: 25rpx;

				.t1,
				.t2 {
					padding-bottom: 20rpx;
				}

				.t1 {
					color: white;
					font-size: 45rpx;
					font-weight: 600;
				}

				.t2 {
					color: #ccdfde;
					font-size: 40rpx;
					font-weight: 500;
				}
			}
		}

		.right {
			.img {
				width: 70rpx;
			}
		}
	}

	.my-search {
		position: relative;

		display: flex;
		margin-top: 25rpx;
		justify-content: space-around;

		.left {
			width: 70%;
			display: flex;
			align-items: center;
			background-color: rgba(27, 68, 107, 0.3);
			border-radius: 25rpx;
		}

		.right {
			width: 20%;
			display: flex;
			align-items: center;
			background-color: rgba(27, 68, 107, 0.3);
			border-radius: 25rpx;
			padding: 5rpx;
			color: white;

			.t {
				padding-left: 10rpx;
			}
		}

		.img {
			width: 50rpx;
			margin-left: 10rpx;
		}

		.my-textarea {
			width: 100%;
			padding-left: 20rpx;
			display: flex;
			align-items: center;
		}
	}

	.tools {
		white-space: nowrap;
		position: relative;

		.tool {
			display: inline-block;
			padding: 25rpx;

			.detail {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				.img {
					width: 120rpx;
				}

				.t {
					color: white;
					font-size: 25rpx;
				}
			}

		}
	}

	.under {}

	.choice-under {
		position: relative;

		background-color: white;
		display: flex;
		align-items: center;
		padding-top: 15rpx;
		padding-bottom: 20rpx;
		border-bottom: 2rpx solid #f8f8f8;
		border-radius: 25rpx 25rpx 0 0;

		.game-scroll {
			white-space: nowrap;
			width: 100%;

			.item {
				display: inline-block;

				padding-left: 25rpx;
				padding-right: 25rpx;

				.t1,
				.t2 {
					padding-bottom: 20rpx;
					font-size: 35rpx;
				}

				.t1 {
					color: #393939;
					font-weight: 600;
				}

				.t2 {
					color: #999999;
				}

				.uLine {
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
	}

	.GF-bg {
		background-color: white;
	}

	.GF {
		background-color: #f5f5f5;
		margin: 30rpx;
		border-radius: 25rpx;

		.GF-top {
			display: flex;
			justify-content: space-between;
			padding: 10rpx;

			.GF-T-l {
				display: flex;
				align-items: center;
				font-weight: bold;

				.T-L-img {
					width: 80rpx;
				}
			}

			.GF-T-r {
				display: flex;
				align-items: center;
			}
		}

		.GF-item {
			padding: 25rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.gi1 {
				color: white;
				background-color: #1aa1f9;
				border-radius: 10rpx;
				padding: 5rpx;
				padding-left: 15rpx;
				padding-right: 15rpx;
				font-size: 25rpx;
			}

			.gi2 {
				width: 65%;
				padding-left: 10rpx;
			}

			.gi2-d {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;

				font-size: 30rpx;
			}

			.gi3 {
				color: #c1c1c1;
				font-size: 25rpx;
			}
		}
	}

	.f-item {
		padding: 25rpx;
		background-color: white;
		margin-bottom: 25rpx;

		.f-top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;

				.l-img {
					width: 80rpx;
					border-radius: 50%;
				}

				.r {
					display: flex;
					flex-direction: column;
					padding-left: 25rpx;

					.r-name {}

					.r-time {
						color: #c7c7c7;
						font-size: 25rpx;
						margin-top: 5rpx;
					}
				}
			}

			.right {
				display: flex;
				align-items: center;

				.r-li {
					color: #1aa1f9;
					border: 4rpx solid #1aa1f9;
					border-radius: 10rpx;
					padding: 5rpx;
					padding-left: 15rpx;
					padding-right: 15rpx;
					font-size: 25rpx;

				}

				.r-img {
					width: 80rpx;
				}
			}

		}

		.f-tm {
			padding: 10rpx;

			.f-tm2 {
				color: #858585;

				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}

		.f-mid {
			margin-top: 25rpx;

			.m-img {
				width: 100%;
				border-radius: 15rpx;
			}
		}

		.f-under {
			margin-top: 25rpx;
			display: flex;
			justify-content: space-between;

			.bid {
				background-color: #f5f5f5;
				padding: 10rpx;
				padding-left: 25rpx;
				padding-right: 25rpx;
				border-radius: 15rpx;
				color: #818181;
				font-size: 25rpx;
				margin-right: 15rpx;
				;
			}

			.fu {
				display: flex;
			}

			.ff-item {
				display: flex;
				align-items: center;
				font-size: 25rpx;
				color: #c6c6c6;
				padding-left: 10rpx;

				.i-img {
					width: 60rpx;
				}
			}
		}
	}

	.u-same {
		.u-s-top {
			.u-s-scroll-item {}
		}

		.u-s-under {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;

			.u-s-u-item {
				width: 45%;
				height: auto;

				margin: 10rpx;
				border-radius: 15rpx;

				.i-img-m {
					width: 100%;
					border-radius: 15rpx;
				}

				.i-tit {
					font-size: 25rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
				}

				.i-und {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 15rpx;
					;

					.left {
						display: flex;
						font-size: 20rpx;
						color: #999999;

						.l-img {
							width: 30rpx;
							;
							border-radius: 50%;
						}
					}

					.right {
						display: flex;
						font-size: 20rpx;
						color: #999999;

						.r-img {
							width: 30rpx;
							;
						}
					}

				}
			}

		}
	}

	.end {
		height: 200rpx;
	}
</style>