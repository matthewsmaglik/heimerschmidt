$(document).ready((function(){function e(e,o,t){ve.addClass("projectLoading"),$.get(o,(function(e){ga("send","pageview",o),je.stop(),U.html($(e).find("#project-wrapper").html()),_=!0,ve.removeClass("projectLoading"),TweenMax.to($(".projectLogo",ve),.3,{opacity:0,onComplete:C,onCompleteParams:[o]})}))}function o(e){X="project",Y=Me[e].url,""==Me[Z=e].fondo&&(Me[Z].fondo=$(Me[Z].objId).css("backgroundColor")),""==Me[Z].tipografia&&(Me[Z].tipografia=G)}function t(){$e=$(window).innerHeight(),windowWidth=$(window).innerWidth(),$("#content-intro-wrapper").css("height",$e-250+"px"),TweenMax.to($("#header-prevProject"),0,{top:$e-45+"px",left:58,width:$e-175+"px"}),TweenMax.to($("#header-nextProject"),0,{top:130,left:windowWidth-58,width:$e-175+"px"}),windowWidth>=800?($(".project").css("height","400px"),$(".project").css("width",ue/3+"%").css("width","+=50px"),"desktop"!=we&&("project"==X&&(ne=!0),I(),D(3),z(3),L()),we="desktop"):windowWidth<800&&windowWidth>550?($(".project").css("height","350px"),$(".project").css("width","35%").css("width","+=50px"),"tablet"!=we&&("project"==X&&(ne=!0),I(),D(2),z(2),L()),we="tablet"):windowWidth<=550&&($(".project").css("height","350px"),$(".project").css("width","70%"),"mobile"!=we&&("project"==X&&(ne=!0),I(),D(1),z(1)),we="mobile")}function n(e){"desktop"==e?$(".project").css("width",ue/3+"%").css("width","+=50px"):"tablet"==e?$(".project").css("width","35%").css("width","+=50px"):"mobile"==e&&$(".project").css("width","70%")}function s(){w(K),K.addClass("menuOpen"),TweenMax.to(K,.6,{opacity:1,ease:Expo.easeOut}),TweenMax.to(q,1,{top:"50%",ease:Expo.easeOut}),TweenMax.to(q,1.5,{css:{borderWidth:"20px"},delay:.3,ease:Expo.easeOut}),ga("send","event","button","click","Opens Menu")}function r(e){$(e).css("pointer-events","none"),$(e).css("cursor","default")}function i(e){e.preventDefault(),ge=!0,$("#menu-frame nav").fadeOut(300).promise().done((function(){w($("#projects-frame")),$("#menu-frame").css("z-index","90"),$("#projects-frame").css("z-index","100"),$("#projects-frame nav").fadeIn(300),ge=!1})),ga("send","event","button","click","Clicks Projects")}function a(e){e.preventDefault(),re=$("#projects-frame nav ul li").index($(this).parent()),se=$(Me[re].objId),h(),ga("send","event","button","click","Opens a Project from Menu")}function c(e){e.preventDefault(),c=!0,h(),ga("send","event","button","click","Clicks About")}function l(e){e.preventDefault(),l=!0,h(),ga("send","event","button","click","Clicks Follow")}function p(e){e.preventDefault(),p=!0,h(),ga("send","event","button","click","Clicks Archive")}function d(e){e.preventDefault(),d=!0,h(),ga("send","event","button","click","Clicks Kit Digital")}function h(){0==ge&&(K.removeClass("menuOpen"),TweenMax.to(q,1,{top:"45%",ease:Expo.easeOut}),TweenMax.to(K,.3,{opacity:0,ease:Expo.easeOut,onComplete:u}))}function u(){if(f(K),f($("#projects-frame")),q.css("top","45%"),q.css("border-width","0"),$("#menu-frame").css("z-index","100"),$("#projects-frame").css("z-index","90"),$("#projects-frame nav").fadeOut(0),$("#menu-frame nav").fadeIn(0),""!=se)if("home"==X){var e=se.parent().attr("href"),o=se.parent().attr("alt")+" — "+ie;de.pushState({urlPath:e},o,e),se=""}else te=re,M();if(1==c)if("home"==X){var t=$("#titleAbout").position();TweenMax.to(window,.6,{scrollTo:{y:t.top},ease:Cubic.easeInOut}),c=!1}else de.pushState({urlPath:ce},ie,ce);else if(1==l)if("home"==X){var t=$("#titleFollow").position();TweenMax.to(window,.6,{scrollTo:{y:t.top},ease:Cubic.easeInOut}),l=!1}else de.pushState({urlPath:ce},ie,ce);else 1==p?(r($("body")),$("body").css("opacity","0"),p=!1,$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",(function(e){console.log("Carga el archivo"),window.location.href="https://heimerschmidt.com",$(this).off(e)}))):1==d&&(r($("body")),$("body").css("opacity","0"),d=!1,$("body").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",(function(e){console.log("Carga el Kit Digital"),window.location.href="https://heimerschmidt.com/#/",$(this).off(e)})))}function f(e){e.css("display","none")}function w(e){e.css("display","block")}function g(){$(".project").hover((function(){$(this).css("border","20px solid "+J),$("span",this).css("opacity","1")}),(function(){$(this).css("border","0px solid "+J),$("span",this).css("opacity","0")})),$(" .project ").each((function(){x($(this))}))}function j(){$(" .project ").css("border","0px solid "+J),$(".project span").css("opacity","0"),$(" .project ").hover((function(){$(this).css("border","0px solid "+J)})),$(" .project ").each((function(){r($(this))}))}function x(e){$(e).css("pointer-events","all"),$(e).css("cursor","pointer")}function r(e){$(e).css("pointer-events","none"),$(e).css("cursor","default")}function v(e){if(e.preventDefault(),1){var o=$(this).parent().attr("href"),t=$(this).parent().attr("alt")+" — "+ie;de.pushState({urlPath:o},t,o),ga("send","event","button","click","Clicks on a Project")}else b($(this).parent().attr("href"),$(this))}function m(e){if($(Me[e].objId).hasClass("scrollFast"))var o,t,n=-670*((o=ke[e]-$("#content-projects-wrapper").position().top+$(window).height())+(t=-670*$(window).height()/$("#content-projects-wrapper").height()))/$("#content-projects-wrapper").height(),s=ke[e]+n+.028708133971291867*o+t;if($(Me[e].objId).hasClass("scrollSlow"))var o,t,n=670*((o=ke[e]-$("#content-projects-wrapper").position().top+$(window).height())+(t=670*$(window).height()/$("#content-projects-wrapper").height()))/$("#content-projects-wrapper").height(),s=ke[e]+n+.028708133971291867*o-t;if($(Me[e].objId).hasClass("scrollNormal"))var r,s=$(Me[e].objId).position().top-($(window).height()-$(Me[e].objId).height())/2;s=Number(Math.round(s+"e2")+"e-2"),console.log("scrollToProject —> positionOff: "+s),TweenMax.to(window,.3,{scrollTo:{y:s,autoKill:!1},ease:Cubic.easeInOut,onComplete:b,onCompleteParams:[ce+Me[e].url,$(Me[e].objId)]})}function b(e,o){console.log("openProject: "+e),console.log("projectObj: "+o),$.scrollLock(!0),j(),se="",ee=!1,ve=o,oe=e,I(),$(".project").each((function(e){$(this).attr("id")!=o.attr("id")||(""==Me[Z].fondo&&(Me[Z].fondo=B),"mobile"==we||"tablet"==we?je.to($(this),.7,{css:{backgroundColor:Me[Z].fondo,top:$(window).scrollTop(),left:0,width:$(window).width(),height:$(window).height()+130,zIndex:3,marginLeft:0},ease:Expo.easeInOut,delay:.3},"-=0.7"):je.to($(this),.7,{css:{backgroundColor:Me[Z].fondo,top:$(window).scrollTop(),left:0,width:$(window).width(),height:$(window).height(),zIndex:3,marginLeft:0},ease:Expo.easeInOut,delay:.3},"-=0.7"),je.to($(this),.7,{css:{color:Me[Z].tipografia}},"-=0.7"),je.to($("#header-logo #svgLogo path"),.7,{css:{fill:Me[Z].tipografia}},"-=0.7"),je.to($("#header-wrapper #header-menu-toggle svg line"),.7,{css:{stroke:Me[Z].tipografia}},"-=0.7"),je.to($("#header-wrapper #header-closeProject svg line"),.7,{css:{stroke:Me[Z].tipografia}},"-=0.7"),je.to($("body"),0,{backgroundColor:Me[Z].fondo,color:Me[Z].tipografia,delay:.2,onComplete:k}))}))}function k(){ee=!0,e(U,oe,U)}function C(e){X="project",Y=e,$("#project-wrapper .boton").css("color",Me[Z].tipografia),$("#project-wrapper .boton").css("border-color",Me[Z].tipografia),TweenMax.to($("#project-wrapper"),1,{css:{top:"150px",opacity:1},delay:.3,ease:Expo.easeOut}),w($("#header-closeProject")),x($("#header-closeProject")),$("#header-logo").on("click",P),$("#header-closeProject").on("click",P),TweenMax.to($("#header-closeProject"),.3,{css:{autoAlpha:1},ease:Expo.easeOut}),"mobile"!=we&&(Z>0&&(w($("#header-prevProject")),$("#header-prevProject").on("click",T),TweenMax.to($("#header-prevProject"),1,{opacity:1,ease:Expo.easeOut,delay:1}),x($("#header-prevProject"))),Z<Me.length-1&&(w($("#header-nextProject")),$("#header-nextProject").on("click",y),TweenMax.to($("#header-nextProject"),1,{opacity:1,ease:Expo.easeOut,delay:1}),x($("#header-nextProject")))),f($("#content-wrapper")),w($("#project-wrapper")),$("#project-wrapper img").unveil(250,(function(){$(this).load((function(){console.log("load image: "+$(this).attr("src")),$(this).fadeOut(0).fadeIn(600),$(this).hasClass("imgMac")&&($(this).prev(".ventanaMac").css("opacity","1"),$(this).css("min-height",""))}))})),window.scrollTo(0,0),$.scrollLock(!1)}function T(){te=Z-1,M(),ga("send","event","button","click","Clicks Previous Project")}function y(){te=Z+1,M(),ga("send","event","button","click","Clicks Next Project")}function P(e){e.preventDefault(),de.pushState({urlPath:ce},ie,ce),ga("send","event","button","click","Closes a Project")}function M(){$.scrollLock(!0),TweenMax.to($("#header-closeProject"),.2,{css:{autoAlpha:0},ease:Expo.easeOut}),TweenMax.to($(".projectLogo",ve),.3,{opacity:1,delay:.8}),TweenMax.to($("#header-prevProject"),.3,{opacity:0,ease:Expo.easeOut,delay:.2}),TweenMax.to($("#header-nextProject"),.3,{opacity:0,ease:Expo.easeOut,delay:.2}),r($("#header-closeProject")),r($("#header-prevProject")),r($("#header-nextProject")),$("#header-prevProject").off("click",T),$("#header-nextProject").off("click",y),$("#header-logo").off("click",P),$("#header-closeProject").off("click",P),$(".videoWrapper").html($(".videoWrapper").html()),TweenMax.to($("#project-wrapper"),.3,{css:{opacity:0},delay:.2,ease:Expo.easeIn,onComplete:E})}function E(){X="home",Y="",$("body").css("background-color",B),f($("header-closeProject")),f($("#header-prevProject")),f($("#header-nextProject")),f($("#project-wrapper")),$("#project-wrapper").css("top",$(window).innerHeight()),w($("#content-wrapper")),window.scrollTo(0,parseInt($(ve).css("top"))),$(ve).hasClass("scrollFast")&&(console.log("vuelve a color de su clase"),$(ve).css("background-color","#ffffff !important")),je.reverse()}function O(){$.scrollLock(!1),je.invalidate(),je.clear(),je.kill(),je=null,je=new TimelineMax({onReverseComplete:O}),g(),$(".project").css("margin-left",""),$(".project").css("left",""),f($("#header-closeProject")),n(we),ne&&(ne=!1,we="none",t()),"mobile"!=we&&(L(),F()),S()}function S(){if(null!=te){var e=Me[te].url,t=Me[te].titulo+" — "+ie;ce+Me[te].url==window.location.pathname?(o(te),m(te)):de.pushState({urlPath:e},t,e),te=null}if(c){var n=$("#titleAbout").position();TweenMax.to(window,.6,{scrollTo:{y:n.top},ease:Expo.easeInOut}),c=!1}if(l){var n=$("#titleFollow").position();TweenMax.to(window,.6,{scrollTo:{y:n.top},ease:Expo.easeInOut}),l=!1}}function L(){$(".project").each((function(e){$(this).hasClass("scrollSlow")?(Ce[e]=TweenMax.to($(this),1,{top:me,ease:Linear.easeNone}),Te[e]=new ScrollScene({triggerElement:"#content-projects-wrapper",triggerHook:"onEnter",duration:$("#content-projects-wrapper").height()}).setTween(Ce[e]).addTo(xe)):$(this).hasClass("scrollFast")&&(Ce[e]=TweenMax.to($(this),1,{top:be,ease:Linear.easeNone}),Te[e]=new ScrollScene({triggerElement:"#content-projects-wrapper",triggerHook:"onEnter",duration:$("#content-projects-wrapper").height()}).setTween(Ce[e]).addTo(xe))}))}function I(){if(console.log("removeScrolls()"),Te.length>0)for(var e=0;e<Te.length;e++)xe.removeScene(Te[e])}function A(){for(var e=0;e<Pe.length;e++)xe.removeScene(Pe[e]),Pe[e].destroy(),Pe=null}function D(e){console.log("colocaProjects()");var o=1;3==e?$(".project").each((function(e){W($(this)),1==o?($(this).addClass("pLeft"),$(this).addClass("scrollNormal"),$(this).css("z-index","1"),o=2):2==o?($(this).addClass("pCenter"),$(this).addClass("scrollFast"),$(this).css("z-index","2"),o=3):3==o&&($(this).addClass("pRight"),$(this).addClass("scrollSlow"),$(this).css("z-index","0"),o=1)})):2==e?$(".project").each((function(e){W($(this)),1==o?($(this).addClass("pLeft"),$(this).addClass("scrollFast"),$(this).css("z-index","1"),o=2):2==o&&($(this).addClass("pRight"),$(this).addClass("scrollNormal"),$(this).css("z-index","2"),o=1)})):1==e&&$(".project").each((function(e){W($(this)),$(this).addClass("pLeft"),$(this).addClass("scrollNormal")}))}function z(e){console.log("colocaAltos()");var o=1,t=0;$(".project").each((function(n){alto=$("#content-projects-wrapper").position().top+N(t,t+150),ke[n]=alto,$(this).css("top",alto),o+=1,3==e?o>3&&(o=1,t+=700):2==e?o>2&&(o=1,t+=550):1==e&&($(this).css("top",$("#content-projects-wrapper").position().top+400*n+"px"),o=1)}))}function F(){$(".project").each((function(e){$(this).css("top",ke[e])}))}function W(e){e.removeClass("pLeft"),e.removeClass("pCenter"),e.removeClass("pRight"),e.removeClass("scrollNormal"),e.removeClass("scrollSlow"),e.removeClass("scrollFast")}function N(e,o){return Math.floor(Math.random()*(o-e+1)+e)}function H(){$(".spanTitle").each((function(e){ye[e]=TweenMax.to($(this),.3,{scale:1.2,ease:Expo.easeOut}),Pe[e]=new ScrollScene({triggerElement:$(this),offset:-25,duration:300}).setTween(ye[e]).addTo(xe)}))}var R=$("#main-wrapper"),K=$("#menu-wrapper"),U=$("#project-wrapper"),V=$("#header-menu-toggle"),q=$("#menu-frame"),B="#f5f5f5",G="#353535",J="rgba(0,0,0,0.1)",Q=!0,X="home",Y="",Z=0,_=!1,ee=!1,oe="",te=null,ne=!1,se="",re="",ie="Heimer Schmidt",ae="https://migueltrias.com",ce="/",le,pe=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/),de=window.History;if(!de.enabled)return!1;if(State=de.getState(),1){var he=function(e){var t=(oe=e.url).match(/([^\/]*)\/*$/)[1]+"/";if(console.log("navCurrentView: "+X),console.log("fileUrl: "+t),"home"==X){for(index=0;index<Me.length;++index)if(ce+t==ce+Me[index].url){console.log("setCurrentProject "+index),o(index),m(index);break}}else if(oe!=Y){if(oe==ae+ce)te=null;else for(index=0;index<Me.length;++index)ce+t==ce+Me[index].url&&(te=index);M()}};de.Adapter.bind(window,"statechange",(function(){he(de.getState())}))}var $e=$(window).innerHeight(),ue=70,fe=70,we="none";$(window).on("resize",(function(){t()})),$(V).on("click",s),$(K).on("click",h),$("#openProjects").on("click",i),$(".menuProjectLink").on("click",a),$("#gotoAbout").on("click",c),$("#gotoFollow").on("click",l),$("#gotoArchive").on("click",p),$("#gotoKitDigital").on("click",d);var ge=!1,c=!1,l=!1,p=!1,d=!1;$(".project").on("click",v),g();var je=new TimelineMax({onReverseComplete:O}),xe=new ScrollMagic,ve,me="+=650",be="-=650",ke=[],Ce=[],Te=[],ye=new Array,Pe=new Array;tweenScroll=TweenMax.to($("#scrollDown"),.3,{opacity:0,ease:Expo.easeOut}),sceneScroll=new ScrollScene({triggerElement:"#content-projects-wrapper",triggerHook:"onEnter"}).setTween(tweenScroll).addTo(xe),$.scrollLock=function e(){function o(){s||(s=$("body")),r=s.css("overflow"),s.css("overflow","hidden"),n=!0}function t(){s.css("overflow",r),n=!1}var n=!1,s,r;return function e(s){arguments.length?s?o():t():n?t():o()}}(),t(),H(),$("#projects-frame nav").fadeOut(0);var Me=[];for(index=0;index<projectsList.length;++index)Me.push({titulo:projectsList[index].titulo,url:projectsList[index].url,objId:"#project-"+(index+1),fondo:projectsList[index].fondo,tipografia:projectsList[index].tipografia});$(window).bind("load",(function(){for($("body").css("opacity","1"),$("body").css("pointer-events","all"),index=0;index<Me.length;++index)if(window.location.pathname==ce+Me[index].url){X="project",Y=Me[index].url,Z=index,m(index);break}}))}));