"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181,247,30],{247:function(e,n,t){t.r(n),t.d(n,{Cast:function(){return l}});var r=t(861),i=t(439),a=t(757),s=t.n(a),c=t(791),o=t(340),d=t(689),p=t(184),l=function(){var e=(0,c.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],l=(0,d.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(l,"/credits"),{params:{api_key:"ab4b5bd9c7ffd7f3aa53eea7788a929e"}});case 3:n=e.sent,a(n.data.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Cast"}),(0,p.jsx)("ul",{children:t.map((function(e){return(0,p.jsxs)("li",{children:[e.name," as ",e.character]},e.id)}))})]})}},713:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,i,a,s,c,o,d,p,l=t(861),u=t(439),h=t(757),v=t.n(h),f=t(791),x=t(340),m=t(689),g=t(247),j=t(30),Z=t(168),w=t(87),b=t(924),k=b.ZP.div(r||(r=(0,Z.Z)(["\ndisplay: flex;\nalign-items: flex-start;\nwidth: 100%;\nflex-direction: row-reverse\n"]))),_=b.ZP.div(i||(i=(0,Z.Z)(["\nflex: 1"]))),P=b.ZP.h2(a||(a=(0,Z.Z)(["\npadding: 20px;\nline-height: 1.17;\nletter-spacing: 0.03em"]))),y=b.ZP.p(s||(s=(0,Z.Z)(["\nwidth: 50%;\npadding: 0 30px;\nfont-size: 18px;\nline-height: 1.17;\nletter-spacing: 0.03em"]))),C=b.ZP.p(c||(c=(0,Z.Z)(["\nfont-size: 10px;\npadding: 0 30px;\nline-height: 1.17;\nletter-spacing: 0.03em\n"]))),E=b.ZP.img(o||(o=(0,Z.Z)(["\nwidth: 250px;\nmargin: 20px;"]))),I=b.ZP.div(d||(d=(0,Z.Z)(["\n  margin-top: 50px;\n  padding-left: 30px;\n"]))),R=(0,b.ZP)(w.rU)(p||(p=(0,Z.Z)(["\ncolor: #415a77;\nfont-weight: 700;\ntext-decoration: none;\ntext-transform: uppercase;\ndisplay: block;\nmargin-bottom: 5px;"]))),S=t(184),U=function(){var e=(0,f.useState)(null),n=(0,u.Z)(e,2),t=n[0],r=n[1],i=(0,m.UO)().movieId;return(0,f.useEffect)((function(){var e=function(){var e=(0,l.Z)(v().mark((function e(){var n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.get("https://api.themoviedb.org/3/movie/".concat(i),{params:{api_key:"ab4b5bd9c7ffd7f3aa53eea7788a929e"}});case 3:n=e.sent,r(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),t?(0,S.jsxs)(k,{children:[(0,S.jsxs)(_,{children:[(0,S.jsxs)(P,{children:[t.title," "]}),(0,S.jsx)(y,{children:t.overview}),(0,S.jsxs)(C,{children:["Release Date: ",t.release_date]}),(0,S.jsxs)(I,{children:[(0,S.jsx)(R,{to:"/movies/".concat(i,"/cast"),children:"Cast"}),(0,S.jsx)(R,{to:"/movies/".concat(i,"/reviews"),children:"Reviews"})]})]}),(0,S.jsx)(E,{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,S.jsx)(f.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading cast..."}),children:(0,S.jsx)(m.Z5,{children:(0,S.jsx)(m.AW,{path:"/movies/:movieId/cast",element:(0,S.jsx)(g.Cast,{})})})}),(0,S.jsx)(f.Suspense,{fallback:(0,S.jsx)("div",{children:"Loading reviews..."}),children:(0,S.jsx)(m.Z5,{children:(0,S.jsx)(m.AW,{path:"/movies/:movieId/reviews",element:(0,S.jsx)(j.Reviews,{})})})})]}):(0,S.jsx)("div",{children:"Loading..."})}},30:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return v}});var r,i=t(861),a=t(439),s=t(757),c=t.n(s),o=t(791),d=t(340),p=t(689),l=t(168),u=t(924).ZP.li(r||(r=(0,l.Z)(["\nborder: 5px"]))),h=t(184),v=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],s=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,i.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://api.themoviedb.org/3/movie/".concat(s,"/reviews"),{params:{api_key:"ab4b5bd9c7ffd7f3aa53eea7788a929e"}});case 3:n=e.sent,r(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Reviews"}),0===t.length?(0,h.jsx)("p",{children:"No reviews found."}):(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)(u,{children:[e.author," - ",e.content]},e.id)}))})]})}}}]);
//# sourceMappingURL=181.73b4fda1.chunk.js.map