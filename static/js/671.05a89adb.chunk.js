"use strict";(self.webpackChunkreact_youtube=self.webpackChunkreact_youtube||[]).push([[671],{7671:(e,s,i)=>{i.r(s),i.d(s,{default:()=>l});var a=i(5043),t=i(3216),n=i(187),c=i(5475),d=i(579);const r=e=>{let{videos:s}=e;return(0,d.jsx)(d.Fragment,{children:s.map(((e,s)=>(0,d.jsxs)("div",{className:"video",children:[(0,d.jsx)("div",{className:"video__thumb play__icon",children:(0,d.jsx)(c.Link,{to:`/video/${e.id.videoId}`,style:{backgroundImage:`url(${e.snippet.thumbnails.high.url})`}})}),(0,d.jsxs)("div",{className:"video__info",children:[(0,d.jsx)("div",{className:"title",children:(0,d.jsx)(c.Link,{to:`/video/${e.id.videoId}`,children:e.snippet.title})}),(0,d.jsx)("div",{className:"info",children:(0,d.jsx)("span",{className:"author",children:(0,d.jsx)(c.Link,{to:`/channel/${e.snippet.channelId}`,children:e.snippet.channelTitle})})})]})]},s)))})};var o=i(3862);const l=()=>{const{searchId:e}=(0,t.g)(),[s,i]=(0,a.useState)([]),[c,l]=(0,a.useState)(null),[h,p]=(0,a.useState)(!0);(0,a.useEffect)((()=>{i([]),u(e),p(!0)}),[e]);const u=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(0,o.T)(`search?part=snippet&type=video&q=${e}&pageToken=${s}`).then((e=>{l(e.nextPageToken),i((s=>[...s,...e.items])),p(!1)})).catch((e=>{console.log("Error fetching data",e),p(!1)}))},v=h?"isLoading":"isLoaded";return(0,d.jsx)(n.A,{title:"\uc720\ud22c\ube0c \uac80\uc0c9",description:"\uc720\ud29c\ube0c \uac80\uc0c9 \uacb0\uacfc \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4.",children:(0,d.jsxs)("section",{id:"searchPage",className:v,children:[(0,d.jsxs)("h2",{children:["\ud83e\udd20 ",(0,d.jsx)("em",{children:e})," \uac80\uc0c9 \uacb0\uacfc\uc785\ub2c8\ub2e4."]}),(0,d.jsx)("div",{className:"video__inner search",children:(0,d.jsx)(r,{videos:s})}),(0,d.jsx)("div",{className:"video__more",children:c&&(0,d.jsx)("button",{onClick:()=>{c&&u(e,c)},children:"\ub354 \ubcf4\uae30"})})]})})}},3862:(e,s,i)=>{i.d(s,{T:()=>n});var a=i(6213);const t={params:{maxResults:"48"},headers:{"x-rapidapi-key":"69fa4cc875mshb417df952b4d0aap1baf75jsn7dd7778ad7cc","x-rapidapi-host":"youtube-v31.p.rapidapi.com"}},n=async e=>{try{const{data:s}=await a.A.get(`https://youtube-v31.p.rapidapi.com/${e}`,t);return console.log(s),s}catch(s){console.error(s)}}}}]);
//# sourceMappingURL=671.05a89adb.chunk.js.map