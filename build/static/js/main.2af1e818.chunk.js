(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,c){},34:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},55:function(e,t,c){},75:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(12),i=c.n(a),r=(c(45),c(46),c(9)),l=c(4),o=(c(17),c(1));var j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)("i",{className:"fas fa-recycle"}),Object(o.jsx)(r.b,{to:"/",className:"eco-name",children:Object(o.jsx)("h2",{className:"eco-name",children:"Eco"})}),Object(o.jsx)(r.b,{to:"/",className:"check-name",children:Object(o.jsx)("h2",{className:"check-name",children:"Check"})}),Object(o.jsxs)("ul",{className:"nav-menu active",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/",className:"nav-links",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/about",className:"nav-links",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"https://www.sustainability.vic.gov.au/",target:"_blank",className:"nav-links",children:"More Info"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{to:"/contact",className:"nav-links",children:"Contact"})})]})]})})})};c(55);var d=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("h1",{children:["Because",Object(o.jsx)("h1",{id:"Color_Text",children:"RECYCLING"}),"should be",Object(o.jsx)("h1",{id:"Color_Text",children:"EASY"})]}),Object(o.jsx)("button",{className:"lets_recycle_btn",children:Object(o.jsx)("a",{href:"#search",children:"Let's Recycle"})}),Object(o.jsx)("button",{className:"learn_more",children:Object(o.jsx)("a",{href:"https://www.sustainability.vic.gov.au/recycling-and-reducing-waste/at-home",target:"_blank",children:"Learn More"})}),Object(o.jsx)("div",{className:"sharewaste",children:Object(o.jsx)("a",{href:"https://sharewaste.com/",target:"_blank",children:Object(o.jsx)("h3",{children:"ShareWaste | Give your waste a second chance!"})})})]})})},h=c(36),b=c(37),u=c(40),m=c(39),O=c(21),x=c(38),p=c.n(x),f=(c(75),c.p+"static/media/all-bins-imgs.11659ec0.png"),v=(c(87),[]),y=[],g=[];console.log(y);var N=function(e){Object(u.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(h.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedOption:null},e.handleChange=function(t){e.setState({selectedOption:t.value})},e.ProductKeyDisplayInfo=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].product_name)return g[t].info},e.ProductKeyBin=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].product_name)return"Your Product goes in the ".concat(g[t].bin_info)},e.ProductKeyImage=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].product_name)return g[t].image},e.ProductKeyCommonForm=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].product_name)return"Common Forms: ".concat(g[t].common_form)},e.RecycleKeyDisplayInfo=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].recycle_number)return g[t].info},e.RecycleKeyImage=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].recycle_number)return g[t].image},e.RecycleKeyCommonForm=function(){for(var t=0;t<g.length;t++)if(e.state.selectedOption==g[t].recycle_number)return"Common Forms: ".concat(g[t].common_form)},e}return Object(b.a)(c,[{key:"componentDidMount",value:function(){p.a.get("/api/show").then((function(e){for(var t=0;t<e.data.data.length;t++){v.push({value:e.data.data[t].product_name,label:e.data.data[t].product_name}),g.push(e.data.data[t]);for(var c=!1,s=0;s<y.length;s++)y[s].value==e.data.data[t].recycle_number&&(c=!0);c||y.push({value:e.data.data[t].recycle_number,label:e.data.data[t].recycle_number})}}))}},{key:"render",value:function(){var e=this.ProductKeyDisplayInfo(),t=this.ProductKeyCommonForm(),c=this.RecycleKeyDisplayInfo(),s=this.RecycleKeyCommonForm(),n=this.ProductKeyImage(),a=this.RecycleKeyImage(),i=this.ProductKeyBin();return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{id:"search",className:"search",children:[Object(o.jsx)("h1",{children:" Let\u2019s Check Your Product "}),Object(o.jsxs)("p",{children:["Search here by the ",Object(o.jsx)("b",{children:"Product Name"})," or look up the ",Object(o.jsx)("b",{children:"Recycle Number"})," on your product."]}),Object(o.jsx)(O.a,{className:"product",onChange:this.handleChange,options:v}),Object(o.jsx)(O.a,{className:"recycle-key",onChange:this.handleChange,options:y})]}),Object(o.jsxs)("div",{className:"main-info-container",children:[Object(o.jsxs)("div",{className:"waiting",children:[Object(o.jsx)("h1",{style:{visibility:this.state.selectedOption?"hidden":"visible"},children:"Waiting for your chosen product..."}),Object(o.jsx)("p",{style:{visibility:this.state.selectedOption?"hidden":"visible"},children:Object(o.jsx)("i",{className:"fas fa-recycle fa-spin"})}),Object(o.jsx)("img",{className:"all-bins-img",src:f,style:{visibility:this.state.selectedOption?"hidden":"visible"},alt:"this is car image"})]}),Object(o.jsx)("div",{style:{visibility:this.state.selectedOption?"visible":"hidden"},className:"display-info",children:Object(o.jsxs)("h2",{style:{visibility:this.state.selectedOption?"visible":"hidden"},children:["Your Chosen Product is: ",this.state.selectedOption]})}),Object(o.jsxs)("div",{style:{visibility:this.state.selectedOption?"visible":"hidden"},className:"information-container",children:[Object(o.jsx)("p",{children:i}),Object(o.jsx)("p",{children:e}),Object(o.jsx)("p",{children:t}),"Your Product goes in the Compost Bin"===i?Object(o.jsxs)("p",{children:["Find your nearest Compost Share Waste Drop off ",Object(o.jsx)("a",{href:"https://sharewaste.com/",target:"_blank",children:" Here"})]}):Object(o.jsx)("p",{}),Object(o.jsx)("p",{children:c}),Object(o.jsx)("p",{children:s}),"Common Forms: Compost"===s?Object(o.jsxs)("p",{children:["Find your nearest Compost Share Waste Drop off ",Object(o.jsx)("a",{href:"https://sharewaste.com/",target:"_blank",children:" Here"})]}):Object(o.jsx)("p",{}),Object(o.jsx)("img",{className:"product-img",src:n}),Object(o.jsx)("img",{className:"product-img",src:a})]})]})]})}}]),c}(s.Component),C=c(22),w=c.p+"static/media/lable-tips-trans.83909a9f.png";c(86);var _=function(){var e=Object(s.useState)(!1),t=Object(C.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(C.a)(a,2),r=i[0],l=i[1];return Object(o.jsxs)("div",{className:"label-tips",children:[Object(o.jsxs)("div",{className:"pannel",children:[Object(o.jsx)("label",{children:"Label Tips"}),Object(o.jsx)("button",{className:"dropdown-btn",onClick:function(){return n(!c)},children:Object(o.jsx)("div",{className:"dropdown-btn",onClick:function(){return l(!r)},children:Object(o.jsx)("i",{className:r?"fas fa-times":"fas fa-chevron-down"})})})]}),c?Object(o.jsx)("img",{className:"label-tips-img",src:w,alt:""}):null]})},k=(c(34),function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{children:"About US"}),Object(o.jsxs)("p",{className:"info",children:[Object(o.jsxs)("h3",{children:["Recycling is ",Object(o.jsx)("b",{children:"hard"})," and it ",Object(o.jsx)("b",{children:" shouldn't be"}),"."]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"EcoCheck"})," is a application where an user can find products easily and how to dispose of them without a hassel of a sign up or sign in."]}),Object(o.jsx)("p",{children:" All you have to do is search by Product Name or Recycle Key and our in-depth database will tell you how to dispose of your chosen product"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:Object(o.jsx)("i",{children:"Need some more help?"})}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:Object(o.jsx)("a",{href:"https://www.sustainability.vic.gov.au/",target:"_blank",children:"Click Here"})})," to learn more about Sustaibility in Victoria."]})]})]})})}),P=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsxs)("p",{className:"info",children:[Object(o.jsx)("p",{children:Object(o.jsx)("i",{children:"Need some more help?"})}),Object(o.jsxs)("p",{children:["See Source Code ",Object(o.jsx)("b",{children:Object(o.jsx)("a",{href:"https://github.com/rachellaron/Eco-Check-front-end",target:"_blank",children:"Here"})})," on GitHub"]})]})]})})};var K=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[Object(o.jsx)(d,{}),Object(o.jsx)(N,{}),Object(o.jsx)(_,{})]}),Object(o.jsx)(l.a,{path:"/about",children:Object(o.jsx)(k,{})}),Object(o.jsx)(l.a,{path:"/contact",children:Object(o.jsx)(P,{})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(K,{})}),document.getElementById("root")),S()}},[[88,1,2]]]);
//# sourceMappingURL=main.2af1e818.chunk.js.map