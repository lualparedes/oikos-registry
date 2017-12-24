"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/oikos-registry/index.html","b0280339586c7d35ee61a46e39ffb0aa"],["/oikos-registry/static/css/main.22760bd1.css","75b5a31051858cb9474298ec856f3e69"],["/oikos-registry/static/js/main.e6854ff5.js","8d49cfed8c6711b991816a7730590b7b"],["/oikos-registry/static/media/hkgrotesk-bold-webfont.b781bae3.woff2","b781bae304db167a85eb3a0e631015a9"],["/oikos-registry/static/media/hkgrotesk-bold-webfont.d76220f9.woff","d76220f977faa935db8de2cbfa08a533"],["/oikos-registry/static/media/hkgrotesk-regular-webfont.479c4506.woff2","479c4506eed1da2bf769dfe4c0a1bbef"],["/oikos-registry/static/media/hkgrotesk-regular-webfont.8c12f9f1.woff","8c12f9f1411e8bfff5d29161a59e6e43"],["/oikos-registry/static/media/icomoon.44668bb1.ttf","44668bb125cefde8cd3203b775a22db6"],["/oikos-registry/static/media/icomoon.8ea147d4.eot","8ea147d468849efa751b53c4490ab0f9"],["/oikos-registry/static/media/icomoon.d217f2e3.woff","d217f2e38e2688447918a0dbb3c11395"],["/oikos-registry/static/media/logo.2a2f6da9.svg","2a2f6da90f5ba8b520dd02dbfa2056dc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),t=urlsToCacheKeys.has(r));var a="/oikos-registry/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(a,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});