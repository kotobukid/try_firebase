const __vite__fileDeps=["assets/TestAuth-Yz44qe5f.js","assets/TestAuth-BdB2maxG.css","assets/AboutView-BkJmgYAs.js","assets/AboutView-C6Dx7pxG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bs(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const re={},Wt=[],Ce=()=>{},Fc=()=>!1,gr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ws=t=>t.startsWith("onUpdate:"),ue=Object.assign,Is=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hc=Object.prototype.hasOwnProperty,j=(t,e)=>Hc.call(t,e),$=Array.isArray,Kt=t=>mr(t)==="[object Map]",ko=t=>mr(t)==="[object Set]",z=t=>typeof t=="function",fe=t=>typeof t=="string",wt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",No=t=>(oe(t)||z(t))&&z(t.then)&&z(t.catch),Mo=Object.prototype.toString,mr=t=>Mo.call(t),zc=t=>mr(t).slice(8,-1),Lo=t=>mr(t)==="[object Object]",Es=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dn=bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vc=/-(\w)/g,Be=_r(t=>t.replace(Vc,(e,n)=>n?n.toUpperCase():"")),Bc=/\B([A-Z])/g,rn=_r(t=>t.replace(Bc,"-$1").toLowerCase()),vr=_r(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nr=_r(t=>t?`on${vr(t)}`:""),yt=(t,e)=>!Object.is(t,e),Mr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Do=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},jc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let si;const xo=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ss(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=fe(r)?qc(r):Ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(fe(t)||oe(t))return t}const Wc=/;(?![^(]*\))/g,Kc=/:([^]+)/,Gc=/\/\*[^]*?\*\//g;function qc(t){const e={};return t.replace(Gc,"").split(Wc).forEach(n=>{if(n){const r=n.split(Kc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ts(t){let e="";if(fe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Ts(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yc=bs(Jc);function Uo(t){return!!t||t===""}const Jm=t=>fe(t)?t:t==null?"":$(t)||oe(t)&&(t.toString===Mo||!z(t.toString))?JSON.stringify(t,$o,2):String(t),$o=(t,e)=>e&&e.__v_isRef?$o(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Lr(r,i)+" =>"]=s,n),{})}:ko(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Lr(n))}:wt(e)?Lr(e):oe(e)&&!$(e)&&!Lo(e)?String(e):e,Lr=(t,e="")=>{var n;return wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Fo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Xc(t){return new Fo(t)}function Qc(t,e=Pe){e&&e.active&&e.effects.push(t)}function Zc(){return Pe}let Mt;class Cs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qc(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,It();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return et(),!0;if(el(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),et()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=gt,n=Mt;try{return gt=!0,Mt=this,this._runnings++,ii(this),this.fn()}finally{oi(this),this._runnings--,Mt=n,gt=e}}stop(){this.active&&(ii(this),oi(this),this.onStop&&this.onStop(),this.active=!1)}}function el(t){return t.value}function ii(t){t._trackId++,t._depsLength=0}function oi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ho(t.deps[e],t);t.deps.length=t._depsLength}}function Ho(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let gt=!0,Qr=0;const zo=[];function It(){zo.push(gt),gt=!1}function et(){const t=zo.pop();gt=t===void 0?!0:t}function Rs(){Qr++}function As(){for(Qr--;!Qr&&Zr.length;)Zr.shift()()}function Vo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ho(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Zr=[];function Bo(t,e,n){Rs();for(const r of t.keys()){let s;if(!t.computed&&r.computed&&r._runnings>0&&(s??(s=t.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Zr.push(r.scheduler)))}As()}const jo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},es=new WeakMap,Lt=Symbol(""),ts=Symbol("");function we(t,e,n){if(gt&&Mt){let r=es.get(t);r||es.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=jo(()=>r.delete(n))),Vo(Mt,s)}}function Qe(t,e,n,r,s,i){const o=es.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&$(t)){const a=Number(r);o.forEach((u,d)=>{(d==="length"||!wt(d)&&d>=a)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":$(t)?Es(n)&&c.push(o.get("length")):(c.push(o.get(Lt)),Kt(t)&&c.push(o.get(ts)));break;case"delete":$(t)||(c.push(o.get(Lt)),Kt(t)&&c.push(o.get(ts)));break;case"set":Kt(t)&&c.push(o.get(Lt));break}Rs();for(const a of c)a&&Bo(a,5);As()}const tl=bs("__proto__,__v_isRef,__isVue"),Wo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wt)),ai=nl();function nl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){It(),Rs();const r=J(this)[e].apply(this,n);return As(),et(),r}}),t}function rl(t){wt(t)||(t=String(t));const e=J(this);return we(e,"has",t),e.hasOwnProperty(t)}class Ko{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ml:Yo:i?Jo:qo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){if(o&&j(ai,n))return Reflect.get(ai,n,r);if(n==="hasOwnProperty")return rl}const c=Reflect.get(e,n,r);return(wt(n)?Wo.has(n):tl(n))||(s||we(e,"get",n),i)?c:Ie(c)?o&&Es(n)?c:c.value:oe(c)?s?Qo(c):br(c):c}}class Go extends Ko{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=wn(i);if(!rr(r)&&!wn(r)&&(i=J(i),r=J(r)),!$(e)&&Ie(i)&&!Ie(r))return a?!1:(i.value=r,!0)}const o=$(e)&&Es(n)?Number(n)<e.length:j(e,n),c=Reflect.set(e,n,r,s);return e===J(s)&&(o?yt(r,i)&&Qe(e,"set",n,r):Qe(e,"add",n,r)),c}deleteProperty(e,n){const r=j(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wt(n)||!Wo.has(n))&&we(e,"has",n),r}ownKeys(e){return we(e,"iterate",$(e)?"length":Lt),Reflect.ownKeys(e)}}class sl extends Ko{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const il=new Go,ol=new sl,al=new Go(!0);const Ps=t=>t,yr=t=>Reflect.getPrototypeOf(t);function zn(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(yt(e,i)&&we(s,"get",e),we(s,"get",i));const{has:o}=yr(s),c=r?Ps:n?Ns:In;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(yt(t,s)&&we(r,"has",t),we(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&we(J(t),"iterate",Lt),Reflect.get(t,"size",t)}function ci(t){t=J(t);const e=J(this);return yr(e).has.call(e,t)||(e.add(t),Qe(e,"add",t,t)),this}function li(t,e){e=J(e);const n=J(this),{has:r,get:s}=yr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?yt(e,o)&&Qe(n,"set",t,e):Qe(n,"add",t,e),this}function ui(t){const e=J(this),{has:n,get:r}=yr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Qe(e,"delete",t,void 0),i}function fi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&Qe(t,"clear",void 0,void 0),n}function jn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=J(o),a=e?Ps:t?Ns:In;return!t&&we(c,"iterate",Lt),o.forEach((u,d)=>r.call(s,a(u),a(d),i))}}function Wn(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Kt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),d=n?Ps:e?Ns:In;return!e&&we(i,"iterate",a?ts:Lt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:c?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function cl(){const t={get(i){return zn(this,i)},get size(){return Bn(this)},has:Vn,add:ci,set:li,delete:ui,clear:fi,forEach:jn(!1,!1)},e={get(i){return zn(this,i,!1,!0)},get size(){return Bn(this)},has:Vn,add:ci,set:li,delete:ui,clear:fi,forEach:jn(!1,!0)},n={get(i){return zn(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Vn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!1)},r={get(i){return zn(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Vn.call(this,i,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),n[i]=Wn(i,!0,!1),e[i]=Wn(i,!1,!0),r[i]=Wn(i,!0,!0)}),[t,n,e,r]}const[ll,ul,fl,dl]=cl();function Os(t,e){const n=e?t?dl:fl:t?ul:ll;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(j(n,s)&&s in r?n:r,s,i)}const hl={get:Os(!1,!1)},pl={get:Os(!1,!0)},gl={get:Os(!0,!1)};const qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,ml=new WeakMap;function _l(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vl(t){return t.__v_skip||!Object.isExtensible(t)?0:_l(zc(t))}function br(t){return wn(t)?t:ks(t,!1,il,hl,qo)}function Xo(t){return ks(t,!1,al,pl,Jo)}function Qo(t){return ks(t,!0,ol,gl,Yo)}function ks(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function hn(t){return wn(t)?hn(t.__v_raw):!!(t&&t.__v_isReactive)}function wn(t){return!!(t&&t.__v_isReadonly)}function rr(t){return!!(t&&t.__v_isShallow)}function Zo(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ea(t){return Object.isExtensible(t)&&Do(t,"__v_skip",!0),t}const In=t=>oe(t)?br(t):t,Ns=t=>oe(t)?Qo(t):t;class ta{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Cs(()=>e(this._value),()=>qn(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this),n=e.effect._dirtyLevel;return(!e._cacheable||e.effect.dirty)&&yt(e._value,e._value=e.effect.run())&&n!==3&&qn(e,5),na(e),e.effect._dirtyLevel>=2&&qn(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function yl(t,e,n=!1){let r,s;const i=z(t);return i?(r=t,s=Ce):(r=t.get,s=t.set),new ta(r,s,i||!s,n)}function na(t){var e;gt&&Mt&&(t=J(t),Vo(Mt,(e=t.dep)!=null?e:t.dep=jo(()=>t.dep=void 0,t instanceof ta?t:void 0)))}function qn(t,e=5,n,r){t=J(t);const s=t.dep;s&&Bo(s,e)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function ra(t){return sa(t,!1)}function bl(t){return sa(t,!0)}function sa(t,e){return Ie(t)?t:new wl(t,e)}class wl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:In(e)}get value(){return na(this),this._value}set value(e){const n=this.__v_isShallow||rr(e)||wn(e);e=n?e:J(e),yt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:In(e),qn(this,5))}}function Dt(t){return Ie(t)?t.value:t}const Il={get:(t,e,n)=>Dt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ie(s)&&!Ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ia(t){return hn(t)?t:new Proxy(t,Il)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mt(t,e,n,r){try{return r?t(...r):t()}catch(s){wr(s,e,n)}}function Ne(t,e,n,r){if(z(t)){const s=mt(t,e,n,r);return s&&No(s)&&s.catch(i=>{wr(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}}function wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){It(),mt(a,null,10,[t,o,c]),et();return}}El(t,n,s,r)}function El(t,e,n,r=!0){console.error(t)}let En=!1,ns=!1;const he=[];let ze=0;const Gt=[];let ct=null,Ot=0;const oa=Promise.resolve();let Ms=null;function aa(t){const e=Ms||oa;return t?e.then(this?t.bind(this):t):e}function Sl(t){let e=ze+1,n=he.length;for(;e<n;){const r=e+n>>>1,s=he[r],i=Sn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ls(t){(!he.length||!he.includes(t,En&&t.allowRecurse?ze+1:ze))&&(t.id==null?he.push(t):he.splice(Sl(t.id),0,t),ca())}function ca(){!En&&!ns&&(ns=!0,Ms=oa.then(ua))}function Tl(t){const e=he.indexOf(t);e>ze&&he.splice(e,1)}function Cl(t){$(t)?Gt.push(...t):(!ct||!ct.includes(t,t.allowRecurse?Ot+1:Ot))&&Gt.push(t),ca()}function di(t,e,n=En?ze+1:0){for(;n<he.length;n++){const r=he[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;he.splice(n,1),n--,r()}}}function la(t){if(Gt.length){const e=[...new Set(Gt)].sort((n,r)=>Sn(n)-Sn(r));if(Gt.length=0,ct){ct.push(...e);return}for(ct=e,Ot=0;Ot<ct.length;Ot++){const n=ct[Ot];n.active!==!1&&n()}ct=null,Ot=0}}const Sn=t=>t.id==null?1/0:t.id,Rl=(t,e)=>{const n=Sn(t)-Sn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ua(t){ns=!1,En=!0,he.sort(Rl);try{for(ze=0;ze<he.length;ze++){const e=he[ze];e&&e.active!==!1&&mt(e,null,14)}}finally{ze=0,he.length=0,la(),En=!1,Ms=null,(he.length||Gt.length)&&ua()}}function Al(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[d]||re;p&&(s=n.map(m=>fe(m)?m.trim():m)),h&&(s=n.map(jc))}let c,a=r[c=Nr(e)]||r[c=Nr(Be(e))];!a&&i&&(a=r[c=Nr(rn(e))]),a&&Ne(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ne(u,t,6,s)}}function fa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!z(t)){const a=u=>{const d=fa(u,e,!0);d&&(c=!0,ue(o,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(oe(t)&&r.set(t,null),null):($(i)?i.forEach(a=>o[a]=null):ue(o,i),oe(t)&&r.set(t,o),o)}function Ir(t,e){return!t||!gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),j(t,e[0].toLowerCase()+e.slice(1))||j(t,rn(e))||j(t,e))}let _e=null,Er=null;function sr(t){const e=_e;return _e=t,Er=t&&t.type.__scopeId||null,e}function Ym(t){Er=t}function Xm(){Er=null}function le(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Si(-1);const i=sr(e);let o;try{o=t(...s)}finally{sr(i),r._d&&Si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:d,props:h,data:p,setupState:m,ctx:P,inheritAttrs:A}=t,H=sr(t);let x,L;try{if(n.shapeFlag&4){const B=s||r,se=B;x=He(u.call(se,B,d,h,m,p,P)),L=c}else{const B=e;x=He(B.length>1?B(h,{attrs:c,slots:o,emit:a}):B(h,null)),L=e.props?c:Pl(c)}}catch(B){_n.length=0,wr(B,t,1),x=ee(bt)}let O=x;if(L&&A!==!1){const B=Object.keys(L),{shapeFlag:se}=O;B.length&&se&7&&(i&&B.some(ws)&&(L=Ol(L,i)),O=Qt(O,L,!1,!0))}return n.dirs&&(O=Qt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),x=O,sr(H),x}const Pl=t=>{let e;for(const n in t)(n==="class"||n==="style"||gr(n))&&((e||(e={}))[n]=t[n]);return e},Ol=(t,e)=>{const n={};for(const r in t)(!ws(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?hi(r,o,u):!!o;if(a&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==r[p]&&!Ir(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?hi(r,o,u):!0:!!o;return!1}function hi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function Nl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ml="components";function Ll(t,e){return xl(Ml,t,!0,e)||t}const Dl=Symbol.for("v-ndc");function xl(t,e,n=!0,r=!1){const s=_e||pe;if(s){const i=s.type;{const c=Pu(i,!1);if(c&&(c===e||c===Be(e)||c===vr(Be(e))))return i}const o=pi(s[t]||i[t],e)||pi(s.appContext[t],e);return!o&&r?i:o}}function pi(t,e){return t&&(t[e]||t[Be(e)]||t[vr(Be(e))])}const Ul=t=>t.__isSuspense;function $l(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Cl(t)}function Sr(t,e,n=pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{It();const c=Nn(n),a=Ne(e,n,t,o);return c(),et(),a});return r?s.unshift(i):s.push(i),i}}const nt=t=>(e,n=pe)=>{(!Cr||t==="sp")&&Sr(t,(...r)=>e(...r),n)},Fl=nt("bm"),Hl=nt("m"),zl=nt("bu"),Vl=nt("u"),Bl=nt("bum"),da=nt("um"),jl=nt("sp"),Wl=nt("rtg"),Kl=nt("rtc");function Gl(t,e=pe){Sr("ec",t,e)}function Rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(It(),Ne(a,n,8,[t.el,c,t,e]),et())}}/*! #__NO_SIDE_EFFECTS__ */function kn(t,e){return z(t)?ue({name:t.name},e,{setup:t}):t}const pn=t=>!!t.type.__asyncLoader;function xr(t,e,n={},r,s){if(_e.isCE||_e.parent&&pn(_e.parent)&&_e.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),De();const o=i&&ha(i(n)),c=Us(Te,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function ha(t){return t.some(e=>or(e)?!(e.type===bt||e.type===Te&&!ha(e.children)):!0)?t:null}const rs=t=>t?Ma(t)?Fs(t):rs(t.parent):null,gn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rs(t.parent),$root:t=>rs(t.root),$emit:t=>t.emit,$options:t=>Ds(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ls(t.update)}),$nextTick:t=>t.n||(t.n=aa.bind(t.proxy)),$watch:t=>hu.bind(t)}),Ur=(t,e)=>t!==re&&!t.__isScriptSetup&&j(t,e),ql={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ur(r,e))return o[e]=1,r[e];if(s!==re&&j(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&j(u,e))return o[e]=3,i[e];if(n!==re&&j(n,e))return o[e]=4,n[e];ss&&(o[e]=0)}}const d=gn[e];let h,p;if(d)return e==="$attrs"&&we(t.attrs,"get",""),d(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==re&&j(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,j(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ur(s,e)?(s[e]=n,!0):r!==re&&j(r,e)?(r[e]=n,!0):j(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==re&&j(t,o)||Ur(e,o)||(c=i[0])&&j(c,o)||j(r,o)||j(gn,o)||j(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:j(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ss=!0;function Jl(t){const e=Ds(t),n=t.proxy,r=t.ctx;ss=!1,e.beforeCreate&&mi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:P,activated:A,deactivated:H,beforeDestroy:x,beforeUnmount:L,destroyed:O,unmounted:B,render:se,renderTracked:U,renderTriggered:te,errorCaptured:ve,serverPrefetch:Re,expose:Se,inheritAttrs:rt,components:Ct,directives:xe,filters:on}=e;if(u&&Yl(u,r,null),o)for(const Q in o){const G=o[Q];z(G)&&(r[Q]=G.bind(n))}if(s){const Q=s.call(n,n);oe(Q)&&(t.data=br(Q))}if(ss=!0,i)for(const Q in i){const G=i[Q],We=z(G)?G.bind(n,n):z(G.get)?G.get.bind(n,n):Ce,st=!z(G)&&z(G.set)?G.set.bind(n):Ce,Ue=Oe({get:We,set:st});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:ye=>Ue.value=ye})}if(c)for(const Q in c)pa(c[Q],r,n,Q);if(a){const Q=z(a)?a.call(n):a;Reflect.ownKeys(Q).forEach(G=>{Jn(G,Q[G])})}d&&mi(d,t,"c");function ae(Q,G){$(G)?G.forEach(We=>Q(We.bind(n))):G&&Q(G.bind(n))}if(ae(Fl,h),ae(Hl,p),ae(zl,m),ae(Vl,P),ae(pu,A),ae(gu,H),ae(Gl,ve),ae(Kl,U),ae(Wl,te),ae(Bl,L),ae(da,B),ae(jl,Re),$(Se))if(Se.length){const Q=t.exposed||(t.exposed={});Se.forEach(G=>{Object.defineProperty(Q,G,{get:()=>n[G],set:We=>n[G]=We})})}else t.exposed||(t.exposed={});se&&t.render===Ce&&(t.render=se),rt!=null&&(t.inheritAttrs=rt),Ct&&(t.components=Ct),xe&&(t.directives=xe)}function Yl(t,e,n=Ce){$(t)&&(t=is(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=Ze(s.from||r,s.default,!0):i=Ze(s.from||r):i=Ze(s),Ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function mi(t,e,n){Ne($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,r){const s=r.includes(".")?Ra(n,r):()=>n[r];if(fe(t)){const i=e[t];z(i)&&Yn(s,i)}else if(z(t))Yn(s,t.bind(n));else if(oe(t))if($(t))t.forEach(i=>pa(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&Yn(s,i,t)}}function Ds(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>ir(a,u,o,!0)),ir(a,e,o)),oe(e)&&i.set(e,a),a}function ir(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ir(t,i,n,!0),s&&s.forEach(o=>ir(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Xl[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Xl={data:_i,props:vi,emits:vi,methods:fn,computed:fn,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:fn,directives:fn,watch:Zl,provide:_i,inject:Ql};function _i(t,e){return e?t?function(){return ue(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Ql(t,e){return fn(is(t),is(e))}function is(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function fn(t,e){return t?ue(Object.create(null),t,e):e}function vi(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ue(Object.create(null),gi(t),gi(e??{})):e}function Zl(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function ga(){return{app:null,config:{isNativeTag:Fc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eu=0;function tu(t,e){return function(r,s=null){z(r)||(r=ue({},r)),s!=null&&!oe(s)&&(s=null);const i=ga(),o=new WeakSet;let c=!1;const a=i.app={_uid:eu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ku,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(a,...d)):z(u)&&(o.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,h){if(!c){const p=ee(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(p,u):t(p,u,h),c=!0,a._container=u,u.__vue_app__=a,Fs(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a},runWithContext(u){const d=mn;mn=a;try{return u()}finally{mn=d}}};return a}}let mn=null;function Jn(t,e){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[t]=e}}function Ze(t,e,n=!1){const r=pe||_e;if(r||mn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:mn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&z(e)?e.call(r&&r.proxy):e}}const ma={},_a=()=>Object.create(ma),va=t=>Object.getPrototypeOf(t)===ma;function nu(t,e,n,r=!1){const s={},i=_a();t.propsDefaults=Object.create(null),ya(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ru(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=J(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Ir(t.emitsOptions,p))continue;const m=e[p];if(a)if(j(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const P=Be(p);s[P]=os(a,c,P,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{ya(t,e,s,i)&&(u=!0);let d;for(const h in c)(!e||!j(e,h)&&((d=rn(h))===h||!j(e,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=os(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!j(e,h))&&(delete i[h],u=!0)}u&&Qe(t.attrs,"set","")}function ya(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(dn(a))continue;const u=e[a];let d;s&&j(s,d=Be(a))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:Ir(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=J(n),u=c||re;for(let d=0;d<i.length;d++){const h=i[d];n[h]=os(s,a,h,u[h],t,!j(u,h))}}return o}function os(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=j(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&z(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Nn(s);r=u[n]=a.call(null,e),d()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rn(n))&&(r=!0))}return r}function ba(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!z(t)){const d=h=>{a=!0;const[p,m]=ba(h,e,!0);ue(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return oe(t)&&r.set(t,Wt),Wt;if($(i))for(let d=0;d<i.length;d++){const h=Be(i[d]);yi(h)&&(o[h]=re)}else if(i)for(const d in i){const h=Be(d);if(yi(h)){const p=i[d],m=o[h]=$(p)||z(p)?{type:p}:ue({},p);if(m){const P=Ii(Boolean,m.type),A=Ii(String,m.type);m[0]=P>-1,m[1]=A<0||P<A,(P>-1||j(m,"default"))&&c.push(h)}}}const u=[o,c];return oe(t)&&r.set(t,u),u}function yi(t){return t[0]!=="$"&&!dn(t)}function bi(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function wi(t,e){return bi(t)===bi(e)}function Ii(t,e){return $(e)?e.findIndex(n=>wi(n,t)):z(e)&&wi(e,t)?0:-1}const wa=t=>t[0]==="_"||t==="$stable",xs=t=>$(t)?t.map(He):[He(t)],su=(t,e,n)=>{if(e._n)return e;const r=le((...s)=>xs(e(...s)),n);return r._c=!1,r},Ia=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wa(s))continue;const i=t[s];if(z(i))e[s]=su(s,i,r);else if(i!=null){const o=xs(i);e[s]=()=>o}}},Ea=(t,e)=>{const n=xs(e);t.slots.default=()=>n},iu=(t,e)=>{const n=t.slots=_a();if(t.vnode.shapeFlag&32){const r=e._;r?(ue(n,e),Do(n,"_",r,!0)):Ia(e,n)}else e&&Ea(t,e)},ou=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ue(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ia(e,s)),o=e}else e&&(Ea(t,e),o={default:1});if(i)for(const c in s)!wa(c)&&o[c]==null&&delete s[c]};function as(t,e,n,r,s=!1){if($(t)){t.forEach((p,m)=>as(p,e&&($(e)?e[m]:e),n,r,s));return}if(pn(r)&&!s)return;const i=r.shapeFlag&4?Fs(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,d=c.refs===re?c.refs={}:c.refs,h=c.setupState;if(u!=null&&u!==a&&(fe(u)?(d[u]=null,j(h,u)&&(h[u]=null)):Ie(u)&&(u.value=null)),z(a))mt(a,c,12,[o,d]);else{const p=fe(a),m=Ie(a);if(p||m){const P=()=>{if(t.f){const A=p?j(h,a)?h[a]:d[a]:a.value;s?$(A)&&Is(A,i):$(A)?A.includes(i)||A.push(i):p?(d[a]=[i],j(h,a)&&(h[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else p?(d[a]=o,j(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,be(P,n)):P()}}}const be=$l;function au(t){return cu(t)}function cu(t,e){const n=xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=Ce,insertStaticContent:P}=t,A=(l,f,g,y=null,_=null,I=null,S=void 0,w=null,E=!!f.dynamicChildren)=>{if(l===f)return;l&&!cn(l,f)&&(y=v(l),ye(l,_,I,!0),l=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:b,ref:R,shapeFlag:M}=f;switch(b){case Tr:H(l,f,g,y);break;case bt:x(l,f,g,y);break;case Fr:l==null&&L(f,g,y,S);break;case Te:Ct(l,f,g,y,_,I,S,w,E);break;default:M&1?se(l,f,g,y,_,I,S,w,E):M&6?xe(l,f,g,y,_,I,S,w,E):(M&64||M&128)&&b.process(l,f,g,y,_,I,S,w,E,k)}R!=null&&_&&as(R,l&&l.ref,I,f||l,!f)},H=(l,f,g,y)=>{if(l==null)r(f.el=c(f.children),g,y);else{const _=f.el=l.el;f.children!==l.children&&u(_,f.children)}},x=(l,f,g,y)=>{l==null?r(f.el=a(f.children||""),g,y):f.el=l.el},L=(l,f,g,y)=>{[l.el,l.anchor]=P(l.children,f,g,y,l.el,l.anchor)},O=({el:l,anchor:f},g,y)=>{let _;for(;l&&l!==f;)_=p(l),r(l,g,y),l=_;r(f,g,y)},B=({el:l,anchor:f})=>{let g;for(;l&&l!==f;)g=p(l),s(l),l=g;s(f)},se=(l,f,g,y,_,I,S,w,E)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),l==null?U(f,g,y,_,I,S,w,E):Re(l,f,_,I,S,w,E)},U=(l,f,g,y,_,I,S,w)=>{let E,b;const{props:R,shapeFlag:M,transition:N,dirs:F}=l;if(E=l.el=o(l.type,I,R&&R.is,R),M&8?d(E,l.children):M&16&&ve(l.children,E,null,y,_,$r(l,I),S,w),F&&Rt(l,null,y,"created"),te(E,l,l.scopeId,S,y),R){for(const ne in R)ne!=="value"&&!dn(ne)&&i(E,ne,null,R[ne],I,l.children,y,_,de);"value"in R&&i(E,"value",null,R.value,I),(b=R.onVnodeBeforeMount)&&Fe(b,y,l)}F&&Rt(l,null,y,"beforeMount");const V=lu(_,N);V&&N.beforeEnter(E),r(E,f,g),((b=R&&R.onVnodeMounted)||V||F)&&be(()=>{b&&Fe(b,y,l),V&&N.enter(E),F&&Rt(l,null,y,"mounted")},_)},te=(l,f,g,y,_)=>{if(g&&m(l,g),y)for(let I=0;I<y.length;I++)m(l,y[I]);if(_){let I=_.subTree;if(f===I){const S=_.vnode;te(l,S,S.scopeId,S.slotScopeIds,_.parent)}}},ve=(l,f,g,y,_,I,S,w,E=0)=>{for(let b=E;b<l.length;b++){const R=l[b]=w?lt(l[b]):He(l[b]);A(null,R,f,g,y,_,I,S,w)}},Re=(l,f,g,y,_,I,S)=>{const w=f.el=l.el;let{patchFlag:E,dynamicChildren:b,dirs:R}=f;E|=l.patchFlag&16;const M=l.props||re,N=f.props||re;let F;if(g&&At(g,!1),(F=N.onVnodeBeforeUpdate)&&Fe(F,g,f,l),R&&Rt(f,l,g,"beforeUpdate"),g&&At(g,!0),b?Se(l.dynamicChildren,b,w,g,y,$r(f,_),I):S||G(l,f,w,null,g,y,$r(f,_),I,!1),E>0){if(E&16)rt(w,f,M,N,g,y,_);else if(E&2&&M.class!==N.class&&i(w,"class",null,N.class,_),E&4&&i(w,"style",M.style,N.style,_),E&8){const V=f.dynamicProps;for(let ne=0;ne<V.length;ne++){const q=V[ne],ce=M[q],Ae=N[q];(Ae!==ce||q==="value")&&i(w,q,ce,Ae,_,l.children,g,y,de)}}E&1&&l.children!==f.children&&d(w,f.children)}else!S&&b==null&&rt(w,f,M,N,g,y,_);((F=N.onVnodeUpdated)||R)&&be(()=>{F&&Fe(F,g,f,l),R&&Rt(f,l,g,"updated")},y)},Se=(l,f,g,y,_,I,S)=>{for(let w=0;w<f.length;w++){const E=l[w],b=f[w],R=E.el&&(E.type===Te||!cn(E,b)||E.shapeFlag&70)?h(E.el):g;A(E,b,R,null,y,_,I,S,!0)}},rt=(l,f,g,y,_,I,S)=>{if(g!==y){if(g!==re)for(const w in g)!dn(w)&&!(w in y)&&i(l,w,g[w],null,S,f.children,_,I,de);for(const w in y){if(dn(w))continue;const E=y[w],b=g[w];E!==b&&w!=="value"&&i(l,w,b,E,S,f.children,_,I,de)}"value"in y&&i(l,"value",g.value,y.value,S)}},Ct=(l,f,g,y,_,I,S,w,E)=>{const b=f.el=l?l.el:c(""),R=f.anchor=l?l.anchor:c("");let{patchFlag:M,dynamicChildren:N,slotScopeIds:F}=f;F&&(w=w?w.concat(F):F),l==null?(r(b,g,y),r(R,g,y),ve(f.children||[],g,R,_,I,S,w,E)):M>0&&M&64&&N&&l.dynamicChildren?(Se(l.dynamicChildren,N,g,_,I,S,w),(f.key!=null||_&&f===_.subTree)&&Sa(l,f,!0)):G(l,f,g,R,_,I,S,w,E)},xe=(l,f,g,y,_,I,S,w,E)=>{f.slotScopeIds=w,l==null?f.shapeFlag&512?_.ctx.activate(f,g,y,S,E):on(f,g,y,_,I,S,E):Ht(l,f,E)},on=(l,f,g,y,_,I,S)=>{const w=l.component=Su(l,y,_);if(Aa(l)&&(w.ctx.renderer=k),Tu(w),w.asyncDep){if(_&&_.registerDep(w,ae,S),!l.el){const E=w.subTree=ee(bt);x(null,E,f,g)}}else ae(w,l,f,g,_,I,S)},Ht=(l,f,g)=>{const y=f.component=l.component;if(kl(l,f,g))if(y.asyncDep&&!y.asyncResolved){Q(y,f,g);return}else y.next=f,Tl(y.update),y.effect.dirty=!0,y.update();else f.el=l.el,y.vnode=f},ae=(l,f,g,y,_,I,S)=>{const w=()=>{if(l.isMounted){let{next:R,bu:M,u:N,parent:F,vnode:V}=l;{const Bt=Ta(l);if(Bt){R&&(R.el=V.el,Q(l,R,S)),Bt.asyncDep.then(()=>{l.isUnmounted||w()});return}}let ne=R,q;At(l,!1),R?(R.el=V.el,Q(l,R,S)):R=V,M&&Mr(M),(q=R.props&&R.props.onVnodeBeforeUpdate)&&Fe(q,F,R,V),At(l,!0);const ce=Dr(l),Ae=l.subTree;l.subTree=ce,A(Ae,ce,h(Ae.el),v(Ae),l,_,I),R.el=ce.el,ne===null&&Nl(l,ce.el),N&&be(N,_),(q=R.props&&R.props.onVnodeUpdated)&&be(()=>Fe(q,F,R,V),_)}else{let R;const{el:M,props:N}=f,{bm:F,m:V,parent:ne}=l,q=pn(f);if(At(l,!1),F&&Mr(F),!q&&(R=N&&N.onVnodeBeforeMount)&&Fe(R,ne,f),At(l,!0),M&&ie){const ce=()=>{l.subTree=Dr(l),ie(M,l.subTree,l,_,null)};q?f.type.__asyncLoader().then(()=>!l.isUnmounted&&ce()):ce()}else{const ce=l.subTree=Dr(l);A(null,ce,g,y,l,_,I),f.el=ce.el}if(V&&be(V,_),!q&&(R=N&&N.onVnodeMounted)){const ce=f;be(()=>Fe(R,ne,ce),_)}(f.shapeFlag&256||ne&&pn(ne.vnode)&&ne.vnode.shapeFlag&256)&&l.a&&be(l.a,_),l.isMounted=!0,f=g=y=null}},E=l.effect=new Cs(w,Ce,()=>Ls(b),l.scope),b=l.update=()=>{E.dirty&&E.run()};b.id=l.uid,At(l,!0),b()},Q=(l,f,g)=>{f.component=l;const y=l.vnode.props;l.vnode=f,l.next=null,ru(l,f.props,y,g),ou(l,f.children,g),It(),di(l),et()},G=(l,f,g,y,_,I,S,w,E=!1)=>{const b=l&&l.children,R=l?l.shapeFlag:0,M=f.children,{patchFlag:N,shapeFlag:F}=f;if(N>0){if(N&128){st(b,M,g,y,_,I,S,w,E);return}else if(N&256){We(b,M,g,y,_,I,S,w,E);return}}F&8?(R&16&&de(b,_,I),M!==b&&d(g,M)):R&16?F&16?st(b,M,g,y,_,I,S,w,E):de(b,_,I,!0):(R&8&&d(g,""),F&16&&ve(M,g,y,_,I,S,w,E))},We=(l,f,g,y,_,I,S,w,E)=>{l=l||Wt,f=f||Wt;const b=l.length,R=f.length,M=Math.min(b,R);let N;for(N=0;N<M;N++){const F=f[N]=E?lt(f[N]):He(f[N]);A(l[N],F,g,null,_,I,S,w,E)}b>R?de(l,_,I,!0,!1,M):ve(f,g,y,_,I,S,w,E,M)},st=(l,f,g,y,_,I,S,w,E)=>{let b=0;const R=f.length;let M=l.length-1,N=R-1;for(;b<=M&&b<=N;){const F=l[b],V=f[b]=E?lt(f[b]):He(f[b]);if(cn(F,V))A(F,V,g,null,_,I,S,w,E);else break;b++}for(;b<=M&&b<=N;){const F=l[M],V=f[N]=E?lt(f[N]):He(f[N]);if(cn(F,V))A(F,V,g,null,_,I,S,w,E);else break;M--,N--}if(b>M){if(b<=N){const F=N+1,V=F<R?f[F].el:y;for(;b<=N;)A(null,f[b]=E?lt(f[b]):He(f[b]),g,V,_,I,S,w,E),b++}}else if(b>N)for(;b<=M;)ye(l[b],_,I,!0),b++;else{const F=b,V=b,ne=new Map;for(b=V;b<=N;b++){const Ee=f[b]=E?lt(f[b]):He(f[b]);Ee.key!=null&&ne.set(Ee.key,b)}let q,ce=0;const Ae=N-V+1;let Bt=!1,ti=0;const an=new Array(Ae);for(b=0;b<Ae;b++)an[b]=0;for(b=F;b<=M;b++){const Ee=l[b];if(ce>=Ae){ye(Ee,_,I,!0);continue}let $e;if(Ee.key!=null)$e=ne.get(Ee.key);else for(q=V;q<=N;q++)if(an[q-V]===0&&cn(Ee,f[q])){$e=q;break}$e===void 0?ye(Ee,_,I,!0):(an[$e-V]=b+1,$e>=ti?ti=$e:Bt=!0,A(Ee,f[$e],g,null,_,I,S,w,E),ce++)}const ni=Bt?uu(an):Wt;for(q=ni.length-1,b=Ae-1;b>=0;b--){const Ee=V+b,$e=f[Ee],ri=Ee+1<R?f[Ee+1].el:y;an[b]===0?A(null,$e,g,ri,_,I,S,w,E):Bt&&(q<0||b!==ni[q]?Ue($e,g,ri,2):q--)}}},Ue=(l,f,g,y,_=null)=>{const{el:I,type:S,transition:w,children:E,shapeFlag:b}=l;if(b&6){Ue(l.component.subTree,f,g,y);return}if(b&128){l.suspense.move(f,g,y);return}if(b&64){S.move(l,f,g,k);return}if(S===Te){r(I,f,g);for(let M=0;M<E.length;M++)Ue(E[M],f,g,y);r(l.anchor,f,g);return}if(S===Fr){O(l,f,g);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),r(I,f,g),be(()=>w.enter(I),_);else{const{leave:M,delayLeave:N,afterLeave:F}=w,V=()=>r(I,f,g),ne=()=>{M(I,()=>{V(),F&&F()})};N?N(I,V,ne):ne()}else r(I,f,g)},ye=(l,f,g,y=!1,_=!1)=>{const{type:I,props:S,ref:w,children:E,dynamicChildren:b,shapeFlag:R,patchFlag:M,dirs:N,memoIndex:F}=l;if(M===-2&&(_=!1),w!=null&&as(w,null,g,l,!0),F!=null&&(f.renderCache[F]=void 0),R&256){f.ctx.deactivate(l);return}const V=R&1&&N,ne=!pn(l);let q;if(ne&&(q=S&&S.onVnodeBeforeUnmount)&&Fe(q,f,l),R&6)Hn(l.component,g,y);else{if(R&128){l.suspense.unmount(g,y);return}V&&Rt(l,null,f,"beforeUnmount"),R&64?l.type.remove(l,f,g,k,y):b&&(I!==Te||M>0&&M&64)?de(b,f,g,!1,!0):(I===Te&&M&384||!_&&R&16)&&de(E,f,g),y&&zt(l)}(ne&&(q=S&&S.onVnodeUnmounted)||V)&&be(()=>{q&&Fe(q,f,l),V&&Rt(l,null,f,"unmounted")},g)},zt=l=>{const{type:f,el:g,anchor:y,transition:_}=l;if(f===Te){Vt(g,y);return}if(f===Fr){B(l);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(l.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:w}=_,E=()=>S(g,I);w?w(l.el,I,E):E()}else I()},Vt=(l,f)=>{let g;for(;l!==f;)g=p(l),s(l),l=g;s(f)},Hn=(l,f,g)=>{const{bum:y,scope:_,update:I,subTree:S,um:w,m:E,a:b}=l;Ei(E),Ei(b),y&&Mr(y),_.stop(),I&&(I.active=!1,ye(S,l,f,g)),w&&be(w,f),be(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},de=(l,f,g,y=!1,_=!1,I=0)=>{for(let S=I;S<l.length;S++)ye(l[S],f,g,y,_)},v=l=>l.shapeFlag&6?v(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el);let C=!1;const T=(l,f,g)=>{l==null?f._vnode&&ye(f._vnode,null,null,!0):A(f._vnode||null,l,f,null,null,null,g),C||(C=!0,di(),la(),C=!1),f._vnode=l},k={p:A,um:ye,m:Ue,r:zt,mt:on,mc:ve,pc:G,pbc:Se,n:v,o:t};let Y,ie;return{render:T,hydrate:Y,createApp:tu(T,Y)}}function $r({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sa(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=lt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Sa(o,c)),c.type===Tr&&(c.el=o.el)}}function uu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ta(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ta(e)}function Ei(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const fu=Symbol.for("v-scx"),du=()=>Ze(fu),Kn={};function Yn(t,e,n){return Ca(t,e,n)}function Ca(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=re){if(e&&i){const U=e;e=(...te)=>{U(...te),se()}}const a=pe,u=U=>r===!0?U:kt(U,r===!1?1:void 0);let d,h=!1,p=!1;if(Ie(t)?(d=()=>t.value,h=rr(t)):hn(t)?(d=()=>u(t),h=!0):$(t)?(p=!0,h=t.some(U=>hn(U)||rr(U)),d=()=>t.map(U=>{if(Ie(U))return U.value;if(hn(U))return u(U);if(z(U))return mt(U,a,2)})):z(t)?e?d=()=>mt(t,a,2):d=()=>(m&&m(),Ne(t,a,3,[P])):d=Ce,e&&r){const U=d;d=()=>kt(U())}let m,P=U=>{m=O.onStop=()=>{mt(U,a,4),m=O.onStop=void 0}},A;if(Cr)if(P=Ce,e?n&&Ne(e,a,3,[d(),p?[]:void 0,P]):d(),s==="sync"){const U=du();A=U.__watcherHandles||(U.__watcherHandles=[])}else return Ce;let H=p?new Array(t.length).fill(Kn):Kn;const x=()=>{if(!(!O.active||!O.dirty))if(e){const U=O.run();(r||h||(p?U.some((te,ve)=>yt(te,H[ve])):yt(U,H)))&&(m&&m(),Ne(e,a,3,[U,H===Kn?void 0:p&&H[0]===Kn?[]:H,P]),H=U)}else O.run()};x.allowRecurse=!!e;let L;s==="sync"?L=x:s==="post"?L=()=>be(x,a&&a.suspense):(x.pre=!0,a&&(x.id=a.uid),L=()=>Ls(x));const O=new Cs(d,Ce,L),B=Zc(),se=()=>{O.stop(),B&&Is(B.effects,O)};return e?n?x():H=O.run():s==="post"?be(O.run.bind(O),a&&a.suspense):O.run(),A&&A.push(se),se}function hu(t,e,n){const r=this.proxy,s=fe(t)?t.includes(".")?Ra(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=Nn(this),c=Ca(s,i.bind(r),n);return o(),c}function Ra(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function kt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ie(t))kt(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)kt(t[r],e,n);else if(ko(t)||Kt(t))t.forEach(r=>{kt(r,e,n)});else if(Lo(t)){for(const r in t)kt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kt(t[r],e,n)}return t}const Aa=t=>t.type.__isKeepAlive;function pu(t,e){Pa(t,"a",e)}function gu(t,e){Pa(t,"da",e)}function Pa(t,e,n=pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Aa(s.parent.vnode)&&mu(r,e,n,s),s=s.parent}}function mu(t,e,n,r){const s=Sr(e,t,r,!0);da(()=>{Is(r[e],s)},n)}function Oa(t,e){t.shapeFlag&6&&t.component?Oa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const _u=t=>t.__isTeleport,Te=Symbol.for("v-fgt"),Tr=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),_n=[];let ke=null;function De(t=!1){_n.push(ke=t?null:[])}function vu(){_n.pop(),ke=_n[_n.length-1]||null}let Tn=1;function Si(t){Tn+=t}function ka(t){return t.dynamicChildren=Tn>0?ke||Wt:null,vu(),Tn>0&&ke&&ke.push(t),t}function Et(t,e,n,r,s,i){return ka(K(t,e,n,r,s,i,!0))}function Us(t,e,n,r,s){return ka(ee(t,e,n,r,s,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}const Na=({key:t})=>t??null,Xn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?fe(t)||Ie(t)||z(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Te?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Na(e),ref:e&&Xn(e),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return c?($s(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=fe(n)?8:16),Tn>0&&!o&&ke&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ke.push(a),a}const ee=yu;function yu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Dl)&&(t=bt),or(t)){const c=Qt(t,e,!0);return n&&$s(c,n),Tn>0&&!i&&ke&&(c.shapeFlag&6?ke[ke.indexOf(t)]=c:ke.push(c)),c.patchFlag=-2,c}if(Ou(t)&&(t=t.__vccOpts),e){e=bu(e);let{class:c,style:a}=e;c&&!fe(c)&&(e.class=Ts(c)),oe(a)&&(Zo(a)&&!$(a)&&(a=ue({},a)),e.style=Ss(a))}const o=fe(t)?1:Ul(t)?128:_u(t)?64:oe(t)?4:z(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function bu(t){return t?Zo(t)||va(t)?ue({},t):t:null}function Qt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?wu(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Na(u),ref:e&&e.ref?n&&i?$(i)?i.concat(Xn(e)):[i,Xn(e)]:Xn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Oa(d,a.clone(d)),d}function W(t=" ",e=0){return ee(Tr,null,t,e)}function Qm(t="",e=!1){return e?(De(),Us(bt,null,t)):ee(bt,null,t)}function He(t){return t==null||typeof t=="boolean"?ee(bt):$(t)?ee(Te,null,t.slice()):typeof t=="object"?lt(t):ee(Tr,null,String(t))}function lt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function $s(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$s(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!va(e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[W(e)]):n=8);t.children=e,t.shapeFlag|=n}function wu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ts([e.class,r.class]));else if(s==="style")e.style=Ss([e.style,r.style]);else if(gr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Ne(t,e,7,[n,r])}const Iu=ga();let Eu=0;function Su(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Iu,i={uid:Eu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(r,s),emitsOptions:fa(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Al.bind(null,i),t.ce&&t.ce(i),i}let pe=null,ar,cs;{const t=xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ar=e("__VUE_INSTANCE_SETTERS__",n=>pe=n),cs=e("__VUE_SSR_SETTERS__",n=>Cr=n)}const Nn=t=>{const e=pe;return ar(t),t.scope.on(),()=>{t.scope.off(),ar(e)}},Ti=()=>{pe&&pe.scope.off(),ar(null)};function Ma(t){return t.vnode.shapeFlag&4}let Cr=!1;function Tu(t,e=!1){e&&cs(e);const{props:n,children:r}=t.vnode,s=Ma(t);nu(t,n,s,e),iu(t,r);const i=s?Cu(t,e):void 0;return e&&cs(!1),i}function Cu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ql);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Au(t):null,i=Nn(t);It();const o=mt(r,t,0,[t.props,s]);if(et(),i(),No(o)){if(o.then(Ti,Ti),e)return o.then(c=>{Ci(t,c,e)}).catch(c=>{wr(c,t,0)});t.asyncDep=o}else Ci(t,o,e)}else La(t,e)}function Ci(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=ia(e)),La(t,n)}let Ri;function La(t,e,n){const r=t.type;if(!t.render){if(!e&&Ri&&!r.render){const s=r.template||Ds(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,u=ue(ue({isCustomElement:i,delimiters:c},o),a);r.render=Ri(s,u)}}t.render=r.render||Ce}{const s=Nn(t);It();try{Jl(t)}finally{et(),s()}}}const Ru={get(t,e){return we(t,"get",""),t[e]}};function Au(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ru),slots:t.slots,emit:t.emit,expose:e}}function Fs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ia(ea(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}})):t.proxy}function Pu(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function Ou(t){return z(t)&&"__vccOpts"in t}const Oe=(t,e)=>yl(t,e,Cr);function Da(t,e,n){const r=arguments.length;return r===2?oe(e)&&!$(e)?or(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),ee(t,e,n))}const ku="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Nu="http://www.w3.org/2000/svg",Mu="http://www.w3.org/1998/Math/MathML",Ge=typeof document<"u"?document:null,Ai=Ge&&Ge.createElement("template"),Lu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ge.createElementNS(Nu,t):e==="mathml"?Ge.createElementNS(Mu,t):n?Ge.createElement(t,{is:n}):Ge.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ge.createTextNode(t),createComment:t=>Ge.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ge.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ai.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Ai.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Du=Symbol("_vtc");function xu(t,e,n){const r=t[Du];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pi=Symbol("_vod"),Uu=Symbol("_vsh"),$u=Symbol(""),Fu=/(^|;)\s*display\s*:/;function Hu(t,e,n){const r=t.style,s=fe(n);let i=!1;if(n&&!s){if(e)if(fe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Qn(r,c,"")}else for(const o in e)n[o]==null&&Qn(r,o,"");for(const o in n)o==="display"&&(i=!0),Qn(r,o,n[o])}else if(s){if(e!==n){const o=r[$u];o&&(n+=";"+o),r.cssText=n,i=Fu.test(n)}}else e&&t.removeAttribute("style");Pi in t&&(t[Pi]=i?r.display:"",t[Uu]&&(r.display="none"))}const Oi=/\s*!important$/;function Qn(t,e,n){if($(n))n.forEach(r=>Qn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=zu(t,e);Oi.test(n)?t.setProperty(rn(r),n.replace(Oi,""),"important"):t[r]=n}}const ki=["Webkit","Moz","ms"],Hr={};function zu(t,e){const n=Hr[e];if(n)return n;let r=Be(e);if(r!=="filter"&&r in t)return Hr[e]=r;r=vr(r);for(let s=0;s<ki.length;s++){const i=ki[s]+r;if(i in t)return Hr[e]=i}return e}const Ni="http://www.w3.org/1999/xlink";function Mi(t,e,n,r,s,i=Yc(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ni,e.slice(6,e.length)):t.setAttributeNS(Ni,e,n):n==null||i&&!Uo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wt(n)?String(n):n)}function Vu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Uo(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Bu(t,e,n,r){t.addEventListener(e,n,r)}function ju(t,e,n,r){t.removeEventListener(e,n,r)}const Li=Symbol("_vei");function Wu(t,e,n,r,s=null){const i=t[Li]||(t[Li]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Ku(e);if(r){const u=i[e]=Ju(r,s);Bu(t,c,u,a)}else o&&(ju(t,c,o,a),i[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Ku(t){let e;if(Di.test(t)){e={};let r;for(;r=t.match(Di);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let zr=0;const Gu=Promise.resolve(),qu=()=>zr||(Gu.then(()=>zr=0),zr=Date.now());function Ju(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(Yu(r,n.value),e,5,[r])};return n.value=t,n.attached=qu(),n}function Yu(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xu=(t,e,n,r,s,i,o,c,a)=>{const u=s==="svg";e==="class"?xu(t,r,u):e==="style"?Hu(t,n,r):gr(e)?ws(e)||Wu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qu(t,e,r,u))?(Vu(t,e,r,i,o,c,a),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mi(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Mi(t,e,r,u))};function Qu(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xi(e)&&z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xi(e)&&fe(n)?!1:e in t}const Zu=ue({patchProp:Xu},Lu);let Ui;function ef(){return Ui||(Ui=au(Zu))}const tf=(...t)=>{const e=ef().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rf(r);if(!s)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,nf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rf(t){return fe(t)?document.querySelector(t):t}var sf=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const of=Symbol();var $i;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})($i||($i={}));function af(){const t=Xc(!0),e=t.run(()=>ra({}));let n=[],r=[];const s=ea({install(i){s._a=i,i.provide(of,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!sf?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof document<"u";function cf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Vr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Le(s)?s.map(t):t(s)}return n}const vn=()=>{},Le=Array.isArray,xa=/#/g,lf=/&/g,uf=/\//g,ff=/=/g,df=/\?/g,Ua=/\+/g,hf=/%5B/g,pf=/%5D/g,$a=/%5E/g,gf=/%60/g,Fa=/%7B/g,mf=/%7C/g,Ha=/%7D/g,_f=/%20/g;function Hs(t){return encodeURI(""+t).replace(mf,"|").replace(hf,"[").replace(pf,"]")}function vf(t){return Hs(t).replace(Fa,"{").replace(Ha,"}").replace($a,"^")}function ls(t){return Hs(t).replace(Ua,"%2B").replace(_f,"+").replace(xa,"%23").replace(lf,"%26").replace(gf,"`").replace(Fa,"{").replace(Ha,"}").replace($a,"^")}function yf(t){return ls(t).replace(ff,"%3D")}function bf(t){return Hs(t).replace(xa,"%23").replace(df,"%3F")}function wf(t){return t==null?"":bf(t).replace(uf,"%2F")}function Cn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const If=/\/$/,Ef=t=>t.replace(If,"");function Br(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Rf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Cn(o)}}function Sf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Fi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zt(e.matched[r],n.matched[s])&&za(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function za(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cf(t[n],e[n]))return!1;return!0}function Cf(t,e){return Le(t)?Hi(t,e):Le(e)?Hi(e,t):t===e}function Hi(t,e){return Le(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Rf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Rn;(function(t){t.pop="pop",t.push="push"})(Rn||(Rn={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function Af(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ef(t)}const Pf=/^[^#]+#/;function Of(t,e){return t.replace(Pf,"#")+e}function kf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rr=()=>({left:window.scrollX,top:window.scrollY});function Nf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zi(t,e){return(history.state?history.state.position-e:-1)+t}const us=new Map;function Mf(t,e){us.set(t,e)}function Lf(t){const e=us.get(t);return us.delete(t),e}let Df=()=>location.protocol+"//"+location.host;function Va(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Fi(a,"")}return Fi(n,t)+r+s}function xf(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=Va(t,location),P=n.value,A=e.value;let H=0;if(p){if(n.value=m,e.value=p,o&&o===P){o=null;return}H=A?p.position-A.position:0}else r(m);s.forEach(x=>{x(n.value,P,{delta:H,type:Rn.pop,direction:H?H>0?yn.forward:yn.back:yn.unknown})})};function a(){o=n.value}function u(p){s.push(p);const m=()=>{const P=s.indexOf(p);P>-1&&s.splice(P,1)};return i.push(m),m}function d(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Rr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:u,destroy:h}}function Vi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rr():null}}function Uf(t){const{history:e,location:n}=window,r={value:Va(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Df()+t+a;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](p)}}function o(a,u){const d=X({},e.state,Vi(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,d,!0),r.value=a}function c(a,u){const d=X({},s.value,e.state,{forward:a,scroll:Rr()});i(d.current,d,!0);const h=X({},Vi(r.value,a,null),{position:d.position+1},u);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function $f(t){t=Af(t);const e=Uf(t),n=xf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Of.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ff(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),$f(t)}function Hf(t){return typeof t=="string"||t&&typeof t=="object"}function Ba(t){return typeof t=="string"||typeof t=="symbol"}const ja=Symbol("");var Bi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bi||(Bi={}));function en(t,e){return X(new Error,{type:t,[ja]:!0},e)}function Ke(t,e){return t instanceof Error&&ja in t&&(e==null||!!(t.type&e))}const ji="[^/]+?",zf={sensitive:!1,strict:!1,start:!0,end:!0},Vf=/[.+*?^${}()[\]/\\]/g;function Bf(t,e){const n=X({},zf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Vf,"\\$&"),m+=40;else if(p.type===1){const{value:P,repeatable:A,optional:H,regexp:x}=p;i.push({name:P,repeatable:A,optional:H});const L=x||ji;if(L!==ji){m+=10;try{new RegExp(`(${L})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${P}" (${L}): `+B.message)}}let O=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(O=H&&u.length<2?`(?:/${O})`:"/"+O),H&&(O+="?"),s+=O,m+=20,H&&(m+=-8),A&&(m+=-20),L===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",P=i[p-1];h[P.name]=m&&P.repeatable?m.split("/"):m}return h}function a(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:P,repeatable:A,optional:H}=m,x=P in u?u[P]:"";if(Le(x)&&!A)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const L=Le(x)?x.join("/"):x;if(!L)if(H)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function jf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Wa(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Wi(r))return 1;if(Wi(s))return-1}return s.length-r.length}function Wi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wf={type:0,value:""},Kf=/[a-zA-Z0-9_]/;function Gf(t){if(!t)return[[]];if(t==="/")return[[Wf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Kf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function qf(t,e,n){const r=Bf(Gf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jf(t,e){const n=[],r=new Map;e=qi({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const P=!m,A=Yf(h);A.aliasOf=m&&m.record;const H=qi(e,h),x=[A];if("alias"in h){const B=typeof h.alias=="string"?[h.alias]:h.alias;for(const se of B)x.push(X({},A,{components:m?m.record.components:A.components,path:se,aliasOf:m?m.record:A}))}let L,O;for(const B of x){const{path:se}=B;if(p&&se[0]!=="/"){const U=p.record.path,te=U[U.length-1]==="/"?"":"/";B.path=p.record.path+(se&&te+se)}if(L=qf(B,p,H),m?m.alias.push(L):(O=O||L,O!==L&&O.alias.push(L),P&&h.name&&!Gi(L)&&o(h.name)),Ka(L)&&a(L),A.children){const U=A.children;for(let te=0;te<U.length;te++)i(U[te],L,m&&m.children[te])}m=m||L}return O?()=>{o(O)}:vn}function o(h){if(Ba(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=Zf(h,n);n.splice(p,0,h),h.record.name&&!Gi(h)&&r.set(h.record.name,h)}function u(h,p){let m,P={},A,H;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw en(1,{location:h});H=m.record.name,P=X(Ki(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&Ki(h.params,m.keys.map(O=>O.name))),A=m.stringify(P)}else if(h.path!=null)A=h.path,m=n.find(O=>O.re.test(A)),m&&(P=m.parse(A),H=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw en(1,{location:h,currentLocation:p});H=m.record.name,P=X({},p.params,h.params),A=m.stringify(P)}const x=[];let L=m;for(;L;)x.unshift(L.record),L=L.parent;return{name:H,path:A,params:P,matched:x,meta:Qf(x)}}t.forEach(h=>i(h));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qf(t){return t.reduce((e,n)=>X(e,n.meta),{})}function qi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Zf(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Wa(t,e[i])<0?r=i:n=i+1}const s=ed(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ed(t){let e=t;for(;e=e.parent;)if(Ka(e)&&Wa(t,e)===0)return e}function Ka({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function td(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ua," "),o=i.indexOf("="),c=Cn(o<0?i:i.slice(0,o)),a=o<0?null:Cn(i.slice(o+1));if(c in e){let u=e[c];Le(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function Ji(t){let e="";for(let n in t){const r=t[n];if(n=yf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&ls(i)):[r&&ls(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Le(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rd=Symbol(""),Yi=Symbol(""),zs=Symbol(""),Ga=Symbol(""),fs=Symbol("");function ln(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ut(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=p=>{p===!1?a(en(4,{from:n,to:e})):p instanceof Error?a(p):Hf(p)?a(en(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(d);t.length<3&&(h=h.then(u)),h.catch(p=>a(p))})}function jr(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(sd(a)){const d=(a.__vccOpts||a)[e];d&&i.push(ut(d,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=cf(d)?d.default:d;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&ut(m,n,r,o,c,s)()}))}}return i}function sd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xi(t){const e=Ze(zs),n=Ze(Ga),r=Oe(()=>{const a=Dt(t.to);return e.resolve(a)}),s=Oe(()=>{const{matched:a}=r.value,{length:u}=a,d=a[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(Zt.bind(null,d));if(p>-1)return p;const m=Qi(a[u-2]);return u>1&&Qi(d)===m&&h[h.length-1].path!==m?h.findIndex(Zt.bind(null,a[u-2])):p}),i=Oe(()=>s.value>-1&&cd(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&za(n.params,r.value.params));function c(a={}){return ad(a)?e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(vn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const id=kn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(t,{slots:e}){const n=br(Xi(t)),{options:r}=Ze(zs),s=Oe(()=>({[Zi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Da("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),od=id;function ad(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Le(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zi=(t,e,n)=>t??e??n,ld=kn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ze(fs),s=Oe(()=>t.route||r.value),i=Ze(Yi,0),o=Oe(()=>{let u=Dt(i);const{matched:d}=s.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),c=Oe(()=>s.value.matched[o.value]);Jn(Yi,Oe(()=>o.value+1)),Jn(rd,c),Jn(fs,s);const a=ra();return Yn(()=>[a.value,c.value,t.name],([u,d,h],[p,m,P])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Zt(d,m)||!p)&&(d.enterCallbacks[h]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,h=c.value,p=h&&h.components[d];if(!p)return eo(n.default,{Component:p,route:u});const m=h.props[d],P=m?m===!0?u.params:typeof m=="function"?m(u):m:null,H=Da(p,X({},P,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[d]=null)},ref:a}));return eo(n.default,{Component:H,route:u})||H}}});function eo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qa=ld;function ud(t){const e=Jf(t.routes,t),n=t.parseQuery||td,r=t.stringifyQuery||Ji,s=t.history,i=ln(),o=ln(),c=ln(),a=bl(ot);let u=ot;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Vr.bind(null,v=>""+v),h=Vr.bind(null,wf),p=Vr.bind(null,Cn);function m(v,C){let T,k;return Ba(v)?(T=e.getRecordMatcher(v),k=C):k=v,e.addRoute(k,T)}function P(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function x(v,C){if(C=X({},C||a.value),typeof v=="string"){const f=Br(n,v,C.path),g=e.resolve({path:f.path},C),y=s.createHref(f.fullPath);return X(f,g,{params:p(g.params),hash:Cn(f.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=X({},v,{path:Br(n,v.path,C.path).path});else{const f=X({},v.params);for(const g in f)f[g]==null&&delete f[g];T=X({},v,{params:h(f)}),C.params=h(C.params)}const k=e.resolve(T,C),Y=v.hash||"";k.params=d(p(k.params));const ie=Sf(r,X({},v,{hash:vf(Y),path:k.path})),l=s.createHref(ie);return X({fullPath:ie,hash:Y,query:r===Ji?nd(v.query):v.query||{}},k,{redirectedFrom:void 0,href:l})}function L(v){return typeof v=="string"?Br(n,v,a.value.path):X({},v)}function O(v,C){if(u!==v)return en(8,{from:C,to:v})}function B(v){return te(v)}function se(v){return B(X(L(v),{replace:!0}))}function U(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),X({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function te(v,C){const T=u=x(v),k=a.value,Y=v.state,ie=v.force,l=v.replace===!0,f=U(T);if(f)return te(X(L(f),{state:typeof f=="object"?X({},Y,f.state):Y,force:ie,replace:l}),C||T);const g=T;g.redirectedFrom=C;let y;return!ie&&Tf(r,k,T)&&(y=en(16,{to:g,from:k}),Ue(k,k,!0,!1)),(y?Promise.resolve(y):Se(g,k)).catch(_=>Ke(_)?Ke(_,2)?_:st(_):G(_,g,k)).then(_=>{if(_){if(Ke(_,2))return te(X({replace:l},L(_.to),{state:typeof _.to=="object"?X({},Y,_.to.state):Y,force:ie}),C||g)}else _=Ct(g,k,!0,l,Y);return rt(g,k,_),_})}function ve(v,C){const T=O(v,C);return T?Promise.reject(T):Promise.resolve()}function Re(v){const C=Vt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Se(v,C){let T;const[k,Y,ie]=fd(v,C);T=jr(k.reverse(),"beforeRouteLeave",v,C);for(const f of k)f.leaveGuards.forEach(g=>{T.push(ut(g,v,C))});const l=ve.bind(null,v,C);return T.push(l),de(T).then(()=>{T=[];for(const f of i.list())T.push(ut(f,v,C));return T.push(l),de(T)}).then(()=>{T=jr(Y,"beforeRouteUpdate",v,C);for(const f of Y)f.updateGuards.forEach(g=>{T.push(ut(g,v,C))});return T.push(l),de(T)}).then(()=>{T=[];for(const f of ie)if(f.beforeEnter)if(Le(f.beforeEnter))for(const g of f.beforeEnter)T.push(ut(g,v,C));else T.push(ut(f.beforeEnter,v,C));return T.push(l),de(T)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),T=jr(ie,"beforeRouteEnter",v,C,Re),T.push(l),de(T))).then(()=>{T=[];for(const f of o.list())T.push(ut(f,v,C));return T.push(l),de(T)}).catch(f=>Ke(f,8)?f:Promise.reject(f))}function rt(v,C,T){c.list().forEach(k=>Re(()=>k(v,C,T)))}function Ct(v,C,T,k,Y){const ie=O(v,C);if(ie)return ie;const l=C===ot,f=jt?history.state:{};T&&(k||l?s.replace(v.fullPath,X({scroll:l&&f&&f.scroll},Y)):s.push(v.fullPath,Y)),a.value=v,Ue(v,C,T,l),st()}let xe;function on(){xe||(xe=s.listen((v,C,T)=>{if(!Hn.listening)return;const k=x(v),Y=U(k);if(Y){te(X(Y,{replace:!0}),k).catch(vn);return}u=k;const ie=a.value;jt&&Mf(zi(ie.fullPath,T.delta),Rr()),Se(k,ie).catch(l=>Ke(l,12)?l:Ke(l,2)?(te(l.to,k).then(f=>{Ke(f,20)&&!T.delta&&T.type===Rn.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),G(l,k,ie))).then(l=>{l=l||Ct(k,ie,!1),l&&(T.delta&&!Ke(l,8)?s.go(-T.delta,!1):T.type===Rn.pop&&Ke(l,20)&&s.go(-1,!1)),rt(k,ie,l)}).catch(vn)}))}let Ht=ln(),ae=ln(),Q;function G(v,C,T){st(v);const k=ae.list();return k.length?k.forEach(Y=>Y(v,C,T)):console.error(v),Promise.reject(v)}function We(){return Q&&a.value!==ot?Promise.resolve():new Promise((v,C)=>{Ht.add([v,C])})}function st(v){return Q||(Q=!v,on(),Ht.list().forEach(([C,T])=>v?T(v):C()),Ht.reset()),v}function Ue(v,C,T,k){const{scrollBehavior:Y}=t;if(!jt||!Y)return Promise.resolve();const ie=!T&&Lf(zi(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return aa().then(()=>Y(v,C,ie)).then(l=>l&&Nf(l)).catch(l=>G(l,v,C))}const ye=v=>s.go(v);let zt;const Vt=new Set,Hn={currentRoute:a,listening:!0,addRoute:m,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:A,resolve:x,options:t,push:B,replace:se,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ae.add,isReady:We,install(v){const C=this;v.component("RouterLink",od),v.component("RouterView",qa),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(a)}),jt&&!zt&&a.value===ot&&(zt=!0,B(s.location).catch(Y=>{}));const T={};for(const Y in ot)Object.defineProperty(T,Y,{get:()=>a.value[Y],enumerable:!0});v.provide(zs,C),v.provide(Ga,Xo(T)),v.provide(fs,a);const k=v.unmount;Vt.add(v),v.unmount=function(){Vt.delete(v),Vt.size<1&&(u=ot,xe&&xe(),xe=null,a.value=ot,zt=!1,Q=!1),k()}}};function de(v){return v.reduce((C,T)=>C.then(()=>Re(T)),Promise.resolve())}return Hn}function fd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Zt(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>Zt(u,a))||s.push(a))}return[n,r,s]}const dd=kn({__name:"App",setup(t){return(e,n)=>(De(),Us(Dt(qa)))}}),Ft=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hd=Ft(dd,[["__scopeId","data-v-3baf7b7d"]]),pd="modulepreload",gd=function(t){return"/try_firebase/"+t},to={},no=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=gd(c),c in to)return;to[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":pd,a||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),a)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},md={},_d={class:"item"},vd={class:"details"};function yd(t,e){return De(),Et("div",_d,[K("i",null,[xr(t.$slots,"icon",{},void 0)]),K("div",vd,[K("h3",null,[xr(t.$slots,"heading",{},void 0)]),xr(t.$slots,"default",{},void 0)])])}const un=Ft(md,[["render",yd],["__scopeId","data-v-fd0742eb"]]),bd={},wd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Id=K("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Ed=[Id];function Sd(t,e){return De(),Et("svg",wd,Ed)}const Td=Ft(bd,[["render",Sd]]),Cd={},Rd={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ad=K("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Pd=[Ad];function Od(t,e){return De(),Et("svg",Rd,Pd)}const kd=Ft(Cd,[["render",Od]]),Nd={},Md={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Ld=K("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Dd=[Ld];function xd(t,e){return De(),Et("svg",Md,Dd)}const Ud=Ft(Nd,[["render",xd]]),$d={},Fd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Hd=K("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),zd=[Hd];function Vd(t,e){return De(),Et("svg",Fd,zd)}const Bd=Ft($d,[["render",Vd]]),jd={},Wd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Kd=K("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),Gd=[Kd];function qd(t,e){return De(),Et("svg",Wd,Gd)}const Jd=Ft(jd,[["render",qd]]),Yd=K("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),Xd=K("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),Qd=K("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),Zd=K("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),eh=K("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),th=K("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),nh=K("br",null,null,-1),rh=K("code",null,"README.md",-1),sh=K("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),ih=K("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),oh=K("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),ah=K("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),ch=K("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),lh=K("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),uh=K("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),fh=K("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),dh=K("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),hh=K("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),ph=kn({__name:"TheWelcome",setup(t){return(e,n)=>(De(),Et(Te,null,[ee(un,null,{icon:le(()=>[ee(Td)]),heading:le(()=>[W("Documentation")]),default:le(()=>[W(" Vue’s "),Yd,W(" provides you with all information you need to get started. ")]),_:1}),ee(un,null,{icon:le(()=>[ee(kd)]),heading:le(()=>[W("Tooling")]),default:le(()=>[W(" This project is served and bundled with "),Xd,W(". The recommended IDE setup is "),Qd,W(" + "),Zd,W(". If you need to test your components and web pages, check out "),eh,W(" and "),th,W(". "),nh,W(" More instructions are available in "),rh,W(". ")]),_:1}),ee(un,null,{icon:le(()=>[ee(Ud)]),heading:le(()=>[W("Ecosystem")]),default:le(()=>[W(" Get official tools and libraries for your project: "),sh,W(", "),ih,W(", "),oh,W(", and "),ah,W(". If you need more resources, we suggest paying "),ch,W(" a visit. ")]),_:1}),ee(un,null,{icon:le(()=>[ee(Bd)]),heading:le(()=>[W("Community")]),default:le(()=>[W(" Got stuck? Ask your question on "),lh,W(", our official Discord server, or "),uh,W(". You should also subscribe to "),fh,W(" and follow the official "),dh,W(" twitter account for latest news in the Vue world. ")]),_:1}),ee(un,null,{icon:le(()=>[ee(Jd)]),heading:le(()=>[W("Support Vue")]),default:le(()=>[W(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),hh,W(". ")]),_:1})],64))}}),gh=kn({__name:"HomeView",setup(t){return(e,n)=>{const r=Ll("router-link");return De(),Et("main",null,[K("ul",null,[K("li",null,[ee(r,{to:"/auth"},{default:le(()=>[W("Auth")]),_:1})]),K("li",null,[ee(r,{to:"/about"},{default:le(()=>[W("About")]),_:1})])]),ee(ph)])}}}),mh=ud({history:Ff("/try_firebase"),routes:[{path:"/",name:"home",component:gh},{path:"/auth",name:"auth",component:()=>no(()=>import("./TestAuth-Yz44qe5f.js"),__vite__mapDeps([0,1]))},{path:"/about",name:"about",component:()=>no(()=>import("./AboutView-BkJmgYAs.js"),__vite__mapDeps([2,3]))}]});var ro={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_h=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,m=u&63;a||(m=64,o||(p=64)),r.push(n[d],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ja(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_h(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||h==null)throw new vh;const p=i<<2|c>>4;if(r.push(p),u!==64){const m=c<<4&240|u>>2;if(r.push(m),h!==64){const P=u<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yh=function(t){const e=Ja(t);return Ya.encodeByteArray(e,!0)},Xa=function(t){return yh(t).replace(/\./g,"")},Qa=function(t){try{return Ya.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=()=>bh().__FIREBASE_DEFAULTS__,Ih=()=>{if(typeof process>"u"||typeof ro>"u")return;const t=ro.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Eh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qa(t[1]);return e&&JSON.parse(e)},Vs=()=>{try{return wh()||Ih()||Eh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sh=t=>{var e,n;return(n=(e=Vs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Za=()=>{var t;return(t=Vs())===null||t===void 0?void 0:t.config},ec=t=>{var e;return(e=Vs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Rh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ph(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function kh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nh,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Mh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new St(s,c,r)}}function Mh(t,e){return t.replace(Lh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function Dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(so(i)&&so(o)){if(!cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function so(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xh(t,e){const n=new Uh(t,e);return n.subscribe.bind(n)}class Uh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$h(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $h(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Th;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zh(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(t){return t===Pt?void 0:t}function zh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Bh={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},jh=Z.INFO,Wh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Kh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=jh,this._logHandler=Kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Gh=(t,e)=>e.some(n=>t instanceof n);let io,oo;function qh(){return io||(io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jh(){return oo||(oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nc=new WeakMap,ds=new WeakMap,rc=new WeakMap,Kr=new WeakMap,Bs=new WeakMap;function Yh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_t(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nc.set(n,t)}).catch(()=>{}),Bs.set(e,t),e}function Xh(t){if(ds.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ds.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qh(t){hs=t(hs)}function Zh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gr(this),e,...n);return rc.set(r,e.sort?e.sort():[e]),_t(r)}:Jh().includes(t)?function(...e){return t.apply(Gr(this),e),_t(nc.get(this))}:function(...e){return _t(t.apply(Gr(this),e))}}function ep(t){return typeof t=="function"?Zh(t):(t instanceof IDBTransaction&&Xh(t),Gh(t,qh())?new Proxy(t,hs):t)}function _t(t){if(t instanceof IDBRequest)return Yh(t);if(Kr.has(t))return Kr.get(t);const e=ep(t);return e!==t&&(Kr.set(t,e),Bs.set(e,t)),e}const Gr=t=>Bs.get(t);function tp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=_t(o);return r&&o.addEventListener("upgradeneeded",a=>{r(_t(o.result),a.oldVersion,a.newVersion,_t(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const np=["get","getKey","getAll","getAllKeys","count"],rp=["put","add","delete","clear"],qr=new Map;function ao(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||np.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return qr.set(e,i),i}Qh(t=>({...t,get:(e,n,r)=>ao(e,n)||t.get(e,n,r),has:(e,n)=>!!ao(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ip(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ip(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",co="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new tc("@firebase/app"),op="@firebase/app-compat",ap="@firebase/analytics-compat",cp="@firebase/analytics",lp="@firebase/app-check-compat",up="@firebase/app-check",fp="@firebase/auth",dp="@firebase/auth-compat",hp="@firebase/database",pp="@firebase/database-compat",gp="@firebase/functions",mp="@firebase/functions-compat",_p="@firebase/installations",vp="@firebase/installations-compat",yp="@firebase/messaging",bp="@firebase/messaging-compat",wp="@firebase/performance",Ip="@firebase/performance-compat",Ep="@firebase/remote-config",Sp="@firebase/remote-config-compat",Tp="@firebase/storage",Cp="@firebase/storage-compat",Rp="@firebase/firestore",Ap="@firebase/vertexai-preview",Pp="@firebase/firestore-compat",Op="firebase",kp="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]",Np={[ps]:"fire-core",[op]:"fire-core-compat",[cp]:"fire-analytics",[ap]:"fire-analytics-compat",[up]:"fire-app-check",[lp]:"fire-app-check-compat",[fp]:"fire-auth",[dp]:"fire-auth-compat",[hp]:"fire-rtdb",[pp]:"fire-rtdb-compat",[gp]:"fire-fn",[mp]:"fire-fn-compat",[_p]:"fire-iid",[vp]:"fire-iid-compat",[yp]:"fire-fcm",[bp]:"fire-fcm-compat",[wp]:"fire-perf",[Ip]:"fire-perf-compat",[Ep]:"fire-rc",[Sp]:"fire-rc-compat",[Tp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Rp]:"fire-fst",[Pp]:"fire-fst-compat",[Ap]:"fire-vertex","fire-js":"fire-js",[Op]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,Mp=new Map,ms=new Map;function lo(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function An(t){const e=t.name;if(ms.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of lr.values())lo(n,t);for(const n of Mp.values())lo(n,t);return!0}function sc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qe(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Mn("app","Firebase",Lp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=kp;function ic(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(n||(n=Za()),!n)throw vt.create("no-options");const i=lr.get(s);if(i){if(cr(n,i.options)&&cr(r,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const o=new Vh(s);for(const a of ms.values())o.addComponent(a);const c=new Dp(n,r,o);return lr.set(s,c),c}function xp(t=gs){const e=lr.get(t);if(!e&&t===gs&&Za())return ic();if(!e)throw vt.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=Np[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}An(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebase-heartbeat-database",$p=1,Pn="firebase-heartbeat-store";let Jr=null;function oc(){return Jr||(Jr=tp(Up,$p,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pn)}catch(n){console.warn(n)}}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),Jr}async function Fp(t){try{const n=(await oc()).transaction(Pn),r=await n.objectStore(Pn).get(ac(t));return await n.done,r}catch(e){if(e instanceof St)Ut.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function uo(t,e){try{const r=(await oc()).transaction(Pn,"readwrite");await r.objectStore(Pn).put(e,ac(t)),await r.done}catch(n){if(n instanceof St)Ut.warn(n.message);else{const r=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=1024,zp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=fo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=zp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fo(),{heartbeatsToSend:r,unsentEntries:s}=Bp(this._heartbeatsCache.heartbeats),i=Xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function fo(){return new Date().toISOString().substring(0,10)}function Bp(t,e=Hp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ho(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ho(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?kh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ho(t){return Xa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){An(new tn("platform-logger",e=>new sp(e),"PRIVATE")),An(new tn("heartbeat",e=>new Vp(e),"PRIVATE")),qt(ps,co,t),qt(ps,co,"esm2017"),qt("fire-js","")}Wp("");var Kp="firebase",Gp="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(Kp,Gp,"app");function js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function cc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qp=cc,lc=new Mn("auth","Firebase",cc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new tc("@firebase/auth");function Jp(t,...e){ur.logLevel<=Z.WARN&&ur.warn(`Auth (${Dn}): ${t}`,...e)}function Zn(t,...e){ur.logLevel<=Z.ERROR&&ur.error(`Auth (${Dn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,...e){throw Ks(t,...e)}function Me(t,...e){return Ks(t,...e)}function Ws(t,e,n){const r=Object.assign(Object.assign({},qp()),{[e]:n});return new Mn("auth","Firebase",r).create(e,{appName:t.name})}function xt(t){return Ws(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&je(t,"argument-error"),Ws(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ks(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return lc.create(t,...e)}function D(t,e,...n){if(!t)throw Ks(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zn(e),new Error(e)}function tt(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return po()==="http:"||po()==="https:"}function po(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||Rh()||"connection"in navigator)?navigator.onLine:!0}function Zp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||Ah()}get(){return Qp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=new xn(3e4,6e4);function qs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,r,s={}){return fc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),uc.fetch()(dc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function fc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eg),e);try{const s=new rg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Gn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Gn(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ws(t,d,u);je(t,d)}}catch(s){if(s instanceof St)throw s;je(t,"network-request-failed",{message:String(s)})}}async function ng(t,e,n,r,s={}){const i=await sn(t,e,n,r,s);return"mfaPendingCredential"in i&&je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Gs(t.config,s):`${t.config.apiScheme}://${s}`}class rg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),tg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Me(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function hc(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ig(t,e=!1){const n=Tt(t),r=await n.getIdToken(e),s=Js(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bn(Yr(s.auth_time)),issuedAtTime:bn(Yr(s.iat)),expirationTime:bn(Yr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function Js(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qa(n);return s?JSON.parse(s):(Zn("Failed to decode base64 JWT payload"),null)}catch(s){return Zn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function go(t){const e=Js(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&og(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function og({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,hc(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pc(i.providerUserInfo):[],c=lg(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new vs(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function cg(t){const e=Tt(t);await fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pc(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e){const n=await fc(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",uc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fg(t,e){return sn(t,"POST","/v2/accounts:revokeToken",qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):go(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=go(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ug(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jt;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ye{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ag(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ig(this,e)}reload(){return cg(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qe(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await On(this,sg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:B,isAnonymous:se,providerData:U,stsTokenManager:te}=n;D(O&&te,e,"internal-error");const ve=Jt.fromJSON(this.name,te);D(typeof O=="string",e,"internal-error"),at(h,e.name),at(p,e.name),D(typeof B=="boolean",e,"internal-error"),D(typeof se=="boolean",e,"internal-error"),at(m,e.name),at(P,e.name),at(A,e.name),at(H,e.name),at(x,e.name),at(L,e.name);const Re=new Ye({uid:O,auth:e,email:p,emailVerified:B,displayName:h,isAnonymous:se,photoURL:P,phoneNumber:m,tenantId:A,stsTokenManager:ve,createdAt:x,lastLoginAt:L});return U&&Array.isArray(U)&&(Re.providerData=U.map(Se=>Object.assign({},Se))),H&&(Re._redirectEventId=H),Re}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jt;s.updateFromServerResponse(n);const i=new Ye({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];D(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jt;c.updateFromIdToken(r);const a=new Ye({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map;function Xe(t){tt(t instanceof Function,"Expected a class definition");let e=mo.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gc.type="NONE";const _o=gc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=er(this.userKey,s.apiKey,i),this.fullPersistenceKey=er("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yt(Xe(_o),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Xe(_o);const o=er(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const h=Ye._fromJSON(e,d);u!==i&&(c=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Yt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Yt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bc(e))return"Blackberry";if(wc(e))return"Webos";if(Ys(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mc(t=ge()){return/firefox\//i.test(t)}function Ys(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(t=ge()){return/crios\//i.test(t)}function vc(t=ge()){return/iemobile/i.test(t)}function yc(t=ge()){return/android/i.test(t)}function bc(t=ge()){return/blackberry/i.test(t)}function wc(t=ge()){return/webos/i.test(t)}function Ar(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dg(t=ge()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hg(){return Ph()&&document.documentMode===10}function Ic(t=ge()){return Ar(t)||yc(t)||wc(t)||bc(t)||/windows phone/i.test(t)||vc(t)}function pg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e=[]){let n;switch(t){case"Browser":n=vo(ge());break;case"Worker":n=`${vo(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e={}){return sn(t,"GET","/v2/passwordPolicy",qs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=6;class vg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_g,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new gg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hc(this,{idToken:e}),r=await Ye._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qe(this.app))return Promise.reject(xt(this));const n=e?Tt(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qe(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qe(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mg(this),n=new vg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(t){return Tt(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=xh(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bg(t){Xs=t}function wg(t){return Xs.loadJS(t)}function Ig(){return Xs.gapiScript}function Eg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(t,e){const n=sc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(cr(i,e??{}))return s;je(s,"already-initialized")}return n.initialize({options:e})}function Tg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Cg(t,e,n){const r=Pr(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sc(e),{host:o,port:c}=Rg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ag()}function Sc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rg(t){const e=Sc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bo(o)}}}function bo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ag(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return ng(t,"POST","/v1/accounts:signInWithIdp",qs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="http://localhost";class $t extends Tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:Pg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Un{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Un{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Un{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Un{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ye._fromIdTokenResponse(e,r,s),o=wo(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new dr(e,n,r,s)}}function Cc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,i,e,r):i})}async function Og(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kg(t,e,n=!1){const{auth:r}=t;if(qe(r.app))return Promise.reject(xt(r));const s="reauthenticate";try{const i=await On(t,Cc(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Js(i.idToken);D(o,r,"internal-error");const{sub:c}=o;return D(t.uid===c,r,"user-mismatch"),nn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(t,e,n=!1){if(qe(t.app))return Promise.reject(xt(t));const r="signIn",s=await Cc(t,r,e),i=await nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Mg(t,e,n,r){return Tt(t).onIdTokenChanged(e,n,r)}function Lg(t,e,n){return Tt(t).beforeAuthStateChanged(e,n)}function Zm(t,e,n,r){return Tt(t).onAuthStateChanged(e,n,r)}function e_(t){return Tt(t).signOut()}const hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(){const t=ge();return Ys(t)||Ar(t)}const xg=1e3,Ug=10;class Ac extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dg()&&pg(),this.fallbackToPolling=Ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ug):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ac.type="LOCAL";const $g=Ac;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pc.type="SESSION";const Oc=Pc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Or(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await Fg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=Zs("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function zg(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function Vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jg(){return kc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firebaseLocalStorageDb",Wg=1,pr="firebaseLocalStorage",Mc="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kr(t,e){return t.transaction([pr],e?"readwrite":"readonly").objectStore(pr)}function Kg(){const t=indexedDB.deleteDatabase(Nc);return new $n(t).toPromise()}function ys(){const t=indexedDB.open(Nc,Wg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pr,{keyPath:Mc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pr)?e(r):(r.close(),await Kg(),e(await ys()))})})}async function Io(t,e,n){const r=kr(t,!0).put({[Mc]:e,value:n});return new $n(r).toPromise()}async function Gg(t,e){const n=kr(t,!1).get(e),r=await new $n(n).toPromise();return r===void 0?null:r.value}function Eo(t,e){const n=kr(t,!0).delete(e);return new $n(n).toPromise()}const qg=800,Jg=3;class Lc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ys();return await Io(e,hr,"1"),await Eo(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Eo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kr(s,!1).getAll();return new $n(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lc.type="LOCAL";const Yg=Lc;new xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){return e?Xe(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xg(t){return Ng(t.auth,new ei(t),t.bypassAuthState)}function Qg(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),kg(n,new ei(t),t.bypassAuthState)}async function Zg(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Og(n,new ei(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Qg;default:je(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new xn(2e3,1e4);async function t_(t,e,n){if(qe(t.app))return Promise.reject(Me(t,"operation-not-supported-in-this-environment"));const r=Pr(t);Yp(t,e,Qs);const s=Dc(r,n);return new Nt(r,"signInViaPopup",e,s).executeNotNull()}class Nt extends xc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}Nt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="pendingRedirect",tr=new Map;class nm extends xc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tr.get(this.auth._key());if(!e){try{const r=await rm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tr.set(this.auth._key(),e)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rm(t,e){const n=om(e),r=im(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sm(t,e){tr.set(t._key(),e)}function im(t){return Xe(t._redirectPersistence)}function om(t){return er(tm,t.config.apiKey,t.name)}async function am(t,e,n=!1){if(qe(t.app))return Promise.reject(xt(t));const r=Pr(t),s=Dc(r,e),o=await new nm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=10*60*1e3;class lm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!um(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cm&&this.cachedEventUids.clear(),this.cachedEventUids.has(So(e))}saveEventToCache(e){this.cachedEventUids.add(So(e)),this.lastProcessedEventTime=Date.now()}}function So(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function um(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hm=/^https?/;async function pm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fm(t);for(const n of e)try{if(gm(n))return}catch{}je(t,"unauthorized-domain")}function gm(t){const e=_s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hm.test(n))return!1;if(dm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new xn(3e4,6e4);function To(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _m(t){return new Promise((e,n)=>{var r,s,i;function o(){To(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{To(),n(Me(t,"network-request-failed"))},timeout:mm.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const c=Eg("iframefcb");return Ve()[c]=()=>{gapi.load?o():n(Me(t,"network-request-failed"))},wg(`${Ig()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw nr=null,e})}let nr=null;function vm(t){return nr=nr||_m(t),nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new xn(5e3,15e3),bm="__/auth/iframe",wm="emulator/auth/iframe",Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Em=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sm(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gs(e,wm):`https://${t.config.authDomain}/${bm}`,r={apiKey:e.apiKey,appName:t.name,v:Dn},s=Em.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ln(r).slice(1)}`}async function Tm(t){const e=await vm(t),n=Ve().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Sm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Me(t,"network-request-failed"),c=Ve().setTimeout(()=>{i(o)},ym.get());function a(){Ve().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Am=600,Pm="_blank",Om="http://localhost";class Co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function km(t,e,n,r=Rm,s=Am){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Cm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ge().toLowerCase();n&&(c=_c(u)?Pm:n),mc(u)&&(e=e||Om,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[m,P])=>`${p}${m}=${P},`,"");if(dg(u)&&c!=="_self")return Nm(e||"",c),new Co(null);const h=window.open(e||"",c,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Co(h)}function Nm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="__/auth/handler",Lm="emulator/auth/handler",Dm=encodeURIComponent("fac");async function Ro(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dn,eventId:s};if(e instanceof Qs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Un){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),u=a?`#${Dm}=${encodeURIComponent(a)}`:"";return`${xm(t)}?${Ln(c).slice(1)}${u}`}function xm({config:t}){return t.emulator?Gs(t,Lm):`https://${t.authDomain}/${Mm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="webStorageSupport";class Um{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=am,this._overrideRedirectResult=sm}async _openPopup(e,n,r,s){var i;tt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ro(e,n,r,_s(),s);return km(e,o,Zs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ro(e,n,r,_s(),s);return zg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Tm(e),r=new lm(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xr];o!==void 0&&n(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ic()||Ys()||Ar()}}const $m=Um;var Ao="@firebase/auth",Po="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zm(t){An(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ec(t)},u=new yg(r,s,i,a);return Tg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),An(new tn("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new Fm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(Ao,Po,Hm(t)),qt(Ao,Po,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=5*60,Bm=ec("authIdTokenMaxAge")||Vm;let Oo=null;const jm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bm)return;const s=n==null?void 0:n.token;Oo!==s&&(Oo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wm(t=xp()){const e=sc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sg(t,{popupRedirectResolver:$m,persistence:[Yg,$g,Oc]}),r=ec("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=jm(i.toString());Lg(n,o,()=>o(n.currentUser)),Mg(n,c=>o(c))}}const s=Sh("auth");return s&&Cg(n,`http://${s}`),n}function Km(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Me("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Km().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zm("Browser");const Gm={apiKey:"AIzaSyDEYi9dASr59ueR2VRco7_VUW0Dm2C7cvw",authDomain:"first-app-a74c6.firebaseapp.com",projectId:"first-app-a74c6",storageBucket:"first-app-a74c6.appspot.com",messagingSenderId:"888622410081",appId:"1:888622410081:web:1986705fea73f08c5d3d20"},$c=ic(Gm),qm=Wm($c),Fn=tf(hd);Fn.use(af());Fn.use(mh);Fn.provide("firebase",$c);Fn.provide("auth",qm);Fn.mount("#app");export{Te as F,dt as G,Ft as _,K as a,Xm as b,Et as c,kn as d,Zm as e,Oe as f,e_ as g,Qm as h,Ze as i,ee as j,W as k,De as o,Ym as p,ra as r,t_ as s,Jm as t,Dt as u,Yn as w};
