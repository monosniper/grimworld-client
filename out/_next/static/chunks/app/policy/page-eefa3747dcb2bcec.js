(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{6544:function(t,e,s){Promise.resolve().then(s.bind(s,3722))},3373:function(t,e,s){"use strict";s.d(e,{LB:function(){return r}});var i=s(2173);let r="https://api.grimworld.xyz/",n=r+"v1/";e.ZP=t=>(0,i.Z)(n+t)},8431:function(t,e,s){"use strict";let i;s.r(e),s.d(e,{RootStoreProvider:function(){return m},useRootStore:function(){return p}});var r=s(7437),n=s(2265),o=s(4256);class c{closeModal(t){this.modals[t]=!1}openModal(t){this.modals[t]=!0}setCurrentProduct(t){this.current_product=t}setCurrentItem(t){this.current_item=t}constructor(){this.modals={product:!1,basket:!1,thanks:!1,craft:!1},this.current_product=null,this.current_item=null,(0,o.ky)(this)}}var h=s(3373);class a{fetchProducts(){(0,h.ZP)("products").then(t=>{let{data:{data:e}}=t;this.products=e,this.categories=e.map(t=>t.Category)})}fetchSettings(){(0,h.ZP)("settings").then(t=>{let{data:{data:e}}=t;this.settings=e})}fetchCrafts(){(0,h.ZP)("crafts").then(t=>{let{data:{data:e}}=t;this.crafts=e})}fetchOnline(){(0,h.ZP)("online").then(t=>{let{data:{data:e}}=t;this.online=e})}fetchBans(){(0,h.ZP)("bans").then(t=>{let{data:{data:e}}=t;this.bans=e})}fetchLatestBuys(){(0,h.ZP)("latest_buys").then(t=>{let{data:{data:e}}=t;this.latest_buys=e})}setCurrentCategory(t){this.current_category=t}setQuery(t){this.query=t}setBansQuery(t){this.bans_query=t}constructor(){this.products=[],this.categories=[],this.crafts=[],this.online=!1,this.settings={telegram:"",tiktok:"",youtube:""},this.bans=[],this.latest_buys=[],this.current_category=null,this.query="",this.bans_query="",(0,o.ky)(this),this.fetchSettings()}}var u=s(5496);class l{addItem(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1],this.items.find(e=>{let{id:s}=e;return s===t.id})||(this.items.push({id:t.id,name:t.name,price:t.price,type:this.PRODUCT_TYPE,isPrivilege:t.isPrivilege,image_name:t.Media.name,duration:this.DURATION_1}),this.total+=parseInt(t.price),this.cookies.set("items",JSON.stringify(this.items)))}removeItem(t){this.total-=parseInt(this.items.find(e=>e.id===t).price),this.items=this.items.filter(e=>e.id!==t),this.cookies.set("items",JSON.stringify(this.items))}changeDuration(t,e){let s=this;this.items.map(i=>{if(i.id===t){i.duration=e,s.total-=i.price;let t=i.prices[i.duration];i.price=t,s.total+=t}return i})}constructor(){this.items=[],this.total=0,this.PRODUCT_TYPE="product",this.DIAMONDS_TYPE="diamonds",this.DURATION_1="1",this.DURATION_2="2",this.DURATION_3="3",this.DURATION_FOREVER="forever",(0,o.ky)(this),this.cookies=new u.Z(null,{path:"/"});let t=this.cookies.get("items");if(t){this.items=t;let e=this;t.map(t=>{let{price:s}=t;e.total+=s})}}}class _{constructor(){this.modalsStore=new c,this.dataStore=new a,this.basketStore=new l}}let d=n.createContext(void 0),m=t=>{let{children:e}=t,s=null!=i?i:new _;return(0,r.jsx)(d.Provider,{value:s,children:e})},p=()=>{let t=n.useContext(d);if(void 0===t)throw Error("useRootStore must be used within RootStoreProvider");return t}},3722:function(t,e,s){"use strict";s.r(e);var i=s(7437),r=s(9729),n=s.n(r);s(2265);var o=s(6606),c=s.n(o),h=s(8431),a=s(1100);e.default=(0,a.Pi)(()=>{let{dataStore:t}=(0,h.useRootStore)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:n().header,children:(0,i.jsx)("div",{className:c().title,children:"Политика конфиденциальности"})}),(0,i.jsx)("div",{className:n().text,children:t.settings.policy})]})})},6606:function(t){t.exports={field:"components_field__0dsH0",field__icon:"components_field__icon__8LhwH",button:"components_button__jE6QE",title:"components_title__41gC1",switch:"components_switch__MciDu",switch__current:"components_switch__current__FX1Xs",switch__item:"components_switch__item__npQhu",switch_active:"components_switch_active__5DJDk"}},9729:function(t){t.exports={header:"static_header__FN8S7",text:"static_text__ZB3tE"}}},function(t){t.O(0,[147,807,971,938,744],function(){return t(t.s=6544)}),_N_E=t.O()}]);