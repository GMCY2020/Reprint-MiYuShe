import{n as l,v as a,g as s,o as e,c as t,w as d,a as u,S as c,b as f,e as _,f as r,i,h as n,j as o,u as p,l as h}from"./index-e94fcba3.js";import{r as m,_ as k}from"./uni-app.es.b534339e.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const v=g({data:()=>({pan:0,ScHeight:0}),methods:{onClickItem(l){var a=null;(a=0===l?0:1)!==this.pan&&(this.pan=a)},goToGDT(){l({url:"../../subpkg/GDT/GDT"})}},onLoad(l){a({title:l.item+"频道等级"}),this.ScHeight=s().windowHeight}},[["render",function(l,a,s,g,v,y){const C=i,w=n,b=o,x=p,T=m(h("uni-icons"),k),G=c;return e(),t(G,{"scroll-y":"true","scroll-x":"false","show-scrollbar":"false",style:u("height: "+v.ScHeight+"px;")},{default:d((()=>[f(w,{class:"top"},{default:d((()=>[f(w,{class:"card"},{default:d((()=>[f(C,{class:"img",src:"/assets/Lv5-e7f4673d.png"})])),_:1}),f(w,{class:"all-progress"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("Lv.5")])),_:1}),f(x,{class:"all-progress-detail",percent:40,"stroke-width":"12",activeColor:"#ffe14d","border-radius":"20rpx"}),f(b,{class:"t2"},{default:d((()=>[_("Lv.6")])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"experience"},{default:d((()=>[f(w,{class:"experience-today"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("今日获得经验:")])),_:1}),f(b,{class:"t2"},{default:d((()=>[_("0")])),_:1})])),_:1}),f(w,{class:"experience-history",onClick:y.goToGDT},{default:d((()=>[f(b,{class:"t"},{default:d((()=>[_("今日获取明细")])),_:1}),f(T,{type:"forward",color:"#999999"})])),_:1},8,["onClick"])])),_:1})])),_:1}),f(w,{class:"choose"},{default:d((()=>[f(w,{class:"item",onClick:a[0]||(a[0]=l=>y.onClickItem(0))},{default:d((()=>[1===v.pan?(e(),t(b,{key:0,class:"t1"},{default:d((()=>[_("升级攻略")])),_:1})):r("",!0),0===v.pan?(e(),t(b,{key:1,class:"t2"},{default:d((()=>[_("升级攻略")])),_:1})):r("",!0),0===v.pan?(e(),t(w,{key:2,class:"v"})):r("",!0)])),_:1}),f(w,{class:"item",onClick:a[1]||(a[1]=l=>y.onClickItem(1))},{default:d((()=>[0===v.pan?(e(),t(b,{key:0,class:"t1"},{default:d((()=>[_("等级成长")])),_:1})):r("",!0),1===v.pan?(e(),t(b,{key:1,class:"t2"},{default:d((()=>[_("等级成长")])),_:1})):r("",!0),1===v.pan?(e(),t(w,{key:2,class:"v"})):r("",!0)])),_:1})])),_:1}),f(w,{class:"my-content"},{default:d((()=>[0===v.pan?(e(),t(w,{key:0},{default:d((()=>[f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("签到")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+5")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取1次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/1次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("发主帖")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+6")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取2次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/2次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("发评论")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+3")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取3次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/3次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("点赞")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+1")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取10次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/10次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("被点赞")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+2")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取10次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/10次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("被回复")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+4")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取10次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/10次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"}),f(w,{class:"panel"},{default:d((()=>[f(w,{class:"item"},{default:d((()=>[f(w,{class:"left"},{default:d((()=>[f(b,{class:"t1"},{default:d((()=>[_("被收藏")])),_:1}),f(w,{class:"t2"},{default:d((()=>[f(b,null,{default:d((()=>[_("经验值")])),_:1}),f(b,{class:"num"},{default:d((()=>[_("+2")])),_:1}),f(b,null,{default:d((()=>[_("，每日获取10次")])),_:1})])),_:1})])),_:1}),f(w,{class:"right"},{default:d((()=>[f(x,{class:"pro-detail",percent:7,"stroke-width":"9",activeColor:"#ffe14d","border-radius":"20"}),f(b,null,{default:d((()=>[_("0/10次")])),_:1})])),_:1})])),_:1})])),_:1}),f(w,{class:"line"})])),_:1})):r("",!0),1===v.pan?(e(),t(w,{key:1},{default:d((()=>[f(w,{class:"panel2"},{default:d((()=>[f(C,{class:"img",src:"/assets/Lv-e046838b.png",mode:"widthFix"})])),_:1})])),_:1})):r("",!0)])),_:1})])),_:1},8,["style"])}],["__scopeId","data-v-58824d1b"]]);export{v as default};
