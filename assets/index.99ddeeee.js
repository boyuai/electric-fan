import{_ as e,a as l,b as a,c as n,i as t,d as u,r as i,o,e as s,f as r,w as c,F as d,g as m,h as v,j as p,k as h,t as b,l as f,m as g}from"./vendor.7c7e91ab.js";import{registerSW as w}from"virtual:pwa-register";var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:t=>{t.use(e),t.use(l),t.use(a),t.use(n)}});var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:e=>{e.use(t,{config:{id:"G-FMH4WDW53W"}})}});var j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:()=>{w({immediate:!0})}});const k=r("audio",{id:"switch-audio",src:"/audio/switch.mp3"},null,-1),T={id:"fan"},V={class:"header"},Y=r("div",{class:"circle"},null,-1),S=r("div",{class:"leaf-1"},null,-1),F=r("div",{class:"leaf-2"},null,-1),M=r("div",{class:"leaf-3"},null,-1),z=r("div",{class:"neck"},null,-1),A=r("div",{class:"footer"},null,-1),C={class:"switch-btn-group"};var J=u({expose:[],setup(e){const l=[{name:"关",class:"switch_0",value:0},{name:"1",class:"switch_1",value:1},{name:"2",class:"switch_2",value:2},{name:"3",class:"switch_3",value:3}],a=i(0),n=i("leafs"),t=i(0),u=i(!1),f=i(null);function g(e=3.5){if(!u.value){if(!f.value)return;f.value.currentTime=e,f.value.play();let l=f.value.duration-f.value.currentTime-1;setTimeout((function(){g()}),1e3*l)}}function w(e){switch(n.value="leafs-"+e,t.value+=1,e){case 0:f.value&&(f.value.currentTime=6),u.value=!0;break;default:if(u.value=!1,!f.value)return;0===f.value.currentTime||f.value.currentTime===f.value.duration?g(0):g()}}return o((()=>{!function(){let e=new Audio;e.preload="metadata",e.src="/audio/fan.wav",e.load(),f.value=e}()})),(e,u)=>{const i=m("el-radio-button"),o=m("el-radio-group");return v(),s(d,null,[k,r("div",T,[r("div",V,[(v(),s("div",{key:t.value,class:n.value},[Y,S,F,M],2))]),z,A,r("div",C,[r(o,{modelValue:a.value,"onUpdate:modelValue":u[2]||(u[2]=e=>a.value=e),onChange:w},{default:c((()=>[(v(),s(d,null,p(l,((e,l)=>r(i,{key:l,class:e.class,modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,label:e.value,onClick:u[1]||(u[1]=()=>{document.querySelector("#switch-audio").play()})},{default:c((()=>[h(b(e.name),1)])),_:2},1032,["class","modelValue","onUpdate:modelValue","label"]))),64))])),_:1},8,["modelValue"])])])],64)}}});const O="https://upyun.yunyoujun.cn/images/eat-watermelon-qrcode.jpg";var q=u({name:"app",data:()=>({title:"夏日清凉小风扇",description:"除了没有风，什么都好！",copyright:{name:"Electric Fan",repo:"electric-fan",author:"YunYouJun",logo:"emojione:watermelon",link:O},links:[{name:"github",color:"black",icon:"ri:github-line",label:"GitHub: YunYouJun",href:"https://github.com/YunYouJun"},{name:"telegram",color:"#1da1f2",icon:"ri:telegram-line",label:"Telegram Channel",href:"https://t.me/elpsycn"},{name:"weibo",color:"#DB2828",icon:"ri:weibo-line",label:"微博：机智的云游君",href:"http://weibo.com/jizhideyunyoujun"},{name:"blog",color:"#6435C9",icon:"ri:global-line",label:"博客：yunyoujun.cn",href:"http://www.yunyoujun.cn"},{name:"wechat",color:"#1AAD19",icon:"ri:wechat-2-line",label:"微信公众号：云游君",href:"https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/about/white-qrcode-and-search.jpg"},{name:"bilibili",color:"#FF8EB3",icon:"ri:bilibili-line",label:"哔哩哔哩：机智的云游君",href:"https://space.bilibili.com/1579790"}],adText:"🍉",adImageLink:O}),components:{Fan:J,VueAboutMe:f}});const x={id:"app"},D=r("br",null,null,-1),U={class:"footer"},W={style:{margin:"1rem"}},B={class:"animate-logo"};q.render=function(e,l,a,n,t,u){const i=m("fan"),o=m("el-button"),d=m("vue-about-me");return v(),s("div",x,[r("h3",{title:e.description},[h(b(e.title)+" ",1),D,r("small",null,b(e.description),1)],8,["title"]),r(i),r("div",U,[r("div",W,[r(o,null,{default:c((()=>[r("a",{href:e.adImageLink,target:"_blank"},[r("span",B,b(e.adText),1)],8,["href"])])),_:1})]),r(d,{copyright:e.copyright,links:e.links},null,8,["copyright","links"])])])};const E=g(q);Object.values({"./modules/element.ts":y,"./modules/ga.ts":_,"./modules/pwa.ts":j}).map((e=>{var l;return null==(l=e.install)?void 0:l.call(e,E)})),E.mount("#app");
