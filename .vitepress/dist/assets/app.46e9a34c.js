import{a2 as p,K as s,a3 as u,a4 as c,a5 as l,a6 as d,a7 as f,a8 as m,a9 as h,aa as A,ab as g,ac as y,ad as P,d as v,u as w,p as C,k as R,ae as _,af as b,ag as D}from"./chunks/framework.3eeee0e6.js";import{t as r}from"./chunks/theme.e3c8df7a.js";const E={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(E),L=v({name:"VitePressApp",setup(){const{site:e}=w();return C(()=>{R(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),_(),b(),D(),n.setup&&n.setup(),()=>p(n.Layout)}});async function T(){const e=S(),a=O();a.provide(c,e);const t=l(e.route);return a.provide(d,t),a.component("Content",f),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function O(){return A(L)}function S(){let e=s,a;return g(t=>{let o=y(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),P(()=>import(o),[])},n.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{T as createApp};
