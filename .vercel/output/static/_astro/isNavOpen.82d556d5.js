import{r as v}from"./index.1a8a6295.js";let l=[],S=(e,n)=>{let i,u=[],t={lc:0,l:n||0,value:e,set(s){t.value=s,t.notify()},get(){return t.lc||t.listen(()=>{})(),t.value},notify(s){i=u;let o=!l.length;for(let r=0;r<i.length;r+=2)l.push(i[r],t.value,s,i[r+1]);if(o){for(let r=0;r<l.length;r+=4){let d=!1;for(let c=r+7;c<l.length;c+=4)if(l[c]<l[r+3]){d=!0;break}d?l.push(l[r],l[r+1],l[r+2],l[r+3]):l[r](l[r+1],l[r+2])}l.length=0}},listen(s,o){return u===i&&(u=u.slice()),t.lc=u.push(s,o||t.l)/2,()=>{u===i&&(u=u.slice());let r=u.indexOf(s);~r&&(u.splice(r,2),t.lc--,t.lc||t.off())}},subscribe(s,o){let r=t.listen(s,o);return s(t.value),r},off(){}};return t};function h(e,n,i){let u=new Set([...n,void 0]);return e.listen((t,s)=>{u.has(s)&&i(t,s)})}var p={},x={get exports(){return p},set exports(e){p=e}},y={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=v;function g(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var m=typeof Object.is=="function"?Object.is:g,E=f.useState,k=f.useEffect,w=f.useLayoutEffect,b=f.useDebugValue;function L(e,n){var i=n(),u=E({inst:{value:i,getSnapshot:n}}),t=u[0].inst,s=u[1];return w(function(){t.value=i,t.getSnapshot=n,a(t)&&s({inst:t})},[e,i,n]),k(function(){return a(t)&&s({inst:t}),e(function(){a(t)&&s({inst:t})})},[e]),b(i),i}function a(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!m(e,i)}catch{return!0}}function O(e,n){return n()}var j=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?O:L;y.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:j;(function(e){e.exports=y})(x);function _(e,n={}){let i=v.useCallback(t=>n.keys?h(e,n.keys,t):e.listen(t),[n.keys,e]),u=e.get.bind(e);return p.useSyncExternalStore(i,u,u)}const q=S(!1);export{q as i,_ as u};
