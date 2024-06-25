const __vite__fileDeps=["assets/AboutView-ChMxSx5I.js","assets/AboutView-C6Dx7pxG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ss(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const re={},Kt=[],Oe=()=>{},Wc=()=>!1,mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ts=t=>t.startsWith("onUpdate:"),de=Object.assign,Cs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kc=Object.prototype.hasOwnProperty,K=(t,e)=>Kc.call(t,e),F=Array.isArray,Gt=t=>_r(t)==="[object Map]",xo=t=>_r(t)==="[object Set]",V=t=>typeof t=="function",he=t=>typeof t=="string",Tt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Uo=t=>(oe(t)||V(t))&&V(t.then)&&V(t.catch),$o=Object.prototype.toString,_r=t=>$o.call(t),Gc=t=>_r(t).slice(8,-1),Fo=t=>_r(t)==="[object Object]",Rs=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qc=/-(\w)/g,Ge=vr(t=>t.replace(qc,(e,n)=>n?n.toUpperCase():"")),Jc=/\B([A-Z])/g,on=vr(t=>t.replace(Jc,"-$1").toLowerCase()),yr=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dr=vr(t=>t?`on${yr(t)}`:""),Et=(t,e)=>!Object.is(t,e),xr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ho=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Yc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let li;const zo=()=>li||(li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function As(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?el(r):As(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(he(t)||oe(t))return t}const Xc=/;(?![^(]*\))/g,Qc=/:([^]+)/,Zc=/\/\*[^]*?\*\//g;function el(t){const e={};return t.replace(Zc,"").split(Xc).forEach(n=>{if(n){const r=n.split(Qc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ps(t){let e="";if(he(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ps(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nl=Ss(tl);function Vo(t){return!!t||t===""}const ts=t=>he(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===$o||!V(t.toString))?JSON.stringify(t,Bo,2):String(t),Bo=(t,e)=>e&&e.__v_isRef?Bo(t,e.value):Gt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ur(r,i)+" =>"]=s,n),{})}:xo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ur(n))}:Tt(e)?Ur(e):oe(e)&&!F(e)&&!Fo(e)?String(e):e,Ur=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class jo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function rl(t){return new jo(t)}function sl(t,e=Me){e&&e.active&&e.effects.push(t)}function il(){return Me}let xt;class Os{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,sl(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Ct();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return it(),!0;if(ol(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),it()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=yt,n=xt;try{return yt=!0,xt=this,this._runnings++,ui(this),this.fn()}finally{fi(this),this._runnings--,xt=n,yt=e}}stop(){this.active&&(ui(this),fi(this),this.onStop&&this.onStop(),this.active=!1)}}function ol(t){return t.value}function ui(t){t._trackId++,t._depsLength=0}function fi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wo(t.deps[e],t);t.deps.length=t._depsLength}}function Wo(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let yt=!0,ns=0;const Ko=[];function Ct(){Ko.push(yt),yt=!1}function it(){const t=Ko.pop();yt=t===void 0?!0:t}function ks(){ns++}function Ns(){for(ns--;!ns&&rs.length;)rs.shift()()}function Go(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Wo(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const rs=[];function qo(t,e,n){ks();for(const r of t.keys()){let s;if(!t.computed&&r.computed&&r._runnings>0&&(s??(s=t.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&rs.push(r.scheduler)))}Ns()}const Jo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ss=new WeakMap,Ut=Symbol(""),is=Symbol("");function Se(t,e,n){if(yt&&xt){let r=ss.get(t);r||ss.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Jo(()=>r.delete(n))),Go(xt,s)}}function st(t,e,n,r,s,i){const o=ss.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((u,d)=>{(d==="length"||!Tt(d)&&d>=a)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Rs(n)&&c.push(o.get("length")):(c.push(o.get(Ut)),Gt(t)&&c.push(o.get(is)));break;case"delete":F(t)||(c.push(o.get(Ut)),Gt(t)&&c.push(o.get(is)));break;case"set":Gt(t)&&c.push(o.get(Ut));break}ks();for(const a of c)a&&qo(a,5);Ns()}const al=Ss("__proto__,__v_isRef,__isVue"),Yo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt)),di=cl();function cl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ct(),ks();const r=Y(this)[e].apply(this,n);return Ns(),it(),r}}),t}function ll(t){Tt(t)||(t=String(t));const e=Y(this);return Se(e,"has",t),e.hasOwnProperty(t)}class Xo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Il:ta:i?ea:Zo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&K(di,n))return Reflect.get(di,n,r);if(n==="hasOwnProperty")return ll}const c=Reflect.get(e,n,r);return(Tt(n)?Yo.has(n):al(n))||(s||Se(e,"get",n),i)?c:Te(c)?o&&Rs(n)?c:c.value:oe(c)?s?ra(c):wr(c):c}}class Qo extends Xo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Sn(i);if(!sr(r)&&!Sn(r)&&(i=Y(i),r=Y(r)),!F(e)&&Te(i)&&!Te(r))return a?!1:(i.value=r,!0)}const o=F(e)&&Rs(n)?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,r,s);return e===Y(s)&&(o?Et(r,i)&&st(e,"set",n,r):st(e,"add",n,r)),c}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&st(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!Yo.has(n))&&Se(e,"has",n),r}ownKeys(e){return Se(e,"iterate",F(e)?"length":Ut),Reflect.ownKeys(e)}}class ul extends Xo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fl=new Qo,dl=new ul,hl=new Qo(!0);const Ms=t=>t,br=t=>Reflect.getPrototypeOf(t);function Bn(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(Et(e,i)&&Se(s,"get",e),Se(s,"get",i));const{has:o}=br(s),c=r?Ms:n?xs:Tn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function jn(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(Et(t,s)&&Se(r,"has",t),Se(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Se(Y(t),"iterate",Ut),Reflect.get(t,"size",t)}function hi(t){t=Y(t);const e=Y(this);return br(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function pi(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=br(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Et(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function gi(t){const e=Y(this),{has:n,get:r}=br(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function mi(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Y(o),a=e?Ms:t?xs:Tn;return!t&&Se(c,"iterate",Ut),o.forEach((u,d)=>r.call(s,a(u),a(d),i))}}function Gn(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Gt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),d=n?Ms:e?xs:Tn;return!e&&Se(i,"iterate",a?is:Ut),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:c?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function pl(){const t={get(i){return Bn(this,i)},get size(){return Wn(this)},has:jn,add:hi,set:pi,delete:gi,clear:mi,forEach:Kn(!1,!1)},e={get(i){return Bn(this,i,!1,!0)},get size(){return Wn(this)},has:jn,add:hi,set:pi,delete:gi,clear:mi,forEach:Kn(!1,!0)},n={get(i){return Bn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Kn(!0,!1)},r={get(i){return Bn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[t,n,e,r]}const[gl,ml,_l,vl]=pl();function Ls(t,e){const n=e?t?vl:_l:t?ml:gl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const yl={get:Ls(!1,!1)},bl={get:Ls(!1,!0)},wl={get:Ls(!0,!1)};const Zo=new WeakMap,ea=new WeakMap,ta=new WeakMap,Il=new WeakMap;function El(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(t){return t.__v_skip||!Object.isExtensible(t)?0:El(Gc(t))}function wr(t){return Sn(t)?t:Ds(t,!1,fl,yl,Zo)}function na(t){return Ds(t,!1,hl,bl,ea)}function ra(t){return Ds(t,!0,dl,wl,ta)}function Ds(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Sl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function gn(t){return Sn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function sr(t){return!!(t&&t.__v_isShallow)}function sa(t){return t?!!t.__v_raw:!1}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function ia(t){return Object.isExtensible(t)&&Ho(t,"__v_skip",!0),t}const Tn=t=>oe(t)?wr(t):t,xs=t=>oe(t)?ra(t):t;class oa{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Os(()=>e(this._value),()=>Yn(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this),n=e.effect._dirtyLevel;return(!e._cacheable||e.effect.dirty)&&Et(e._value,e._value=e.effect.run())&&n!==3&&Yn(e,5),aa(e),e.effect._dirtyLevel>=2&&Yn(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Tl(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Oe):(r=t.get,s=t.set),new oa(r,s,i||!s,n)}function aa(t){var e;yt&&xt&&(t=Y(t),Go(xt,(e=t.dep)!=null?e:t.dep=Jo(()=>t.dep=void 0,t instanceof oa?t:void 0)))}function Yn(t,e=5,n,r){t=Y(t);const s=t.dep;s&&qo(s,e)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Zt(t){return ca(t,!1)}function Cl(t){return ca(t,!0)}function ca(t,e){return Te(t)?t:new Rl(t,e)}class Rl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Tn(e)}get value(){return aa(this),this._value}set value(e){const n=this.__v_isShallow||sr(e)||Sn(e);e=n?e:Y(e),Et(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Tn(e),Yn(this,5))}}function Ee(t){return Te(t)?t.value:t}const Al={get:(t,e,n)=>Ee(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function la(t){return gn(t)?t:new Proxy(t,Al)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bt(t,e,n,r){try{return r?t(...r):t()}catch(s){Ir(s,e,n)}}function De(t,e,n,r){if(V(t)){const s=bt(t,e,n,r);return s&&Uo(s)&&s.catch(i=>{Ir(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}}function Ir(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Ct(),bt(a,null,10,[t,o,c]),it();return}}Pl(t,n,s,r)}function Pl(t,e,n,r=!0){console.error(t)}let Cn=!1,os=!1;const ge=[];let je=0;const qt=[];let ht=null,Mt=0;const ua=Promise.resolve();let Us=null;function fa(t){const e=Us||ua;return t?e.then(this?t.bind(this):t):e}function Ol(t){let e=je+1,n=ge.length;for(;e<n;){const r=e+n>>>1,s=ge[r],i=Rn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function $s(t){(!ge.length||!ge.includes(t,Cn&&t.allowRecurse?je+1:je))&&(t.id==null?ge.push(t):ge.splice(Ol(t.id),0,t),da())}function da(){!Cn&&!os&&(os=!0,Us=ua.then(pa))}function kl(t){const e=ge.indexOf(t);e>je&&ge.splice(e,1)}function Nl(t){F(t)?qt.push(...t):(!ht||!ht.includes(t,t.allowRecurse?Mt+1:Mt))&&qt.push(t),da()}function _i(t,e,n=Cn?je+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ge.splice(n,1),n--,r()}}}function ha(t){if(qt.length){const e=[...new Set(qt)].sort((n,r)=>Rn(n)-Rn(r));if(qt.length=0,ht){ht.push(...e);return}for(ht=e,Mt=0;Mt<ht.length;Mt++){const n=ht[Mt];n.active!==!1&&n()}ht=null,Mt=0}}const Rn=t=>t.id==null?1/0:t.id,Ml=(t,e)=>{const n=Rn(t)-Rn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pa(t){os=!1,Cn=!0,ge.sort(Ml);try{for(je=0;je<ge.length;je++){const e=ge[je];e&&e.active!==!1&&bt(e,null,14)}}finally{je=0,ge.length=0,ha(),Cn=!1,Us=null,(ge.length||qt.length)&&pa()}}function Ll(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[d]||re;p&&(s=n.map(m=>he(m)?m.trim():m)),h&&(s=n.map(Yc))}let c,a=r[c=Dr(e)]||r[c=Dr(Ge(e))];!a&&i&&(a=r[c=Dr(on(e))]),a&&De(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,De(u,t,6,s)}}function ga(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=u=>{const d=ga(u,e,!0);d&&(c=!0,de(o,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(oe(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):de(o,i),oe(t)&&r.set(t,o),o)}function Er(t,e){return!t||!mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,on(e))||K(t,e))}let ye=null,Sr=null;function ir(t){const e=ye;return ye=t,Sr=t&&t.type.__scopeId||null,e}function ma(t){Sr=t}function _a(){Sr=null}function ue(t,e=ye,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pi(-1);const i=ir(e);let o;try{o=t(...s)}finally{ir(i),r._d&&Pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:d,props:h,data:p,setupState:m,ctx:P,inheritAttrs:A}=t,z=ir(t);let U,D;try{if(n.shapeFlag&4){const j=s||r,se=j;U=Be(u.call(se,j,d,h,m,p,P)),D=c}else{const j=e;U=Be(j.length>1?j(h,{attrs:c,slots:o,emit:a}):j(h,null)),D=e.props?c:Dl(c)}}catch(j){bn.length=0,Ir(j,t,1),U=G(St)}let O=U;if(D&&A!==!1){const j=Object.keys(D),{shapeFlag:se}=O;j.length&&se&7&&(i&&j.some(Ts)&&(D=xl(D,i)),O=en(O,D,!1,!0))}return n.dirs&&(O=en(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,ir(z),U}const Dl=t=>{let e;for(const n in t)(n==="class"||n==="style"||mr(n))&&((e||(e={}))[n]=t[n]);return e},xl=(t,e)=>{const n={};for(const r in t)(!Ts(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ul(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?vi(r,o,u):!!o;if(a&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==r[p]&&!Er(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?vi(r,o,u):!0:!!o;return!1}function vi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Er(n,i))return!0}return!1}function $l({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fl="components";function Hl(t,e){return Vl(Fl,t,!0,e)||t}const zl=Symbol.for("v-ndc");function Vl(t,e,n=!0,r=!1){const s=ye||me;if(s){const i=s.type;{const c=Du(i,!1);if(c&&(c===e||c===Ge(e)||c===yr(Ge(e))))return i}const o=yi(s[t]||i[t],e)||yi(s.appContext[t],e);return!o&&r?i:o}}function yi(t,e){return t&&(t[e]||t[Ge(e)]||t[yr(Ge(e))])}const Bl=t=>t.__isSuspense;function jl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Nl(t)}function Tr(t,e,n=me,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ct();const c=Ln(n),a=De(e,n,t,o);return c(),it(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=me)=>{(!Rr||t==="sp")&&Tr(t,(...r)=>e(...r),n)},Wl=at("bm"),Kl=at("m"),Gl=at("bu"),ql=at("u"),Jl=at("bum"),va=at("um"),Yl=at("sp"),Xl=at("rtg"),Ql=at("rtc");function Zl(t,e=me){Tr("ec",t,e)}function Ot(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Ct(),De(a,n,8,[t.el,c,t,e]),it())}}/*! #__NO_SIDE_EFFECTS__ */function Je(t,e){return V(t)?de({name:t.name},e,{setup:t}):t}const mn=t=>!!t.type.__asyncLoader;function Fr(t,e,n={},r,s){if(ye.isCE||ye.parent&&mn(ye.parent)&&ye.parent.isCE)return e!=="default"&&(n.name=e),G("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),ae();const o=i&&ya(i(n)),c=zs(Re,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function ya(t){return t.some(e=>ar(e)?!(e.type===St||e.type===Re&&!ya(e.children)):!0)?t:null}const as=t=>t?Fa(t)?Bs(t):as(t.parent):null,_n=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>as(t.parent),$root:t=>as(t.root),$emit:t=>t.emit,$options:t=>Fs(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,$s(t.update)}),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>yu.bind(t)}),Hr=(t,e)=>t!==re&&!t.__isScriptSetup&&K(t,e),eu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Hr(r,e))return o[e]=1,r[e];if(s!==re&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==re&&K(n,e))return o[e]=4,n[e];cs&&(o[e]=0)}}const d=_n[e];let h,p;if(d)return e==="$attrs"&&Se(t.attrs,"get",""),d(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==re&&K(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Hr(s,e)?(s[e]=n,!0):r!==re&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==re&&K(t,o)||Hr(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(_n,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cs=!0;function tu(t){const e=Fs(t),n=t.proxy,r=t.ctx;cs=!1,e.beforeCreate&&wi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:P,activated:A,deactivated:z,beforeDestroy:U,beforeUnmount:D,destroyed:O,unmounted:j,render:se,renderTracked:$,renderTriggered:te,errorCaptured:be,serverPrefetch:ke,expose:Ae,inheritAttrs:ct,components:Pt,directives:Fe,filters:cn}=e;if(u&&nu(u,r,null),o)for(const Z in o){const q=o[Z];V(q)&&(r[Z]=q.bind(n))}if(s){const Z=s.call(n,n);oe(Z)&&(t.data=wr(Z))}if(cs=!0,i)for(const Z in i){const q=i[Z],Ye=V(q)?q.bind(n,n):V(q.get)?q.get.bind(n,n):Oe,lt=!V(q)&&V(q.set)?q.set.bind(n):Oe,He=Pe({get:Ye,set:lt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>He.value,set:we=>He.value=we})}if(c)for(const Z in c)ba(c[Z],r,n,Z);if(a){const Z=V(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(q=>{Xn(q,Z[q])})}d&&wi(d,t,"c");function ce(Z,q){F(q)?q.forEach(Ye=>Z(Ye.bind(n))):q&&Z(q.bind(n))}if(ce(Wl,h),ce(Kl,p),ce(Gl,m),ce(ql,P),ce(bu,A),ce(wu,z),ce(Zl,be),ce(Ql,$),ce(Xl,te),ce(Jl,D),ce(va,j),ce(Yl,ke),F(Ae))if(Ae.length){const Z=t.exposed||(t.exposed={});Ae.forEach(q=>{Object.defineProperty(Z,q,{get:()=>n[q],set:Ye=>n[q]=Ye})})}else t.exposed||(t.exposed={});se&&t.render===Oe&&(t.render=se),ct!=null&&(t.inheritAttrs=ct),Pt&&(t.components=Pt),Fe&&(t.directives=Fe)}function nu(t,e,n=Oe){F(t)&&(t=ls(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),Te(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wi(t,e,n){De(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ba(t,e,n,r){const s=r.includes(".")?Ma(n,r):()=>n[r];if(he(t)){const i=e[t];V(i)&&yn(s,i)}else if(V(t))yn(s,t.bind(n));else if(oe(t))if(F(t))t.forEach(i=>ba(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&yn(s,i,t)}}function Fs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>or(a,u,o,!0)),or(a,e,o)),oe(e)&&i.set(e,a),a}function or(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&or(t,i,n,!0),s&&s.forEach(o=>or(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=ru[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const ru={data:Ii,props:Ei,emits:Ei,methods:hn,computed:hn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:hn,directives:hn,watch:iu,provide:Ii,inject:su};function Ii(t,e){return e?t?function(){return de(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function su(t,e){return hn(ls(t),ls(e))}function ls(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function hn(t,e){return t?de(Object.create(null),t,e):e}function Ei(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:de(Object.create(null),bi(t),bi(e??{})):e}function iu(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function wa(){return{app:null,config:{isNativeTag:Wc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ou=0;function au(t,e){return function(r,s=null){V(r)||(r=de({},r)),s!=null&&!oe(s)&&(s=null);const i=wa(),o=new WeakSet;let c=!1;const a=i.app={_uid:ou++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(a,...d)):V(u)&&(o.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,h){if(!c){const p=G(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(p,u):t(p,u,h),c=!0,a._container=u,u.__vue_app__=a,Bs(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a},runWithContext(u){const d=vn;vn=a;try{return u()}finally{vn=d}}};return a}}let vn=null;function Xn(t,e){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=me||ye;if(r||vn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:vn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}const Ia={},Ea=()=>Object.create(Ia),Sa=t=>Object.getPrototypeOf(t)===Ia;function cu(t,e,n,r=!1){const s={},i=Ea();t.propsDefaults=Object.create(null),Ta(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:na(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Y(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Er(t.emitsOptions,p))continue;const m=e[p];if(a)if(K(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const P=Ge(p);s[P]=us(a,c,P,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Ta(t,e,s,i)&&(u=!0);let d;for(const h in c)(!e||!K(e,h)&&((d=on(h))===h||!K(e,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=us(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!K(e,h))&&(delete i[h],u=!0)}u&&st(t.attrs,"set","")}function Ta(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(pn(a))continue;const u=e[a];let d;s&&K(s,d=Ge(a))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:Er(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=Y(n),u=c||re;for(let d=0;d<i.length;d++){const h=i[d];n[h]=us(s,a,h,u[h],t,!K(u,h))}}return o}function us(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Ln(s);r=u[n]=a.call(null,e),d()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function Ca(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const d=h=>{a=!0;const[p,m]=Ca(h,e,!0);de(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return oe(t)&&r.set(t,Kt),Kt;if(F(i))for(let d=0;d<i.length;d++){const h=Ge(i[d]);Si(h)&&(o[h]=re)}else if(i)for(const d in i){const h=Ge(d);if(Si(h)){const p=i[d],m=o[h]=F(p)||V(p)?{type:p}:de({},p);if(m){const P=Ri(Boolean,m.type),A=Ri(String,m.type);m[0]=P>-1,m[1]=A<0||P<A,(P>-1||K(m,"default"))&&c.push(h)}}}const u=[o,c];return oe(t)&&r.set(t,u),u}function Si(t){return t[0]!=="$"&&!pn(t)}function Ti(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ci(t,e){return Ti(t)===Ti(e)}function Ri(t,e){return F(e)?e.findIndex(n=>Ci(n,t)):V(e)&&Ci(e,t)?0:-1}const Ra=t=>t[0]==="_"||t==="$stable",Hs=t=>F(t)?t.map(Be):[Be(t)],uu=(t,e,n)=>{if(e._n)return e;const r=ue((...s)=>Hs(e(...s)),n);return r._c=!1,r},Aa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ra(s))continue;const i=t[s];if(V(i))e[s]=uu(s,i,r);else if(i!=null){const o=Hs(i);e[s]=()=>o}}},Pa=(t,e)=>{const n=Hs(e);t.slots.default=()=>n},fu=(t,e)=>{const n=t.slots=Ea();if(t.vnode.shapeFlag&32){const r=e._;r?(de(n,e),Ho(n,"_",r,!0)):Aa(e,n)}else e&&Pa(t,e)},du=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(de(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Aa(e,s)),o=e}else e&&(Pa(t,e),o={default:1});if(i)for(const c in s)!Ra(c)&&o[c]==null&&delete s[c]};function fs(t,e,n,r,s=!1){if(F(t)){t.forEach((p,m)=>fs(p,e&&(F(e)?e[m]:e),n,r,s));return}if(mn(r)&&!s)return;const i=r.shapeFlag&4?Bs(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,d=c.refs===re?c.refs={}:c.refs,h=c.setupState;if(u!=null&&u!==a&&(he(u)?(d[u]=null,K(h,u)&&(h[u]=null)):Te(u)&&(u.value=null)),V(a))bt(a,c,12,[o,d]);else{const p=he(a),m=Te(a);if(p||m){const P=()=>{if(t.f){const A=p?K(h,a)?h[a]:d[a]:a.value;s?F(A)&&Cs(A,i):F(A)?A.includes(i)||A.push(i):p?(d[a]=[i],K(h,a)&&(h[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else p?(d[a]=o,K(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Ie(P,n)):P()}}}const Ie=jl;function hu(t){return pu(t)}function pu(t,e){const n=zo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=Oe,insertStaticContent:P}=t,A=(l,f,g,y=null,_=null,I=null,S=void 0,w=null,E=!!f.dynamicChildren)=>{if(l===f)return;l&&!un(l,f)&&(y=v(l),we(l,_,I,!0),l=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:b,ref:R,shapeFlag:M}=f;switch(b){case Cr:z(l,f,g,y);break;case St:U(l,f,g,y);break;case Vr:l==null&&D(f,g,y,S);break;case Re:Pt(l,f,g,y,_,I,S,w,E);break;default:M&1?se(l,f,g,y,_,I,S,w,E):M&6?Fe(l,f,g,y,_,I,S,w,E):(M&64||M&128)&&b.process(l,f,g,y,_,I,S,w,E,k)}R!=null&&_&&fs(R,l&&l.ref,I,f||l,!f)},z=(l,f,g,y)=>{if(l==null)r(f.el=c(f.children),g,y);else{const _=f.el=l.el;f.children!==l.children&&u(_,f.children)}},U=(l,f,g,y)=>{l==null?r(f.el=a(f.children||""),g,y):f.el=l.el},D=(l,f,g,y)=>{[l.el,l.anchor]=P(l.children,f,g,y,l.el,l.anchor)},O=({el:l,anchor:f},g,y)=>{let _;for(;l&&l!==f;)_=p(l),r(l,g,y),l=_;r(f,g,y)},j=({el:l,anchor:f})=>{let g;for(;l&&l!==f;)g=p(l),s(l),l=g;s(f)},se=(l,f,g,y,_,I,S,w,E)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),l==null?$(f,g,y,_,I,S,w,E):ke(l,f,_,I,S,w,E)},$=(l,f,g,y,_,I,S,w)=>{let E,b;const{props:R,shapeFlag:M,transition:N,dirs:H}=l;if(E=l.el=o(l.type,I,R&&R.is,R),M&8?d(E,l.children):M&16&&be(l.children,E,null,y,_,zr(l,I),S,w),H&&Ot(l,null,y,"created"),te(E,l,l.scopeId,S,y),R){for(const ne in R)ne!=="value"&&!pn(ne)&&i(E,ne,null,R[ne],I,l.children,y,_,pe);"value"in R&&i(E,"value",null,R.value,I),(b=R.onVnodeBeforeMount)&&Ve(b,y,l)}H&&Ot(l,null,y,"beforeMount");const B=gu(_,N);B&&N.beforeEnter(E),r(E,f,g),((b=R&&R.onVnodeMounted)||B||H)&&Ie(()=>{b&&Ve(b,y,l),B&&N.enter(E),H&&Ot(l,null,y,"mounted")},_)},te=(l,f,g,y,_)=>{if(g&&m(l,g),y)for(let I=0;I<y.length;I++)m(l,y[I]);if(_){let I=_.subTree;if(f===I){const S=_.vnode;te(l,S,S.scopeId,S.slotScopeIds,_.parent)}}},be=(l,f,g,y,_,I,S,w,E=0)=>{for(let b=E;b<l.length;b++){const R=l[b]=w?pt(l[b]):Be(l[b]);A(null,R,f,g,y,_,I,S,w)}},ke=(l,f,g,y,_,I,S)=>{const w=f.el=l.el;let{patchFlag:E,dynamicChildren:b,dirs:R}=f;E|=l.patchFlag&16;const M=l.props||re,N=f.props||re;let H;if(g&&kt(g,!1),(H=N.onVnodeBeforeUpdate)&&Ve(H,g,f,l),R&&Ot(f,l,g,"beforeUpdate"),g&&kt(g,!0),b?Ae(l.dynamicChildren,b,w,g,y,zr(f,_),I):S||q(l,f,w,null,g,y,zr(f,_),I,!1),E>0){if(E&16)ct(w,f,M,N,g,y,_);else if(E&2&&M.class!==N.class&&i(w,"class",null,N.class,_),E&4&&i(w,"style",M.style,N.style,_),E&8){const B=f.dynamicProps;for(let ne=0;ne<B.length;ne++){const J=B[ne],le=M[J],Ne=N[J];(Ne!==le||J==="value")&&i(w,J,le,Ne,_,l.children,g,y,pe)}}E&1&&l.children!==f.children&&d(w,f.children)}else!S&&b==null&&ct(w,f,M,N,g,y,_);((H=N.onVnodeUpdated)||R)&&Ie(()=>{H&&Ve(H,g,f,l),R&&Ot(f,l,g,"updated")},y)},Ae=(l,f,g,y,_,I,S)=>{for(let w=0;w<f.length;w++){const E=l[w],b=f[w],R=E.el&&(E.type===Re||!un(E,b)||E.shapeFlag&70)?h(E.el):g;A(E,b,R,null,y,_,I,S,!0)}},ct=(l,f,g,y,_,I,S)=>{if(g!==y){if(g!==re)for(const w in g)!pn(w)&&!(w in y)&&i(l,w,g[w],null,S,f.children,_,I,pe);for(const w in y){if(pn(w))continue;const E=y[w],b=g[w];E!==b&&w!=="value"&&i(l,w,b,E,S,f.children,_,I,pe)}"value"in y&&i(l,"value",g.value,y.value,S)}},Pt=(l,f,g,y,_,I,S,w,E)=>{const b=f.el=l?l.el:c(""),R=f.anchor=l?l.anchor:c("");let{patchFlag:M,dynamicChildren:N,slotScopeIds:H}=f;H&&(w=w?w.concat(H):H),l==null?(r(b,g,y),r(R,g,y),be(f.children||[],g,R,_,I,S,w,E)):M>0&&M&64&&N&&l.dynamicChildren?(Ae(l.dynamicChildren,N,g,_,I,S,w),(f.key!=null||_&&f===_.subTree)&&Oa(l,f,!0)):q(l,f,g,R,_,I,S,w,E)},Fe=(l,f,g,y,_,I,S,w,E)=>{f.slotScopeIds=w,l==null?f.shapeFlag&512?_.ctx.activate(f,g,y,S,E):cn(f,g,y,_,I,S,E):zt(l,f,E)},cn=(l,f,g,y,_,I,S)=>{const w=l.component=Ou(l,y,_);if(La(l)&&(w.ctx.renderer=k),ku(w),w.asyncDep){if(_&&_.registerDep(w,ce,S),!l.el){const E=w.subTree=G(St);U(null,E,f,g)}}else ce(w,l,f,g,_,I,S)},zt=(l,f,g)=>{const y=f.component=l.component;if(Ul(l,f,g))if(y.asyncDep&&!y.asyncResolved){Z(y,f,g);return}else y.next=f,kl(y.update),y.effect.dirty=!0,y.update();else f.el=l.el,y.vnode=f},ce=(l,f,g,y,_,I,S)=>{const w=()=>{if(l.isMounted){let{next:R,bu:M,u:N,parent:H,vnode:B}=l;{const jt=ka(l);if(jt){R&&(R.el=B.el,Z(l,R,S)),jt.asyncDep.then(()=>{l.isUnmounted||w()});return}}let ne=R,J;kt(l,!1),R?(R.el=B.el,Z(l,R,S)):R=B,M&&xr(M),(J=R.props&&R.props.onVnodeBeforeUpdate)&&Ve(J,H,R,B),kt(l,!0);const le=$r(l),Ne=l.subTree;l.subTree=le,A(Ne,le,h(Ne.el),v(Ne),l,_,I),R.el=le.el,ne===null&&$l(l,le.el),N&&Ie(N,_),(J=R.props&&R.props.onVnodeUpdated)&&Ie(()=>Ve(J,H,R,B),_)}else{let R;const{el:M,props:N}=f,{bm:H,m:B,parent:ne}=l,J=mn(f);if(kt(l,!1),H&&xr(H),!J&&(R=N&&N.onVnodeBeforeMount)&&Ve(R,ne,f),kt(l,!0),M&&ie){const le=()=>{l.subTree=$r(l),ie(M,l.subTree,l,_,null)};J?f.type.__asyncLoader().then(()=>!l.isUnmounted&&le()):le()}else{const le=l.subTree=$r(l);A(null,le,g,y,l,_,I),f.el=le.el}if(B&&Ie(B,_),!J&&(R=N&&N.onVnodeMounted)){const le=f;Ie(()=>Ve(R,ne,le),_)}(f.shapeFlag&256||ne&&mn(ne.vnode)&&ne.vnode.shapeFlag&256)&&l.a&&Ie(l.a,_),l.isMounted=!0,f=g=y=null}},E=l.effect=new Os(w,Oe,()=>$s(b),l.scope),b=l.update=()=>{E.dirty&&E.run()};b.id=l.uid,kt(l,!0),b()},Z=(l,f,g)=>{f.component=l;const y=l.vnode.props;l.vnode=f,l.next=null,lu(l,f.props,y,g),du(l,f.children,g),Ct(),_i(l),it()},q=(l,f,g,y,_,I,S,w,E=!1)=>{const b=l&&l.children,R=l?l.shapeFlag:0,M=f.children,{patchFlag:N,shapeFlag:H}=f;if(N>0){if(N&128){lt(b,M,g,y,_,I,S,w,E);return}else if(N&256){Ye(b,M,g,y,_,I,S,w,E);return}}H&8?(R&16&&pe(b,_,I),M!==b&&d(g,M)):R&16?H&16?lt(b,M,g,y,_,I,S,w,E):pe(b,_,I,!0):(R&8&&d(g,""),H&16&&be(M,g,y,_,I,S,w,E))},Ye=(l,f,g,y,_,I,S,w,E)=>{l=l||Kt,f=f||Kt;const b=l.length,R=f.length,M=Math.min(b,R);let N;for(N=0;N<M;N++){const H=f[N]=E?pt(f[N]):Be(f[N]);A(l[N],H,g,null,_,I,S,w,E)}b>R?pe(l,_,I,!0,!1,M):be(f,g,y,_,I,S,w,E,M)},lt=(l,f,g,y,_,I,S,w,E)=>{let b=0;const R=f.length;let M=l.length-1,N=R-1;for(;b<=M&&b<=N;){const H=l[b],B=f[b]=E?pt(f[b]):Be(f[b]);if(un(H,B))A(H,B,g,null,_,I,S,w,E);else break;b++}for(;b<=M&&b<=N;){const H=l[M],B=f[N]=E?pt(f[N]):Be(f[N]);if(un(H,B))A(H,B,g,null,_,I,S,w,E);else break;M--,N--}if(b>M){if(b<=N){const H=N+1,B=H<R?f[H].el:y;for(;b<=N;)A(null,f[b]=E?pt(f[b]):Be(f[b]),g,B,_,I,S,w,E),b++}}else if(b>N)for(;b<=M;)we(l[b],_,I,!0),b++;else{const H=b,B=b,ne=new Map;for(b=B;b<=N;b++){const Ce=f[b]=E?pt(f[b]):Be(f[b]);Ce.key!=null&&ne.set(Ce.key,b)}let J,le=0;const Ne=N-B+1;let jt=!1,oi=0;const ln=new Array(Ne);for(b=0;b<Ne;b++)ln[b]=0;for(b=H;b<=M;b++){const Ce=l[b];if(le>=Ne){we(Ce,_,I,!0);continue}let ze;if(Ce.key!=null)ze=ne.get(Ce.key);else for(J=B;J<=N;J++)if(ln[J-B]===0&&un(Ce,f[J])){ze=J;break}ze===void 0?we(Ce,_,I,!0):(ln[ze-B]=b+1,ze>=oi?oi=ze:jt=!0,A(Ce,f[ze],g,null,_,I,S,w,E),le++)}const ai=jt?mu(ln):Kt;for(J=ai.length-1,b=Ne-1;b>=0;b--){const Ce=B+b,ze=f[Ce],ci=Ce+1<R?f[Ce+1].el:y;ln[b]===0?A(null,ze,g,ci,_,I,S,w,E):jt&&(J<0||b!==ai[J]?He(ze,g,ci,2):J--)}}},He=(l,f,g,y,_=null)=>{const{el:I,type:S,transition:w,children:E,shapeFlag:b}=l;if(b&6){He(l.component.subTree,f,g,y);return}if(b&128){l.suspense.move(f,g,y);return}if(b&64){S.move(l,f,g,k);return}if(S===Re){r(I,f,g);for(let M=0;M<E.length;M++)He(E[M],f,g,y);r(l.anchor,f,g);return}if(S===Vr){O(l,f,g);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),r(I,f,g),Ie(()=>w.enter(I),_);else{const{leave:M,delayLeave:N,afterLeave:H}=w,B=()=>r(I,f,g),ne=()=>{M(I,()=>{B(),H&&H()})};N?N(I,B,ne):ne()}else r(I,f,g)},we=(l,f,g,y=!1,_=!1)=>{const{type:I,props:S,ref:w,children:E,dynamicChildren:b,shapeFlag:R,patchFlag:M,dirs:N,memoIndex:H}=l;if(M===-2&&(_=!1),w!=null&&fs(w,null,g,l,!0),H!=null&&(f.renderCache[H]=void 0),R&256){f.ctx.deactivate(l);return}const B=R&1&&N,ne=!mn(l);let J;if(ne&&(J=S&&S.onVnodeBeforeUnmount)&&Ve(J,f,l),R&6)Vn(l.component,g,y);else{if(R&128){l.suspense.unmount(g,y);return}B&&Ot(l,null,f,"beforeUnmount"),R&64?l.type.remove(l,f,g,k,y):b&&(I!==Re||M>0&&M&64)?pe(b,f,g,!1,!0):(I===Re&&M&384||!_&&R&16)&&pe(E,f,g),y&&Vt(l)}(ne&&(J=S&&S.onVnodeUnmounted)||B)&&Ie(()=>{J&&Ve(J,f,l),B&&Ot(l,null,f,"unmounted")},g)},Vt=l=>{const{type:f,el:g,anchor:y,transition:_}=l;if(f===Re){Bt(g,y);return}if(f===Vr){j(l);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(l.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:w}=_,E=()=>S(g,I);w?w(l.el,I,E):E()}else I()},Bt=(l,f)=>{let g;for(;l!==f;)g=p(l),s(l),l=g;s(f)},Vn=(l,f,g)=>{const{bum:y,scope:_,update:I,subTree:S,um:w,m:E,a:b}=l;Ai(E),Ai(b),y&&xr(y),_.stop(),I&&(I.active=!1,we(S,l,f,g)),w&&Ie(w,f),Ie(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},pe=(l,f,g,y=!1,_=!1,I=0)=>{for(let S=I;S<l.length;S++)we(l[S],f,g,y,_)},v=l=>l.shapeFlag&6?v(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el);let C=!1;const T=(l,f,g)=>{l==null?f._vnode&&we(f._vnode,null,null,!0):A(f._vnode||null,l,f,null,null,null,g),C||(C=!0,_i(),ha(),C=!1),f._vnode=l},k={p:A,um:we,m:He,r:Vt,mt:cn,mc:be,pc:q,pbc:Ae,n:v,o:t};let X,ie;return{render:T,hydrate:X,createApp:au(T,X)}}function zr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=pt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Oa(o,c)),c.type===Cr&&(c.el=o.el)}}function mu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ka(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ka(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const _u=Symbol.for("v-scx"),vu=()=>We(_u),qn={};function yn(t,e,n){return Na(t,e,n)}function Na(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=re){if(e&&i){const $=e;e=(...te)=>{$(...te),se()}}const a=me,u=$=>r===!0?$:Lt($,r===!1?1:void 0);let d,h=!1,p=!1;if(Te(t)?(d=()=>t.value,h=sr(t)):gn(t)?(d=()=>u(t),h=!0):F(t)?(p=!0,h=t.some($=>gn($)||sr($)),d=()=>t.map($=>{if(Te($))return $.value;if(gn($))return u($);if(V($))return bt($,a,2)})):V(t)?e?d=()=>bt(t,a,2):d=()=>(m&&m(),De(t,a,3,[P])):d=Oe,e&&r){const $=d;d=()=>Lt($())}let m,P=$=>{m=O.onStop=()=>{bt($,a,4),m=O.onStop=void 0}},A;if(Rr)if(P=Oe,e?n&&De(e,a,3,[d(),p?[]:void 0,P]):d(),s==="sync"){const $=vu();A=$.__watcherHandles||($.__watcherHandles=[])}else return Oe;let z=p?new Array(t.length).fill(qn):qn;const U=()=>{if(!(!O.active||!O.dirty))if(e){const $=O.run();(r||h||(p?$.some((te,be)=>Et(te,z[be])):Et($,z)))&&(m&&m(),De(e,a,3,[$,z===qn?void 0:p&&z[0]===qn?[]:z,P]),z=$)}else O.run()};U.allowRecurse=!!e;let D;s==="sync"?D=U:s==="post"?D=()=>Ie(U,a&&a.suspense):(U.pre=!0,a&&(U.id=a.uid),D=()=>$s(U));const O=new Os(d,Oe,D),j=il(),se=()=>{O.stop(),j&&Cs(j.effects,O)};return e?n?U():z=O.run():s==="post"?Ie(O.run.bind(O),a&&a.suspense):O.run(),A&&A.push(se),se}function yu(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?Ma(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=Ln(this),c=Na(s,i.bind(r),n);return o(),c}function Ma(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Te(t))Lt(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)Lt(t[r],e,n);else if(xo(t)||Gt(t))t.forEach(r=>{Lt(r,e,n)});else if(Fo(t)){for(const r in t)Lt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Lt(t[r],e,n)}return t}const La=t=>t.type.__isKeepAlive;function bu(t,e){Da(t,"a",e)}function wu(t,e){Da(t,"da",e)}function Da(t,e,n=me){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Tr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)La(s.parent.vnode)&&Iu(r,e,n,s),s=s.parent}}function Iu(t,e,n,r){const s=Tr(e,t,r,!0);va(()=>{Cs(r[e],s)},n)}function xa(t,e){t.shapeFlag&6&&t.component?xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const Eu=t=>t.__isTeleport,Re=Symbol.for("v-fgt"),Cr=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),Vr=Symbol.for("v-stc"),bn=[];let Le=null;function ae(t=!1){bn.push(Le=t?null:[])}function Su(){bn.pop(),Le=bn[bn.length-1]||null}let An=1;function Pi(t){An+=t}function Ua(t){return t.dynamicChildren=An>0?Le||Kt:null,Su(),An>0&&Le&&Le.push(t),t}function fe(t,e,n,r,s,i){return Ua(L(t,e,n,r,s,i,!0))}function zs(t,e,n,r,s){return Ua(G(t,e,n,r,s,!0))}function ar(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const $a=({key:t})=>t??null,Qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||Te(t)||V(t)?{i:ye,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$a(e),ref:e&&Qn(e),scopeId:Sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ye};return c?(Vs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=he(n)?8:16),An>0&&!o&&Le&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Le.push(a),a}const G=Tu;function Tu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zl)&&(t=St),ar(t)){const c=en(t,e,!0);return n&&Vs(c,n),An>0&&!i&&Le&&(c.shapeFlag&6?Le[Le.indexOf(t)]=c:Le.push(c)),c.patchFlag=-2,c}if(xu(t)&&(t=t.__vccOpts),e){e=Cu(e);let{class:c,style:a}=e;c&&!he(c)&&(e.class=Ps(c)),oe(a)&&(sa(a)&&!F(a)&&(a=de({},a)),e.style=As(a))}const o=he(t)?1:Bl(t)?128:Eu(t)?64:oe(t)?4:V(t)?2:0;return L(t,e,n,r,s,o,i,!0)}function Cu(t){return t?sa(t)||Sa(t)?de({},t):t:null}function en(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?Ru(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&$a(u),ref:e&&e.ref?n&&i?F(i)?i.concat(Qn(e)):[i,Qn(e)]:Qn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&xa(d,a.clone(d)),d}function W(t=" ",e=0){return G(Cr,null,t,e)}function Oi(t="",e=!1){return e?(ae(),zs(St,null,t)):G(St,null,t)}function Be(t){return t==null||typeof t=="boolean"?G(St):F(t)?G(Re,null,t.slice()):typeof t=="object"?pt(t):G(Cr,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function Vs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Sa(e)?e._ctx=ye:s===3&&ye&&(ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:ye},n=32):(e=String(e),r&64?(n=16,e=[W(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ru(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ps([e.class,r.class]));else if(s==="style")e.style=As([e.style,r.style]);else if(mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){De(t,e,7,[n,r])}const Au=wa();let Pu=0;function Ou(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Au,i={uid:Pu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new jo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ca(r,s),emitsOptions:ga(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ll.bind(null,i),t.ce&&t.ce(i),i}let me=null,cr,ds;{const t=zo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};cr=e("__VUE_INSTANCE_SETTERS__",n=>me=n),ds=e("__VUE_SSR_SETTERS__",n=>Rr=n)}const Ln=t=>{const e=me;return cr(t),t.scope.on(),()=>{t.scope.off(),cr(e)}},ki=()=>{me&&me.scope.off(),cr(null)};function Fa(t){return t.vnode.shapeFlag&4}let Rr=!1;function ku(t,e=!1){e&&ds(e);const{props:n,children:r}=t.vnode,s=Fa(t);cu(t,n,s,e),fu(t,r);const i=s?Nu(t,e):void 0;return e&&ds(!1),i}function Nu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Lu(t):null,i=Ln(t);Ct();const o=bt(r,t,0,[t.props,s]);if(it(),i(),Uo(o)){if(o.then(ki,ki),e)return o.then(c=>{Ni(t,c,e)}).catch(c=>{Ir(c,t,0)});t.asyncDep=o}else Ni(t,o,e)}else Ha(t,e)}function Ni(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=la(e)),Ha(t,n)}let Mi;function Ha(t,e,n){const r=t.type;if(!t.render){if(!e&&Mi&&!r.render){const s=r.template||Fs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,u=de(de({isCustomElement:i,delimiters:c},o),a);r.render=Mi(s,u)}}t.render=r.render||Oe}{const s=Ln(t);Ct();try{tu(t)}finally{it(),s()}}}const Mu={get(t,e){return Se(t,"get",""),t[e]}};function Lu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Mu),slots:t.slots,emit:t.emit,expose:e}}function Bs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(la(ia(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}})):t.proxy}function Du(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function xu(t){return V(t)&&"__vccOpts"in t}const Pe=(t,e)=>Tl(t,e,Rr);function za(t,e,n){const r=arguments.length;return r===2?oe(e)&&!F(e)?ar(e)?G(t,null,[e]):G(t,e):G(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ar(n)&&(n=[n]),G(t,e,n))}const Uu="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $u="http://www.w3.org/2000/svg",Fu="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,Li=Qe&&Qe.createElement("template"),Hu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qe.createElementNS($u,t):e==="mathml"?Qe.createElementNS(Fu,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Li.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Li.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zu=Symbol("_vtc");function Vu(t,e,n){const r=t[zu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Di=Symbol("_vod"),Bu=Symbol("_vsh"),ju=Symbol(""),Wu=/(^|;)\s*display\s*:/;function Ku(t,e,n){const r=t.style,s=he(n);let i=!1;if(n&&!s){if(e)if(he(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Zn(r,c,"")}else for(const o in e)n[o]==null&&Zn(r,o,"");for(const o in n)o==="display"&&(i=!0),Zn(r,o,n[o])}else if(s){if(e!==n){const o=r[ju];o&&(n+=";"+o),r.cssText=n,i=Wu.test(n)}}else e&&t.removeAttribute("style");Di in t&&(t[Di]=i?r.display:"",t[Bu]&&(r.display="none"))}const xi=/\s*!important$/;function Zn(t,e,n){if(F(n))n.forEach(r=>Zn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gu(t,e);xi.test(n)?t.setProperty(on(r),n.replace(xi,""),"important"):t[r]=n}}const Ui=["Webkit","Moz","ms"],Br={};function Gu(t,e){const n=Br[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return Br[e]=r;r=yr(r);for(let s=0;s<Ui.length;s++){const i=Ui[s]+r;if(i in t)return Br[e]=i}return e}const $i="http://www.w3.org/1999/xlink";function Fi(t,e,n,r,s,i=nl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($i,e.slice(6,e.length)):t.setAttributeNS($i,e,n):n==null||i&&!Vo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function qu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Vo(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ju(t,e,n,r){t.addEventListener(e,n,r)}function Yu(t,e,n,r){t.removeEventListener(e,n,r)}const Hi=Symbol("_vei");function Xu(t,e,n,r,s=null){const i=t[Hi]||(t[Hi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Qu(e);if(r){const u=i[e]=tf(r,s);Ju(t,c,u,a)}else o&&(Yu(t,c,o,a),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Qu(t){let e;if(zi.test(t)){e={};let r;for(;r=t.match(zi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let jr=0;const Zu=Promise.resolve(),ef=()=>jr||(Zu.then(()=>jr=0),jr=Date.now());function tf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(nf(r,n.value),e,5,[r])};return n.value=t,n.attached=ef(),n}function nf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rf=(t,e,n,r,s,i,o,c,a)=>{const u=s==="svg";e==="class"?Vu(t,r,u):e==="style"?Ku(t,n,r):mr(e)?Ts(e)||Xu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sf(t,e,r,u))?(qu(t,e,r,i,o,c,a),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fi(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fi(t,e,r,u))};function sf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vi(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vi(e)&&he(n)?!1:e in t}const of=de({patchProp:rf},Hu);let Bi;function af(){return Bi||(Bi=hu(of))}const cf=(...t)=>{const e=af().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=uf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,lf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function lf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uf(t){return he(t)?document.querySelector(t):t}var ff=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const df=Symbol();var ji;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ji||(ji={}));function hf(){const t=rl(!0),e=t.run(()=>Zt({}));let n=[],r=[];const s=ia({install(i){s._a=i,i.provide(df,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ff?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wt=typeof document<"u";function pf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Wr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const wn=()=>{},Ue=Array.isArray,Va=/#/g,gf=/&/g,mf=/\//g,_f=/=/g,vf=/\?/g,Ba=/\+/g,yf=/%5B/g,bf=/%5D/g,ja=/%5E/g,wf=/%60/g,Wa=/%7B/g,If=/%7C/g,Ka=/%7D/g,Ef=/%20/g;function js(t){return encodeURI(""+t).replace(If,"|").replace(yf,"[").replace(bf,"]")}function Sf(t){return js(t).replace(Wa,"{").replace(Ka,"}").replace(ja,"^")}function hs(t){return js(t).replace(Ba,"%2B").replace(Ef,"+").replace(Va,"%23").replace(gf,"%26").replace(wf,"`").replace(Wa,"{").replace(Ka,"}").replace(ja,"^")}function Tf(t){return hs(t).replace(_f,"%3D")}function Cf(t){return js(t).replace(Va,"%23").replace(vf,"%3F")}function Rf(t){return t==null?"":Cf(t).replace(mf,"%2F")}function Pn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Af=/\/$/,Pf=t=>t.replace(Af,"");function Kr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Mf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pn(o)}}function Of(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&tn(e.matched[r],n.matched[s])&&Ga(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ga(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Nf(t[n],e[n]))return!1;return!0}function Nf(t,e){return Ue(t)?Ki(t,e):Ue(e)?Ki(e,t):t===e}function Ki(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Mf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function Lf(t){if(!t)if(Wt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pf(t)}const Df=/^[^#]+#/;function xf(t,e){return t.replace(Df,"#")+e}function Uf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ar=()=>({left:window.scrollX,top:window.scrollY});function $f(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Uf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Gi(t,e){return(history.state?history.state.position-e:-1)+t}const ps=new Map;function Ff(t,e){ps.set(t,e)}function Hf(t){const e=ps.get(t);return ps.delete(t),e}let zf=()=>location.protocol+"//"+location.host;function qa(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Wi(a,"")}return Wi(n,t)+r+s}function Vf(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=qa(t,location),P=n.value,A=e.value;let z=0;if(p){if(n.value=m,e.value=p,o&&o===P){o=null;return}z=A?p.position-A.position:0}else r(m);s.forEach(U=>{U(n.value,P,{delta:z,type:On.pop,direction:z?z>0?In.forward:In.back:In.unknown})})};function a(){o=n.value}function u(p){s.push(p);const m=()=>{const P=s.indexOf(p);P>-1&&s.splice(P,1)};return i.push(m),m}function d(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:Ar()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:u,destroy:h}}function qi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ar():null}}function Bf(t){const{history:e,location:n}=window,r={value:qa(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:zf()+t+a;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](p)}}function o(a,u){const d=Q({},e.state,qi(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,d,!0),r.value=a}function c(a,u){const d=Q({},s.value,e.state,{forward:a,scroll:Ar()});i(d.current,d,!0);const h=Q({},qi(r.value,a,null),{position:d.position+1},u);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function jf(t){t=Lf(t);const e=Bf(t),n=Vf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:xf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Wf(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),jf(t)}function Kf(t){return typeof t=="string"||t&&typeof t=="object"}function Ja(t){return typeof t=="string"||typeof t=="symbol"}const Ya=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function nn(t,e){return Q(new Error,{type:t,[Ya]:!0},e)}function Xe(t,e){return t instanceof Error&&Ya in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",Gf={sensitive:!1,strict:!1,start:!0,end:!0},qf=/[.+*?^${}()[\]/\\]/g;function Jf(t,e){const n=Q({},Gf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(qf,"\\$&"),m+=40;else if(p.type===1){const{value:P,repeatable:A,optional:z,regexp:U}=p;i.push({name:P,repeatable:A,optional:z});const D=U||Yi;if(D!==Yi){m+=10;try{new RegExp(`(${D})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${P}" (${D}): `+j.message)}}let O=A?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(O=z&&u.length<2?`(?:/${O})`:"/"+O),z&&(O+="?"),s+=O,m+=20,z&&(m+=-8),A&&(m+=-20),D===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",P=i[p-1];h[P.name]=m&&P.repeatable?m.split("/"):m}return h}function a(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:P,repeatable:A,optional:z}=m,U=P in u?u[P]:"";if(Ue(U)&&!A)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const D=Ue(U)?U.join("/"):U;if(!D)if(z)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);d+=D}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Yf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Xa(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Yf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Xf={type:0,value:""},Qf=/[a-zA-Z0-9_]/;function Zf(t){if(!t)return[[]];if(t==="/")return[[Xf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Qf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function ed(t,e,n){const r=Jf(Zf(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function td(t,e){const n=[],r=new Map;e=eo({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const P=!m,A=nd(h);A.aliasOf=m&&m.record;const z=eo(e,h),U=[A];if("alias"in h){const j=typeof h.alias=="string"?[h.alias]:h.alias;for(const se of j)U.push(Q({},A,{components:m?m.record.components:A.components,path:se,aliasOf:m?m.record:A}))}let D,O;for(const j of U){const{path:se}=j;if(p&&se[0]!=="/"){const $=p.record.path,te=$[$.length-1]==="/"?"":"/";j.path=p.record.path+(se&&te+se)}if(D=ed(j,p,z),m?m.alias.push(D):(O=O||D,O!==D&&O.alias.push(D),P&&h.name&&!Zi(D)&&o(h.name)),Qa(D)&&a(D),A.children){const $=A.children;for(let te=0;te<$.length;te++)i($[te],D,m&&m.children[te])}m=m||D}return O?()=>{o(O)}:wn}function o(h){if(Ja(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=id(h,n);n.splice(p,0,h),h.record.name&&!Zi(h)&&r.set(h.record.name,h)}function u(h,p){let m,P={},A,z;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw nn(1,{location:h});z=m.record.name,P=Q(Qi(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&Qi(h.params,m.keys.map(O=>O.name))),A=m.stringify(P)}else if(h.path!=null)A=h.path,m=n.find(O=>O.re.test(A)),m&&(P=m.parse(A),z=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw nn(1,{location:h,currentLocation:p});z=m.record.name,P=Q({},p.params,h.params),A=m.stringify(P)}const U=[];let D=m;for(;D;)U.unshift(D.record),D=D.parent;return{name:z,path:A,params:P,matched:U,meta:sd(U)}}t.forEach(h=>i(h));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function nd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Zi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sd(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function eo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function id(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Xa(t,e[i])<0?r=i:n=i+1}const s=od(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function od(t){let e=t;for(;e=e.parent;)if(Qa(e)&&Xa(t,e)===0)return e}function Qa({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ad(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ba," "),o=i.indexOf("="),c=Pn(o<0?i:i.slice(0,o)),a=o<0?null:Pn(i.slice(o+1));if(c in e){let u=e[c];Ue(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function to(t){let e="";for(let n in t){const r=t[n];if(n=Tf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&hs(i)):[r&&hs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ld=Symbol(""),no=Symbol(""),Ws=Symbol(""),Za=Symbol(""),gs=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=p=>{p===!1?a(nn(4,{from:n,to:e})):p instanceof Error?a(p):Kf(p)?a(nn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(d);t.length<3&&(h=h.then(u)),h.catch(p=>a(p))})}function Gr(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ud(a)){const d=(a.__vccOpts||a)[e];d&&i.push(gt(d,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=pf(d)?d.default:d;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&gt(m,n,r,o,c,s)()}))}}return i}function ud(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ro(t){const e=We(Ws),n=We(Za),r=Pe(()=>{const a=Ee(t.to);return e.resolve(a)}),s=Pe(()=>{const{matched:a}=r.value,{length:u}=a,d=a[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(tn.bind(null,d));if(p>-1)return p;const m=so(a[u-2]);return u>1&&so(d)===m&&h[h.length-1].path!==m?h.findIndex(tn.bind(null,a[u-2])):p}),i=Pe(()=>s.value>-1&&pd(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Ga(n.params,r.value.params));function c(a={}){return hd(a)?e[Ee(t.replace)?"replace":"push"](Ee(t.to)).catch(wn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const fd=Je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ro,setup(t,{slots:e}){const n=wr(ro(t)),{options:r}=We(Ws),s=Pe(()=>({[io(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[io(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:za("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),dd=fd;function hd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function so(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const io=(t,e,n)=>t??e??n,gd=Je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(gs),s=Pe(()=>t.route||r.value),i=We(no,0),o=Pe(()=>{let u=Ee(i);const{matched:d}=s.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),c=Pe(()=>s.value.matched[o.value]);Xn(no,Pe(()=>o.value+1)),Xn(ld,c),Xn(gs,s);const a=Zt();return yn(()=>[a.value,c.value,t.name],([u,d,h],[p,m,P])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!tn(d,m)||!p)&&(d.enterCallbacks[h]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,h=c.value,p=h&&h.components[d];if(!p)return oo(n.default,{Component:p,route:u});const m=h.props[d],P=m?m===!0?u.params:typeof m=="function"?m(u):m:null,z=za(p,Q({},P,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(h.instances[d]=null)},ref:a}));return oo(n.default,{Component:z,route:u})||z}}});function oo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ec=gd;function md(t){const e=td(t.routes,t),n=t.parseQuery||ad,r=t.stringifyQuery||to,s=t.history,i=fn(),o=fn(),c=fn(),a=Cl(ft);let u=ft;Wt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Wr.bind(null,v=>""+v),h=Wr.bind(null,Rf),p=Wr.bind(null,Pn);function m(v,C){let T,k;return Ja(v)?(T=e.getRecordMatcher(v),k=C):k=v,e.addRoute(k,T)}function P(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(v=>v.record)}function z(v){return!!e.getRecordMatcher(v)}function U(v,C){if(C=Q({},C||a.value),typeof v=="string"){const f=Kr(n,v,C.path),g=e.resolve({path:f.path},C),y=s.createHref(f.fullPath);return Q(f,g,{params:p(g.params),hash:Pn(f.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=Q({},v,{path:Kr(n,v.path,C.path).path});else{const f=Q({},v.params);for(const g in f)f[g]==null&&delete f[g];T=Q({},v,{params:h(f)}),C.params=h(C.params)}const k=e.resolve(T,C),X=v.hash||"";k.params=d(p(k.params));const ie=Of(r,Q({},v,{hash:Sf(X),path:k.path})),l=s.createHref(ie);return Q({fullPath:ie,hash:X,query:r===to?cd(v.query):v.query||{}},k,{redirectedFrom:void 0,href:l})}function D(v){return typeof v=="string"?Kr(n,v,a.value.path):Q({},v)}function O(v,C){if(u!==v)return nn(8,{from:C,to:v})}function j(v){return te(v)}function se(v){return j(Q(D(v),{replace:!0}))}function $(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=D(k):{path:k},k.params={}),Q({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function te(v,C){const T=u=U(v),k=a.value,X=v.state,ie=v.force,l=v.replace===!0,f=$(T);if(f)return te(Q(D(f),{state:typeof f=="object"?Q({},X,f.state):X,force:ie,replace:l}),C||T);const g=T;g.redirectedFrom=C;let y;return!ie&&kf(r,k,T)&&(y=nn(16,{to:g,from:k}),He(k,k,!0,!1)),(y?Promise.resolve(y):Ae(g,k)).catch(_=>Xe(_)?Xe(_,2)?_:lt(_):q(_,g,k)).then(_=>{if(_){if(Xe(_,2))return te(Q({replace:l},D(_.to),{state:typeof _.to=="object"?Q({},X,_.to.state):X,force:ie}),C||g)}else _=Pt(g,k,!0,l,X);return ct(g,k,_),_})}function be(v,C){const T=O(v,C);return T?Promise.reject(T):Promise.resolve()}function ke(v){const C=Bt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Ae(v,C){let T;const[k,X,ie]=_d(v,C);T=Gr(k.reverse(),"beforeRouteLeave",v,C);for(const f of k)f.leaveGuards.forEach(g=>{T.push(gt(g,v,C))});const l=be.bind(null,v,C);return T.push(l),pe(T).then(()=>{T=[];for(const f of i.list())T.push(gt(f,v,C));return T.push(l),pe(T)}).then(()=>{T=Gr(X,"beforeRouteUpdate",v,C);for(const f of X)f.updateGuards.forEach(g=>{T.push(gt(g,v,C))});return T.push(l),pe(T)}).then(()=>{T=[];for(const f of ie)if(f.beforeEnter)if(Ue(f.beforeEnter))for(const g of f.beforeEnter)T.push(gt(g,v,C));else T.push(gt(f.beforeEnter,v,C));return T.push(l),pe(T)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),T=Gr(ie,"beforeRouteEnter",v,C,ke),T.push(l),pe(T))).then(()=>{T=[];for(const f of o.list())T.push(gt(f,v,C));return T.push(l),pe(T)}).catch(f=>Xe(f,8)?f:Promise.reject(f))}function ct(v,C,T){c.list().forEach(k=>ke(()=>k(v,C,T)))}function Pt(v,C,T,k,X){const ie=O(v,C);if(ie)return ie;const l=C===ft,f=Wt?history.state:{};T&&(k||l?s.replace(v.fullPath,Q({scroll:l&&f&&f.scroll},X)):s.push(v.fullPath,X)),a.value=v,He(v,C,T,l),lt()}let Fe;function cn(){Fe||(Fe=s.listen((v,C,T)=>{if(!Vn.listening)return;const k=U(v),X=$(k);if(X){te(Q(X,{replace:!0}),k).catch(wn);return}u=k;const ie=a.value;Wt&&Ff(Gi(ie.fullPath,T.delta),Ar()),Ae(k,ie).catch(l=>Xe(l,12)?l:Xe(l,2)?(te(l.to,k).then(f=>{Xe(f,20)&&!T.delta&&T.type===On.pop&&s.go(-1,!1)}).catch(wn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),q(l,k,ie))).then(l=>{l=l||Pt(k,ie,!1),l&&(T.delta&&!Xe(l,8)?s.go(-T.delta,!1):T.type===On.pop&&Xe(l,20)&&s.go(-1,!1)),ct(k,ie,l)}).catch(wn)}))}let zt=fn(),ce=fn(),Z;function q(v,C,T){lt(v);const k=ce.list();return k.length?k.forEach(X=>X(v,C,T)):console.error(v),Promise.reject(v)}function Ye(){return Z&&a.value!==ft?Promise.resolve():new Promise((v,C)=>{zt.add([v,C])})}function lt(v){return Z||(Z=!v,cn(),zt.list().forEach(([C,T])=>v?T(v):C()),zt.reset()),v}function He(v,C,T,k){const{scrollBehavior:X}=t;if(!Wt||!X)return Promise.resolve();const ie=!T&&Hf(Gi(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return fa().then(()=>X(v,C,ie)).then(l=>l&&$f(l)).catch(l=>q(l,v,C))}const we=v=>s.go(v);let Vt;const Bt=new Set,Vn={currentRoute:a,listening:!0,addRoute:m,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:A,resolve:U,options:t,push:j,replace:se,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ce.add,isReady:Ye,install(v){const C=this;v.component("RouterLink",dd),v.component("RouterView",ec),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(a)}),Wt&&!Vt&&a.value===ft&&(Vt=!0,j(s.location).catch(X=>{}));const T={};for(const X in ft)Object.defineProperty(T,X,{get:()=>a.value[X],enumerable:!0});v.provide(Ws,C),v.provide(Za,na(T)),v.provide(gs,a);const k=v.unmount;Bt.add(v),v.unmount=function(){Bt.delete(v),Bt.size<1&&(u=ft,Fe&&Fe(),Fe=null,a.value=ft,Vt=!1,Z=!1),k()}}};function pe(v){return v.reduce((C,T)=>C.then(()=>ke(T)),Promise.resolve())}return Vn}function _d(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>tn(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>tn(u,a))||s.push(a))}return[n,r,s]}const vd=Je({__name:"App",setup(t){return(e,n)=>(ae(),zs(Ee(ec)))}}),$e=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},yd=$e(vd,[["__scopeId","data-v-3baf7b7d"]]),bd="modulepreload",wd=function(t){return"/try_firebase/"+t},ao={},Id=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=wd(c),c in ao)return;ao[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":bd,a||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),a)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ed={},Sd={class:"item"},Td={class:"details"};function Cd(t,e){return ae(),fe("div",Sd,[L("i",null,[Fr(t.$slots,"icon",{},void 0)]),L("div",Td,[L("h3",null,[Fr(t.$slots,"heading",{},void 0)]),Fr(t.$slots,"default",{},void 0)])])}const dn=$e(Ed,[["render",Cd],["__scopeId","data-v-fd0742eb"]]),Rd={},Ad={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Pd=L("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Od=[Pd];function kd(t,e){return ae(),fe("svg",Ad,Od)}const Nd=$e(Rd,[["render",kd]]),Md={},Ld={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Dd=L("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),xd=[Dd];function Ud(t,e){return ae(),fe("svg",Ld,xd)}const $d=$e(Md,[["render",Ud]]),Fd={},Hd={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},zd=L("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),Vd=[zd];function Bd(t,e){return ae(),fe("svg",Hd,Vd)}const jd=$e(Fd,[["render",Bd]]),Wd={},Kd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Gd=L("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),qd=[Gd];function Jd(t,e){return ae(),fe("svg",Kd,qd)}const Yd=$e(Wd,[["render",Jd]]),Xd={},Qd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Zd=L("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),eh=[Zd];function th(t,e){return ae(),fe("svg",Qd,eh)}const nh=$e(Xd,[["render",th]]),rh=L("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),sh=L("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),ih=L("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),oh=L("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),ah=L("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),ch=L("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),lh=L("br",null,null,-1),uh=L("code",null,"README.md",-1),fh=L("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),dh=L("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),hh=L("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),ph=L("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),gh=L("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),mh=L("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),_h=L("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),vh=L("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),yh=L("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),bh=L("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),wh=Je({__name:"TheWelcome",setup(t){return(e,n)=>(ae(),fe(Re,null,[G(dn,null,{icon:ue(()=>[G(Nd)]),heading:ue(()=>[W("Documentation")]),default:ue(()=>[W(" Vue’s "),rh,W(" provides you with all information you need to get started. ")]),_:1}),G(dn,null,{icon:ue(()=>[G($d)]),heading:ue(()=>[W("Tooling")]),default:ue(()=>[W(" This project is served and bundled with "),sh,W(". The recommended IDE setup is "),ih,W(" + "),oh,W(". If you need to test your components and web pages, check out "),ah,W(" and "),ch,W(". "),lh,W(" More instructions are available in "),uh,W(". ")]),_:1}),G(dn,null,{icon:ue(()=>[G(jd)]),heading:ue(()=>[W("Ecosystem")]),default:ue(()=>[W(" Get official tools and libraries for your project: "),fh,W(", "),dh,W(", "),hh,W(", and "),ph,W(". If you need more resources, we suggest paying "),gh,W(" a visit. ")]),_:1}),G(dn,null,{icon:ue(()=>[G(Yd)]),heading:ue(()=>[W("Community")]),default:ue(()=>[W(" Got stuck? Ask your question on "),mh,W(", our official Discord server, or "),_h,W(". You should also subscribe to "),vh,W(" and follow the official "),yh,W(" twitter account for latest news in the Vue world. ")]),_:1}),G(dn,null,{icon:ue(()=>[G(nh)]),heading:ue(()=>[W("Support Vue")]),default:ue(()=>[W(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),bh,W(". ")]),_:1})],64))}}),Ih=Je({__name:"HomeView",setup(t){return(e,n)=>{const r=Hl("router-link");return ae(),fe("main",null,[L("ul",null,[L("li",null,[G(r,{to:"/auth"},{default:ue(()=>[W("Auth")]),_:1})]),L("li",null,[G(r,{to:"/about"},{default:ue(()=>[W("About")]),_:1})])]),G(wh)])}}});var co={};/**
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
 */const tc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Eh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,m=u&63;a||(m=64,o||(p=64)),r.push(n[d],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||h==null)throw new Sh;const p=i<<2|c>>4;if(r.push(p),u!==64){const m=c<<4&240|u>>2;if(r.push(m),h!==64){const P=u<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Th=function(t){const e=tc(t);return nc.encodeByteArray(e,!0)},rc=function(t){return Th(t).replace(/\./g,"")},sc=function(t){try{return nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ch(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rh=()=>Ch().__FIREBASE_DEFAULTS__,Ah=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ph=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},Ks=()=>{try{return Rh()||Ah()||Ph()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oh=t=>{var e,n;return(n=(e=Ks())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ic=()=>{var t;return(t=Ks())===null||t===void 0?void 0:t.config},oc=t=>{var e;return(e=Ks())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Mh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dh(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xh(){try{return typeof indexedDB=="object"}catch{return!1}}function Uh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $h="FirebaseError";class Rt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$h,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,c,r)}}function Fh(t,e){return t.replace(Hh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hh=/\{\$([^}]+)}/g;function zh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lo(i)&&lo(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
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
 */function xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vh(t,e){const n=new Bh(t,e);return n.subscribe.bind(n)}class Bh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class Wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gh(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kh(t){return t===Nt?void 0:t}function Gh(t){return t.instantiationMode==="EAGER"}/**
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
 */class qh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Jh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Yh=ee.INFO,Xh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Qh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Xh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=Yh,this._logHandler=Qh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Zh=(t,e)=>e.some(n=>t instanceof n);let uo,fo;function ep(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tp(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cc=new WeakMap,ms=new WeakMap,lc=new WeakMap,Jr=new WeakMap,Gs=new WeakMap;function np(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cc.set(n,t)}).catch(()=>{}),Gs.set(e,t),e}function rp(t){if(ms.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ms.set(t,e)}let _s={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ms.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sp(t){_s=t(_s)}function ip(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yr(this),e,...n);return lc.set(r,e.sort?e.sort():[e]),wt(r)}:tp().includes(t)?function(...e){return t.apply(Yr(this),e),wt(cc.get(this))}:function(...e){return wt(t.apply(Yr(this),e))}}function op(t){return typeof t=="function"?ip(t):(t instanceof IDBTransaction&&rp(t),Zh(t,ep())?new Proxy(t,_s):t)}function wt(t){if(t instanceof IDBRequest)return np(t);if(Jr.has(t))return Jr.get(t);const e=op(t);return e!==t&&(Jr.set(t,e),Gs.set(e,t)),e}const Yr=t=>Gs.get(t);function ap(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=wt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(wt(o.result),a.oldVersion,a.newVersion,wt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const cp=["get","getKey","getAll","getAllKeys","count"],lp=["put","add","delete","clear"],Xr=new Map;function ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xr.get(e))return Xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=lp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cp.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return Xr.set(e,i),i}sp(t=>({...t,get:(e,n,r)=>ho(e,n)||t.get(e,n,r),has:(e,n)=>!!ho(e,n)||t.has(e,n)}));/**
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
 */class up{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",po="0.10.5";/**
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
 */const Ft=new ac("@firebase/app"),dp="@firebase/app-compat",hp="@firebase/analytics-compat",pp="@firebase/analytics",gp="@firebase/app-check-compat",mp="@firebase/app-check",_p="@firebase/auth",vp="@firebase/auth-compat",yp="@firebase/database",bp="@firebase/database-compat",wp="@firebase/functions",Ip="@firebase/functions-compat",Ep="@firebase/installations",Sp="@firebase/installations-compat",Tp="@firebase/messaging",Cp="@firebase/messaging-compat",Rp="@firebase/performance",Ap="@firebase/performance-compat",Pp="@firebase/remote-config",Op="@firebase/remote-config-compat",kp="@firebase/storage",Np="@firebase/storage-compat",Mp="@firebase/firestore",Lp="@firebase/vertexai-preview",Dp="@firebase/firestore-compat",xp="firebase",Up="10.12.2";/**
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
 */const ys="[DEFAULT]",$p={[vs]:"fire-core",[dp]:"fire-core-compat",[pp]:"fire-analytics",[hp]:"fire-analytics-compat",[mp]:"fire-app-check",[gp]:"fire-app-check-compat",[_p]:"fire-auth",[vp]:"fire-auth-compat",[yp]:"fire-rtdb",[bp]:"fire-rtdb-compat",[wp]:"fire-fn",[Ip]:"fire-fn-compat",[Ep]:"fire-iid",[Sp]:"fire-iid-compat",[Tp]:"fire-fcm",[Cp]:"fire-fcm-compat",[Rp]:"fire-perf",[Ap]:"fire-perf-compat",[Pp]:"fire-rc",[Op]:"fire-rc-compat",[kp]:"fire-gcs",[Np]:"fire-gcs-compat",[Mp]:"fire-fst",[Dp]:"fire-fst-compat",[Lp]:"fire-vertex","fire-js":"fire-js",[xp]:"fire-js-all"};/**
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
 */const ur=new Map,Fp=new Map,bs=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(bs.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,t);for(const n of ur.values())go(n,t);for(const n of Fp.values())go(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function et(t){return t.settings!==void 0}/**
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
 */const Hp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},It=new Dn("app","Firebase",Hp);/**
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
 */class zp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Up;function fc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ys,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=ic()),!n)throw It.create("no-options");const i=ur.get(s);if(i){if(lr(n,i.options)&&lr(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new qh(s);for(const a of bs.values())o.addComponent(a);const c=new zp(n,r,o);return ur.set(s,c),c}function Vp(t=ys){const e=ur.get(t);if(!e&&t===ys&&ic())return fc();if(!e)throw It.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=$p[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(c.join(" "));return}kn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Bp="firebase-heartbeat-database",jp=1,Nn="firebase-heartbeat-store";let Qr=null;function dc(){return Qr||(Qr=ap(Bp,jp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nn)}catch(n){console.warn(n)}}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),Qr}async function Wp(t){try{const n=(await dc()).transaction(Nn),r=await n.objectStore(Nn).get(hc(t));return await n.done,r}catch(e){if(e instanceof Rt)Ft.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function mo(t,e){try{const r=(await dc()).transaction(Nn,"readwrite");await r.objectStore(Nn).put(e,hc(t)),await r.done}catch(n){if(n instanceof Rt)Ft.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function hc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kp=1024,Gp=30*24*60*60*1e3;class qp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_o();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Gp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:r,unsentEntries:s}=Jp(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function _o(){return new Date().toISOString().substring(0,10)}function Jp(t,e=Kp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xh()?Uh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vo(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Xp(t){kn(new rn("platform-logger",e=>new up(e),"PRIVATE")),kn(new rn("heartbeat",e=>new qp(e),"PRIVATE")),Jt(vs,po,t),Jt(vs,po,"esm2017"),Jt("fire-js","")}Xp("");function qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qp=pc,gc=new Dn("auth","Firebase",pc());/**
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
 */const fr=new ac("@firebase/auth");function Zp(t,...e){fr.logLevel<=ee.WARN&&fr.warn(`Auth (${Un}): ${t}`,...e)}function er(t,...e){fr.logLevel<=ee.ERROR&&fr.error(`Auth (${Un}): ${t}`,...e)}/**
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
 */function qe(t,...e){throw Ys(t,...e)}function xe(t,...e){return Ys(t,...e)}function Js(t,e,n){const r=Object.assign(Object.assign({},Qp()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return Js(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qe(t,"argument-error"),Js(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gc.create(t,...e)}function x(t,e,...n){if(!t)throw Ys(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function ot(t,e){t||tt(e)}/**
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
 */function ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tg(){return yo()==="http:"||yo()==="https:"}function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ng(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tg()||Mh()||"connection"in navigator)?navigator.onLine:!0}function rg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Nh()||Lh()}get(){return ng()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xs(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ig=new $n(3e4,6e4);function Qs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,s={}){return _c(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=xn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),mc.fetch()(vc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function _c(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sg),e);try{const s=new ag(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Jn(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Js(t,d,u);qe(t,d)}}catch(s){if(s instanceof Rt)throw s;qe(t,"network-request-failed",{message:String(s)})}}async function og(t,e,n,r,s={}){const i=await an(t,e,n,r,s);return"mfaPendingCredential"in i&&qe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xs(t.config,s):`${t.config.apiScheme}://${s}`}class ag{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),ig.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cg(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lg(t,e=!1){const n=At(t),r=await n.getIdToken(e),s=Zs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Zr(s.auth_time)),issuedAtTime:En(Zr(s.iat)),expirationTime:En(Zr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zr(t){return Number(t)*1e3}function Zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const s=sc(n);return s?JSON.parse(s):(er("Failed to decode base64 JWT payload"),null)}catch(s){return er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bo(t){const e=Zs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rt&&ug(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ug({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Is{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mn(t,yc(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bc(i.providerUserInfo):[],c=hg(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function dg(t){const e=At(t);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hg(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bc(t){return t.map(e=>{var{providerId:n}=e,r=qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pg(t,e){const n=await _c(t,{},async()=>{const r=xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",mc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gg(t,e){return an(t,"POST","/v2/accounts:revokeToken",Qs(t,e))}/**
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
 */class Yt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=bo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yt;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yt,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function dt(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Is(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lg(this,e)}reload(){return dg(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(et(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Mn(this,cg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:j,isAnonymous:se,providerData:$,stsTokenManager:te}=n;x(O&&te,e,"internal-error");const be=Yt.fromJSON(this.name,te);x(typeof O=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),x(typeof j=="boolean",e,"internal-error"),x(typeof se=="boolean",e,"internal-error"),dt(m,e.name),dt(P,e.name),dt(A,e.name),dt(z,e.name),dt(U,e.name),dt(D,e.name);const ke=new nt({uid:O,auth:e,email:p,emailVerified:j,displayName:h,isAnonymous:se,photoURL:P,phoneNumber:m,tenantId:A,stsTokenManager:be,createdAt:U,lastLoginAt:D});return $&&Array.isArray($)&&(ke.providerData=$.map(Ae=>Object.assign({},Ae))),z&&(ke._redirectEventId=z),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yt;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await dr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];x(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Yt;c.updateFromIdToken(r);const a=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Is(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const wo=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=wo.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wo.set(t,e),e)}/**
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
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wc.type="NONE";const Io=wc;/**
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
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xt(rt(Io),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||rt(Io);const o=tr(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const h=nt._fromJSON(e,d);u!==i&&(c=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Xt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xt(i,e,r))}}/**
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
 */function Eo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ic(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(Rc(e))return"Webos";if(ei(e))return"Safari";if((e.includes("chrome/")||Ec(e))&&!e.includes("edge/"))return"Chrome";if(Tc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ic(t=_e()){return/firefox\//i.test(t)}function ei(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ec(t=_e()){return/crios\//i.test(t)}function Sc(t=_e()){return/iemobile/i.test(t)}function Tc(t=_e()){return/android/i.test(t)}function Cc(t=_e()){return/blackberry/i.test(t)}function Rc(t=_e()){return/webos/i.test(t)}function Pr(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mg(t=_e()){var e;return Pr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _g(){return Dh()&&document.documentMode===10}function Ac(t=_e()){return Pr(t)||Tc(t)||Rc(t)||Cc(t)||/windows phone/i.test(t)||Sc(t)}function vg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pc(t,e=[]){let n;switch(t){case"Browser":n=Eo(_e());break;case"Worker":n=`${Eo(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${r}`}/**
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
 */class yg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bg(t,e={}){return an(t,"GET","/v2/passwordPolicy",Qs(t,e))}/**
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
 */const wg=6;class Ig{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Eg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new So(this),this.idTokenSubscription=new So(this),this.beforeStateQueue=new yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(et(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(et(this.app))return Promise.reject($t(this));const n=e?At(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return et(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return et(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bg(this),n=new Ig(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Zp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return At(t)}class So{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ti={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sg(t){ti=t}function Tg(t){return ti.loadJS(t)}function Cg(){return ti.gapiScript}function Rg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ag(t,e){const n=uc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lr(i,e??{}))return s;qe(s,"already-initialized")}return n.initialize({options:e})}function Pg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Og(t,e,n){const r=Or(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Oc(e),{host:o,port:c}=kg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ng()}function Oc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kg(t){const e=Oc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:To(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:To(o)}}}function To(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ng(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
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
 */async function Qt(t,e){return og(t,"POST","/v1/accounts:signInWithIdp",Qs(t,e))}/**
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
 */const Mg="http://localhost";class Ht extends kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qt(e,n)}buildRequest(){const e={requestUri:Mg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xn(n)}return e}}/**
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
 */class ni{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends ni{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends Fn{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ze.credential(n,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class _t extends Fn{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class vt extends Fn{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=Co(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Co(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Co(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hr extends Rt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hr(e,n,r,s)}}function Nc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,r):i})}async function Lg(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}/**
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
 */async function Dg(t,e,n=!1){const{auth:r}=t;if(et(r.app))return Promise.reject($t(r));const s="reauthenticate";try{const i=await Mn(t,Nc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Zs(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(t.uid===c,r,"user-mismatch"),sn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qe(r,"user-mismatch"),i}}/**
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
 */async function xg(t,e,n=!1){if(et(t.app))return Promise.reject($t(t));const r="signIn",s=await Nc(t,r,e),i=await sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ug(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function $g(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function Fg(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}function Hg(t){return At(t).signOut()}const pr="__sak";/**
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
 */class Mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zg(){const t=_e();return ei(t)||Pr(t)}const Vg=1e3,Bg=10;class Lc extends Mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zg()&&vg(),this.fallbackToPolling=Ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_g()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lc.type="LOCAL";const jg=Lc;/**
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
 */class Dc extends Mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dc.type="SESSION";const xc=Dc;/**
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
 */function Wg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await Wg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kr.receivers=[];/**
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
 */function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Kg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=ri("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function Gg(t){Ke().location.href=t}/**
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
 */function Uc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function qg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Yg(){return Uc()?self:null}/**
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
 */const $c="firebaseLocalStorageDb",Xg=1,gr="firebaseLocalStorage",Fc="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nr(t,e){return t.transaction([gr],e?"readwrite":"readonly").objectStore(gr)}function Qg(){const t=indexedDB.deleteDatabase($c);return new Hn(t).toPromise()}function Es(){const t=indexedDB.open($c,Xg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gr,{keyPath:Fc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gr)?e(r):(r.close(),await Qg(),e(await Es()))})})}async function Ro(t,e,n){const r=Nr(t,!0).put({[Fc]:e,value:n});return new Hn(r).toPromise()}async function Zg(t,e){const n=Nr(t,!1).get(e),r=await new Hn(n).toPromise();return r===void 0?null:r.value}function Ao(t,e){const n=Nr(t,!0).delete(e);return new Hn(n).toPromise()}const em=800,tm=3;class Hc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Es(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance(Yg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qg(),!this.activeServiceWorker)return;this.sender=new Kg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Es();return await Ro(e,pr,"1"),await Ao(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ro(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Zg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ao(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Nr(s,!1).getAll();return new Hn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hc.type="LOCAL";const nm=Hc;new $n(3e4,6e4);/**
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
 */function zc(t,e){return e?rt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class si extends kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rm(t){return xg(t.auth,new si(t),t.bypassAuthState)}function sm(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Dg(n,new si(t),t.bypassAuthState)}async function im(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Lg(n,new si(t),t.bypassAuthState)}/**
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
 */class Vc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rm;case"linkViaPopup":case"linkViaRedirect":return im;case"reauthViaPopup":case"reauthViaRedirect":return sm;default:qe(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const om=new $n(2e3,1e4);async function am(t,e,n){if(et(t.app))return Promise.reject(xe(t,"operation-not-supported-in-this-environment"));const r=Or(t);eg(t,e,ni);const s=zc(r,n);return new Dt(r,"signInViaPopup",e,s).executeNotNull()}class Dt extends Vc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Dt.currentPopupAction&&Dt.currentPopupAction.cancel(),Dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,om.get())};e()}}Dt.currentPopupAction=null;/**
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
 */const cm="pendingRedirect",nr=new Map;class lm extends Vc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const r=await um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function um(t,e){const n=hm(e),r=dm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fm(t,e){nr.set(t._key(),e)}function dm(t){return rt(t._redirectPersistence)}function hm(t){return tr(cm,t.config.apiKey,t.name)}async function pm(t,e,n=!1){if(et(t.app))return Promise.reject($t(t));const r=Or(t),s=zc(r,e),o=await new lm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gm=10*60*1e3;class mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_m(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Po(e))}saveEventToCache(e){this.cachedEventUids.add(Po(e)),this.lastProcessedEventTime=Date.now()}}function Po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _m(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bc(t);default:return!1}}/**
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
 */async function vm(t,e={}){return an(t,"GET","/v1/projects",e)}/**
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
 */const ym=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bm=/^https?/;async function wm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vm(t);for(const n of e)try{if(Im(n))return}catch{}qe(t,"unauthorized-domain")}function Im(t){const e=ws(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bm.test(n))return!1;if(ym.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Em=new $n(3e4,6e4);function Oo(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Sm(t){return new Promise((e,n)=>{var r,s,i;function o(){Oo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oo(),n(xe(t,"network-request-failed"))},timeout:Em.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const c=Rg("iframefcb");return Ke()[c]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},Tg(`${Cg()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw rr=null,e})}let rr=null;function Tm(t){return rr=rr||Sm(t),rr}/**
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
 */const Cm=new $n(5e3,15e3),Rm="__/auth/iframe",Am="emulator/auth/iframe",Pm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Om=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function km(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xs(e,Am):`https://${t.config.authDomain}/${Rm}`,r={apiKey:e.apiKey,appName:t.name,v:Un},s=Om.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xn(r).slice(1)}`}async function Nm(t){const e=await Tm(t),n=Ke().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:km(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),c=Ke().setTimeout(()=>{i(o)},Cm.get());function a(){Ke().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Mm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lm=500,Dm=600,xm="_blank",Um="http://localhost";class ko{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $m(t,e,n,r=Lm,s=Dm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Mm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=_e().toLowerCase();n&&(c=Ec(u)?xm:n),Ic(u)&&(e=e||Um,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[m,P])=>`${p}${m}=${P},`,"");if(mg(u)&&c!=="_self")return Fm(e||"",c),new ko(null);const h=window.open(e||"",c,d);x(h,t,"popup-blocked");try{h.focus()}catch{}return new ko(h)}function Fm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hm="__/auth/handler",zm="emulator/auth/handler",Vm=encodeURIComponent("fac");async function No(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Un,eventId:s};if(e instanceof ni){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Fn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),u=a?`#${Vm}=${encodeURIComponent(a)}`:"";return`${Bm(t)}?${xn(c).slice(1)}${u}`}function Bm({config:t}){return t.emulator?Xs(t,zm):`https://${t.authDomain}/${Hm}`}/**
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
 */const es="webStorageSupport";class jm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xc,this._completeRedirectFn=pm,this._overrideRedirectResult=fm}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await No(e,n,r,ws(),s);return $m(e,o,ri())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await No(e,n,r,ws(),s);return Gg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Nm(e),r=new mm(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(es,{type:es},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[es];o!==void 0&&n(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ac()||ei()||Pr()}}const Wm=jm;var Mo="@firebase/auth",Lo="1.7.4";/**
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
 */class Km{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qm(t){kn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pc(t)},u=new Eg(r,s,i,a);return Pg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new rn("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new Km(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Mo,Lo,Gm(t)),Jt(Mo,Lo,"esm2017")}/**
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
 */const Jm=5*60,Ym=oc("authIdTokenMaxAge")||Jm;let Do=null;const Xm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ym)return;const s=n==null?void 0:n.token;Do!==s&&(Do=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qm(t=Vp()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ag(t,{popupRedirectResolver:Wm,persistence:[nm,jg,xc]}),r=oc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Xm(i.toString());$g(n,o,()=>o(n.currentUser)),Ug(n,c=>o(c))}}const s=Oh("auth");return s&&Og(n,`http://${s}`),n}function Zm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Zm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qm("Browser");const Mr=t=>(ma("data-v-dda4045b"),t=t(),_a(),t),e_={class:"user_info",style:{width:"600px"}},t_=Mr(()=>L("colgroup",null,[L("col",{style:{width:"200px"}}),L("col",{style:{width:"400px"}})],-1)),n_=Mr(()=>L("th",null,"email",-1)),r_=Mr(()=>L("th",null,"displayName",-1)),s_=Mr(()=>L("th",null,"photo",-1)),i_=["src"],o_=Je({__name:"UserDetail",props:{user:{}},setup(t){return(e,n)=>(ae(),fe("table",e_,[t_,L("tbody",null,[L("tr",null,[n_,L("td",null,ts(e.user.email),1)]),L("tr",null,[r_,L("td",null,ts(e.user.displayName),1)]),L("tr",null,[s_,L("td",null,[L("img",{class:"avatar",src:e.user.photoURL},null,8,i_)])])])]))}}),a_=$e(o_,[["__scopeId","data-v-dda4045b"]]),ii=()=>{const t=We("auth"),e=Zt(null);Fg(t,o=>{o?e.value=o:e.value=null});const n=Zt(!1),r=async()=>{n.value=!0;try{const o=new Ze,c=await am(t,o),u=await c.user.getIdToken();e.value=c.user,n.value=!1}catch(o){console.error("Authentication Error: ",o),n.value=!1}};return{user:Pe(()=>e.value),signInWithGoogle:r,signOut:async()=>{e.value?await Hg(t):alert("ログインしていません")},login_processing:n}},Lr=t=>(ma("data-v-48bc54ad"),t=t(),_a(),t),c_={class:"firebaseAuth"},l_=Lr(()=>L("h1",null,"Firebase Authentication",-1)),u_={key:0},f_={key:1},d_={key:0},h_={class:"already_authenticated"},p_=Lr(()=>L("span",{class:"message"},"you are authenticated.",-1)),g_={key:2,class:"login_required.not"},m_=Lr(()=>L("span",{class:"message not"},"You are not authenticated.",-1)),__=Lr(()=>L("br",null,null,-1)),v_=Je({__name:"FirebaseAuth",setup(t){const e=Zt(!1),{signInWithGoogle:n,user:r,login_processing:s}=ii();return yn(r,(i,o)=>{i?e.value=!0:e.value=!1}),(i,o)=>(ae(),fe("div",c_,[l_,Ee(s)?(ae(),fe("div",u_,"認証処理中(非同期)")):Oi("",!0),Ee(r)?(ae(),fe("div",f_,[e.value?(ae(),fe("div",d_,[L("div",h_,[p_,G(a_,{user:Ee(r)},null,8,["user"])])])):Oi("",!0)])):(ae(),fe("div",g_,[m_,__,L("button",{onClick:o[0]||(o[0]=(...c)=>Ee(n)&&Ee(n)(...c))},"Login with Google")]))]))}}),y_=$e(v_,[["__scopeId","data-v-48bc54ad"]]),b_={key:0},w_={class:"name"},I_={key:1},E_=Je({__name:"AnotherComponent",setup(t){const{user:e}=ii();return(n,r)=>Ee(e)?(ae(),fe("span",b_,[W(" your name is "),L("span",w_,ts(Ee(e).displayName),1),W(" .")])):(ae(),fe("span",I_,"your are not authenticated."))}}),S_=$e(E_,[["__scopeId","data-v-5ba0e741"]]),T_=["disabled"],C_=Je({__name:"SignOutButton",setup(t){const{signOut:e}=ii(),n=Zt(!1),r=async()=>{n.value||(n.value=!0,await e(),n.value=!1)};return(s,i)=>(ae(),fe("button",{disabled:n.value,onClick:r},"ログアウト",8,T_))}}),R_=$e(C_,[["__scopeId","data-v-39131ee2"]]),A_=Je({__name:"TestAuth",setup(t){return(e,n)=>(ae(),fe(Re,null,[G(y_),G(S_),G(R_)],64))}}),P_=md({history:Wf("/try_firebase"),routes:[{path:"/",name:"home",component:Ih},{path:"/auth",name:"auth",component:A_},{path:"/about",name:"about",component:()=>Id(()=>import("./AboutView-ChMxSx5I.js"),__vite__mapDeps([0,1]))}]});var O_="firebase",k_="10.12.2";/**
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
 */Jt(O_,k_,"app");const N_={apiKey:"AIzaSyDEYi9dASr59ueR2VRco7_VUW0Dm2C7cvw",authDomain:"first-app-a74c6.firebaseapp.com",projectId:"first-app-a74c6",storageBucket:"first-app-a74c6.appspot.com",messagingSenderId:"888622410081",appId:"1:888622410081:web:1986705fea73f08c5d3d20"},jc=fc(N_),M_=Qm(jc),zn=cf(yd);zn.use(hf());zn.use(P_);zn.provide("firebase",jc);zn.provide("auth",M_);zn.mount("#app");export{$e as _,L as a,fe as c,ae as o};
