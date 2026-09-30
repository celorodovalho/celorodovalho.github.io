import{B as x,au as k,g as n,c as l,q as o,A as i,h as c,a as t,d as y,aq as C,e as P,l as B,n as w,t as g,b as r,u as j,o as I,D as v,j as h,m as b}from"./app-DADdsxwI.js";var S=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,D={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},z=x.extend({name:"card",style:S,classes:D}),N={name:"BaseCard",extends:k,style:z,provide:function(){return{$pcCard:this,$parentInstance:this}}},$={name:"Card",extends:N,inheritAttrs:!1};function R(e,a,u,d,p,m){return n(),l("div",o({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(n(),l("div",o({key:0,class:e.cx("header")},e.ptm("header")),[i(e.$slots,"header")],16)):c("",!0),t("div",o({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(n(),l("div",o({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(n(),l("div",o({key:0,class:e.cx("title")},e.ptm("title")),[i(e.$slots,"title")],16)):c("",!0),e.$slots.subtitle?(n(),l("div",o({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[i(e.$slots,"subtitle")],16)):c("",!0)],16)):c("",!0),t("div",o({class:e.cx("content")},e.ptm("content")),[i(e.$slots,"content")],16),e.$slots.footer?(n(),l("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[i(e.$slots,"footer")],16)):c("",!0)],16)],16)}$.render=R;const T={class:"flex align-items-center gap-3"},V={class:"text-surface-500 text-sm"},q={class:"text-2xl font-semibold"},f=y({__name:"DashboardKpiCard",props:{icon:{},label:{},value:{},route:{}},setup(e){const a=C();return(u,d)=>(n(),P(r($),{class:"cursor-pointer",onClick:d[0]||(d[0]=p=>r(a).push(e.route))},{content:B(()=>[t("div",T,[t("i",{class:w(["pi",e.icon,"text-3xl text-primary"])},null,2),t("div",null,[t("div",V,g(e.label),1),t("div",q,g(e.value),1)])])]),_:1}))}}),A={class:"flex flex-column gap-4"},_={class:"text-2xl font-semibold m-0"},E={class:"grid"},K={class:"col-12 md:col-6 lg:col-3"},L={class:"col-12 md:col-6 lg:col-3"},M={class:"col-12 md:col-6 lg:col-3"},F={class:"col-12 md:col-6 lg:col-3"},J=y({__name:"Dashboard",setup(e){const{t:a}=j(),u=b("…"),d=b("…"),p=b("…"),m=b("…");return I(async()=>{await Promise.allSettled([v.get("/projects?itemsPerPage=1").then(s=>u.value=s.data["hydra:totalItems"]),v.get("/experiences?itemsPerPage=1").then(s=>d.value=s.data["hydra:totalItems"]),v.get("/contributions?itemsPerPage=1").then(s=>p.value=s.data["hydra:totalItems"]),v.get("/snapshots/manifest").then(s=>m.value=s.data.lastRun??"—").catch(()=>{m.value="—"})])}),(s,G)=>(n(),l("div",A,[t("h1",_,g(r(a)("nav.admin.dashboard")),1),t("div",E,[t("div",K,[h(f,{icon:"pi-briefcase",label:r(a)("nav.admin.projects"),value:u.value,route:"/admin/projects"},null,8,["label","value"])]),t("div",L,[h(f,{icon:"pi-history",label:r(a)("nav.admin.experiences"),value:d.value,route:"/admin/experiences"},null,8,["label","value"])]),t("div",M,[h(f,{icon:"pi-chart-line",label:r(a)("nav.admin.contributions"),value:p.value,route:"/admin/contributions"},null,8,["label","value"])]),t("div",F,[h(f,{icon:"pi-database",label:r(a)("nav.admin.snapshots"),value:m.value,route:"/admin/snapshots"},null,8,["label","value"])])])]))}});export{J as default};
