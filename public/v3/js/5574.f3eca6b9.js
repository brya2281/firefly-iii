"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[5574],{5574:(t,e,n)=>{n.r(e),n.d(e,{default:()=>W});var a=n(9835),i=n(6970);const s={class:"q-mr-sm"},r={key:0},u=(0,a._)("br",null,null,-1),l={key:0};function o(t,e,n,o,d,p){const m=(0,a.up)("q-item-label"),c=(0,a.up)("q-item-section"),h=(0,a.up)("q-item"),g=(0,a.up)("q-separator"),f=(0,a.up)("q-circular-progress"),w=(0,a.up)("q-card-section"),y=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(y,{bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.$t("firefly.bills_to_pay")),1)])),_:1})])),_:1})])),_:1}),(0,a.Wm)(g),(0,a.Wm)(w,{horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{value:p.percentage,size:"50px",thickness:.22,color:"green","track-color":"grey-3"},null,8,["value","thickness"])])),_:1}),(0,a.Wm)(g,{vertical:""}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(t.$t("firefly.bills_to_pay"))+": ",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.unpaid,((t,e)=>((0,a.wg)(),(0,a.iD)("span",null,[(0,a.Uk)((0,i.zw)(p.formatAmount(t.code,t.sum))+" ",1),e+1!==d.unpaid.length?((0,a.wg)(),(0,a.iD)("span",r,", ")):(0,a.kq)("",!0)])))),256)),u,(0,a.Uk)(" "+(0,i.zw)(t.$t("firefly.bills_paid"))+": ",1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.paid,((t,e)=>((0,a.wg)(),(0,a.iD)("span",null,[(0,a.Uk)((0,i.zw)(p.formatAmount(t.code,t.sum))+" ",1),e+1!==d.paid.length?((0,a.wg)(),(0,a.iD)("span",l,", ")):(0,a.kq)("",!0)])))),256))])),_:1})])),_:1})])),_:1})])}var d=n(3555),p=n(1569),m=n(8898);class c{unpaid(t,e){let n="api/v2/bills/sum/unpaid",a=(0,m.Z)(t,"y-MM-dd"),i=(0,m.Z)(e,"y-MM-dd");return p.api.get(n,{params:{start:a,end:i}})}paid(t,e){let n="api/v2/bills/sum/paid",a=(0,m.Z)(t,"y-MM-dd"),i=(0,m.Z)(e,"y-MM-dd");return p.api.get(n,{params:{start:a,end:i}})}}const h={data(){return{store:null,unpaid:[],paid:[],unpaidAmount:0,paidAmount:0,range:{start:null,end:null}}},name:"BillInsightBox",computed:{percentage:function(){if(0===this.unpaidAmount)return 100;const t=this.unpaidAmount+this.paidAmount;return 0===this.paidAmount?0:this.paidAmount/t*100}},mounted(){this.store=(0,d.S)(),null!==this.range.start&&null!==this.range.end||this.store.$onAction((({name:t,$store:e,args:n,after:a,onError:i})=>{a((e=>{"setRange"===t&&(this.range=e,this.triggerUpdate())}))})),this.triggerUpdate()},methods:{triggerUpdate:function(){if(null!==this.store.getRange.start&&null!==this.store.getRange.end){this.unpaid=[];const t=new Date(this.store.getRange.start),e=new Date(this.store.getRange.end),n=new c;n.unpaid(t,e).then((t=>this.parseUnpaidResponse(t.data))),n.paid(t,e).then((t=>this.parsePaidResponse(t.data)))}},formatAmount:function(t,e){return Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e)},parseUnpaidResponse:function(t){for(let e in t)if(t.hasOwnProperty(e)){const n=t[e];this.unpaid.push({sum:n.sum,code:n.code}),this.unpaidAmount=this.unpaidAmount+parseFloat(n.sum)}},parsePaidResponse:function(t){for(let e in t)if(t.hasOwnProperty(e)){const n=t[e];this.paid.push({sum:n.sum,code:n.code}),this.paidAmount=this.paidAmount+-1*parseFloat(n.sum)}}}};var g=n(1639),f=n(4458),w=n(490),y=n(1233),k=n(3115),A=n(926),_=n(3190),b=n(3302),Z=n(9984),U=n.n(Z);const q=(0,g.Z)(h,[["render",o]]),W=q;U()(h,"components",{QCard:f.Z,QItem:w.Z,QItemSection:y.Z,QItemLabel:k.Z,QSeparator:A.Z,QCardSection:_.Z,QCircularProgress:b.Z})}}]);