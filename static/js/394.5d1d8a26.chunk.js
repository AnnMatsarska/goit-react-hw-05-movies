"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[394],{760:function(n,t,e){e.d(t,{j:function(){return a}});var r=e(184),a=function(n){var t=n.message;return(0,r.jsx)("h1",{children:t})}},394:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r,a,c,i,s,o,u=e(861),p=e(439),f=e(757),d=e.n(f),h=e(552),l=e(168),x=e(867),v=x.ZP.h1(r||(r=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 320px;\n  margin-bottom: 22px;\n"]))),m=e(791),g=e(697),w=e(510),Z=e(87),k=x.ZP.li(a||(a=(0,l.Z)(["\n  width: calc((100% - 72px) / 4);\n  transition: transform 300ms;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n  }\n"]))),j=x.ZP.img(c||(c=(0,l.Z)(["\n  height: 385px;\n"]))),b=(0,x.ZP)(Z.rU)(i||(i=(0,l.Z)(["\n  color: black;\n"]))),y=x.ZP.h2(s||(s=(0,l.Z)(["\n  display: inline-block;\n  border-radius: 0 0 8px 8px;\n  background-color: rgb(239, 187, 64);\n\n  width: 249px;\n  height: 56px;\n  padding-top: 10px;\n  padding-left: 8px;\n\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 18px;\n"]))),_=e(689),P=e(95),S=e(184),z=function(n){var t=n.movie,e=t.id,r=t.poster_path,a=t.title,c=(0,_.TH)();return(0,S.jsx)(k,{children:(0,S.jsxs)(b,{to:"/movies/".concat(e),state:{from:c},children:[(0,S.jsx)(j,{src:r?"https://image.tmdb.org/t/p/w500/"+r:P,alt:a,loading:"lazy"}),(0,S.jsx)(y,{children:a})]})})},C=x.ZP.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  gap: 24px;\n  justify-content: center;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),T=function(n){var t=n.movies;return(0,S.jsx)(C,{children:t.map((function(n){return(0,S.jsx)(z,{movie:n},n.id)}))})},B=e(760),E=function(){var n=(0,m.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,m.useState)(!1),c=(0,p.Z)(a,2),i=c[0],s=c[1],o=(0,m.useState)(!1),f=(0,p.Z)(o,2),l=f[0],x=f[1];return(0,m.useEffect)((function(){var n=function(){var n=(0,u.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,g.wr)();case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0.message);case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(h.$,{children:(0,S.jsxs)(h.W,{children:[(0,S.jsx)(v,{children:"Trending today"}),i&&(0,S.jsx)(w.a,{}),l&&(0,S.jsx)(B.j,{message:"Opps. something went wrong"}),0!==e.length&&(0,S.jsx)(T,{movies:e})]})})})}},697:function(n,t,e){e.d(t,{BG:function(){return p},kK:function(){return f},sv:function(){return d},wr:function(){return u}});var r=e(861),a=e(757),c=e.n(a),i=e(243),s="1e380c5eeff8711da34762a498fc6761",o="https://api.themoviedb.org/3/",u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},95:function(n,t,e){n.exports=e.p+"static/media/No-Image.svg.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=394.5d1d8a26.chunk.js.map