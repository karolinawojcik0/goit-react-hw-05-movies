"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[30],{30:function(e,r,t){t.r(r),t.d(r,{Reviews:function(){return l}});var n,a=t(861),c=t(439),s=t(757),i=t.n(s),o=t(791),u=t(340),f=t(689),h=t(168),p=t(924).ZP.li(n||(n=(0,h.Z)(["\nborder: 5px"]))),v=t(184),l=function(){var e=(0,o.useState)([]),r=(0,c.Z)(e,2),t=r[0],n=r[1],s=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(s,"/reviews"),{params:{api_key:"ab4b5bd9c7ffd7f3aa53eea7788a929e"}});case 3:r=e.sent,n(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Reviews"}),0===t.length?(0,v.jsx)("p",{children:"No reviews found."}):(0,v.jsx)("ul",{children:t.map((function(e){return(0,v.jsxs)(p,{children:[e.author," - ",e.content]},e.id)}))})]})}}}]);
//# sourceMappingURL=30.b75f145c.chunk.js.map