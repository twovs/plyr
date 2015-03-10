!function(e){"use strict";function t(e,t){h.debug&&window.console&&console[t?"error":"log"](e)}function n(){var e,t,n,r=navigator.userAgent,s=navigator.appName,a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",a="11;"):-1!==(t=r.indexOf("MSIE"))?(s="IE",a=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(s="Chrome",a=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(s="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(s="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(s=r.substring(e,t),a=r.substring(t+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!==(n=a.indexOf(" "))&&(a=a.substring(0,n)),o=parseInt(""+a,10),isNaN(o)&&(a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:s,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function r(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function s(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function a(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,s=e[n],a=s.parentNode,o=s.nextSibling;r.appendChild(s),o?a.insertBefore(r,o):a.appendChild(r)}}function o(e){e.parentNode.removeChild(e)}function i(e,t){e.insertBefore(t,e.firstChild)}function l(e,t){for(var n in t)e.setAttribute(n,t[n])}function c(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function u(e,t,n,r){t=t.split(" ");for(var s=0;s<t.length;s++)e[r?"addEventListener":"removeEventListener"](t[s],n,!1)}function p(e,t,n){u(e,t,n,!0)}function d(e,t,n){u(e,t,n,!1)}function f(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function m(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},m(e[n],t[n])):e[n]=t[n];return e}function v(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return"webkit"===e.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(e.supportsFullScreen=!1),e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;case"ms":return null!==document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?e.ALLOW_KEYBOARD_INPUT:null)},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function y(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function g(e){function u(e){if(!Z.usingTextTracks&&"video"===Z.type){for(Z.subcount=0,e="number"==typeof e?e:Z.media.currentTime;k(Z.captions[Z.subcount][0])<e.toFixed(1);)if(Z.subcount++,Z.subcount>Z.captions.length-1){Z.subcount=Z.captions.length-1;break}Z.media.currentTime.toFixed(1)>=g(Z.captions[Z.subcount][0])&&Z.media.currentTime.toFixed(1)<=k(Z.captions[Z.subcount][0])?(Z.currentCaption=Z.captions[Z.subcount][1],Z.captionsContainer.innerHTML=Z.currentCaption):Z.captionsContainer.innerHTML=""}}function m(){c(Z.container,h.classes.captions.enabled,!0),h.captions.defaultActive&&(c(Z.container,h.classes.captions.active,!0),Z.buttons.captions.setAttribute("checked","checked"))}function g(e){var t=[];return t=e.split(" --> "),x(t[0])}function k(e){var t=[];return t=e.split(" --> "),x(t[1])}function x(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function w(e){return Z.container.querySelectorAll(e)}function T(e){return w(e)[0]}function S(){try{return window.self!==window.top}catch(e){return!0}}function F(){t("Injecting custom controls.");var e=h.html;if(e=s(e,"{seektime}",h.seekTime),e=s(e,"{id}",Z.random),Z.container.insertAdjacentHTML("beforeend",e),h.tooltips)for(var n=w(h.selectors.labels),r=n.length-1;r>=0;r--){var a=n[r];c(a,h.classes.hidden,!1),c(a,h.classes.tooltip,!0)}}function E(){try{return Z.controls=T(h.selectors.controls),Z.buttons={},Z.buttons.seek=T(h.selectors.buttons.seek),Z.buttons.play=T(h.selectors.buttons.play),Z.buttons.pause=T(h.selectors.buttons.pause),Z.buttons.restart=T(h.selectors.buttons.restart),Z.buttons.rewind=T(h.selectors.buttons.rewind),Z.buttons.forward=T(h.selectors.buttons.forward),Z.buttons.mute=T(h.selectors.buttons.mute),Z.buttons.captions=T(h.selectors.buttons.captions),Z.buttons.fullscreen=T(h.selectors.buttons.fullscreen),Z.progress={},Z.progress.container=T(h.selectors.progress.container),Z.progress.buffer={},Z.progress.buffer.bar=T(h.selectors.progress.buffer),Z.progress.buffer.text=Z.progress.buffer.bar.getElementsByTagName("span")[0],Z.progress.played={},Z.progress.played.bar=T(h.selectors.progress.played),Z.progress.played.text=Z.progress.played.bar.getElementsByTagName("span")[0],Z.volume=T(h.selectors.buttons.volume),Z.duration=T(h.selectors.duration),Z.seekTime=w(h.selectors.seekTime),!0}catch(e){return t("It looks like there's a problem with your controls html. Bailing.",!0),!1}}function A(){var e=Z.buttons.play.innerText||"Play";"undefined"!=typeof h.title&&h.title.length&&(e+=", "+h.title),Z.buttons.play.setAttribute("aria-label",e)}function C(){if(Z.media=Z.container.querySelectorAll("audio, video")[0],!Z.media)return t("No audio or video element found!",!0),!1;if(Z.media.removeAttribute("controls"),Z.type="VIDEO"==Z.media.tagName?"video":"audio",c(Z.container,h.classes[Z.type],!0),c(Z.container,h.classes.stopped,null===Z.media.getAttribute("autoplay")),Z.browser.ios&&c(Z.container,"ios",!0),"video"===Z.type){var e=document.createElement("div");e.setAttribute("class",h.classes.videoWrapper),a(Z.media,e),Z.videoContainer=e}null!==Z.media.getAttribute("autoplay")&&P()}function N(){if("video"===Z.type){Z.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+h.selectors.captions.replace(".","")+"'></div>"),Z.captionsContainer=T(h.selectors.captions),Z.usingTextTracks=!1,Z.media.textTracks&&(Z.usingTextTracks=!0);for(var e,n="",r=Z.media.childNodes,s=0;s<r.length;s++)"track"===r[s].nodeName.toLowerCase()&&(e=r[s].getAttribute("kind"),"captions"===e&&(n=r[s].getAttribute("src")));if(Z.captionExists=!0,""===n?(Z.captionExists=!1,t("No caption track found.")):t("Caption track found; URI: "+n),Z.captionExists){for(var a=Z.media.textTracks,o=0;o<a.length;o++)a[o].mode="hidden";if(m(Z),("IE"===Z.browser.name&&10===Z.browser.version||"IE"===Z.browser.name&&11===Z.browser.version||"Firefox"===Z.browser.name&&Z.browser.version>=31||"Safari"===Z.browser.name&&Z.browser.version>=7)&&(t("Detected IE 10/11 or Firefox 31+ or Safari 7+."),Z.usingTextTracks=!1),Z.usingTextTracks){t("TextTracks supported.");for(var i=0;i<a.length;i++){var l=a[i];"captions"===l.kind&&p(l,"cuechange",function(){this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&(Z.captionsContainer.innerHTML=this.activeCues[0].text)})}}else if(t("TextTracks not supported so rendering captions manually."),Z.currentCaption="",Z.captions=[],""!==n){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState)if(200===u.status){var e,n=[],r=u.responseText;n=r.split("\n\n");for(var s=0;s<n.length;s++)e=n[s],Z.captions[s]=[],Z.captions[s]=e.split("\n");Z.captions.shift(),t("Successfully loaded the caption file via AJAX.")}else t("There was a problem loading the caption file via AJAX.",!0)},u.open("get",n,!0),u.send()}if("Safari"===Z.browser.name&&Z.browser.version>=7){t("Safari 7+ detected; removing track from DOM."),a=Z.media.getElementsByTagName("track");for(var d=0;d<a.length;d++)Z.media.removeChild(a[d])}}else c(Z.container,h.classes.captions.enabled)}}function I(){if("video"===Z.type&&h.fullscreen.enabled){var e=b.supportsFullScreen;e||h.fullscreen.fallback&&!S()?(t((e?"Native":"Fallback")+" fullscreen enabled."),c(Z.container,h.classes.fullscreen.enabled,!0)):t("Fullscreen not supported and fallback disabled.")}}function P(){Z.media.play()}function M(){Z.media.pause()}function O(e){"number"!=typeof e&&(e=h.seekTime),q(Z.media.currentTime-e)}function L(e){"number"!=typeof e&&(e=h.seekTime),q(Z.media.currentTime+e)}function q(e){var n=0;"number"==typeof e?n=e:"object"!=typeof e||"change"!==e.type&&"input"!==e.type||(n=e.target.value/e.target.max*Z.media.duration),0>n?n=0:n>Z.media.duration&&(n=Z.media.duration),Z.media.currentTime=n.toFixed(1),t("Seeking to "+Z.media.currentTime+" seconds"),u(n)}function V(){c(Z.container,h.classes.playing,!Z.media.paused),c(Z.container,h.classes.stopped,Z.media.paused)}function H(e){var t=b.supportsFullScreen;e&&e.type===b.fullScreenEventName?h.fullscreen.active=b.isFullScreen():t?(b.isFullScreen()?b.cancelFullScreen():b.requestFullScreen(Z.container),h.fullscreen.active=b.isFullScreen()):(h.fullscreen.active=!h.fullscreen.active,h.fullscreen.active?(p(document,"keyup",B),document.body.style.overflow="hidden"):(d(document,"keyup",B),document.body.style.overflow="")),c(Z.container,h.classes.fullscreen.active,h.fullscreen.active)}function B(e){27===(e.which||e.charCode||e.keyCode)&&h.fullscreen.active&&H()}function R(e){"undefined"==typeof e&&(e=h.storage.enabled&&y().supported?window.localStorage[h.storage.key]||h.volume:h.volume),e>10&&(e=10),Z.volume.value=e,Z.media.volume=parseFloat(e/10),W(),h.storage.enabled&&y().supported&&(window.localStorage.plyr_volume=e)}function j(e){"undefined"==typeof active&&(e=!Z.media.muted,Z.buttons.mute.checked=e),Z.media.muted=e,W()}function D(e){"undefined"==typeof e&&(e=-1===Z.container.className.indexOf(h.classes.captions.active),Z.buttons.captions.checked=e),e?c(Z.container,h.classes.captions.active,!0):c(Z.container,h.classes.captions.active)}function W(){c(Z.container,h.classes.muted,0===Z.media.volume||Z.media.muted)}function _(e){var t="waiting"===e.type;clearTimeout(Z.loadingTimer),Z.loadingTimer=setTimeout(function(){c(Z.container,h.classes.loading,t)},t?250:0)}function U(e){var t=Z.progress.played.bar,n=Z.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=f(Z.media.currentTime,Z.media.duration),"timeupdate"==e.type&&(Z.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=Z.progress.buffer.bar,n=Z.progress.buffer.text,r=function(){var e=Z.media.buffered;return e.length?f(e.end(0),Z.media.duration):0}()}t.value=r,n.innerHTML=r}function X(){Z.secs=parseInt(Z.media.currentTime%60),Z.mins=parseInt(Z.media.currentTime/60%60),Z.secs=("0"+Z.secs).slice(-2),Z.mins=("0"+Z.mins).slice(-2),Z.duration.innerHTML=Z.mins+":"+Z.secs}function J(e){X(),U(e)}function $(){for(var e=Z.media.querySelectorAll("source"),t=e.length-1;t>=0;t--)o(e[t]);Z.media.removeAttribute("src")}function z(e){if(e.src){var t=document.createElement("source");l(t,e),i(Z.media,t)}}function K(e){if(M(),q(),V(),$(),"string"==typeof e)Z.media.setAttribute("src",e);else if(e.constructor===Array)for(var t in e)z(e[t]);J(),Z.media.load(),null!==Z.media.getAttribute("autoplay")&&P()}function Y(e){"video"===Z.type&&Z.media.setAttribute("poster",e)}function G(){p(Z.buttons.play,"click",function(){P(),setTimeout(function(){Z.buttons.pause.focus()},100)}),p(Z.buttons.pause,"click",function(){M(),setTimeout(function(){Z.buttons.play.focus()},100)}),p(Z.buttons.restart,"click",q),p(Z.buttons.rewind,"click",O),p(Z.buttons.forward,"click",L),p(Z.volume,"change input",function(){R(this.value)}),p(Z.buttons.mute,"change",function(){j(this.checked)}),p(Z.buttons.fullscreen,"click",H),p(document,b.fullScreenEventName,H),"video"===Z.type&&h.click&&p(Z.videoContainer,"click",function(){Z.media.paused?P():Z.media.ended?(q(),P()):M()}),p(Z.media,"timeupdate seeking",J),p(Z.media,"timeupdate",u),p(Z.buttons.seek,"change input",q),p(Z.buttons.captions,"click",function(){D(this.checked)}),p(Z.media,"ended",function(){"video"===Z.type&&(Z.captionsContainer.innerHTML=""),V()}),p(Z.media,"progress",U),p(Z.media,"playing",U),p(Z.media,"volumechange",W),p(Z.media,"play pause",V),p(Z.media,"waiting canplay seeked",_)}function Q(){return b=v(),Z.browser=n(),t(Z.browser.name+" "+Z.browser.version),"IE"!==Z.browser.name||8!==Z.browser.version&&9!==Z.browser.version?(C(),Z.random=Math.floor(1e4*Math.random()),F(),E()?(A(),N(),R(),I(),G(),void 0):!1):(t("Browser not suppported.",!0),!1)}var Z=this;return Z.container=e,Q(),{media:Z.media,play:P,pause:M,restart:q,rewind:O,forward:L,seek:q,setVolume:R,toggleMute:j,toggleCaptions:D,source:K,poster:Y,support:function(e){return r(Z,e)}}}var b,h,k={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:"[data-player='seek']",play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",duration:".player-duration"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0},storage:{enabled:!0,key:"plyr_volume"},html:function(){return["<div class='player-controls'>","<div class='player-progress'>","<label for='seek{id}' class='sr-only'>Seek</label>","<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>","<progress class='player-progress-played' max='100' value='0'>","<span>0</span>% played","</progress>","<progress class='player-progress-buffer' max='100' value='0'>","<span>0</span>% buffered","</progress>","</div>","<span class='player-controls-left'>","<button type='button' data-player='restart'>","<svg><use xlink:href='#icon-restart'></use></svg>","<span class='sr-only'>Restart</span>","</button>","<button type='button' data-player='rewind'>","<svg><use xlink:href='#icon-rewind'></use></svg>","<span class='sr-only'>Rewind {seektime} secs</span>","</button>","<button type='button' data-player='play'>","<svg><use xlink:href='#icon-play'></use></svg>","<span class='sr-only'>Play</span>","</button>","<button type='button' data-player='pause'>","<svg><use xlink:href='#icon-pause'></use></svg>","<span class='sr-only'>Pause</span>","</button>","<button type='button' data-player='fast-forward'>","<svg><use xlink:href='#icon-fast-forward'></use></svg>","<span class='sr-only'>Forward {seektime} secs</span>","</button>","<span class='player-time'>","<span class='sr-only'>Time</span>","<span class='player-duration'>00:00</span>","</span>","</span>","<span class='player-controls-right'>","<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>","<label id='mute{id}' for='mute{id}'>","<svg class='icon-muted'><use xlink:href='#icon-muted'></use></svg>","<svg><use xlink:href='#icon-volume'></use></svg>","<span class='sr-only'>Toggle Mute</span>","</label>","<label for='volume{id}' class='sr-only'>Volume</label>","<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>","<input class='sr-only' id='captions{id}' type='checkbox' data-player='captions'>","<label for='captions{id}'>","<svg class='icon-captions-on'><use xlink:href='#icon-captions-on'></use></svg>","<svg><use xlink:href='#icon-captions-off'></use></svg>","<span class='sr-only'>Toggle Captions</span>","</label>","<button type='button' data-player='fullscreen'>","<svg class='icon-exit-fullscreen'><use xlink:href='#icon-exit-fullscreen'></use></svg>","<svg><use xlink:href='#icon-enter-fullscreen'></use></svg>","<span class='sr-only'>Toggle Fullscreen</span>","</button>","</span>","</div>"].join("\n")}()};e.setup=function(e){if(h=m(k,e),!h.enabled)return!1;for(var t=document.querySelectorAll(h.selectors.container),n=[],r=t.length-1;r>=0;r--){var s=t[r];"VIDEO"===s.querySelectorAll("audio, video")[0].tagName&&/iPhone/i.test(navigator.userAgent)||("undefined"==typeof s.plyr&&(s.plyr=new g(s)),n.push(s.plyr))}return n}}(this.plyr=this.plyr||{});