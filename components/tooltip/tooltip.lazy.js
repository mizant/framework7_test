(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);var o=t.$,a=t.utils,i=(t.getDevice,t.getSupport),r=t.Class,n=(t.Modal,t.ConstructorMethods),s=(t.ModalMethods,a.extend),l=a.deleteProps;class p extends r{constructor(t,e){void 0===e&&(e={}),super(e,[t]);const a=this,r=i(),n=s({},t.params.tooltip),l=getDocument();a.useModulesParams(n),a.params=s(n,e),void 0===e.offset&&r.touch&&"hover"===a.params.trigger&&(a.params.offset=10);const{targetEl:p,containerEl:c}=a.params;if(!p&&!a.params.delegated)return a;const d=o(p);if(0===d.length&&!a.params.delegated)return a;if(d[0]&&d[0].f7Tooltip&&!a.params.delegated)return d[0].f7Tooltip;let h=o(c||t.$el).eq(0);0===h.length&&(h=t.$el);const g=o(a.render()).eq(0);s(a,{app:t,$targetEl:d,targetEl:d&&d[0],$containerEl:h,containerEl:h&&h[0],$el:g,el:g&&g[0],text:a.params.text||"",visible:!1,opened:!1}),d[0]&&(d[0].f7Tooltip=a);const f={};let u;function m(){a.opened?a.hide():a.show(this)}function v(t){a.opened&&(o(t.target).closest(d).length||o(t.target).closest(a.$el).length)||a.hide()}function E(t){u||(u=!0,f.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,f.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY,a.show(this))}function $(t){if(!u)return;const e="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,o="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;((e-f.x)**2+(o-f.y)**2)**.5>50&&(u=!1,a.hide())}function T(){u&&(u=!1,a.hide())}function w(){a.show(this)}function y(){a.hide()}function x(){g.hasClass("tooltip-in")||g.removeClass("tooltip-out").remove()}return a.attachEvents=function(){if(g.on("transitionend",x),"click"===a.params.trigger)return a.params.delegated?o(l).on("click",a.params.targetEl,m):a.$targetEl.on("click",m),void o("html").on("click",v);if("manual"!==a.params.trigger)if(r.touch){const e=!!r.passiveListener&&{passive:!0};a.params.delegated?o(l).on(t.touchEvents.start,a.params.targetEl,E,e):a.$targetEl.on(t.touchEvents.start,E,e),t.on("touchmove",$),t.on("touchend:passive",T)}else a.params.delegated?(o(l).on(r.pointerEvents?"pointerenter":"mouseenter",a.params.targetEl,w,!0),o(l).on(r.pointerEvents?"pointerleave":"mouseleave",a.params.targetEl,y,!0)):(a.$targetEl.on(r.pointerEvents?"pointerenter":"mouseenter",w),a.$targetEl.on(r.pointerEvents?"pointerleave":"mouseleave",y))},a.detachEvents=function(){if(g.off("transitionend",x),"click"===a.params.trigger)return a.params.delegated?o(l).on("click",a.params.targetEl,m):a.$targetEl.off("click",m),void o("html").off("click",v);if("manual"!==a.params.trigger)if(r.touch){const e=!!r.passiveListener&&{passive:!0};a.params.delegated?o(l).off(t.touchEvents.start,a.params.targetEl,E,e):a.$targetEl.off(t.touchEvents.start,E,e),t.off("touchmove",$),t.off("touchend:passive",T)}else a.params.delegated?(o(l).off(r.pointerEvents?"pointerenter":"mouseenter",a.params.targetEl,w,!0),o(l).off(r.pointerEvents?"pointerleave":"mouseleave",a.params.targetEl,y,!0)):(a.$targetEl.off(r.pointerEvents?"pointerenter":"mouseenter",w),a.$targetEl.off(r.pointerEvents?"pointerleave":"mouseleave",y))},a.useModules(),a.init(),a}setTargetEl(t){const e=this;return e.detachEvents(),e.$targetEl=o(t),e.targetEl=e.$targetEl[0],e.attachEvents(),e}position(t){const e=this,{$el:a,app:i,$containerEl:r}=e,n=!!e.params.containerEl,s=e.params.offset||0;a.css({left:"",top:""});const l=o(t||e.targetEl),[p,c]=[a.width(),a.height()];let d,h,g,f;a.css({left:"",top:""});const u=n&&r.length?r[0].getBoundingClientRect():i;if(l&&l.length>0){if(d=l.outerWidth(),h=l.outerHeight(),void 0===d&&void 0===h){const t=l[0].getBoundingClientRect();d=t.width,h=t.height}const t=l.offset();g=t.left-u.left,f=t.top-u.top;const e=l.parents(".page");e.length>0&&(f-=e[0].scrollTop)}let[m,v]=[0,0,0],E="top";c+s<f?v=f-c-s:c<u.height-f-h?(E="bottom",v=f+h+s):(E="middle",v=h/2+f-c/2,v<=0?v=8:v+c>=u.height&&(v=u.height-c-8)),"top"===E||"bottom"===E?(m=d/2+g-p/2,m<8&&(m=8),m+p>u.width&&(m=u.width-p-8),m<0&&(m=0)):"middle"===E&&(m=g-p,(m<8||m+p>u.width)&&(m<8&&(m=g+d),m+p>u.width&&(m=u.width-p-8))),a.css({top:`${v}px`,left:`${m}px`})}show(t){const e=this,{$el:a,$targetEl:i,$containerEl:r}=e;r[0]&&a[0]&&!r[0].contains(a[0])&&r.append(a),e.position(t);const n=o(t);return e.visible=!0,e.opened=!0,i.trigger("tooltip:show"),a.trigger("tooltip:show"),n.length&&n[0]!==i[0]&&n.trigger("tooltip:show"),e.emit("local::show tooltipShow",e),a.removeClass("tooltip-out").addClass("tooltip-in"),e}hide(){const t=this,{$el:e,$targetEl:o}=t;return t.visible=!1,t.opened=!1,o.trigger("tooltip:hide"),e.trigger("tooltip:hide"),t.emit("local::hide tooltipHide",t),e.addClass("tooltip-out").removeClass("tooltip-in"),t}render(){const t=this;if(t.params.render)return t.params.render.call(t,t);const{cssClass:e,text:o}=t.params;return`\n        <div class="tooltip ${e||""}">\n          <div class="tooltip-content">${o||""}</div>\n        </div>\n      `.trim()}setText(t){const e=this;return void 0===t||(e.params.text=t,e.text=t,e.$el&&e.$el.children(".tooltip-content").html(t),e.opened&&e.position()),e}init(){this.attachEvents()}destroy(){const t=this;t.$targetEl&&!t.destroyed&&(t.$targetEl.trigger("tooltip:beforedestroy"),t.emit("local::beforeDestroy tooltipBeforeDestroy",t),t.$el.remove(),t.$targetEl[0]&&delete t.$targetEl[0].f7Tooltip,t.detachEvents(),l(t),t.destroyed=!0)}}var c={name:"tooltip",static:{Tooltip:p},create(){const t=this;t.tooltip=n({defaultSelector:".tooltip",constructor:p,app:t,domProp:"f7Tooltip"}),t.tooltip.show=function(t){const e=o(t);if(0===e.length)return;const a=e[0].f7Tooltip;return a?(a.show(e[0]),a):void 0},t.tooltip.hide=function(t){const e=o(t);if(0===e.length)return;const a=e[0].f7Tooltip;return a?(a.hide(),a):void 0},t.tooltip.setText=function(t,e){const a=o(t);if(0===a.length)return;const i=a[0].f7Tooltip;return i?(i.setText(e),i):void 0}},params:{tooltip:{targetEl:null,delegated:!1,text:null,cssClass:null,render:null,offset:0,trigger:"hover",containerEl:void 0}},on:{tabMounted(t){const e=this;o(t).find(".tooltip-init").each((t=>{const a=o(t).attr("data-tooltip");a&&e.tooltip.create({targetEl:t,text:a})}))},tabBeforeRemove(t){o(t).find(".tooltip-init").each((t=>{t.f7Tooltip&&t.f7Tooltip.destroy()}))},pageInit(t){const e=this;t.$el.find(".tooltip-init").each((t=>{const a=o(t).attr("data-tooltip");a&&e.tooltip.create({targetEl:t,text:a})})),"ios"===e.theme&&t.view&&t.view.router.dynamicNavbar&&t.$navbarEl&&t.$navbarEl.length>0&&t.$navbarEl.find(".tooltip-init").each((t=>{const a=o(t).attr("data-tooltip");a&&e.tooltip.create({targetEl:t,text:a})}))},pageBeforeRemove(t){t.$el.find(".tooltip-init").each((t=>{t.f7Tooltip&&t.f7Tooltip.destroy()})),"ios"===this.theme&&t.view&&t.view.router.dynamicNavbar&&t.$navbarEl&&t.$navbarEl.length>0&&t.$navbarEl.find(".tooltip-init").each((t=>{t.f7Tooltip&&t.f7Tooltip.destroy()}))}},vnode:{"tooltip-init":{insert(t){const e=t.elm,a=o(e).attr("data-tooltip");a&&this.tooltip.create({targetEl:e,text:a})},update(t){const e=t.elm;e.f7Tooltip&&t&&t.data&&t.data.attrs&&t.data.attrs["data-tooltip"]&&e.f7Tooltip.setText(t.data.attrs["data-tooltip"])},destroy(t){const e=t.elm;e.f7Tooltip&&e.f7Tooltip.destroy()}}}};if(e){if(t.prototype.modules&&t.prototype.modules[c.name])return;t.use(c),t.instance&&(t.instance.useModuleParams(c,t.instance.params),t.instance.useModule(c))}return c}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))