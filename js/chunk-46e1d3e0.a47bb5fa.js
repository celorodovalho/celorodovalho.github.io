(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46e1d3e0"],{"0160":function(t,e,i){},"1f09":function(t,e,i){},3129:function(t,e,i){"use strict";i("a630"),i("c975"),i("d81d"),i("ac1f"),i("3ca3"),i("5319"),i("1276");var s=i("3835"),a=i("5530"),n=(i("1f09"),i("c995")),r=i("24b2"),o=i("7560"),l=i("58df"),c=i("80d2");e["a"]=Object(l["a"])(n["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(a["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(a["a"])(Object(a["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(a["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,i=t.split("@"),a=Object(s["a"])(i,2),n=a[0],r=a[1],o=function(){return e.genStructure(n)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["n"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},3408:function(t,e,i){},8212:function(t,e,i){"use strict";i("a9e3");var s=i("5530"),a=(i("3408"),i("a9ad")),n=i("24b2"),r=i("a236"),o=i("80d2"),l=i("58df");e["a"]=Object(l["a"])(a["a"],n["a"],r["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(o["f"])(this.size),minWidth:Object(o["f"])(this.size),width:Object(o["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},"8ce9":function(t,e,i){},ce7e:function(t,e,i){"use strict";var s=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},eb74:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{rounded:"lg","min-height":"70vh"}},[t.loaded?t._e():i("v-card-text",{attrs:{cols:"6"}},[i("v-skeleton-loader",{attrs:{type:"list-item-avatar-three-line@13"}})],1),i("v-card-text",{staticClass:"py-0"},[i("v-timeline",{attrs:{dense:""}},[t._l(t.experiences,(function(e){return i("v-timeline-item",{key:e._id,attrs:{small:"",color:"light-blue lighten-2"}},[i("v-card",{staticClass:"elevation-1"},[i("v-card-title",{staticClass:"headline"},[i("span",[t._v(t._s(e.title[t.language]))]),i("v-spacer"),i("span",{staticClass:"headline font-weight-light light-blue--text lighten-2",domProps:{textContent:t._s(e.period)}})],1),i("v-card-subtitle",{staticClass:"d-flex"},[i("span",{staticClass:"text-left",domProps:{textContent:t._s(e.company+" - "+e.place)}}),i("v-spacer"),i("span",{staticClass:"font-weight-light light-blue--text lighten-2 text-right",domProps:{textContent:t._s(e.time)}})],1),i("v-divider",{staticClass:"mx-4"}),i("v-card-text",[e.assignments[t.language]?i("p",[t._v(t._s(e.assignments[t.language]))]):t._e(),e.customers.length?i("p",[i("strong",[t._v(t._s(t.$t("label.customers"))+":")]),t._v(" "+t._s(e.customers.join(", ")))]):t._e(),e.projects.length?i("p",[i("strong",[t._v(t._s(t.$t("label.projects"))+":")]),t._v(" "+t._s(e.projects.join(", ")))]):t._e(),i("v-chip-group",{attrs:{column:""}},t._l(e.skills,(function(e){return i("v-chip",{key:e._id,attrs:{small:""}},[i("v-icon",{attrs:{left:"",small:""}},[t._v(" "+t._s(t.getIconName(e))+" ")]),t._v(" "+t._s(e)+" ")],1)})),1)],1)],1)],1)})),i("v-timeline-item",{staticClass:"mt-6",attrs:{color:"grey",icon:"mdi-school"}},[i("span",{staticClass:"headline"},[t._v(t._s(t.$t("label.graduation")))])]),t._l(t.graduations,(function(e){return i("v-timeline-item",{key:e._id,attrs:{small:"",color:"light-blue lighten-2"}},[i("v-card",{staticClass:"elevation-1"},[i("v-card-title",{staticClass:"headline"},[i("span",[t._v(t._s(e.course[t.language]))]),i("v-spacer"),i("span",{staticClass:"headline font-weight-light light-blue--text lighten-2",domProps:{textContent:t._s(e.period)}})],1),i("v-card-subtitle",{domProps:{textContent:t._s(e.institution[t.language])}}),e.description[t.language]?i("v-card-text",{domProps:{textContent:t._s(e.description[t.language])}}):t._e()],1)],1)})),i("v-timeline-item",{staticClass:"mt-6",attrs:{color:"grey",icon:"mdi-police-badge"}},[i("span",{staticClass:"headline"},[t._v(t._s(t.$t("label.certifications")))])]),t._l(t.certifications,(function(e){return i("v-timeline-item",{key:e._id,attrs:{small:"",color:"light-blue lighten-2"}},[i("v-card",{staticClass:"elevation-1"},[i("v-row",[i("v-col",{class:{"align-end":!t.isMobile,"text-right":!t.isMobile,"text-center":t.isMobile,"pr-0":!t.isMobile},attrs:{xs:"12",sm:"12",md:"4",lg:"2"}},[i("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[i("v-img",{attrs:{src:e.badge}})],1)],1),i("v-col",{class:{"pr-0":!t.isMobile},attrs:{xs:"12",sm:"12",md:"8",lg:"10"}},[i("div",{staticClass:"ma-0 vw-100"},[i("v-card-title",{staticClass:"headline"},[i("span",[t._v(t._s(e.name))]),i("v-spacer"),i("span",{staticClass:"headline font-weight-light light-blue--text lighten-2",domProps:{textContent:t._s(new Date(e.issue_date).toLocaleDateString("en-CA"))}})],1),i("v-card-subtitle",{domProps:{textContent:t._s(e.organization)}}),e.credential?i("v-card-text",[t._v(" "+t._s(e.credential)+" "),i("v-btn",{attrs:{text:"",color:"primary",target:"_blank",href:e.url,"x-small":"",fab:""}},[i("v-icon",[t._v("mdi-open-in-new")])],1)],1):t._e()],1)])],1)],1)],1)}))],2)],1)],1)},a=[],n=(i("99af"),i("b0c0"),i("ac1f"),i("5319"),{data:function(){return{}},computed:{experiences:function(){return this.$store.getters["experiences/experiences"]||{}},graduations:function(){return this.$store.getters["graduations/graduations"]||{}},certifications:function(){return this.$store.getters["certifications/certifications"]||{}},language:function(){return this.$i18n.locale},loaded:function(){return this.experiences.length&&this.graduations.length},isMobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":return!0;case"md":case"lg":case"xl":return!1}return null}},mounted:function(){this.loadExperiences(),this.loadGraduations(),this.loadCertifications()},methods:{loadExperiences:function(){return this.$store.dispatch("experiences/load")},loadGraduations:function(){return this.$store.dispatch("graduations/load")},loadCertifications:function(){return this.$store.dispatch("certifications/load")},convertYearToColor:function(t){var e=255,i=2004,s=e/((new Date).getFullYear()-i),a=parseInt(t.substring(0,4))-i,n=parseInt(s)*a;return"rgba(".concat(e-n,",").concat(n,",").concat(n,")")},getIconName:function(t){var e=t.toLowerCase().replace(".","");return"mdi-".concat(e," mdi-language-").concat(e)}}}),r=n,o=i("2877"),l=i("6544"),c=i.n(l),d=i("8212"),h=i("8336"),u=i("b0af"),v=i("99d9"),p=i("cc20"),g=i("ef9a"),m=i("62ad"),f=i("ce7e"),b=i("132d"),_=i("adda"),C=i("0fd9"),x=i("3129"),y=i("2fa4"),$=i("5530"),B=(i("0160"),i("58df")),k=i("7560"),S=Object(B["a"])(k["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object($["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),j=(i("c96a"),i("9d26")),O=i("a9ad"),w=Object(B["a"])(O["a"],k["a"]),V=w.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(j["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object($["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object($["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),D=Object(o["a"])(r,s,a,!1,null,null,null);e["default"]=D.exports;c()(D,{VAvatar:d["a"],VBtn:h["a"],VCard:u["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VChip:p["a"],VChipGroup:g["a"],VCol:m["a"],VDivider:f["a"],VIcon:b["a"],VImg:_["a"],VRow:C["a"],VSkeletonLoader:x["a"],VSpacer:y["a"],VTimeline:S,VTimelineItem:V})}}]);
//# sourceMappingURL=chunk-46e1d3e0.a47bb5fa.js.map