(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),o=a.n(c),r=(a(29),a(6)),s=a(7),m=a(9),i=a(8),u=a(10),d=a(57),b=a(58),E=(a(31),a(11)),y=a.n(E),w=function(){return l.a.createElement("div",{className:"header"},"WEBTOON")},_=a(56),f=function(e){return l.a.createElement("ul",{className:"gnb"},l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=mon",className:"mon"===e.day?"tab_day on":"tab_day"},"\uc6d4\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=tue",className:"tue"===e.day?"tab_day on":"tab_day"},"\ud654\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=wed",className:"wed"===e.day?"tab_day on":"tab_day"},"\uc218\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=thu",className:"thu"===e.day?"tab_day on":"tab_day"},"\ubaa9\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=fri",className:"fri"===e.day?"tab_day on":"tab_day"},"\uae08\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=sat",className:"sat"===e.day?"tab_day on":"tab_day"},"\ud1a0\uc694\uc77c")),l.a.createElement("li",null,l.a.createElement(_.a,{to:"/?day=sun",className:"sun"===e.day?"tab_day on":"tab_day"},"\uc77c\uc694\uc77c")))},p=function(){return l.a.createElement("div",{className:"footer"},"\xa9 HyunJi-2")},N=function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Testttttttt! Main"))}}]),t}(n.Component),h=function(e){var t=e.webtoon;return l.a.createElement("div",{className:"wrap_webtoon"},l.a.createElement("img",{src:t.thumbnail,className:"img_webtoon",alt:t.title}),l.a.createElement("div",{className:"info_webtoon"},l.a.createElement("strong",{className:"tit_webtoon"},t.title),t.genre.map(function(e,t){return l.a.createElement("span",{key:t,className:"txt_genre"},e)}),l.a.createElement("span",{className:"num_score"},"\ud3c9\uc810 : ",t.score)))},v=function(e){return l.a.createElement("ul",{className:"list_webtoon list_episode"},e.episodes.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(_.a,{to:"/viewer/".concat(e.id),className:"link_webtoon"},l.a.createElement("img",{src:e.thumbnailImage.url,className:"img_webtoon",alt:e.title}),l.a.createElement("div",{className:"info_webtoon"},l.a.createElement("strong",{className:"tit_webtoon"},e.title),"".concat(e.dateCreated.substr(0,4),".").concat(e.dateCreated.substr(4,2),".").concat(e.dateCreated.substr(6,2)))))}))},g=(n.Component,n.Component,function(e){function t(){return Object(r.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("end1"),l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Router"),l.a.createElement(b.a,{exact:!0,path:"/",component:N})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.7aafbf60.chunk.js.map