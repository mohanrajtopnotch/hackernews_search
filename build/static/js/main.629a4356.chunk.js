(this.webpackJsonphackernews_search=this.webpackJsonphackernews_search||[]).push([[0],{136:function(e,t,l){},147:function(e,t,l){"use strict";l.r(t);var s=l(0),i=l.n(s),c=l(27),n=l.n(c),r=(l(136),l(28)),j=l(49),d=l(152),o=l(149),x=l(72),a=l(155),h=(l(102),l(3)),b=d.a.Search;function O(){var e=Object(h.jsx)(a.a,{style:{fontSize:16,width:"100px",color:"#1890ff"}});return Object(h.jsx)("div",{className:"site-page-header-ghost-wrapper",children:Object(h.jsxs)(o.a,{style:{backgroundColor:"#ff742b",color:"white"},ghost:!1,color:"black",children:[Object(h.jsx)(b,{placeholder:"Search Storie by title , url or author",enterButton:"Search",size:"large",suffix:e,style:{margin:"3px 0px",width:"100%"}},"2"),Object(h.jsx)(j.b,{to:"/settings",children:Object(h.jsx)(x.a,{style:{margin:"10px 1px",backgroundColor:"white",border:"1px solid white",borderRadius:"2px",width:"30%"},children:"Settings"})})]})})}var p=l(7),f=l(151),g=l(150),y=f.a.Option;function u(){a.a;var e=["All","Stories","Comments"],t=["Popularity","Date"],l=["All time","Last 24th","Past Week","Past Month","Past Year"];return Object(h.jsx)("div",{className:"site-page-header-ghost-wrapper",children:Object(h.jsxs)(o.a,{style:{backgroundColor:"#ff742b",color:"white"},ghost:!1,children:[Object(h.jsx)("label",{style:{margin:"10px"},children:"Search"}),Object(h.jsx)(f.a,{defaultValue:e[0],style:Object(p.a)({width:120},"width","100%"),children:e.map((function(e){return Object(h.jsx)(y,{children:e},e)}))}),Object(h.jsx)("label",{style:{margin:"10px"},children:"by"}),Object(h.jsx)(f.a,{defaultValue:t[1],style:Object(p.a)({width:120},"width","100%"),children:t.map((function(e){return Object(h.jsx)(y,{children:e},e)}))}),Object(h.jsx)("label",{style:{margin:"10px"},children:"for"}),Object(h.jsx)(f.a,{defaultValue:l[3],style:Object(p.a)({width:120},"width","100%"),children:l.map((function(e){return Object(h.jsx)(y,{children:e},e)}))}),Object(h.jsx)(g.a,{style:{color:"white",fontSize:"15px",padding:"10px"},children:"122,23,24,44,35,2 results (0.001 seconds)"})]})})}var m=l(6),v=l(153),w=l(154);function k(){var e=Object(s.useState)([]),t=Object(m.a)(e,2),l=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("http://hn.algolia.com/api/v1/search?tags=front_page").then((function(e){return e.json()})).then((function(e){console.log(e.hits),i(e.hits)}),(function(e){console.log(e)}))}),[]),Object(h.jsx)(h.Fragment,{children:l.map((function(e){return Object(h.jsxs)("div",{style:{backgroundColor:"white",border:"1px solid grey",padding:"20px"},children:[Object(h.jsxs)(v.a,{children:[Object(h.jsx)(w.a,{xs:24,sm:12,md:12,lg:8,xl:12,children:Object(h.jsx)(g.a,{style:{width:"50%"},children:e.title})}),Object(h.jsx)(w.a,{xs:24,sm:12,md:12,lg:8,xl:12,children:Object(h.jsx)("a",{style:{width:"50%"},children:e.url})})]}),Object(h.jsxs)(v.a,{children:[Object(h.jsx)(w.a,{xs:24,sm:12,md:6,lg:8,xl:4,children:Object(h.jsxs)(g.a,{style:{width:"50%"},children:[e.points," points"]})}),Object(h.jsx)(w.a,{xs:24,sm:12,md:6,lg:8,xl:4,children:Object(h.jsx)(g.a,{style:{width:"50%"},children:e.author})}),Object(h.jsx)(w.a,{xs:24,sm:12,md:6,lg:8,xl:4,children:Object(h.jsxs)(g.a,{style:{width:"50%"},children:[e.num_comments," Comments"]})})]})]})}))})}function D(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{}),Object(h.jsx)(u,{}),Object(h.jsx)(k,{})]})}function S(){return Object(h.jsxs)("div",{style:{backgroundColor:"#f6f6f0",flex:1},children:[Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row",backgroundColor:"#ff742b",padding:"10px"},children:[Object(h.jsx)("div",{style:{flex:1}}),Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsxs)("p",{style:{fontSize:"15px",fontWeight:500},children:["Search ",Object(h.jsx)("br",{})," Hacker News"]})}),Object(h.jsx)("div",{style:{flex:3}}),Object(h.jsxs)("div",{style:{flex:1},children:[Object(h.jsx)(j.b,{to:"/",children:Object(h.jsxs)("button",{style:{fontSize:"15px",fontWeight:500,textDecoration:"none",margin:"10px",backgroundColor:"white",border:"solid 2px white",borderRadius:"3px",outline:"none"},children:[" ","Back"]})})," "]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{style:{marginTop:0,padding:2,fontWeight:400},children:Object(h.jsx)("strong",{children:"Settings"})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{style:{paddingRight:2,paddingLeft:2},children:[Object(h.jsx)("strong",{children:"Display options"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Style"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsxs)("select",{style:{padding:5,margin:13},children:[Object(h.jsx)("option",{children:"Default"}),Object(h.jsx)("option",{children:"Experimental"})]})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Hits per page"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsxs)("select",{style:{padding:5,margin:13},children:[Object(h.jsx)("option",{children:"10"}),Object(h.jsx)("option",{children:"20"}),Object(h.jsx)("option",{children:"30"}),Object(h.jsx)("option",{children:"50"})]})})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{style:{paddingRight:2,paddingLeft:2},children:[Object(h.jsx)("strong",{children:"Ranking options"}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Default type"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsxs)("select",{style:{padding:5,margin:13},children:[Object(h.jsx)("option",{children:"All"}),Object(h.jsx)("option",{children:"Stories"}),Object(h.jsx)("option",{children:"Comments"})]})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Default type"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsxs)("select",{style:{padding:5,margin:13},children:[Object(h.jsx)("option",{children:"Most Popular First"}),Object(h.jsx)("option",{children:"Most Recent First"})]})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Default date range"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsxs)("select",{style:{padding:5,margin:13},children:[Object(h.jsx)("option",{children:"Last 24h"}),Object(h.jsx)("option",{children:"Last Week"}),Object(h.jsx)("option",{children:"Last Month"}),Object(h.jsx)("option",{children:"Last Year"}),Object(h.jsx)("option",{children:"Forever"})]})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Use the story text for search"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsx)("input",{style:{padding:5,margin:13,marginTop:23},type:"checkbox"})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Use the author's username for search"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsx)("input",{style:{padding:5,margin:13,marginTop:23},type:"checkbox"})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("p",{style:{float:"right"},children:"Typo-tolerance"})}),Object(h.jsx)("div",{style:{flex:1,float:"left"},children:Object(h.jsx)("input",{style:{padding:5,margin:13,marginTop:23},type:"checkbox"})})]}),Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(h.jsx)("div",{style:{flex:9}}),Object(h.jsx)("div",{style:{backgroundColor:"#f6f6f",height:60,marginBottom:0,display:"block",right:0,flex:1,flexFlow:"row-reverse",padding:"10px"},children:Object(h.jsx)("botton",{style:{padding:"1% 3% 1% 3%",backgroundColor:"orange",borderRadius:10,margin:10,right:0},children:"Apply"})})]})]})]})]})}var C=function(){return Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/",component:D}),Object(h.jsx)(r.a,{exact:!0,path:"/settings",component:S})]})},F=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,156)).then((function(t){var l=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;l(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),F()}},[[147,1,2]]]);
//# sourceMappingURL=main.629a4356.chunk.js.map