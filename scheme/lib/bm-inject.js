/*! bm-html-control - v0.3.1 - 2014-02-06
* https://github.com/brassmonkey/control-schemes
* Copyright (c) 2014 Todd Anderson; Licensed MIT */
!function(env){if(env.bmnative&&env.bmnative.injectMe){var codeToInject=env.bmnative.injectMe();if(codeToInject)return eval(codeToInject),void 0}env.addCallback=function(){},env.sendToHost=function(){},env.sendButton=function(){};var timeout,resetTimeout=function(){setTimeout(checkDomLoaded,100)},checkDomLoaded=function(){"complete"!==document.readyState&&resetTimeout(),clearTimeout(timeout);var a=document.querySelector("#log-panel"),b=document.createElement("span"),c=document.createTextNode("hello, world.");b.appendChild(c),a.appendChild(b),sendToNative("ready",!0)};resetTimeout()}(window);