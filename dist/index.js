parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"bSEI":[function(require,module,exports) {
"use strict";function e(e){return window.RTCPeerConnection?new RTCPeerConnection(e):window.webkitRTCPeerConnection?new webkitRTCPeerConnection(e):window.mozRTCPeerConnection?new mozRTCPeerConnection(e):null}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"c18v":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=n(require("../../utils/peerconn"));function n(e){return e&&e.__esModule?e:{default:e}}function t(n,t,a=!1,r=3e4){return new Promise((c,o)=>{let i=(0,e.default)(n),d=(0,e.default)(n),s=i.createDataChannel("sender"),l=Date.now(),u=null;r&&Number.isInteger(r)&&(u=setTimeout(()=>o(new Error("Timeout of ".concat(r,"ms reached"))),r)),i.addEventListener("icecandidate",e=>{if(!e.candidate)return!1;a&&console.log("[peer-connection]: First Peer Generated Candidate:",e.candidate),d.addIceCandidate(e.candidate)}),d.addEventListener("icecandidate",e=>{if(!e.candidate)return!1;a&&console.log("[peer-connection]: Second Peer Generated Candidate:",e.candidate),i.addIceCandidate(e.candidate)}),d.addEventListener("datachannel",e=>{e.channel.addEventListener("message",e=>{if(a&&console.log("[peer-connection]: Message Transmission successful"),e.data===t){let n=Date.now(),t=new Blob([e.data]);return i.close(),d.close(),u&&clearTimeout(u),c({elapsed:n-l,size:t.size})}return u&&clearTimeout(u),o(new Error("message integrity failure"))})}),s.addEventListener("open",()=>s.send(t)),i.createOffer().then(e=>{a&&console.log("[peer-connection]: First peer connection created RTC offer"),i.setLocalDescription(e).then(()=>d.setRemoteDescription(e)).then(()=>d.createAnswer().then(e=>{a&&console.log("[peer-connection]: Seocond peer connection created RTC answer"),d.setLocalDescription(e).then(i.setRemoteDescription(e)).catch(e=>{u&&clearTimeout(u),o(e)})}).catch(e=>{u&&clearTimeout(u),o(e)}))}).catch(e=>{u&&clearTimeout(u),o(e)})})}
},{"../../utils/peerconn":"bSEI"}],"xsGI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("./helpers/rpc"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t={},r=!1,u=3e4){let n="test_".concat(Date.now());return(0,e.default)(t,n,r,u)}
},{"./helpers/rpc":"c18v"}],"l4Ib":[function(require,module,exports) {
"use strict";function e(e,i=!1){return new Promise((a,r)=>{if(!e.audio&&!e.video)return r(new Error("Audio Video Constraints inappropriate"));const t=e=>a(e),o=e=>r(e);navigator.mediaDevices.getUserMedia?(i&&console.log("[get-user-media]: Using mediaDevices.getUserMedia"),navigator.mediaDevices.getUserMedia(e).then(a).catch(r)):navigator.getUserMedia?(i&&console.log("[get-user-media]: Using navigator.getUserMedia"),navigator.getUserMedia(e,t,o)):navigator.webkitGetUserMedia?(i&&console.log("[get-user-media]: Using navigator.webkitGetUserMedia"),navigator.webkitGetUserMedia(e,t,o)):navigator.mozGetUserMedia?(i&&console.log("[get-user-media]: Using navigator.mozGetUserMedia"),navigator.mozGetUserMedia(e,t,o)):r(new Error("No version of getusermedia was found"))})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"plkb":[function(require,module,exports) {
"use strict";function t(t){if(!t)return null;let e=t.getTracks();return Array.prototype.forEach.call(e,t=>t.stop()),e.length}function e(e){try{return t(e)}catch(r){return 0}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.stopMediaStream=t,exports.stopMediaStreamSilent=e;
},{}],"AwD8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=a(require("../utils/user_media")),r=o(require("../utils/media_stream_tools"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=a?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(o,i,n):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}function a(e){return e&&e.__esModule?e:{default:e}}function i(t,o=!1,a=!1,i=6e4){return new Promise((n,u)=>{if(!t.audio&&!t.video)return u(new Error("Constraints are not correct"));o&&console.log("[media-capture]: Requesting user media");let c=null;i&&Number.isInteger(i)&&(c=setTimeout(()=>u(new Error("Timeout of ".concat(i,"ms reached"))),i)),(0,e.default)(t,o).then(e=>{if(o&&console.log("[media-capture]: Received media Stream"),e.active){let d=e.getTracks();var i=!1,l=!1;let s=[].every.call(d,e=>("audio"===e.kind&&(i=!0),"video"===e.kind&&(l=!0),"live"===e.readyState));return o&&console.log("[media-capture]: Received ".concat(d.length," track(s)")),s?t.video&&!l?(r.stopMediaStream(e),c&&clearTimeout(c),u(new Error("Video Track not found"))):t.audio&&!i?(r.stopMediaStream(e),c&&clearTimeout(c),u(new Error("Audio Track not found"))):(a||(o&&console.log("[media-capture]: Stopping media track(s)"),r.stopMediaStream(e)),c&&clearTimeout(c),n(!a||e)):(r.stopMediaStream(e),c&&clearTimeout(c),u(new Error("All requested tracks are not active")))}return c&&clearTimeout(c),u(new Error("Stream not active"))}).catch(e=>{c&&clearTimeout(c),u(e)})})}
},{"../utils/user_media":"l4Ib","../utils/media_stream_tools":"plkb"}],"S92k":[function(require,module,exports) {
"use strict";function e(e,t=!1){return new Promise((n,o)=>{if(!e)return o(new Error("Please provide a filename to download and check internet"));if("function"!=typeof fetch)return o(new Error("Fetch API support is required for this check"));t&&console.log("[internet-connection]: Will fetch the check file");let c=Date.now(),r=/\?/.test(e)?"&":"?";fetch("".concat(e).concat(r,"rtccheckertimestamp_noconflict=").concat(c)).then(e=>200!==e.status?o(new Error("Error loading the checker file")):e.blob()).then(e=>{t&&console.log("[internet-connection]: Fetched the checker file");let o=(Date.now()-c)/1e3,r=(8*e.size/o/1048576).toFixed(2);return t&&console.log("[internet-connection]: Speed observed: ".concat(r,"mbps")),n(parseFloat(r))}).catch(o)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"Ah8h":[function(require,module,exports) {
"use strict";function e(e=!1){return new Promise((o,t)=>{let i={audio:{in:0,out:0},video:{in:0,out:0},unknown:0};e&&console.log("[count-devices]: Requesting device list"),navigator.mediaDevices.enumerateDevices().then(t=>(e&&console.log("[count-devices]: Received device list. Total devices: ".concat(t.length)),Array.prototype.forEach.call(t,e=>{switch(e.kind){case"audioinput":i.audio.in++;break;case"audiooutput":i.audio.out++;break;case"videoinput":i.video.in++;break;case"videooutput":i.video.out++;break;default:i.unknown++}}),o(i))).catch(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"rsdb":[function(require,module,exports) {
"use strict";function e(e=!1){let i={video:{basic:!1},audio:{basic:!1,webAudio:!1},rtcPeerConnection:!1,rtcDataChannel:!1,getUserMedia:!1,getDisplayMedia:!1};if(e&&console.log("[feature-test] Checking for video availability"),"function"==typeof document.createElement("video").play&&(i.video.basic=!0),e&&console.log("[feature-test] Checking for audio availability"),"function"==typeof document.createElement("audio").play&&(i.audio.basic=!0),e&&console.log("[feature-test] Checking for web-audio API availability"),"AudioContext"in window?i.audio.webAudio=!0:"webkitAudioContext"in window&&(i.audio.webAudio="prefix-webkit"),e&&console.log("[feature-test] Checking for getUserMedia"),navigator&&"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices?i.getUserMedia=!0:navigator&&"getUserMedia"in navigator?i.getUserMedia="old":"webkitGetUserMedia"in navigator?i.getUserMedia="prefix-webkit":"mozGetUserMedia"in navigator&&(i.getUserMedia="prefix-moz"),navigator&&"mediaDevices"in navigator&&"getDisplayMedia"in navigator.mediaDevices&&(i.getDisplayMedia=!0),e&&console.log("[feature-test] Checking for rtcPeerConnection"),"RTCPeerConnection"in window?i.rtcPeerConnection=!0:"webkitRTCPeerConnection"in window?i.rtcPeerConnection="prefix-webkit":"mozRTCPeerConnection"in window&&(i.rtcPeerConnection="prefix-moz"),i.rtcPeerConnection){e&&console.log("[feature-test] Checking for RTC Data Channel"),"createDataChannel"in new RTCPeerConnection&&(i.rtcDataChannel=!0)}else i.rtcDataChannel=!1;return i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"C8Gs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=r(require("./helpers/rpc"));function r(e){return e&&e.__esModule?e:{default:e}}function t(r,t,o=3e4){return new Promise((a,n)=>{if(!r)return n(new Error("RTC Config is required"));/turn/.test(JSON.stringify(r))||n(new Error("At least one turn server is required")),r.iceTransportPolicy="relay";let s="";for(let e=0;e<1e5;e++)s+=String.fromCharCode(Math.floor(255*Math.random()));(0,e.default)(r,s,t,o).then(e=>{let r=(8*e.size/(e.elapsed/1e3)/1048576).toFixed(2);return t&&console.log("[turn-performance] Data transfer was measured ".concat(r,". transfer took ").concat(e.elapsed,"ms")),a({speed:parseFloat(r),elapsed:e.elapsed})}).catch(n)})}
},{"./helpers/rpc":"c18v"}],"b0V7":[function(require,module,exports) {
"use strict";function e(e){return new Promise(t=>{try{e.then(e=>t(e)).catch(()=>t(null))}catch(r){t(null)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"m4iV":[function(require,module,exports) {
function r(r,e){return r&&e?(void 0!==r.srcObject?r.srcObject=e:r.src=window.URL.createObjectURL(e),r):null}function e(r){return r?(void 0!==r.srcObject?r.srcObject=null:r.src="",r):null}module.exports={addStreamToDOM:r,removeStreamFromDOM:e};
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"checkPeerConnection",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"checkMediaCapture",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"checkInternetSpeed",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"countDevies",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"checkFeatureSupport",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"checkRelayPerformance",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"getUserMedia",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(exports,"createRTCPeerConnection",{enumerable:!0,get:function(){return l.default}}),exports.utils=exports.getUserMediaSilent=exports.countDeviesSilent=exports.checkInternetSpeedSilent=exports.checkRelayPerformanceSilent=exports.checkMediaCaptureSilent=exports.checkPeerConnectionSilent=void 0;var e=d(require("./checks/peerConnection")),t=d(require("./checks/mediaCapture")),r=d(require("./checks/internet")),n=d(require("./checks/count_devices")),u=d(require("./checks/feature_support")),o=d(require("./checks/turnPerformace")),c=d(require("./utils/simplify_promise")),i=p(require("./utils/dom_tag_tools")),a=d(require("./utils/user_media")),f=p(require("./utils/media_stream_tools")),l=d(require("./utils/peerconn"));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var o=n?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}function d(e){return e&&e.__esModule?e:{default:e}}const b=function(t={},r=!1){return(0,c.default)((0,e.default)(t,r))};exports.checkPeerConnectionSilent=b;const x=function(e,r=!1,n=!1){return(0,c.default)((0,t.default)(e,r,n))};exports.checkMediaCaptureSilent=x;const y=function(e,t=!1){return(0,c.default)((0,r.default)(e,t))};exports.checkInternetSpeedSilent=y;const P=function(e=!1){return(0,c.default)((0,n.default)(e))};exports.countDeviesSilent=P;const h=function(e,t=!1){return(0,c.default)((0,a.default)(e,t))};exports.getUserMediaSilent=h;const k=function(e,t,r){return(0,c.default)((0,o.default)(e,t,r))};exports.checkRelayPerformanceSilent=k;const m={flat:c.default,dom:i,stream:f};exports.utils=m;
},{"./checks/peerConnection":"xsGI","./checks/mediaCapture":"AwD8","./checks/internet":"S92k","./checks/count_devices":"Ah8h","./checks/feature_support":"rsdb","./checks/turnPerformace":"C8Gs","./utils/simplify_promise":"b0V7","./utils/dom_tag_tools":"m4iV","./utils/user_media":"l4Ib","./utils/media_stream_tools":"plkb","./utils/peerconn":"bSEI"}]},{},["Focm"], "_rtc")
//# sourceMappingURL=/index.js.map