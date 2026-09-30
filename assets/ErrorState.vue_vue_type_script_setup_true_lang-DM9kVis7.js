import{B as g,au as k,x,g as r,c as s,q as v,d as b,F as p,r as h,e as c,b as i,h as m,a as d,j as l,t as y,s as S}from"./app-DADdsxwI.js";var w=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,$={root:{position:"relative"}},P={root:function(t){var n=t.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},B=g.extend({name:"skeleton",style:w,classes:P,inlineStyles:$}),j={name:"BaseSkeleton",extends:k,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:B,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function u(e){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(e)}function z(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=X(e,"string");return u(t)=="symbol"?t:t+""}function X(e,t){if(u(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(u(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var o={name:"Skeleton",extends:j,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return x(z({},this.shape,this.shape))}}},N=["data-p"];function C(e,t,n,a,L,f){return r(),s("div",v({class:e.cx("root"),style:[e.sx("root"),f.containerStyle],"aria-hidden":"true"},e.ptmi("root"),{"data-p":f.dataP}),null,16,N)}o.render=C;const E={class:"loading-skeleton"},A=b({__name:"LoadingSkeleton",props:{variant:{default:"card"}},setup(e){return(t,n)=>(r(),s("div",E,[e.variant==="card"?(r(),s(p,{key:0},h(3,a=>d("div",{key:a,class:"flex flex-column gap-2 mb-4"},[l(i(o),{width:"100%",height:"120px","border-radius":"8px"}),l(i(o),{width:"60%",height:"16px"}),l(i(o),{width:"40%",height:"14px"})])),64)):e.variant==="table"?(r(),s(p,{key:1},h(5,a=>d("div",{key:a,class:"flex gap-2 mb-2"},[l(i(o),{width:"100%",height:"40px","border-radius":"4px"})])),64)):e.variant==="form"?(r(),s(p,{key:2},h(4,a=>d("div",{key:a,class:"flex flex-column gap-1 mb-3"},[l(i(o),{width:"30%",height:"14px"}),l(i(o),{width:"100%",height:"40px","border-radius":"4px"})])),64)):e.variant==="chart"?(r(),c(i(o),{key:3,width:"100%",height:"300px","border-radius":"8px"})):e.variant==="heatmap"?(r(),c(i(o),{key:4,width:"740px",height:"100px","border-radius":"4px"})):e.variant==="text"?(r(),c(i(o),{key:5,width:"3rem",height:"2rem","border-radius":"4px"})):m("",!0)]))}}),F={class:"error-state flex flex-column align-items-center justify-content-center gap-3 p-6"},V={class:"error-title text-center m-0 text-red-600"},_={key:0,class:"text-color-secondary text-center m-0"},D=b({__name:"ErrorState",props:{title:{},body:{default:""},retry:{type:Function,default:void 0}},setup(e){return(t,n)=>(r(),s("div",F,[n[1]||(n[1]=d("i",{class:"pi pi-exclamation-triangle text-5xl text-red-400","aria-hidden":"true"},null,-1)),d("h2",V,y(e.title),1),e.body?(r(),s("p",_,y(e.body),1)):m("",!0),e.retry?(r(),c(i(S),{key:1,label:t.$t("cta.back"),icon:"pi pi-refresh",text:"",onClick:n[0]||(n[0]=a=>e.retry())},null,8,["label"])):m("",!0)]))}});export{D as _,A as a};
