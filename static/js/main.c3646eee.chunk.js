(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,a){e.exports=a(479)},258:function(e,t,a){},259:function(e,t,a){},479:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(234),o=a.n(r),c=(a(258),a(259),a(484)),m=a(485),i=a(483),u=a(247),s=a(248),p=a(45),E=a(72),d=a(246);var g=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)([]),[o,g]=Object(n.useState)("all");Object(n.useEffect)(()=>{c.a.get("/data.json").then(e=>{t(e.data),r(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[]);const v=a.map(e=>({...e,timestamp:new Date(e.timestamp).toLocaleTimeString()}));return l.a.createElement("div",null,l.a.createElement("h1",null,"Developer Activity Dashboard"),l.a.createElement("div",null,l.a.createElement("label",null,"Filter by activity type:"),l.a.createElement("select",{value:o,onChange:t=>{const a=t.target.value;g(a),r("all"===a?e:e.filter(e=>e.type===a))}},l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"commit"},"Commit"),l.a.createElement("option",{value:"pull_request_opened"},"Pull Request Opened"),l.a.createElement("option",{value:"merge_pull_request"},"Merge Pull Request"),l.a.createElement("option",{value:"meeting"},"Meeting"),l.a.createElement("option",{value:"documentation"},"Documentation"))),l.a.createElement(m.a,{width:600,height:300,data:v,margin:{top:5,right:30,left:20,bottom:5}},l.a.createElement(i.a,{strokeDasharray:"3 3"}),l.a.createElement(u.a,{dataKey:"timestamp"}),l.a.createElement(s.a,null),l.a.createElement(p.a,null),l.a.createElement(E.a,null),l.a.createElement(d.a,{type:"monotone",dataKey:"type",stroke:"#8884d8"})))};var v=()=>l.a.createElement("div",{className:"App"},l.a.createElement(g,null));var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,486)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null))),h()}},[[250,1,2]]]);
//# sourceMappingURL=main.c3646eee.chunk.js.map