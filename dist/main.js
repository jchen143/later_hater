!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=2)}([function(t,e){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);i(1),i(0);function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var n=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.fn=e,this.t=i,this.timerObj=setInterval(this.fn,this.t)}var e,i,n;return e=t,(i=[{key:"stop",value:function(){return this.timerObj&&(clearInterval(this.timerObj),this.timerObj=null),this}},{key:"start",value:function(){return this.timerObj||(this.timerObj=setInterval(this.fn,this.t)),this}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.t;return this.t=t,this.stop().start()}}])&&s(e.prototype,i),n&&s(e,n),t}();function r(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var o=function(){function t(e,i,s,n,r,o,l,a){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.randomPoint=this.randomPoint.bind(this),this.right_limit=s,this.left_limit=n,this.lower_limit=o,this.upper_limit=r,this.player_x=l,this.player_y=a,this.move=this.move.bind(this),e&&i)this.left=e,this.top=i;else{var h=this.randomPoint();this.left=h.x,this.top=h.y}this.makeObstacle()}var e,i,s;return e=t,(i=[{key:"makeObstacle",value:function(){this.new_obstacle=document.createElement("div"),this.new_obstacle.classList.add("hater"),this.new_obstacle.style.position="relative",this.new_obstacle.style.left=this.left+"px",this.new_obstacle.style.top=this.top+"px",document.getElementById("board").appendChild(this.new_obstacle)}},{key:"randomPoint",value:function(){var t=0,e=0;for(t=Math.random()*(this.right_limit-this.left_limit)+this.left_limit,e=Math.random()*(this.lower_limit-this.upper_limit)+this.upper_limit;Math.abs(t-this.player_x)<200||Math.abs(e-this.player_y)<200;)t=Math.random()*(this.right_limit-this.left_limit)+this.left_limit,e=Math.random()*(this.lower_limit-this.upper_limit);return{x:t,y:e}}},{key:"move",value:function(t,e,i){if(!i){if(this.left<t+10){var s=parseInt(this.new_obstacle.style.left.split("px")[0]);s+=2,this.left=s,this.new_obstacle.style.left=this.left+"px"}if(this.left>t+10){var n=parseInt(this.new_obstacle.style.left.split("px")[0]);n-=2,this.left=n,this.new_obstacle.style.left=this.left+"px"}if(this.top<e-10){var r=parseInt(this.new_obstacle.style.top.split("px")[0]);r+=2,this.top=r,this.new_obstacle.style.top=this.top+"px"}if(this.top>e-10){var o=parseInt(this.new_obstacle.style.top.split("px")[0]);o-=2,this.top=o,this.new_obstacle.style.top=this.top+"px"}}}}])&&r(e.prototype,i),s&&r(e,s),t}();function l(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.increase_teleportation_meter=this.increase_teleportation_meter.bind(this),this.increaseScore=this.increaseScore.bind(this),this.getClickPosition=this.getClickPosition.bind(this),this.countUp=this.countUp.bind(this),this.paused=!0,this.haters=[],this.increaseScore=this.increaseScore.bind(this),this.start=this.start.bind(this),this.haterCheck=this.haterCheck.bind(this),this.moveHaters=this.moveHaters.bind(this),this.run_times=0,this.meter=document.getElementById("teleportation_meter"),this.lost=!1,this.board=document.getElementById("board"),this.theThing=document.getElementById("jae"),this.score=document.getElementById("scoreboard"),this.score_num=0,this.teleportation_meter=!1}var e,i,s;return e=t,(i=[{key:"increase_teleportation_meter",value:function(){var t=this.meter.style.width,e=parseInt(t.split("px")[0])+100;e<=300&&(this.meter.style.width=e+"px");var i=this.meter.style.width;parseInt(i.split("px")[0])>=300&&this.timer.stop()}},{key:"countUp",value:function(){this.counter=setInterval(this.increaseScore,10)}},{key:"increaseScore",value:function(){if(this.haterCheck()&&(this.lost=!0),!this.lost&&!this.paused){this.score_num+=1;var t=document.createTextNode(this.score_num);0!==this.score.childNodes.length&&this.score.removeChild(this.score.childNodes[0]),this.score.appendChild(t)}if(this.lost){this.stop(),clearInterval(this.counter);var e=document.getElementById("lost-modal-background"),i=(document.getElementById("lost-modal-child"),document.getElementById("final-score")),s=document.createTextNode(this.score_num);i.appendChild(s),e.style.display="block"}}},{key:"haterCheck",value:function(){for(var t=parseInt(this.theThing.style.left.split("px")[0]),e=parseInt(this.theThing.style.top.split("px")[0]),i=0;i<this.haters.length;i++)if(t+30<=this.haters[i].left+30&&t+30>=this.haters[i].left-30&&e-37>=this.haters[i].top-30&&e-37<=this.haters[i].top+10)return!0;return!1}},{key:"start",value:function(){var t;this.timer.start(),t="0px"===this.meter.style.width?3e3:"100px"===this.meter.style.width?2e3:"200px"===this.meter.style.width?1e3:0,this.teleportation=setTimeout(this.allow_teleport,t)}},{key:"allow_teleport",value:function(){this.teleportation_meter=!0}},{key:"getClickPosition",value:function(t){if(t.preventDefault(),teleportation_meter){var e=this.getPosition(t.currentTarget),i=t.clientX-e.x-this.theThing.clientWidth/2,s=t.clientY-e.y-this.theThing.clientHeight/2;teleportation_meter=!1,this.theThing.style.left=i+"px",this.theThing.style.top=s+"px",this.meter.style.width="0px";var n=this.board.clientWidth/2,r=this.board.clientHeight/2-this.theThing.clientHeight,l=n+n,a=n-n,h=r-(r+this.theThing.clientHeight),c=r+(r+this.theThing.clientHeight-10);this.haters.push(new o(null,null,l,a,h,c,i,s)),this.start()}}},{key:"getPosition",value:function(t){for(var e=0,i=0;t;){if("BODY"==t.tagName){var s=t.scrollLeft||document.documentElement.scrollLeft,n=t.scrollTop||document.documentElement.scrollTop;e+=t.offsetLeft-s+t.clientLeft,i+=t.offsetTop-n+t.clientTop}else e+=t.offsetLeft-t.scrollLeft+t.clientLeft,i+=t.offsetTop-t.scrollTop+t.clientTop;t=t.offsetParent}return{x:e,y:i}}},{key:"run",value:function(){this.board.addEventListener("click",this.getClickPosition,!1),this.timer=new n(this.increase_teleportation_meter,1e3),this.countUp(),this.start(),0===this.run_times&&(this.haters.push(new o(430,-7)),this.moving=new n(this.moveHaters,30),this.run_times+=1),this.paused=!1}},{key:"stop",value:function(){this.timer.stop(),this.paused=!0,clearInterval(this.counter),clearInterval(this.teleportation)}},{key:"moveHaters",value:function(){var t=this;this.haters.forEach((function(e){e.move(parseInt(t.theThing.style.left.split("px")[0]),parseInt(t.theThing.style.top.split("px")[0]),t.paused)}))}}])&&l(e.prototype,i),s&&l(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("modal-background"),e=document.getElementById("modal-child"),i=document.getElementById("modal-button"),s=document.getElementById("question");i.addEventListener("click",(function(i){i.preventDefault(),t.style.display="none",e.style.display="none",n.run()})),s.addEventListener("click",(function(i){i.preventDefault(),t.style.display="block",e.style.display="block",n.stop()}));var n=new a;document.getElementById("restart").addEventListener("click",(function(t){t.preventDefault(),r.style.display="none",location.reload()}),!1);var r=document.getElementById("lost-modal-background")}))}]);
//# sourceMappingURL=main.js.map