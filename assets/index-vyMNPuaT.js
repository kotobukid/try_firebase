const __vite__fileDeps=["assets/AboutView-D0eQ8KWp.js","assets/AboutView-C6Dx7pxG.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Es(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const re={},Wt=[],Oe=()=>{},jc=()=>!1,mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ss=t=>t.startsWith("onUpdate:"),fe=Object.assign,Ts=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Wc=Object.prototype.hasOwnProperty,W=(t,e)=>Wc.call(t,e),F=Array.isArray,Kt=t=>_r(t)==="[object Map]",Lo=t=>_r(t)==="[object Set]",V=t=>typeof t=="function",de=t=>typeof t=="string",St=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Do=t=>(oe(t)||V(t))&&V(t.then)&&V(t.catch),xo=Object.prototype.toString,_r=t=>xo.call(t),Kc=t=>_r(t).slice(8,-1),Uo=t=>_r(t)==="[object Object]",Cs=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gc=/-(\w)/g,Qt=vr(t=>t.replace(Gc,(e,n)=>n?n.toUpperCase():"")),qc=/\B([A-Z])/g,on=vr(t=>t.replace(qc,"-$1").toLowerCase()),$o=vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lr=vr(t=>t?`on${$o(t)}`:""),It=(t,e)=>!Object.is(t,e),Dr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ci;const Ho=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Zc(r):Rs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||oe(t))return t}const Yc=/;(?![^(]*\))/g,Xc=/:([^]+)/,Qc=/\/\*[^]*?\*\//g;function Zc(t){const e={};return t.replace(Qc,"").split(Yc).forEach(n=>{if(n){const r=n.split(Xc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(de(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const el="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tl=Es(el);function zo(t){return!!t||t===""}const es=t=>de(t)?t:t==null?"":F(t)||oe(t)&&(t.toString===xo||!V(t.toString))?JSON.stringify(t,Vo,2):String(t),Vo=(t,e)=>e&&e.__v_isRef?Vo(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[xr(r,i)+" =>"]=s,n),{})}:Lo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xr(n))}:St(e)?xr(e):oe(e)&&!F(e)&&!Uo(e)?String(e):e,xr=(t,e="")=>{var n;return St(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Bo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function nl(t){return new Bo(t)}function rl(t,e=Me){e&&e.active&&e.effects.push(t)}function sl(){return Me}let Dt;class Ps{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,rl(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Tt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return st(),!0;if(il(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),st()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=vt,n=Dt;try{return vt=!0,Dt=this,this._runnings++,li(this),this.fn()}finally{ui(this),this._runnings--,Dt=n,vt=e}}stop(){this.active&&(li(this),ui(this),this.onStop&&this.onStop(),this.active=!1)}}function il(t){return t.value}function li(t){t._trackId++,t._depsLength=0}function ui(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)jo(t.deps[e],t);t.deps.length=t._depsLength}}function jo(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let vt=!0,ts=0;const Wo=[];function Tt(){Wo.push(vt),vt=!1}function st(){const t=Wo.pop();vt=t===void 0?!0:t}function Os(){ts++}function ks(){for(ts--;!ts&&ns.length;)ns.shift()()}function Ko(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&jo(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ns=[];function Go(t,e,n){Os();for(const r of t.keys()){let s;if(!t.computed&&r.computed&&r._runnings>0&&(s??(s=t.get(r)===r._trackId))){r._dirtyLevel=2;continue}r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&ns.push(r.scheduler)))}ks()}const qo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},rs=new WeakMap,xt=Symbol(""),ss=Symbol("");function Se(t,e,n){if(vt&&Dt){let r=rs.get(t);r||rs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qo(()=>r.delete(n))),Ko(Dt,s)}}function rt(t,e,n,r,s,i){const o=rs.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((u,d)=>{(d==="length"||!St(d)&&d>=a)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Cs(n)&&c.push(o.get("length")):(c.push(o.get(xt)),Kt(t)&&c.push(o.get(ss)));break;case"delete":F(t)||(c.push(o.get(xt)),Kt(t)&&c.push(o.get(ss)));break;case"set":Kt(t)&&c.push(o.get(xt));break}Os();for(const a of c)a&&Go(a,5);ks()}const ol=Es("__proto__,__v_isRef,__isVue"),Jo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(St)),fi=al();function al(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tt(),Os();const r=J(this)[e].apply(this,n);return ks(),st(),r}}),t}function cl(t){St(t)||(t=String(t));const e=J(this);return Se(e,"has",t),e.hasOwnProperty(t)}class Yo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wl:ea:i?Zo:Qo).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&W(fi,n))return Reflect.get(fi,n,r);if(n==="hasOwnProperty")return cl}const c=Reflect.get(e,n,r);return(St(n)?Jo.has(n):ol(n))||(s||Se(e,"get",n),i)?c:Te(c)?o&&Cs(n)?c:c.value:oe(c)?s?na(c):br(c):c}}class Xo extends Yo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Sn(i);if(!sr(r)&&!Sn(r)&&(i=J(i),r=J(r)),!F(e)&&Te(i)&&!Te(r))return a?!1:(i.value=r,!0)}const o=F(e)&&Cs(n)?Number(n)<e.length:W(e,n),c=Reflect.set(e,n,r,s);return e===J(s)&&(o?It(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),c}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!St(n)||!Jo.has(n))&&Se(e,"has",n),r}ownKeys(e){return Se(e,"iterate",F(e)?"length":xt),Reflect.ownKeys(e)}}class ll extends Yo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ul=new Xo,fl=new ll,dl=new Xo(!0);const Ns=t=>t,yr=t=>Reflect.getPrototypeOf(t);function Bn(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(It(e,i)&&Se(s,"get",e),Se(s,"get",i));const{has:o}=yr(s),c=r?Ns:n?Ds:Tn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function jn(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(It(t,s)&&Se(r,"has",t),Se(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Se(J(t),"iterate",xt),Reflect.get(t,"size",t)}function di(t){t=J(t);const e=J(this);return yr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function hi(t,e){e=J(e);const n=J(this),{has:r,get:s}=yr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?It(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function pi(t){const e=J(this),{has:n,get:r}=yr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function gi(){const t=J(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=J(o),a=e?Ns:t?Ds:Tn;return!t&&Se(c,"iterate",xt),o.forEach((u,d)=>r.call(s,a(u),a(d),i))}}function Gn(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=Kt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),d=n?Ns:e?Ds:Tn;return!e&&Se(i,"iterate",a?ss:xt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:c?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hl(){const t={get(i){return Bn(this,i)},get size(){return Wn(this)},has:jn,add:di,set:hi,delete:pi,clear:gi,forEach:Kn(!1,!1)},e={get(i){return Bn(this,i,!1,!0)},get size(){return Wn(this)},has:jn,add:di,set:hi,delete:pi,clear:gi,forEach:Kn(!1,!0)},n={get(i){return Bn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Kn(!0,!1)},r={get(i){return Bn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return jn.call(this,i,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[t,n,e,r]}const[pl,gl,ml,_l]=hl();function Ms(t,e){const n=e?t?_l:ml:t?gl:pl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const vl={get:Ms(!1,!1)},yl={get:Ms(!1,!0)},bl={get:Ms(!0,!1)};const Qo=new WeakMap,Zo=new WeakMap,ea=new WeakMap,wl=new WeakMap;function Il(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(t){return t.__v_skip||!Object.isExtensible(t)?0:Il(Kc(t))}function br(t){return Sn(t)?t:Ls(t,!1,ul,vl,Qo)}function ta(t){return Ls(t,!1,dl,yl,Zo)}function na(t){return Ls(t,!0,fl,bl,ea)}function Ls(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=El(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function gn(t){return Sn(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function sr(t){return!!(t&&t.__v_isShallow)}function ra(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function sa(t){return Object.isExtensible(t)&&Fo(t,"__v_skip",!0),t}const Tn=t=>oe(t)?br(t):t,Ds=t=>oe(t)?na(t):t;class ia{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ps(()=>e(this._value),()=>Yn(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this),n=e.effect._dirtyLevel;return(!e._cacheable||e.effect.dirty)&&It(e._value,e._value=e.effect.run())&&n!==3&&Yn(e,5),oa(e),e.effect._dirtyLevel>=2&&Yn(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Sl(t,e,n=!1){let r,s;const i=V(t);return i?(r=t,s=Oe):(r=t.get,s=t.set),new ia(r,s,i||!s,n)}function oa(t){var e;vt&&Dt&&(t=J(t),Ko(Dt,(e=t.dep)!=null?e:t.dep=qo(()=>t.dep=void 0,t instanceof ia?t:void 0)))}function Yn(t,e=5,n,r){t=J(t);const s=t.dep;s&&Go(s,e)}function Te(t){return!!(t&&t.__v_isRef===!0)}function Zt(t){return aa(t,!1)}function Tl(t){return aa(t,!0)}function aa(t,e){return Te(t)?t:new Cl(t,e)}class Cl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Tn(e)}get value(){return oa(this),this._value}set value(e){const n=this.__v_isShallow||sr(e)||Sn(e);e=n?e:J(e),It(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Tn(e),Yn(this,5))}}function Ie(t){return Te(t)?t.value:t}const Rl={get:(t,e,n)=>Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ca(t){return gn(t)?t:new Proxy(t,Rl)}/**
* @vue/runtime-core v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yt(t,e,n,r){try{return r?t(...r):t()}catch(s){wr(s,e,n)}}function De(t,e,n,r){if(V(t)){const s=yt(t,e,n,r);return s&&Do(s)&&s.catch(i=>{wr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}}function wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Tt(),yt(a,null,10,[t,o,c]),st();return}}Al(t,n,s,r)}function Al(t,e,n,r=!0){console.error(t)}let Cn=!1,is=!1;const ge=[];let je=0;const Gt=[];let dt=null,Nt=0;const la=Promise.resolve();let xs=null;function ua(t){const e=xs||la;return t?e.then(this?t.bind(this):t):e}function Pl(t){let e=je+1,n=ge.length;for(;e<n;){const r=e+n>>>1,s=ge[r],i=Rn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Us(t){(!ge.length||!ge.includes(t,Cn&&t.allowRecurse?je+1:je))&&(t.id==null?ge.push(t):ge.splice(Pl(t.id),0,t),fa())}function fa(){!Cn&&!is&&(is=!0,xs=la.then(ha))}function Ol(t){const e=ge.indexOf(t);e>je&&ge.splice(e,1)}function kl(t){F(t)?Gt.push(...t):(!dt||!dt.includes(t,t.allowRecurse?Nt+1:Nt))&&Gt.push(t),fa()}function mi(t,e,n=Cn?je+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ge.splice(n,1),n--,r()}}}function da(t){if(Gt.length){const e=[...new Set(Gt)].sort((n,r)=>Rn(n)-Rn(r));if(Gt.length=0,dt){dt.push(...e);return}for(dt=e,Nt=0;Nt<dt.length;Nt++){const n=dt[Nt];n.active!==!1&&n()}dt=null,Nt=0}}const Rn=t=>t.id==null?1/0:t.id,Nl=(t,e)=>{const n=Rn(t)-Rn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ha(t){is=!1,Cn=!0,ge.sort(Nl);try{for(je=0;je<ge.length;je++){const e=ge[je];e&&e.active!==!1&&yt(e,null,14)}}finally{je=0,ge.length=0,da(),Cn=!1,xs=null,(ge.length||Gt.length)&&ha()}}function Ml(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[d]||re;p&&(s=n.map(m=>de(m)?m.trim():m)),h&&(s=n.map(Jc))}let c,a=r[c=Lr(e)]||r[c=Lr(Qt(e))];!a&&i&&(a=r[c=Lr(on(e))]),a&&De(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,De(u,t,6,s)}}function pa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!V(t)){const a=u=>{const d=pa(u,e,!0);d&&(c=!0,fe(o,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(oe(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):fe(o,i),oe(t)&&r.set(t,o),o)}function Ir(t,e){return!t||!mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,on(e))||W(t,e))}let Ee=null,Er=null;function ir(t){const e=Ee;return Ee=t,Er=t&&t.type.__scopeId||null,e}function ga(t){Er=t}function ma(){Er=null}function pe(t,e=Ee,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ri(-1);const i=ir(e);let o;try{o=t(...s)}finally{ir(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:d,props:h,data:p,setupState:m,ctx:P,inheritAttrs:A}=t,z=ir(t);let U,L;try{if(n.shapeFlag&4){const j=s||r,se=j;U=Be(u.call(se,j,d,h,m,p,P)),L=c}else{const j=e;U=Be(j.length>1?j(h,{attrs:c,slots:o,emit:a}):j(h,null)),L=e.props?c:Ll(c)}}catch(j){bn.length=0,wr(j,t,1),U=Q(Et)}let O=U;if(L&&A!==!1){const j=Object.keys(L),{shapeFlag:se}=O;j.length&&se&7&&(i&&j.some(Ss)&&(L=Dl(L,i)),O=en(O,L,!1,!0))}return n.dirs&&(O=en(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,ir(z),U}const Ll=t=>{let e;for(const n in t)(n==="class"||n==="style"||mr(n))&&((e||(e={}))[n]=t[n]);return e},Dl=(t,e)=>{const n={};for(const r in t)(!Ss(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?_i(r,o,u):!!o;if(a&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==r[p]&&!Ir(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?_i(r,o,u):!0:!!o;return!1}function _i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function Ul({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const $l=Symbol.for("v-ndc"),Fl=t=>t.__isSuspense;function Hl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):kl(t)}function Sr(t,e,n=ve,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tt();const c=Ln(n),a=De(e,n,t,o);return c(),st(),a});return r?s.unshift(i):s.push(i),i}}const ot=t=>(e,n=ve)=>{(!Cr||t==="sp")&&Sr(t,(...r)=>e(...r),n)},zl=ot("bm"),Vl=ot("m"),Bl=ot("bu"),jl=ot("u"),Wl=ot("bum"),_a=ot("um"),Kl=ot("sp"),Gl=ot("rtg"),ql=ot("rtc");function Jl(t,e=ve){Sr("ec",t,e)}function Pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Tt(),De(a,n,8,[t.el,c,t,e]),st())}}/*! #__NO_SIDE_EFFECTS__ */function qe(t,e){return V(t)?fe({name:t.name},e,{setup:t}):t}const mn=t=>!!t.type.__asyncLoader;function $r(t,e,n={},r,s){if(Ee.isCE||Ee.parent&&mn(Ee.parent)&&Ee.parent.isCE)return e!=="default"&&(n.name=e),Q("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),ae();const o=i&&va(i(n)),c=Hs(Re,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),c}function va(t){return t.some(e=>ar(e)?!(e.type===Et||e.type===Re&&!va(e.children)):!0)?t:null}const os=t=>t?$a(t)?Vs(t):os(t.parent):null,_n=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>os(t.parent),$root:t=>os(t.root),$emit:t=>t.emit,$options:t=>$s(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Us(t.update)}),$nextTick:t=>t.n||(t.n=ua.bind(t.proxy)),$watch:t=>gu.bind(t)}),Fr=(t,e)=>t!==re&&!t.__isScriptSetup&&W(t,e),Yl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fr(r,e))return o[e]=1,r[e];if(s!==re&&W(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&W(u,e))return o[e]=3,i[e];if(n!==re&&W(n,e))return o[e]=4,n[e];as&&(o[e]=0)}}const d=_n[e];let h,p;if(d)return e==="$attrs"&&Se(t.attrs,"get",""),d(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==re&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fr(s,e)?(s[e]=n,!0):r!==re&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==re&&W(t,o)||Fr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(_n,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let as=!0;function Xl(t){const e=$s(t),n=t.proxy,r=t.ctx;as=!1,e.beforeCreate&&yi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:P,activated:A,deactivated:z,beforeDestroy:U,beforeUnmount:L,destroyed:O,unmounted:j,render:se,renderTracked:$,renderTriggered:te,errorCaptured:ye,serverPrefetch:ke,expose:Ae,inheritAttrs:at,components:At,directives:Fe,filters:cn}=e;if(u&&Ql(u,r,null),o)for(const Z in o){const G=o[Z];V(G)&&(r[Z]=G.bind(n))}if(s){const Z=s.call(n,n);oe(Z)&&(t.data=br(Z))}if(as=!0,i)for(const Z in i){const G=i[Z],Je=V(G)?G.bind(n,n):V(G.get)?G.get.bind(n,n):Oe,ct=!V(G)&&V(G.set)?G.set.bind(n):Oe,He=Pe({get:Je,set:ct});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>He.value,set:be=>He.value=be})}if(c)for(const Z in c)ya(c[Z],r,n,Z);if(a){const Z=V(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(G=>{Xn(G,Z[G])})}d&&yi(d,t,"c");function ce(Z,G){F(G)?G.forEach(Je=>Z(Je.bind(n))):G&&Z(G.bind(n))}if(ce(zl,h),ce(Vl,p),ce(Bl,m),ce(jl,P),ce(mu,A),ce(_u,z),ce(Jl,ye),ce(ql,$),ce(Gl,te),ce(Wl,L),ce(_a,j),ce(Kl,ke),F(Ae))if(Ae.length){const Z=t.exposed||(t.exposed={});Ae.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:Je=>n[G]=Je})})}else t.exposed||(t.exposed={});se&&t.render===Oe&&(t.render=se),at!=null&&(t.inheritAttrs=at),At&&(t.components=At),Fe&&(t.directives=Fe)}function Ql(t,e,n=Oe){F(t)&&(t=cs(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),Te(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yi(t,e,n){De(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ya(t,e,n,r){const s=r.includes(".")?Na(n,r):()=>n[r];if(de(t)){const i=e[t];V(i)&&yn(s,i)}else if(V(t))yn(s,t.bind(n));else if(oe(t))if(F(t))t.forEach(i=>ya(i,e,n,r));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&yn(s,i,t)}}function $s(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>or(a,u,o,!0)),or(a,e,o)),oe(e)&&i.set(e,a),a}function or(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&or(t,i,n,!0),s&&s.forEach(o=>or(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Zl[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Zl={data:bi,props:wi,emits:wi,methods:hn,computed:hn,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:hn,directives:hn,watch:tu,provide:bi,inject:eu};function bi(t,e){return e?t?function(){return fe(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function eu(t,e){return hn(cs(t),cs(e))}function cs(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function hn(t,e){return t?fe(Object.create(null),t,e):e}function wi(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:fe(Object.create(null),vi(t),vi(e??{})):e}function tu(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function ba(){return{app:null,config:{isNativeTag:jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nu=0;function ru(t,e){return function(r,s=null){V(r)||(r=fe({},r)),s!=null&&!oe(s)&&(s=null);const i=ba(),o=new WeakSet;let c=!1;const a=i.app={_uid:nu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nu,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(a,...d)):V(u)&&(o.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,h){if(!c){const p=Q(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(p,u):t(p,u,h),c=!0,a._container=u,u.__vue_app__=a,Vs(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a},runWithContext(u){const d=vn;vn=a;try{return u()}finally{vn=d}}};return a}}let vn=null;function Xn(t,e){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=ve||Ee;if(r||vn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:vn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&V(e)?e.call(r&&r.proxy):e}}const wa={},Ia=()=>Object.create(wa),Ea=t=>Object.getPrototypeOf(t)===wa;function su(t,e,n,r=!1){const s={},i=Ia();t.propsDefaults=Object.create(null),Sa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ta(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=J(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Ir(t.emitsOptions,p))continue;const m=e[p];if(a)if(W(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const P=Qt(p);s[P]=ls(a,c,P,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Sa(t,e,s,i)&&(u=!0);let d;for(const h in c)(!e||!W(e,h)&&((d=on(h))===h||!W(e,d)))&&(a?n&&(n[h]!==void 0||n[d]!==void 0)&&(s[h]=ls(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h))&&(delete i[h],u=!0)}u&&rt(t.attrs,"set","")}function Sa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(pn(a))continue;const u=e[a];let d;s&&W(s,d=Qt(a))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:Ir(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=J(n),u=c||re;for(let d=0;d<i.length;d++){const h=i[d];n[h]=ls(s,a,h,u[h],t,!W(u,h))}}return o}function ls(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&V(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Ln(s);r=u[n]=a.call(null,e),d()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function Ta(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!V(t)){const d=h=>{a=!0;const[p,m]=Ta(h,e,!0);fe(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return oe(t)&&r.set(t,Wt),Wt;if(F(i))for(let d=0;d<i.length;d++){const h=Qt(i[d]);Ii(h)&&(o[h]=re)}else if(i)for(const d in i){const h=Qt(d);if(Ii(h)){const p=i[d],m=o[h]=F(p)||V(p)?{type:p}:fe({},p);if(m){const P=Ti(Boolean,m.type),A=Ti(String,m.type);m[0]=P>-1,m[1]=A<0||P<A,(P>-1||W(m,"default"))&&c.push(h)}}}const u=[o,c];return oe(t)&&r.set(t,u),u}function Ii(t){return t[0]!=="$"&&!pn(t)}function Ei(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Si(t,e){return Ei(t)===Ei(e)}function Ti(t,e){return F(e)?e.findIndex(n=>Si(n,t)):V(e)&&Si(e,t)?0:-1}const Ca=t=>t[0]==="_"||t==="$stable",Fs=t=>F(t)?t.map(Be):[Be(t)],ou=(t,e,n)=>{if(e._n)return e;const r=pe((...s)=>Fs(e(...s)),n);return r._c=!1,r},Ra=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ca(s))continue;const i=t[s];if(V(i))e[s]=ou(s,i,r);else if(i!=null){const o=Fs(i);e[s]=()=>o}}},Aa=(t,e)=>{const n=Fs(e);t.slots.default=()=>n},au=(t,e)=>{const n=t.slots=Ia();if(t.vnode.shapeFlag&32){const r=e._;r?(fe(n,e),Fo(n,"_",r,!0)):Ra(e,n)}else e&&Aa(t,e)},cu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ra(e,s)),o=e}else e&&(Aa(t,e),o={default:1});if(i)for(const c in s)!Ca(c)&&o[c]==null&&delete s[c]};function us(t,e,n,r,s=!1){if(F(t)){t.forEach((p,m)=>us(p,e&&(F(e)?e[m]:e),n,r,s));return}if(mn(r)&&!s)return;const i=r.shapeFlag&4?Vs(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,d=c.refs===re?c.refs={}:c.refs,h=c.setupState;if(u!=null&&u!==a&&(de(u)?(d[u]=null,W(h,u)&&(h[u]=null)):Te(u)&&(u.value=null)),V(a))yt(a,c,12,[o,d]);else{const p=de(a),m=Te(a);if(p||m){const P=()=>{if(t.f){const A=p?W(h,a)?h[a]:d[a]:a.value;s?F(A)&&Ts(A,i):F(A)?A.includes(i)||A.push(i):p?(d[a]=[i],W(h,a)&&(h[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else p?(d[a]=o,W(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,we(P,n)):P()}}}const we=Hl;function lu(t){return uu(t)}function uu(t,e){const n=Ho();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=Oe,insertStaticContent:P}=t,A=(l,f,g,y=null,_=null,I=null,S=void 0,w=null,E=!!f.dynamicChildren)=>{if(l===f)return;l&&!un(l,f)&&(y=v(l),be(l,_,I,!0),l=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:b,ref:R,shapeFlag:M}=f;switch(b){case Tr:z(l,f,g,y);break;case Et:U(l,f,g,y);break;case zr:l==null&&L(f,g,y,S);break;case Re:At(l,f,g,y,_,I,S,w,E);break;default:M&1?se(l,f,g,y,_,I,S,w,E):M&6?Fe(l,f,g,y,_,I,S,w,E):(M&64||M&128)&&b.process(l,f,g,y,_,I,S,w,E,k)}R!=null&&_&&us(R,l&&l.ref,I,f||l,!f)},z=(l,f,g,y)=>{if(l==null)r(f.el=c(f.children),g,y);else{const _=f.el=l.el;f.children!==l.children&&u(_,f.children)}},U=(l,f,g,y)=>{l==null?r(f.el=a(f.children||""),g,y):f.el=l.el},L=(l,f,g,y)=>{[l.el,l.anchor]=P(l.children,f,g,y,l.el,l.anchor)},O=({el:l,anchor:f},g,y)=>{let _;for(;l&&l!==f;)_=p(l),r(l,g,y),l=_;r(f,g,y)},j=({el:l,anchor:f})=>{let g;for(;l&&l!==f;)g=p(l),s(l),l=g;s(f)},se=(l,f,g,y,_,I,S,w,E)=>{f.type==="svg"?S="svg":f.type==="math"&&(S="mathml"),l==null?$(f,g,y,_,I,S,w,E):ke(l,f,_,I,S,w,E)},$=(l,f,g,y,_,I,S,w)=>{let E,b;const{props:R,shapeFlag:M,transition:N,dirs:H}=l;if(E=l.el=o(l.type,I,R&&R.is,R),M&8?d(E,l.children):M&16&&ye(l.children,E,null,y,_,Hr(l,I),S,w),H&&Pt(l,null,y,"created"),te(E,l,l.scopeId,S,y),R){for(const ne in R)ne!=="value"&&!pn(ne)&&i(E,ne,null,R[ne],I,l.children,y,_,he);"value"in R&&i(E,"value",null,R.value,I),(b=R.onVnodeBeforeMount)&&Ve(b,y,l)}H&&Pt(l,null,y,"beforeMount");const B=fu(_,N);B&&N.beforeEnter(E),r(E,f,g),((b=R&&R.onVnodeMounted)||B||H)&&we(()=>{b&&Ve(b,y,l),B&&N.enter(E),H&&Pt(l,null,y,"mounted")},_)},te=(l,f,g,y,_)=>{if(g&&m(l,g),y)for(let I=0;I<y.length;I++)m(l,y[I]);if(_){let I=_.subTree;if(f===I){const S=_.vnode;te(l,S,S.scopeId,S.slotScopeIds,_.parent)}}},ye=(l,f,g,y,_,I,S,w,E=0)=>{for(let b=E;b<l.length;b++){const R=l[b]=w?ht(l[b]):Be(l[b]);A(null,R,f,g,y,_,I,S,w)}},ke=(l,f,g,y,_,I,S)=>{const w=f.el=l.el;let{patchFlag:E,dynamicChildren:b,dirs:R}=f;E|=l.patchFlag&16;const M=l.props||re,N=f.props||re;let H;if(g&&Ot(g,!1),(H=N.onVnodeBeforeUpdate)&&Ve(H,g,f,l),R&&Pt(f,l,g,"beforeUpdate"),g&&Ot(g,!0),b?Ae(l.dynamicChildren,b,w,g,y,Hr(f,_),I):S||G(l,f,w,null,g,y,Hr(f,_),I,!1),E>0){if(E&16)at(w,f,M,N,g,y,_);else if(E&2&&M.class!==N.class&&i(w,"class",null,N.class,_),E&4&&i(w,"style",M.style,N.style,_),E&8){const B=f.dynamicProps;for(let ne=0;ne<B.length;ne++){const q=B[ne],le=M[q],Ne=N[q];(Ne!==le||q==="value")&&i(w,q,le,Ne,_,l.children,g,y,he)}}E&1&&l.children!==f.children&&d(w,f.children)}else!S&&b==null&&at(w,f,M,N,g,y,_);((H=N.onVnodeUpdated)||R)&&we(()=>{H&&Ve(H,g,f,l),R&&Pt(f,l,g,"updated")},y)},Ae=(l,f,g,y,_,I,S)=>{for(let w=0;w<f.length;w++){const E=l[w],b=f[w],R=E.el&&(E.type===Re||!un(E,b)||E.shapeFlag&70)?h(E.el):g;A(E,b,R,null,y,_,I,S,!0)}},at=(l,f,g,y,_,I,S)=>{if(g!==y){if(g!==re)for(const w in g)!pn(w)&&!(w in y)&&i(l,w,g[w],null,S,f.children,_,I,he);for(const w in y){if(pn(w))continue;const E=y[w],b=g[w];E!==b&&w!=="value"&&i(l,w,b,E,S,f.children,_,I,he)}"value"in y&&i(l,"value",g.value,y.value,S)}},At=(l,f,g,y,_,I,S,w,E)=>{const b=f.el=l?l.el:c(""),R=f.anchor=l?l.anchor:c("");let{patchFlag:M,dynamicChildren:N,slotScopeIds:H}=f;H&&(w=w?w.concat(H):H),l==null?(r(b,g,y),r(R,g,y),ye(f.children||[],g,R,_,I,S,w,E)):M>0&&M&64&&N&&l.dynamicChildren?(Ae(l.dynamicChildren,N,g,_,I,S,w),(f.key!=null||_&&f===_.subTree)&&Pa(l,f,!0)):G(l,f,g,R,_,I,S,w,E)},Fe=(l,f,g,y,_,I,S,w,E)=>{f.slotScopeIds=w,l==null?f.shapeFlag&512?_.ctx.activate(f,g,y,S,E):cn(f,g,y,_,I,S,E):Ht(l,f,E)},cn=(l,f,g,y,_,I,S)=>{const w=l.component=Cu(l,y,_);if(Ma(l)&&(w.ctx.renderer=k),Ru(w),w.asyncDep){if(_&&_.registerDep(w,ce,S),!l.el){const E=w.subTree=Q(Et);U(null,E,f,g)}}else ce(w,l,f,g,_,I,S)},Ht=(l,f,g)=>{const y=f.component=l.component;if(xl(l,f,g))if(y.asyncDep&&!y.asyncResolved){Z(y,f,g);return}else y.next=f,Ol(y.update),y.effect.dirty=!0,y.update();else f.el=l.el,y.vnode=f},ce=(l,f,g,y,_,I,S)=>{const w=()=>{if(l.isMounted){let{next:R,bu:M,u:N,parent:H,vnode:B}=l;{const Bt=Oa(l);if(Bt){R&&(R.el=B.el,Z(l,R,S)),Bt.asyncDep.then(()=>{l.isUnmounted||w()});return}}let ne=R,q;Ot(l,!1),R?(R.el=B.el,Z(l,R,S)):R=B,M&&Dr(M),(q=R.props&&R.props.onVnodeBeforeUpdate)&&Ve(q,H,R,B),Ot(l,!0);const le=Ur(l),Ne=l.subTree;l.subTree=le,A(Ne,le,h(Ne.el),v(Ne),l,_,I),R.el=le.el,ne===null&&Ul(l,le.el),N&&we(N,_),(q=R.props&&R.props.onVnodeUpdated)&&we(()=>Ve(q,H,R,B),_)}else{let R;const{el:M,props:N}=f,{bm:H,m:B,parent:ne}=l,q=mn(f);if(Ot(l,!1),H&&Dr(H),!q&&(R=N&&N.onVnodeBeforeMount)&&Ve(R,ne,f),Ot(l,!0),M&&ie){const le=()=>{l.subTree=Ur(l),ie(M,l.subTree,l,_,null)};q?f.type.__asyncLoader().then(()=>!l.isUnmounted&&le()):le()}else{const le=l.subTree=Ur(l);A(null,le,g,y,l,_,I),f.el=le.el}if(B&&we(B,_),!q&&(R=N&&N.onVnodeMounted)){const le=f;we(()=>Ve(R,ne,le),_)}(f.shapeFlag&256||ne&&mn(ne.vnode)&&ne.vnode.shapeFlag&256)&&l.a&&we(l.a,_),l.isMounted=!0,f=g=y=null}},E=l.effect=new Ps(w,Oe,()=>Us(b),l.scope),b=l.update=()=>{E.dirty&&E.run()};b.id=l.uid,Ot(l,!0),b()},Z=(l,f,g)=>{f.component=l;const y=l.vnode.props;l.vnode=f,l.next=null,iu(l,f.props,y,g),cu(l,f.children,g),Tt(),mi(l),st()},G=(l,f,g,y,_,I,S,w,E=!1)=>{const b=l&&l.children,R=l?l.shapeFlag:0,M=f.children,{patchFlag:N,shapeFlag:H}=f;if(N>0){if(N&128){ct(b,M,g,y,_,I,S,w,E);return}else if(N&256){Je(b,M,g,y,_,I,S,w,E);return}}H&8?(R&16&&he(b,_,I),M!==b&&d(g,M)):R&16?H&16?ct(b,M,g,y,_,I,S,w,E):he(b,_,I,!0):(R&8&&d(g,""),H&16&&ye(M,g,y,_,I,S,w,E))},Je=(l,f,g,y,_,I,S,w,E)=>{l=l||Wt,f=f||Wt;const b=l.length,R=f.length,M=Math.min(b,R);let N;for(N=0;N<M;N++){const H=f[N]=E?ht(f[N]):Be(f[N]);A(l[N],H,g,null,_,I,S,w,E)}b>R?he(l,_,I,!0,!1,M):ye(f,g,y,_,I,S,w,E,M)},ct=(l,f,g,y,_,I,S,w,E)=>{let b=0;const R=f.length;let M=l.length-1,N=R-1;for(;b<=M&&b<=N;){const H=l[b],B=f[b]=E?ht(f[b]):Be(f[b]);if(un(H,B))A(H,B,g,null,_,I,S,w,E);else break;b++}for(;b<=M&&b<=N;){const H=l[M],B=f[N]=E?ht(f[N]):Be(f[N]);if(un(H,B))A(H,B,g,null,_,I,S,w,E);else break;M--,N--}if(b>M){if(b<=N){const H=N+1,B=H<R?f[H].el:y;for(;b<=N;)A(null,f[b]=E?ht(f[b]):Be(f[b]),g,B,_,I,S,w,E),b++}}else if(b>N)for(;b<=M;)be(l[b],_,I,!0),b++;else{const H=b,B=b,ne=new Map;for(b=B;b<=N;b++){const Ce=f[b]=E?ht(f[b]):Be(f[b]);Ce.key!=null&&ne.set(Ce.key,b)}let q,le=0;const Ne=N-B+1;let Bt=!1,ii=0;const ln=new Array(Ne);for(b=0;b<Ne;b++)ln[b]=0;for(b=H;b<=M;b++){const Ce=l[b];if(le>=Ne){be(Ce,_,I,!0);continue}let ze;if(Ce.key!=null)ze=ne.get(Ce.key);else for(q=B;q<=N;q++)if(ln[q-B]===0&&un(Ce,f[q])){ze=q;break}ze===void 0?be(Ce,_,I,!0):(ln[ze-B]=b+1,ze>=ii?ii=ze:Bt=!0,A(Ce,f[ze],g,null,_,I,S,w,E),le++)}const oi=Bt?du(ln):Wt;for(q=oi.length-1,b=Ne-1;b>=0;b--){const Ce=B+b,ze=f[Ce],ai=Ce+1<R?f[Ce+1].el:y;ln[b]===0?A(null,ze,g,ai,_,I,S,w,E):Bt&&(q<0||b!==oi[q]?He(ze,g,ai,2):q--)}}},He=(l,f,g,y,_=null)=>{const{el:I,type:S,transition:w,children:E,shapeFlag:b}=l;if(b&6){He(l.component.subTree,f,g,y);return}if(b&128){l.suspense.move(f,g,y);return}if(b&64){S.move(l,f,g,k);return}if(S===Re){r(I,f,g);for(let M=0;M<E.length;M++)He(E[M],f,g,y);r(l.anchor,f,g);return}if(S===zr){O(l,f,g);return}if(y!==2&&b&1&&w)if(y===0)w.beforeEnter(I),r(I,f,g),we(()=>w.enter(I),_);else{const{leave:M,delayLeave:N,afterLeave:H}=w,B=()=>r(I,f,g),ne=()=>{M(I,()=>{B(),H&&H()})};N?N(I,B,ne):ne()}else r(I,f,g)},be=(l,f,g,y=!1,_=!1)=>{const{type:I,props:S,ref:w,children:E,dynamicChildren:b,shapeFlag:R,patchFlag:M,dirs:N,memoIndex:H}=l;if(M===-2&&(_=!1),w!=null&&us(w,null,g,l,!0),H!=null&&(f.renderCache[H]=void 0),R&256){f.ctx.deactivate(l);return}const B=R&1&&N,ne=!mn(l);let q;if(ne&&(q=S&&S.onVnodeBeforeUnmount)&&Ve(q,f,l),R&6)Vn(l.component,g,y);else{if(R&128){l.suspense.unmount(g,y);return}B&&Pt(l,null,f,"beforeUnmount"),R&64?l.type.remove(l,f,g,k,y):b&&(I!==Re||M>0&&M&64)?he(b,f,g,!1,!0):(I===Re&&M&384||!_&&R&16)&&he(E,f,g),y&&zt(l)}(ne&&(q=S&&S.onVnodeUnmounted)||B)&&we(()=>{q&&Ve(q,f,l),B&&Pt(l,null,f,"unmounted")},g)},zt=l=>{const{type:f,el:g,anchor:y,transition:_}=l;if(f===Re){Vt(g,y);return}if(f===zr){j(l);return}const I=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(l.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:w}=_,E=()=>S(g,I);w?w(l.el,I,E):E()}else I()},Vt=(l,f)=>{let g;for(;l!==f;)g=p(l),s(l),l=g;s(f)},Vn=(l,f,g)=>{const{bum:y,scope:_,update:I,subTree:S,um:w,m:E,a:b}=l;Ci(E),Ci(b),y&&Dr(y),_.stop(),I&&(I.active=!1,be(S,l,f,g)),w&&we(w,f),we(()=>{l.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},he=(l,f,g,y=!1,_=!1,I=0)=>{for(let S=I;S<l.length;S++)be(l[S],f,g,y,_)},v=l=>l.shapeFlag&6?v(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el);let C=!1;const T=(l,f,g)=>{l==null?f._vnode&&be(f._vnode,null,null,!0):A(f._vnode||null,l,f,null,null,null,g),C||(C=!0,mi(),da(),C=!1),f._vnode=l},k={p:A,um:be,m:He,r:zt,mt:cn,mc:ye,pc:G,pbc:Ae,n:v,o:t};let Y,ie;return{render:T,hydrate:Y,createApp:ru(T,Y)}}function Hr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ot({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ht(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Pa(o,c)),c.type===Tr&&(c.el=o.el)}}function du(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Oa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Oa(e)}function Ci(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const hu=Symbol.for("v-scx"),pu=()=>We(hu),qn={};function yn(t,e,n){return ka(t,e,n)}function ka(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=re){if(e&&i){const $=e;e=(...te)=>{$(...te),se()}}const a=ve,u=$=>r===!0?$:Mt($,r===!1?1:void 0);let d,h=!1,p=!1;if(Te(t)?(d=()=>t.value,h=sr(t)):gn(t)?(d=()=>u(t),h=!0):F(t)?(p=!0,h=t.some($=>gn($)||sr($)),d=()=>t.map($=>{if(Te($))return $.value;if(gn($))return u($);if(V($))return yt($,a,2)})):V(t)?e?d=()=>yt(t,a,2):d=()=>(m&&m(),De(t,a,3,[P])):d=Oe,e&&r){const $=d;d=()=>Mt($())}let m,P=$=>{m=O.onStop=()=>{yt($,a,4),m=O.onStop=void 0}},A;if(Cr)if(P=Oe,e?n&&De(e,a,3,[d(),p?[]:void 0,P]):d(),s==="sync"){const $=pu();A=$.__watcherHandles||($.__watcherHandles=[])}else return Oe;let z=p?new Array(t.length).fill(qn):qn;const U=()=>{if(!(!O.active||!O.dirty))if(e){const $=O.run();(r||h||(p?$.some((te,ye)=>It(te,z[ye])):It($,z)))&&(m&&m(),De(e,a,3,[$,z===qn?void 0:p&&z[0]===qn?[]:z,P]),z=$)}else O.run()};U.allowRecurse=!!e;let L;s==="sync"?L=U:s==="post"?L=()=>we(U,a&&a.suspense):(U.pre=!0,a&&(U.id=a.uid),L=()=>Us(U));const O=new Ps(d,Oe,L),j=sl(),se=()=>{O.stop(),j&&Ts(j.effects,O)};return e?n?U():z=O.run():s==="post"?we(O.run.bind(O),a&&a.suspense):O.run(),A&&A.push(se),se}function gu(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Na(r,t):()=>r[t]:t.bind(r,r);let i;V(e)?i=e:(i=e.handler,n=e);const o=Ln(this),c=ka(s,i.bind(r),n);return o(),c}function Na(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Mt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Te(t))Mt(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)Mt(t[r],e,n);else if(Lo(t)||Kt(t))t.forEach(r=>{Mt(r,e,n)});else if(Uo(t)){for(const r in t)Mt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Mt(t[r],e,n)}return t}const Ma=t=>t.type.__isKeepAlive;function mu(t,e){La(t,"a",e)}function _u(t,e){La(t,"da",e)}function La(t,e,n=ve){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&vu(r,e,n,s),s=s.parent}}function vu(t,e,n,r){const s=Sr(e,t,r,!0);_a(()=>{Ts(r[e],s)},n)}function Da(t,e){t.shapeFlag&6&&t.component?Da(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const yu=t=>t.__isTeleport,Re=Symbol.for("v-fgt"),Tr=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),bn=[];let Le=null;function ae(t=!1){bn.push(Le=t?null:[])}function bu(){bn.pop(),Le=bn[bn.length-1]||null}let An=1;function Ri(t){An+=t}function xa(t){return t.dynamicChildren=An>0?Le||Wt:null,bu(),An>0&&Le&&Le.push(t),t}function ue(t,e,n,r,s,i){return xa(D(t,e,n,r,s,i,!0))}function Hs(t,e,n,r,s){return xa(Q(t,e,n,r,s,!0))}function ar(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Ua=({key:t})=>t??null,Qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||Te(t)||V(t)?{i:Ee,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Re?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ua(e),ref:e&&Qn(e),scopeId:Er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return c?(zs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),An>0&&!o&&Le&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Le.push(a),a}const Q=wu;function wu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$l)&&(t=Et),ar(t)){const c=en(t,e,!0);return n&&zs(c,n),An>0&&!i&&Le&&(c.shapeFlag&6?Le[Le.indexOf(t)]=c:Le.push(c)),c.patchFlag=-2,c}if(ku(t)&&(t=t.__vccOpts),e){e=Iu(e);let{class:c,style:a}=e;c&&!de(c)&&(e.class=As(c)),oe(a)&&(ra(a)&&!F(a)&&(a=fe({},a)),e.style=Rs(a))}const o=de(t)?1:Fl(t)?128:yu(t)?64:oe(t)?4:V(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function Iu(t){return t?ra(t)||Ea(t)?fe({},t):t:null}function en(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?Eu(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ua(u),ref:e&&e.ref?n&&i?F(i)?i.concat(Qn(e)):[i,Qn(e)]:Qn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Re?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&en(t.ssContent),ssFallback:t.ssFallback&&en(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Da(d,a.clone(d)),d}function K(t=" ",e=0){return Q(Tr,null,t,e)}function Ai(t="",e=!1){return e?(ae(),Hs(Et,null,t)):Q(Et,null,t)}function Be(t){return t==null||typeof t=="boolean"?Q(Et):F(t)?Q(Re,null,t.slice()):typeof t=="object"?ht(t):Q(Tr,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:en(t)}function zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ea(e)?e._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),r&64?(n=16,e=[K(e)]):n=8);t.children=e,t.shapeFlag|=n}function Eu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=Rs([e.style,r.style]);else if(mr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ve(t,e,n,r=null){De(t,e,7,[n,r])}const Su=ba();let Tu=0;function Cu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Su,i={uid:Tu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ta(r,s),emitsOptions:pa(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ml.bind(null,i),t.ce&&t.ce(i),i}let ve=null,cr,fs;{const t=Ho(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};cr=e("__VUE_INSTANCE_SETTERS__",n=>ve=n),fs=e("__VUE_SSR_SETTERS__",n=>Cr=n)}const Ln=t=>{const e=ve;return cr(t),t.scope.on(),()=>{t.scope.off(),cr(e)}},Pi=()=>{ve&&ve.scope.off(),cr(null)};function $a(t){return t.vnode.shapeFlag&4}let Cr=!1;function Ru(t,e=!1){e&&fs(e);const{props:n,children:r}=t.vnode,s=$a(t);su(t,n,s,e),au(t,r);const i=s?Au(t,e):void 0;return e&&fs(!1),i}function Au(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Yl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ou(t):null,i=Ln(t);Tt();const o=yt(r,t,0,[t.props,s]);if(st(),i(),Do(o)){if(o.then(Pi,Pi),e)return o.then(c=>{Oi(t,c,e)}).catch(c=>{wr(c,t,0)});t.asyncDep=o}else Oi(t,o,e)}else Fa(t,e)}function Oi(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=ca(e)),Fa(t,n)}let ki;function Fa(t,e,n){const r=t.type;if(!t.render){if(!e&&ki&&!r.render){const s=r.template||$s(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,u=fe(fe({isCustomElement:i,delimiters:c},o),a);r.render=ki(s,u)}}t.render=r.render||Oe}{const s=Ln(t);Tt();try{Xl(t)}finally{st(),s()}}}const Pu={get(t,e){return Se(t,"get",""),t[e]}};function Ou(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Pu),slots:t.slots,emit:t.emit,expose:e}}function Vs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ca(sa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _n)return _n[n](t)},has(e,n){return n in e||n in _n}})):t.proxy}function ku(t){return V(t)&&"__vccOpts"in t}const Pe=(t,e)=>Sl(t,e,Cr);function Ha(t,e,n){const r=arguments.length;return r===2?oe(e)&&!F(e)?ar(e)?Q(t,null,[e]):Q(t,e):Q(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ar(n)&&(n=[n]),Q(t,e,n))}const Nu="3.4.30";/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Mu="http://www.w3.org/2000/svg",Lu="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Ni=Xe&&Xe.createElement("template"),Du={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Mu,t):e==="mathml"?Xe.createElementNS(Lu,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ni.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Ni.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},xu=Symbol("_vtc");function Uu(t,e,n){const r=t[xu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mi=Symbol("_vod"),$u=Symbol("_vsh"),Fu=Symbol(""),Hu=/(^|;)\s*display\s*:/;function zu(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Zn(r,c,"")}else for(const o in e)n[o]==null&&Zn(r,o,"");for(const o in n)o==="display"&&(i=!0),Zn(r,o,n[o])}else if(s){if(e!==n){const o=r[Fu];o&&(n+=";"+o),r.cssText=n,i=Hu.test(n)}}else e&&t.removeAttribute("style");Mi in t&&(t[Mi]=i?r.display:"",t[$u]&&(r.display="none"))}const Li=/\s*!important$/;function Zn(t,e,n){if(F(n))n.forEach(r=>Zn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vu(t,e);Li.test(n)?t.setProperty(on(r),n.replace(Li,""),"important"):t[r]=n}}const Di=["Webkit","Moz","ms"],Vr={};function Vu(t,e){const n=Vr[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Vr[e]=r;r=$o(r);for(let s=0;s<Di.length;s++){const i=Di[s]+r;if(i in t)return Vr[e]=i}return e}const xi="http://www.w3.org/1999/xlink";function Ui(t,e,n,r,s,i=tl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xi,e.slice(6,e.length)):t.setAttributeNS(xi,e,n):n==null||i&&!zo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":St(n)?String(n):n)}function Bu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=zo(n):n==null&&u==="string"?(n="",a=!0):u==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ju(t,e,n,r){t.addEventListener(e,n,r)}function Wu(t,e,n,r){t.removeEventListener(e,n,r)}const $i=Symbol("_vei");function Ku(t,e,n,r,s=null){const i=t[$i]||(t[$i]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Gu(e);if(r){const u=i[e]=Yu(r,s);ju(t,c,u,a)}else o&&(Wu(t,c,o,a),i[e]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function Gu(t){let e;if(Fi.test(t)){e={};let r;for(;r=t.match(Fi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let Br=0;const qu=Promise.resolve(),Ju=()=>Br||(qu.then(()=>Br=0),Br=Date.now());function Yu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Xu(r,n.value),e,5,[r])};return n.value=t,n.attached=Ju(),n}function Xu(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qu=(t,e,n,r,s,i,o,c,a)=>{const u=s==="svg";e==="class"?Uu(t,r,u):e==="style"?zu(t,n,r):mr(e)?Ss(e)||Ku(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zu(t,e,r,u))?(Bu(t,e,r,i,o,c,a),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ui(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ui(t,e,r,u))};function Zu(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hi(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hi(e)&&de(n)?!1:e in t}const ef=fe({patchProp:Qu},Du);let zi;function tf(){return zi||(zi=lu(ef))}const nf=(...t)=>{const e=tf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sf(r);if(!s)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,rf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function rf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sf(t){return de(t)?document.querySelector(t):t}var of=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const af=Symbol();var Vi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vi||(Vi={}));function cf(){const t=nl(!0),e=t.run(()=>Zt({}));let n=[],r=[];const s=sa({install(i){s._a=i,i.provide(af,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!of?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof document<"u";function lf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function jr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ue(s)?s.map(t):t(s)}return n}const wn=()=>{},Ue=Array.isArray,za=/#/g,uf=/&/g,ff=/\//g,df=/=/g,hf=/\?/g,Va=/\+/g,pf=/%5B/g,gf=/%5D/g,Ba=/%5E/g,mf=/%60/g,ja=/%7B/g,_f=/%7C/g,Wa=/%7D/g,vf=/%20/g;function Bs(t){return encodeURI(""+t).replace(_f,"|").replace(pf,"[").replace(gf,"]")}function yf(t){return Bs(t).replace(ja,"{").replace(Wa,"}").replace(Ba,"^")}function ds(t){return Bs(t).replace(Va,"%2B").replace(vf,"+").replace(za,"%23").replace(uf,"%26").replace(mf,"`").replace(ja,"{").replace(Wa,"}").replace(Ba,"^")}function bf(t){return ds(t).replace(df,"%3D")}function wf(t){return Bs(t).replace(za,"%23").replace(hf,"%3F")}function If(t){return t==null?"":wf(t).replace(ff,"%2F")}function Pn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ef=/\/$/,Sf=t=>t.replace(Ef,"");function Wr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Af(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Pn(o)}}function Tf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&tn(e.matched[r],n.matched[s])&&Ka(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ka(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rf(t[n],e[n]))return!1;return!0}function Rf(t,e){return Ue(t)?ji(t,e):Ue(e)?ji(e,t):t===e}function ji(t,e){return Ue(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Af(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function Pf(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Sf(t)}const Of=/^[^#]+#/;function kf(t,e){return t.replace(Of,"#")+e}function Nf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rr=()=>({left:window.scrollX,top:window.scrollY});function Mf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Nf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wi(t,e){return(history.state?history.state.position-e:-1)+t}const hs=new Map;function Lf(t,e){hs.set(t,e)}function Df(t){const e=hs.get(t);return hs.delete(t),e}let xf=()=>location.protocol+"//"+location.host;function Ga(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Bi(a,"")}return Bi(n,t)+r+s}function Uf(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=Ga(t,location),P=n.value,A=e.value;let z=0;if(p){if(n.value=m,e.value=p,o&&o===P){o=null;return}z=A?p.position-A.position:0}else r(m);s.forEach(U=>{U(n.value,P,{delta:z,type:On.pop,direction:z?z>0?In.forward:In.back:In.unknown})})};function a(){o=n.value}function u(p){s.push(p);const m=()=>{const P=s.indexOf(p);P>-1&&s.splice(P,1)};return i.push(m),m}function d(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Rr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:u,destroy:h}}function Ki(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rr():null}}function $f(t){const{history:e,location:n}=window,r={value:Ga(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:xf()+t+a;try{e[d?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[d?"replace":"assign"](p)}}function o(a,u){const d=X({},e.state,Ki(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,d,!0),r.value=a}function c(a,u){const d=X({},s.value,e.state,{forward:a,scroll:Rr()});i(d.current,d,!0);const h=X({},Ki(r.value,a,null),{position:d.position+1},u);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Ff(t){t=Pf(t);const e=$f(t),n=Uf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:kf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Hf(t){return typeof t=="string"||t&&typeof t=="object"}function qa(t){return typeof t=="string"||typeof t=="symbol"}const Ja=Symbol("");var Gi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gi||(Gi={}));function nn(t,e){return X(new Error,{type:t,[Ja]:!0},e)}function Ye(t,e){return t instanceof Error&&Ja in t&&(e==null||!!(t.type&e))}const qi="[^/]+?",zf={sensitive:!1,strict:!1,start:!0,end:!0},Vf=/[.+*?^${}()[\]/\\]/g;function Bf(t,e){const n=X({},zf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Vf,"\\$&"),m+=40;else if(p.type===1){const{value:P,repeatable:A,optional:z,regexp:U}=p;i.push({name:P,repeatable:A,optional:z});const L=U||qi;if(L!==qi){m+=10;try{new RegExp(`(${L})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${P}" (${L}): `+j.message)}}let O=A?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(O=z&&u.length<2?`(?:/${O})`:"/"+O),z&&(O+="?"),s+=O,m+=20,z&&(m+=-8),A&&(m+=-20),L===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",P=i[p-1];h[P.name]=m&&P.repeatable?m.split("/"):m}return h}function a(u){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:P,repeatable:A,optional:z}=m,U=P in u?u[P]:"";if(Ue(U)&&!A)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const L=Ue(U)?U.join("/"):U;if(!L)if(z)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${P}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function jf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ya(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ji(r))return 1;if(Ji(s))return-1}return s.length-r.length}function Ji(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Wf={type:0,value:""},Kf=/[a-zA-Z0-9_]/;function Gf(t){if(!t)return[[]];if(t==="/")return[[Wf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",d="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Kf.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function qf(t,e,n){const r=Bf(Gf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jf(t,e){const n=[],r=new Map;e=Qi({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const P=!m,A=Yf(h);A.aliasOf=m&&m.record;const z=Qi(e,h),U=[A];if("alias"in h){const j=typeof h.alias=="string"?[h.alias]:h.alias;for(const se of j)U.push(X({},A,{components:m?m.record.components:A.components,path:se,aliasOf:m?m.record:A}))}let L,O;for(const j of U){const{path:se}=j;if(p&&se[0]!=="/"){const $=p.record.path,te=$[$.length-1]==="/"?"":"/";j.path=p.record.path+(se&&te+se)}if(L=qf(j,p,z),m?m.alias.push(L):(O=O||L,O!==L&&O.alias.push(L),P&&h.name&&!Xi(L)&&o(h.name)),Xa(L)&&a(L),A.children){const $=A.children;for(let te=0;te<$.length;te++)i($[te],L,m&&m.children[te])}m=m||L}return O?()=>{o(O)}:wn}function o(h){if(qa(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=Zf(h,n);n.splice(p,0,h),h.record.name&&!Xi(h)&&r.set(h.record.name,h)}function u(h,p){let m,P={},A,z;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw nn(1,{location:h});z=m.record.name,P=X(Yi(p.params,m.keys.filter(O=>!O.optional).concat(m.parent?m.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&Yi(h.params,m.keys.map(O=>O.name))),A=m.stringify(P)}else if(h.path!=null)A=h.path,m=n.find(O=>O.re.test(A)),m&&(P=m.parse(A),z=m.record.name);else{if(m=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!m)throw nn(1,{location:h,currentLocation:p});z=m.record.name,P=X({},p.params,h.params),A=m.stringify(P)}const U=[];let L=m;for(;L;)U.unshift(L.record),L=L.parent;return{name:z,path:A,params:P,matched:U,meta:Qf(U)}}t.forEach(h=>i(h));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function Yi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Xf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Xf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Xi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Qf(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Qi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Zf(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ya(t,e[i])<0?r=i:n=i+1}const s=ed(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ed(t){let e=t;for(;e=e.parent;)if(Xa(e)&&Ya(t,e)===0)return e}function Xa({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function td(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Va," "),o=i.indexOf("="),c=Pn(o<0?i:i.slice(0,o)),a=o<0?null:Pn(i.slice(o+1));if(c in e){let u=e[c];Ue(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function Zi(t){let e="";for(let n in t){const r=t[n];if(n=bf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ue(r)?r.map(i=>i&&ds(i)):[r&&ds(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function nd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ue(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const rd=Symbol(""),eo=Symbol(""),js=Symbol(""),Qa=Symbol(""),ps=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=p=>{p===!1?a(nn(4,{from:n,to:e})):p instanceof Error?a(p):Hf(p)?a(nn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(d);t.length<3&&(h=h.then(u)),h.catch(p=>a(p))})}function Kr(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(sd(a)){const d=(a.__vccOpts||a)[e];d&&i.push(pt(d,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=lf(d)?d.default:d;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&pt(m,n,r,o,c,s)()}))}}return i}function sd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function to(t){const e=We(js),n=We(Qa),r=Pe(()=>{const a=Ie(t.to);return e.resolve(a)}),s=Pe(()=>{const{matched:a}=r.value,{length:u}=a,d=a[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(tn.bind(null,d));if(p>-1)return p;const m=no(a[u-2]);return u>1&&no(d)===m&&h[h.length-1].path!==m?h.findIndex(tn.bind(null,a[u-2])):p}),i=Pe(()=>s.value>-1&&cd(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Ka(n.params,r.value.params));function c(a={}){return ad(a)?e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(wn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const id=qe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:to,setup(t,{slots:e}){const n=br(to(t)),{options:r}=We(js),s=Pe(()=>({[ro(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ro(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ha("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),od=id;function ad(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function cd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ue(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function no(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ro=(t,e,n)=>t??e??n,ld=qe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(ps),s=Pe(()=>t.route||r.value),i=We(eo,0),o=Pe(()=>{let u=Ie(i);const{matched:d}=s.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),c=Pe(()=>s.value.matched[o.value]);Xn(eo,Pe(()=>o.value+1)),Xn(rd,c),Xn(ps,s);const a=Zt();return yn(()=>[a.value,c.value,t.name],([u,d,h],[p,m,P])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!tn(d,m)||!p)&&(d.enterCallbacks[h]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,h=c.value,p=h&&h.components[d];if(!p)return so(n.default,{Component:p,route:u});const m=h.props[d],P=m?m===!0?u.params:typeof m=="function"?m(u):m:null,z=Ha(p,X({},P,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(h.instances[d]=null)},ref:a}));return so(n.default,{Component:z,route:u})||z}}});function so(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Za=ld;function ud(t){const e=Jf(t.routes,t),n=t.parseQuery||td,r=t.stringifyQuery||Zi,s=t.history,i=fn(),o=fn(),c=fn(),a=Tl(ut);let u=ut;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=jr.bind(null,v=>""+v),h=jr.bind(null,If),p=jr.bind(null,Pn);function m(v,C){let T,k;return qa(v)?(T=e.getRecordMatcher(v),k=C):k=v,e.addRoute(k,T)}function P(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(v=>v.record)}function z(v){return!!e.getRecordMatcher(v)}function U(v,C){if(C=X({},C||a.value),typeof v=="string"){const f=Wr(n,v,C.path),g=e.resolve({path:f.path},C),y=s.createHref(f.fullPath);return X(f,g,{params:p(g.params),hash:Pn(f.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=X({},v,{path:Wr(n,v.path,C.path).path});else{const f=X({},v.params);for(const g in f)f[g]==null&&delete f[g];T=X({},v,{params:h(f)}),C.params=h(C.params)}const k=e.resolve(T,C),Y=v.hash||"";k.params=d(p(k.params));const ie=Tf(r,X({},v,{hash:yf(Y),path:k.path})),l=s.createHref(ie);return X({fullPath:ie,hash:Y,query:r===Zi?nd(v.query):v.query||{}},k,{redirectedFrom:void 0,href:l})}function L(v){return typeof v=="string"?Wr(n,v,a.value.path):X({},v)}function O(v,C){if(u!==v)return nn(8,{from:C,to:v})}function j(v){return te(v)}function se(v){return j(X(L(v),{replace:!0}))}function $(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),X({query:v.query,hash:v.hash,params:k.path!=null?{}:v.params},k)}}function te(v,C){const T=u=U(v),k=a.value,Y=v.state,ie=v.force,l=v.replace===!0,f=$(T);if(f)return te(X(L(f),{state:typeof f=="object"?X({},Y,f.state):Y,force:ie,replace:l}),C||T);const g=T;g.redirectedFrom=C;let y;return!ie&&Cf(r,k,T)&&(y=nn(16,{to:g,from:k}),He(k,k,!0,!1)),(y?Promise.resolve(y):Ae(g,k)).catch(_=>Ye(_)?Ye(_,2)?_:ct(_):G(_,g,k)).then(_=>{if(_){if(Ye(_,2))return te(X({replace:l},L(_.to),{state:typeof _.to=="object"?X({},Y,_.to.state):Y,force:ie}),C||g)}else _=At(g,k,!0,l,Y);return at(g,k,_),_})}function ye(v,C){const T=O(v,C);return T?Promise.reject(T):Promise.resolve()}function ke(v){const C=Vt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Ae(v,C){let T;const[k,Y,ie]=fd(v,C);T=Kr(k.reverse(),"beforeRouteLeave",v,C);for(const f of k)f.leaveGuards.forEach(g=>{T.push(pt(g,v,C))});const l=ye.bind(null,v,C);return T.push(l),he(T).then(()=>{T=[];for(const f of i.list())T.push(pt(f,v,C));return T.push(l),he(T)}).then(()=>{T=Kr(Y,"beforeRouteUpdate",v,C);for(const f of Y)f.updateGuards.forEach(g=>{T.push(pt(g,v,C))});return T.push(l),he(T)}).then(()=>{T=[];for(const f of ie)if(f.beforeEnter)if(Ue(f.beforeEnter))for(const g of f.beforeEnter)T.push(pt(g,v,C));else T.push(pt(f.beforeEnter,v,C));return T.push(l),he(T)}).then(()=>(v.matched.forEach(f=>f.enterCallbacks={}),T=Kr(ie,"beforeRouteEnter",v,C,ke),T.push(l),he(T))).then(()=>{T=[];for(const f of o.list())T.push(pt(f,v,C));return T.push(l),he(T)}).catch(f=>Ye(f,8)?f:Promise.reject(f))}function at(v,C,T){c.list().forEach(k=>ke(()=>k(v,C,T)))}function At(v,C,T,k,Y){const ie=O(v,C);if(ie)return ie;const l=C===ut,f=jt?history.state:{};T&&(k||l?s.replace(v.fullPath,X({scroll:l&&f&&f.scroll},Y)):s.push(v.fullPath,Y)),a.value=v,He(v,C,T,l),ct()}let Fe;function cn(){Fe||(Fe=s.listen((v,C,T)=>{if(!Vn.listening)return;const k=U(v),Y=$(k);if(Y){te(X(Y,{replace:!0}),k).catch(wn);return}u=k;const ie=a.value;jt&&Lf(Wi(ie.fullPath,T.delta),Rr()),Ae(k,ie).catch(l=>Ye(l,12)?l:Ye(l,2)?(te(l.to,k).then(f=>{Ye(f,20)&&!T.delta&&T.type===On.pop&&s.go(-1,!1)}).catch(wn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),G(l,k,ie))).then(l=>{l=l||At(k,ie,!1),l&&(T.delta&&!Ye(l,8)?s.go(-T.delta,!1):T.type===On.pop&&Ye(l,20)&&s.go(-1,!1)),at(k,ie,l)}).catch(wn)}))}let Ht=fn(),ce=fn(),Z;function G(v,C,T){ct(v);const k=ce.list();return k.length?k.forEach(Y=>Y(v,C,T)):console.error(v),Promise.reject(v)}function Je(){return Z&&a.value!==ut?Promise.resolve():new Promise((v,C)=>{Ht.add([v,C])})}function ct(v){return Z||(Z=!v,cn(),Ht.list().forEach(([C,T])=>v?T(v):C()),Ht.reset()),v}function He(v,C,T,k){const{scrollBehavior:Y}=t;if(!jt||!Y)return Promise.resolve();const ie=!T&&Df(Wi(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return ua().then(()=>Y(v,C,ie)).then(l=>l&&Mf(l)).catch(l=>G(l,v,C))}const be=v=>s.go(v);let zt;const Vt=new Set,Vn={currentRoute:a,listening:!0,addRoute:m,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:z,getRoutes:A,resolve:U,options:t,push:j,replace:se,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ce.add,isReady:Je,install(v){const C=this;v.component("RouterLink",od),v.component("RouterView",Za),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(a)}),jt&&!zt&&a.value===ut&&(zt=!0,j(s.location).catch(Y=>{}));const T={};for(const Y in ut)Object.defineProperty(T,Y,{get:()=>a.value[Y],enumerable:!0});v.provide(js,C),v.provide(Qa,ta(T)),v.provide(ps,a);const k=v.unmount;Vt.add(v),v.unmount=function(){Vt.delete(v),Vt.size<1&&(u=ut,Fe&&Fe(),Fe=null,a.value=ut,zt=!1,Z=!1),k()}}};function he(v){return v.reduce((C,T)=>C.then(()=>ke(T)),Promise.resolve())}return Vn}function fd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>tn(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>tn(u,a))||s.push(a))}return[n,r,s]}const dd=qe({__name:"App",setup(t){return(e,n)=>(ae(),Hs(Ie(Za)))}}),$e=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},hd=$e(dd,[["__scopeId","data-v-3baf7b7d"]]),pd="modulepreload",gd=function(t){return"/try_firebase/"+t},io={},md=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=gd(c),c in io)return;io[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":pd,a||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),a)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},_d={},vd={class:"item"},yd={class:"details"};function bd(t,e){return ae(),ue("div",vd,[D("i",null,[$r(t.$slots,"icon",{},void 0)]),D("div",yd,[D("h3",null,[$r(t.$slots,"heading",{},void 0)]),$r(t.$slots,"default",{},void 0)])])}const dn=$e(_d,[["render",bd],["__scopeId","data-v-fd0742eb"]]),wd={},Id={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"},Ed=D("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1),Sd=[Ed];function Td(t,e){return ae(),ue("svg",Id,Sd)}const Cd=$e(wd,[["render",Td]]),Rd={},Ad={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Pd=D("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1),Od=[Pd];function kd(t,e){return ae(),ue("svg",Ad,Od)}const Nd=$e(Rd,[["render",kd]]),Md={},Ld={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"},Dd=D("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1),xd=[Dd];function Ud(t,e){return ae(),ue("svg",Ld,xd)}const $d=$e(Md,[["render",Ud]]),Fd={},Hd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},zd=D("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1),Vd=[zd];function Bd(t,e){return ae(),ue("svg",Hd,Vd)}const jd=$e(Fd,[["render",Bd]]),Wd={},Kd={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"},Gd=D("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1),qd=[Gd];function Jd(t,e){return ae(),ue("svg",Kd,qd)}const Yd=$e(Wd,[["render",Jd]]),Xd=D("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1),Qd=D("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1),Zd=D("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1),eh=D("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1),th=D("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1),nh=D("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1),rh=D("br",null,null,-1),sh=D("code",null,"README.md",-1),ih=D("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1),oh=D("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1),ah=D("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1),ch=D("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1),lh=D("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1),uh=D("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1),fh=D("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1),dh=D("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1),hh=D("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1),ph=D("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1),gh=qe({__name:"TheWelcome",setup(t){return(e,n)=>(ae(),ue(Re,null,[Q(dn,null,{icon:pe(()=>[Q(Cd)]),heading:pe(()=>[K("Documentation")]),default:pe(()=>[K(" Vue’s "),Xd,K(" provides you with all information you need to get started. ")]),_:1}),Q(dn,null,{icon:pe(()=>[Q(Nd)]),heading:pe(()=>[K("Tooling")]),default:pe(()=>[K(" This project is served and bundled with "),Qd,K(". The recommended IDE setup is "),Zd,K(" + "),eh,K(". If you need to test your components and web pages, check out "),th,K(" and "),nh,K(". "),rh,K(" More instructions are available in "),sh,K(". ")]),_:1}),Q(dn,null,{icon:pe(()=>[Q($d)]),heading:pe(()=>[K("Ecosystem")]),default:pe(()=>[K(" Get official tools and libraries for your project: "),ih,K(", "),oh,K(", "),ah,K(", and "),ch,K(". If you need more resources, we suggest paying "),lh,K(" a visit. ")]),_:1}),Q(dn,null,{icon:pe(()=>[Q(jd)]),heading:pe(()=>[K("Community")]),default:pe(()=>[K(" Got stuck? Ask your question on "),uh,K(", our official Discord server, or "),fh,K(". You should also subscribe to "),dh,K(" and follow the official "),hh,K(" twitter account for latest news in the Vue world. ")]),_:1}),Q(dn,null,{icon:pe(()=>[Q(Yd)]),heading:pe(()=>[K("Support Vue")]),default:pe(()=>[K(" As an independent project, Vue relies on community backing for its sustainability. You can help us by "),ph,K(". ")]),_:1})],64))}}),mh=qe({__name:"HomeView",setup(t){return(e,n)=>(ae(),ue("main",null,[Q(gh)]))}});var oo={};/**
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
 */const ec=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_h=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,d=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,m=u&63;a||(m=64,o||(p=64)),r.push(n[d],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ec(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_h(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||h==null)throw new vh;const p=i<<2|c>>4;if(r.push(p),u!==64){const m=c<<4&240|u>>2;if(r.push(m),h!==64){const P=u<<6&192|h;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yh=function(t){const e=ec(t);return tc.encodeByteArray(e,!0)},nc=function(t){return yh(t).replace(/\./g,"")},rc=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const wh=()=>bh().__FIREBASE_DEFAULTS__,Ih=()=>{if(typeof process>"u"||typeof oo>"u")return;const t=oo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Eh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rc(t[1]);return e&&JSON.parse(e)},Ws=()=>{try{return wh()||Ih()||Eh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sh=t=>{var e,n;return(n=(e=Ws())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sc=()=>{var t;return(t=Ws())===null||t===void 0?void 0:t.config},ic=t=>{var e;return(e=Ws())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ch(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Rh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ah(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ph(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Oh(){try{return typeof indexedDB=="object"}catch{return!1}}function kh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Nh="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nh,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Mh(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,r)}}function Mh(t,e){return t.replace(Lh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Lh=/\{\$([^}]+)}/g;function Dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ao(i)&&ao(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ao(t){return t!==null&&typeof t=="object"}/**
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
 */function xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xh(t,e){const n=new Uh(t,e);return n.subscribe.bind(n)}class Uh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$h(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gr),s.error===void 0&&(s.error=Gr),s.complete===void 0&&(s.complete=Gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $h(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gr(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class Fh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Th;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zh(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hh(t){return t===kt?void 0:t}function zh(t){return t.instantiationMode==="EAGER"}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Bh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},jh=ee.INFO,Wh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Kh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=jh,this._logHandler=Kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Gh=(t,e)=>e.some(n=>t instanceof n);let co,lo;function qh(){return co||(co=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jh(){return lo||(lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ac=new WeakMap,gs=new WeakMap,cc=new WeakMap,qr=new WeakMap,Ks=new WeakMap;function Yh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ac.set(n,t)}).catch(()=>{}),Ks.set(e,t),e}function Xh(t){if(gs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gs.set(t,e)}let ms={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qh(t){ms=t(ms)}function Zh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jr(this),e,...n);return cc.set(r,e.sort?e.sort():[e]),bt(r)}:Jh().includes(t)?function(...e){return t.apply(Jr(this),e),bt(ac.get(this))}:function(...e){return bt(t.apply(Jr(this),e))}}function ep(t){return typeof t=="function"?Zh(t):(t instanceof IDBTransaction&&Xh(t),Gh(t,qh())?new Proxy(t,ms):t)}function bt(t){if(t instanceof IDBRequest)return Yh(t);if(qr.has(t))return qr.get(t);const e=ep(t);return e!==t&&(qr.set(t,e),Ks.set(e,t)),e}const Jr=t=>Ks.get(t);function tp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=bt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(bt(o.result),a.oldVersion,a.newVersion,bt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const np=["get","getKey","getAll","getAllKeys","count"],rp=["put","add","delete","clear"],Yr=new Map;function uo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yr.get(e))return Yr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||np.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return Yr.set(e,i),i}Qh(t=>({...t,get:(e,n,r)=>uo(e,n)||t.get(e,n,r),has:(e,n)=>!!uo(e,n)||t.has(e,n)}));/**
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
 */class sp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ip(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ip(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _s="@firebase/app",fo="0.10.5";/**
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
 */const $t=new oc("@firebase/app"),op="@firebase/app-compat",ap="@firebase/analytics-compat",cp="@firebase/analytics",lp="@firebase/app-check-compat",up="@firebase/app-check",fp="@firebase/auth",dp="@firebase/auth-compat",hp="@firebase/database",pp="@firebase/database-compat",gp="@firebase/functions",mp="@firebase/functions-compat",_p="@firebase/installations",vp="@firebase/installations-compat",yp="@firebase/messaging",bp="@firebase/messaging-compat",wp="@firebase/performance",Ip="@firebase/performance-compat",Ep="@firebase/remote-config",Sp="@firebase/remote-config-compat",Tp="@firebase/storage",Cp="@firebase/storage-compat",Rp="@firebase/firestore",Ap="@firebase/vertexai-preview",Pp="@firebase/firestore-compat",Op="firebase",kp="10.12.2";/**
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
 */const vs="[DEFAULT]",Np={[_s]:"fire-core",[op]:"fire-core-compat",[cp]:"fire-analytics",[ap]:"fire-analytics-compat",[up]:"fire-app-check",[lp]:"fire-app-check-compat",[fp]:"fire-auth",[dp]:"fire-auth-compat",[hp]:"fire-rtdb",[pp]:"fire-rtdb-compat",[gp]:"fire-fn",[mp]:"fire-fn-compat",[_p]:"fire-iid",[vp]:"fire-iid-compat",[yp]:"fire-fcm",[bp]:"fire-fcm-compat",[wp]:"fire-perf",[Ip]:"fire-perf-compat",[Ep]:"fire-rc",[Sp]:"fire-rc-compat",[Tp]:"fire-gcs",[Cp]:"fire-gcs-compat",[Rp]:"fire-fst",[Pp]:"fire-fst-compat",[Ap]:"fire-vertex","fire-js":"fire-js",[Op]:"fire-js-all"};/**
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
 */const ur=new Map,Mp=new Map,ys=new Map;function ho(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(ys.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;ys.set(e,t);for(const n of ur.values())ho(n,t);for(const n of Mp.values())ho(n,t);return!0}function lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t.settings!==void 0}/**
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
 */const Lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Dn("app","Firebase",Lp);/**
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
 */class Dp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=kp;function uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=sc()),!n)throw wt.create("no-options");const i=ur.get(s);if(i){if(lr(n,i.options)&&lr(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new Vh(s);for(const a of ys.values())o.addComponent(a);const c=new Dp(n,r,o);return ur.set(s,c),c}function xp(t=vs){const e=ur.get(t);if(!e&&t===vs&&sc())return uc();if(!e)throw wt.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=Np[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(c.join(" "));return}kn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Up="firebase-heartbeat-database",$p=1,Nn="firebase-heartbeat-store";let Xr=null;function fc(){return Xr||(Xr=tp(Up,$p,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Nn)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),Xr}async function Fp(t){try{const n=(await fc()).transaction(Nn),r=await n.objectStore(Nn).get(dc(t));return await n.done,r}catch(e){if(e instanceof Ct)$t.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function po(t,e){try{const r=(await fc()).transaction(Nn,"readwrite");await r.objectStore(Nn).put(e,dc(t)),await r.done}catch(n){if(n instanceof Ct)$t.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function dc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hp=1024,zp=30*24*60*60*1e3;class Vp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=go();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=zp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=go(),{heartbeatsToSend:r,unsentEntries:s}=Bp(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function go(){return new Date().toISOString().substring(0,10)}function Bp(t,e=Hp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oh()?kh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fp(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mo(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wp(t){kn(new rn("platform-logger",e=>new sp(e),"PRIVATE")),kn(new rn("heartbeat",e=>new Vp(e),"PRIVATE")),qt(_s,fo,t),qt(_s,fo,"esm2017"),qt("fire-js","")}Wp("");function Gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kp=hc,pc=new Dn("auth","Firebase",hc());/**
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
 */const fr=new oc("@firebase/auth");function Gp(t,...e){fr.logLevel<=ee.WARN&&fr.warn(`Auth (${Un}): ${t}`,...e)}function er(t,...e){fr.logLevel<=ee.ERROR&&fr.error(`Auth (${Un}): ${t}`,...e)}/**
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
 */function Ge(t,...e){throw Js(t,...e)}function xe(t,...e){return Js(t,...e)}function qs(t,e,n){const r=Object.assign(Object.assign({},Kp()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t){return qs(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ge(t,"argument-error"),qs(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Js(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pc.create(t,...e)}function x(t,e,...n){if(!t)throw Js(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function it(t,e){t||et(e)}/**
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
 */function bs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jp(){return _o()==="http:"||_o()==="https:"}function _o(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Yp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jp()||Rh()||"connection"in navigator)?navigator.onLine:!0}function Xp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $n{constructor(e,n){this.shortDelay=e,this.longDelay=n,it(n>e,"Short delay should be less than long delay!"),this.isMobile=Ch()||Ah()}get(){return Yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ys(t,e){it(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zp=new $n(3e4,6e4);function Xs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,s={}){return mc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=xn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),gc.fetch()(_c(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function mc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qp),e);try{const s=new tg(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Jn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Jn(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qs(t,d,u);Ge(t,d)}}catch(s){if(s instanceof Ct)throw s;Ge(t,"network-request-failed",{message:String(s)})}}async function eg(t,e,n,r,s={}){const i=await an(t,e,n,r,s);return"mfaPendingCredential"in i&&Ge(t,"multi-factor-auth-required",{_serverResponse:i}),i}function _c(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ys(t.config,s):`${t.config.apiScheme}://${s}`}class tg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),Zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=xe(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function ng(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function vc(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function En(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rg(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),s=Qs(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Qr(s.auth_time)),issuedAtTime:En(Qr(s.iat)),expirationTime:En(Qr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function Qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const s=rc(n);return s?JSON.parse(s):(er("Failed to decode base64 JWT payload"),null)}catch(s){return er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vo(t){const e=Qs(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&sg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ws{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Mn(t,vc(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yc(i.providerUserInfo):[],c=ag(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ws(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function og(t){const e=Rt(t);await dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ag(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yc(t){return t.map(e=>{var{providerId:n}=e,r=Gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cg(t,e){const n=await mc(t,{},async()=>{const r=xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=_c(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",gc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lg(t,e){return an(t,"POST","/v2/accounts:revokeToken",Xs(t,e))}/**
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
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){x(e.length!==0,"internal-error");const n=vo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cg(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jt;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function ft(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ws(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rg(this,e)}reload(){return og(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Ut(this.auth));const e=await this.getIdToken();return await Mn(this,ng(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,z=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:j,isAnonymous:se,providerData:$,stsTokenManager:te}=n;x(O&&te,e,"internal-error");const ye=Jt.fromJSON(this.name,te);x(typeof O=="string",e,"internal-error"),ft(h,e.name),ft(p,e.name),x(typeof j=="boolean",e,"internal-error"),x(typeof se=="boolean",e,"internal-error"),ft(m,e.name),ft(P,e.name),ft(A,e.name),ft(z,e.name),ft(U,e.name),ft(L,e.name);const ke=new tt({uid:O,auth:e,email:p,emailVerified:j,displayName:h,isAnonymous:se,photoURL:P,phoneNumber:m,tenantId:A,stsTokenManager:ye,createdAt:U,lastLoginAt:L});return $&&Array.isArray($)&&(ke.providerData=$.map(Ae=>Object.assign({},Ae))),z&&(ke._redirectEventId=z),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jt;s.updateFromServerResponse(n);const i=new tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await dr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];x(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jt;c.updateFromIdToken(r);const a=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ws(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const yo=new Map;function nt(t){it(t instanceof Function,"Expected a class definition");let e=yo.get(t);return e?(it(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yo.set(t,e),e)}/**
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
 */class bc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bc.type="NONE";const bo=bc;/**
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
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yt(nt(bo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nt(bo);const o=tr(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const h=tt._fromJSON(e,d);u!==i&&(c=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Yt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Yt(i,e,r))}}/**
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
 */function wo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ec(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tc(e))return"Blackberry";if(Cc(e))return"Webos";if(Zs(e))return"Safari";if((e.includes("chrome/")||Ic(e))&&!e.includes("edge/"))return"Chrome";if(Sc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wc(t=me()){return/firefox\//i.test(t)}function Zs(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ic(t=me()){return/crios\//i.test(t)}function Ec(t=me()){return/iemobile/i.test(t)}function Sc(t=me()){return/android/i.test(t)}function Tc(t=me()){return/blackberry/i.test(t)}function Cc(t=me()){return/webos/i.test(t)}function Ar(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ug(t=me()){var e;return Ar(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fg(){return Ph()&&document.documentMode===10}function Rc(t=me()){return Ar(t)||Sc(t)||Cc(t)||Tc(t)||/windows phone/i.test(t)||Ec(t)}function dg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ac(t,e=[]){let n;switch(t){case"Browser":n=wo(me());break;case"Worker":n=`${wo(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Un}/${r}`}/**
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
 */class hg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pg(t,e={}){return an(t,"GET","/v2/passwordPolicy",Xs(t,e))}/**
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
 */const gg=6;class mg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _g{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Io(this),this.idTokenSubscription=new Io(this),this.beforeStateQueue=new hg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vc(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(Ut(this));const n=e?Rt(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(Ut(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pg(this),n=new mg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ac(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(t){return Rt(t)}class Io{constructor(e){this.auth=e,this.observer=null,this.addObserver=xh(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vg(t){ei=t}function yg(t){return ei.loadJS(t)}function bg(){return ei.gapiScript}function wg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Ig(t,e){const n=lc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lr(i,e??{}))return s;Ge(s,"already-initialized")}return n.initialize({options:e})}function Eg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sg(t,e,n){const r=Pr(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Pc(e),{host:o,port:c}=Tg(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Cg()}function Pc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tg(t){const e=Pc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Eo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Eo(o)}}}function Eo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
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
 */async function Xt(t,e){return eg(t,"POST","/v1/accounts:signInWithIdp",Xs(t,e))}/**
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
 */const Rg="http://localhost";class Ft extends Oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ft(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Gs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ft(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xn(n)}return e}}/**
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
 */class ti{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends Fn{constructor(){super("facebook.com")}static credential(e){return Ft._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ft._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class mt extends Fn{constructor(){super("github.com")}static credential(e){return Ft._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class _t extends Fn{constructor(){super("twitter.com")}static credential(e,n){return Ft._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tt._fromIdTokenResponse(e,r,s),o=So(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=So(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function So(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class hr extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new hr(e,n,r,s)}}function kc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(t,i,e,r):i})}async function Ag(t,e,n=!1){const r=await Mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}/**
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
 */async function Pg(t,e,n=!1){const{auth:r}=t;if(Ze(r.app))return Promise.reject(Ut(r));const s="reauthenticate";try{const i=await Mn(t,kc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Qs(i.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(t.uid===c,r,"user-mismatch"),sn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),i}}/**
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
 */async function Og(t,e,n=!1){if(Ze(t.app))return Promise.reject(Ut(t));const r="signIn",s=await kc(t,r,e),i=await sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function kg(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function Ng(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function Mg(t,e,n,r){return Rt(t).onAuthStateChanged(e,n,r)}function Lg(t){return Rt(t).signOut()}const pr="__sak";/**
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
 */class Nc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Dg(){const t=me();return Zs(t)||Ar(t)}const xg=1e3,Ug=10;class Mc extends Nc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Dg()&&dg(),this.fallbackToPolling=Rc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ug):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mc.type="LOCAL";const $g=Mc;/**
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
 */class Lc extends Nc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lc.type="SESSION";const Dc=Lc;/**
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
 */function ni(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=ni("",20);s.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function zg(t){Ke().location.href=t}/**
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
 */function xc(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jg(){return xc()?self:null}/**
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
 */const Uc="firebaseLocalStorageDb",Wg=1,gr="firebaseLocalStorage",$c="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kr(t,e){return t.transaction([gr],e?"readwrite":"readonly").objectStore(gr)}function Kg(){const t=indexedDB.deleteDatabase(Uc);return new Hn(t).toPromise()}function Is(){const t=indexedDB.open(Uc,Wg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gr,{keyPath:$c})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gr)?e(r):(r.close(),await Kg(),e(await Is()))})})}async function To(t,e,n){const r=kr(t,!0).put({[$c]:e,value:n});return new Hn(r).toPromise()}async function Gg(t,e){const n=kr(t,!1).get(e),r=await new Hn(n).toPromise();return r===void 0?null:r.value}function Co(t,e){const n=kr(t,!0).delete(e);return new Hn(n).toPromise()}const qg=800,Jg=3;class Fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Is(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Jg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(jg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await To(e,pr,"1"),await Co(e,pr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>To(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kr(s,!1).getAll();return new Hn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fc.type="LOCAL";const Yg=Fc;new $n(3e4,6e4);/**
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
 */function Hc(t,e){return e?nt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ri extends Oc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xg(t){return Og(t.auth,new ri(t),t.bypassAuthState)}function Qg(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Pg(n,new ri(t),t.bypassAuthState)}async function Zg(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Ag(n,new ri(t),t.bypassAuthState)}/**
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
 */class zc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Qg;default:Ge(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const em=new $n(2e3,1e4);async function tm(t,e,n){if(Ze(t.app))return Promise.reject(xe(t,"operation-not-supported-in-this-environment"));const r=Pr(t);qp(t,e,ti);const s=Hc(r,n);return new Lt(r,"signInViaPopup",e,s).executeNotNull()}class Lt extends zc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const nm="pendingRedirect",nr=new Map;class rm extends zc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const r=await sm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sm(t,e){const n=am(e),r=om(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function im(t,e){nr.set(t._key(),e)}function om(t){return nt(t._redirectPersistence)}function am(t){return tr(nm,t.config.apiKey,t.name)}async function cm(t,e,n=!1){if(Ze(t.app))return Promise.reject(Ut(t));const r=Pr(t),s=Hc(r,e),o=await new rm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lm=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ro(e))}saveEventToCache(e){this.cachedEventUids.add(Ro(e)),this.lastProcessedEventTime=Date.now()}}function Ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vc(t);default:return!1}}/**
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
 */async function dm(t,e={}){return an(t,"GET","/v1/projects",e)}/**
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
 */const hm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pm=/^https?/;async function gm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dm(t);for(const n of e)try{if(mm(n))return}catch{}Ge(t,"unauthorized-domain")}function mm(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pm.test(n))return!1;if(hm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _m=new $n(3e4,6e4);function Ao(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vm(t){return new Promise((e,n)=>{var r,s,i;function o(){Ao(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ao(),n(xe(t,"network-request-failed"))},timeout:_m.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const c=wg("iframefcb");return Ke()[c]=()=>{gapi.load?o():n(xe(t,"network-request-failed"))},yg(`${bg()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw rr=null,e})}let rr=null;function ym(t){return rr=rr||vm(t),rr}/**
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
 */const bm=new $n(5e3,15e3),wm="__/auth/iframe",Im="emulator/auth/iframe",Em={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tm(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ys(e,Im):`https://${t.config.authDomain}/${wm}`,r={apiKey:e.apiKey,appName:t.name,v:Un},s=Sm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xn(r).slice(1)}`}async function Cm(t){const e=await ym(t),n=Ke().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Tm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Em,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=xe(t,"network-request-failed"),c=Ke().setTimeout(()=>{i(o)},bm.get());function a(){Ke().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Am=500,Pm=600,Om="_blank",km="http://localhost";class Po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nm(t,e,n,r=Am,s=Pm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Rm),{width:r.toString(),height:s.toString(),top:i,left:o}),u=me().toLowerCase();n&&(c=Ic(u)?Om:n),wc(u)&&(e=e||km,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[m,P])=>`${p}${m}=${P},`,"");if(ug(u)&&c!=="_self")return Mm(e||"",c),new Po(null);const h=window.open(e||"",c,d);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Po(h)}function Mm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lm="__/auth/handler",Dm="emulator/auth/handler",xm=encodeURIComponent("fac");async function Oo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Un,eventId:s};if(e instanceof ti){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Fn){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),u=a?`#${xm}=${encodeURIComponent(a)}`:"";return`${Um(t)}?${xn(c).slice(1)}${u}`}function Um({config:t}){return t.emulator?Ys(t,Dm):`https://${t.authDomain}/${Lm}`}/**
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
 */const Zr="webStorageSupport";class $m{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dc,this._completeRedirectFn=cm,this._overrideRedirectResult=im}async _openPopup(e,n,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Oo(e,n,r,bs(),s);return Nm(e,o,ni())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oo(e,n,r,bs(),s);return zg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cm(e),r=new um(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zr,{type:Zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zr];o!==void 0&&n(!!o),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Rc()||Zs()||Ar()}}const Fm=$m;var ko="@firebase/auth",No="1.7.4";/**
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
 */class Hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vm(t){kn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ac(t)},u=new _g(r,s,i,a);return Eg(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new rn("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new Hm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(ko,No,zm(t)),qt(ko,No,"esm2017")}/**
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
 */const Bm=5*60,jm=ic("authIdTokenMaxAge")||Bm;let Mo=null;const Wm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jm)return;const s=n==null?void 0:n.token;Mo!==s&&(Mo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Km(t=xp()){const e=lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ig(t,{popupRedirectResolver:Fm,persistence:[Yg,$g,Dc]}),r=ic("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Wm(i.toString());Ng(n,o,()=>o(n.currentUser)),kg(n,c=>o(c))}}const s=Sh("auth");return s&&Sg(n,`http://${s}`),n}function Gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=xe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Gm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vm("Browser");const Nr=t=>(ga("data-v-dda4045b"),t=t(),ma(),t),qm={class:"user_info",style:{width:"600px"}},Jm=Nr(()=>D("colgroup",null,[D("col",{style:{width:"200px"}}),D("col",{style:{width:"400px"}})],-1)),Ym=Nr(()=>D("th",null,"email",-1)),Xm=Nr(()=>D("th",null,"displayName",-1)),Qm=Nr(()=>D("th",null,"photo",-1)),Zm=["src"],e_=qe({__name:"UserDetail",props:{user:{}},setup(t){return(e,n)=>(ae(),ue("table",qm,[Jm,D("tbody",null,[D("tr",null,[Ym,D("td",null,es(e.user.email),1)]),D("tr",null,[Xm,D("td",null,es(e.user.displayName),1)]),D("tr",null,[Qm,D("td",null,[D("img",{class:"avatar",src:e.user.photoURL},null,8,Zm)])])])]))}}),t_=$e(e_,[["__scopeId","data-v-dda4045b"]]),si=()=>{const t=We("auth"),e=Zt(null);debugger;Mg(t,o=>{o?e.value=o:e.value=null});const n=Zt(!1),r=async()=>{n.value=!0;try{const o=new Qe,c=await tm(t,o),u=await c.user.getIdToken();e.value=c.user,n.value=!1}catch(o){console.error("Authentication Error: ",o),n.value=!1}};return{user:Pe(()=>e.value),signInWithGoogle:r,signOut:async()=>{e.value?await Lg(t):alert("ログインしていません")},login_processing:n}},Mr=t=>(ga("data-v-48bc54ad"),t=t(),ma(),t),n_={class:"firebaseAuth"},r_=Mr(()=>D("h1",null,"Firebase Authentication",-1)),s_={key:0},i_={key:1},o_={key:0},a_={class:"already_authenticated"},c_=Mr(()=>D("span",{class:"message"},"you are authenticated.",-1)),l_={key:2,class:"login_required.not"},u_=Mr(()=>D("span",{class:"message not"},"You are not authenticated.",-1)),f_=Mr(()=>D("br",null,null,-1)),d_=qe({__name:"FirebaseAuth",setup(t){const e=Zt(!1),{signInWithGoogle:n,user:r,login_processing:s}=si();return yn(r,(i,o)=>{i?e.value=!0:e.value=!1}),(i,o)=>(ae(),ue("div",n_,[r_,Ie(s)?(ae(),ue("div",s_,"認証処理中(非同期)")):Ai("",!0),Ie(r)?(ae(),ue("div",i_,[e.value?(ae(),ue("div",o_,[D("div",a_,[c_,Q(t_,{user:Ie(r)},null,8,["user"])])])):Ai("",!0)])):(ae(),ue("div",l_,[u_,f_,D("button",{onClick:o[0]||(o[0]=(...c)=>Ie(n)&&Ie(n)(...c))},"Login with Google")]))]))}}),h_=$e(d_,[["__scopeId","data-v-48bc54ad"]]),p_={key:0},g_={class:"name"},m_={key:1},__=qe({__name:"AnotherComponent",setup(t){const{user:e}=si();return(n,r)=>Ie(e)?(ae(),ue("span",p_,[K(" your name is "),D("span",g_,es(Ie(e).displayName),1),K(" .")])):(ae(),ue("span",m_,"your are not authenticated."))}}),v_=$e(__,[["__scopeId","data-v-5ba0e741"]]),y_=["disabled"],b_=qe({__name:"SignOutButton",setup(t){const{signOut:e}=si(),n=Zt(!1),r=async()=>{n.value||(n.value=!0,await e(),n.value=!1)};return(s,i)=>(ae(),ue("button",{disabled:n.value,onClick:r},"ログアウト",8,y_))}}),w_=$e(b_,[["__scopeId","data-v-39131ee2"]]),I_=qe({__name:"TestAuth",setup(t){return(e,n)=>(ae(),ue(Re,null,[Q(h_),Q(v_),Q(w_)],64))}}),E_=ud({history:Ff("/try_firebase"),routes:[{path:"/",name:"home",component:mh},{path:"/auth",name:"auth",component:I_},{path:"/about",name:"about",component:()=>md(()=>import("./AboutView-D0eQ8KWp.js"),__vite__mapDeps([0,1]))}]});var S_="firebase",T_="10.12.2";/**
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
 */qt(S_,T_,"app");const C_={apiKey:"AIzaSyDEYi9dASr59ueR2VRco7_VUW0Dm2C7cvw",authDomain:"first-app-a74c6.firebaseapp.com",projectId:"first-app-a74c6",storageBucket:"first-app-a74c6.appspot.com",messagingSenderId:"888622410081",appId:"1:888622410081:web:1986705fea73f08c5d3d20"},Bc=uc(C_),R_=Km(Bc),zn=nf(hd);zn.use(cf());zn.use(E_);zn.provide("firebase",Bc);zn.provide("auth",R_);zn.mount("#app");export{$e as _,D as a,ue as c,ae as o};
