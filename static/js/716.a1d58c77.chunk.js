"use strict";(self.webpackChunkreact_youtube=self.webpackChunkreact_youtube||[]).push([[716],{716:(s,e,a)=>{a.r(e),a.d(e,{default:()=>d});var t=a(5043),i=a(187),n=a(3216),c=a(3862),r=a(5051),l=a(579);const d=()=>{const{channelId:s}=(0,n.g)(),[e,a]=(0,t.useState)();return(0,t.useEffect)((()=>{console.log(s);(async()=>{const e=await(0,c.T)(`channels?part=snippet&id=${s}`);a(e.items[0])})()}),[]),(0,l.jsx)(i.A,{title:"\uc720\ud29c\ube0c \ucc44\ub110",description:"\uc720\ud29c\ube0c \ucc44\ub110\ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",children:e&&(0,l.jsxs)("section",{id:"channel",children:[(0,l.jsx)("div",{className:"channel__header",style:{backgroundImage:`url(${e.brandingSettings.image.bannerExternalUrl})`},children:(0,l.jsx)("div",{className:"circle",children:(0,l.jsx)("img",{src:e.snippet.thumbnails.high.url,alt:e.snippet.title})})}),(0,l.jsxs)("div",{className:"channel__info",children:[(0,l.jsx)("h3",{className:"title",children:e.snippet.title}),(0,l.jsx)("p",{className:"desc",children:e.snippet.description}),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsxs)("span",{children:[(0,l.jsx)(r.om5,{}),e.statistics.subscriberCount]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(r.cDx,{}),e.statistics.videoCount]}),(0,l.jsxs)("span",{children:[(0,l.jsx)(r.$fZ,{}),e.statistics.viewCount]})]})]})]})})}},3862:(s,e,a)=>{a.d(e,{T:()=>n});var t=a(6213);const i={params:{maxResults:"48"},headers:{"x-rapidapi-key":"69fa4cc875mshb417df952b4d0aap1baf75jsn7dd7778ad7cc","x-rapidapi-host":"youtube-v31.p.rapidapi.com"}},n=async s=>{try{const{data:e}=await t.A.get(`https://youtube-v31.p.rapidapi.com/${s}`,i);return console.log(e),e}catch(e){console.error(e)}}}}]);
//# sourceMappingURL=716.a1d58c77.chunk.js.map