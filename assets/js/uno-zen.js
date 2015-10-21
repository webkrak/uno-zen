/**
 * uno-zen - Minimalist and Elegant theme for Ghost
 * @version 2.5.7
 * @link    https://github.com/kikobeats/uno-zen
 * @author  Kiko Beats (https://github.com/kikobeats)
 * @license MIT
 */
(function(){"use strict";$(function(){var Uno;return window.Uno=Uno={version:"2.5.7",search:{container:function(){return $("#results")},form:function(action){return $("#search-container")[action]()}},loadingBar:function(action){return $(".pace")[action]()},context:function(){var className;return className=document.body.className.split(" ")[0].split("-")[0],""===className?"error":className},app:function(){return document.body}(),is:function(property,value){return this.app.dataset[property]===value},readTime:function(){var DateInDays;return(DateInDays=function(selector,cb){return $(selector).each(function(){var postDate,postDateInDays,postDateNow;return postDate=$(this).html(),postDateNow=new Date(Date.now()),postDateInDays=Math.floor((postDateNow-new Date(postDate))/864e5),0===postDateInDays?postDateInDays="today":1===postDateInDays?postDateInDays="yesterday":postDateInDays+=" days ago",$(this).html(postDateInDays),$(this).mouseover(function(){return $(this).html(postDate)}),$(this).mouseout(function(){return $(this).html(postDateInDays)})})})(".post.meta > time")},device:function(){var h,w;return w=window.innerWidth,h=window.innerHeight,480>=w?"mobile":1024>=w?"tablet":"desktop"}}})}).call(this),function(){"use strict";$(function(){var el;return el=Uno.app,el.dataset.page=Uno.context(),el.dataset.device=Uno.device(),Uno.readTime(),Uno.is("device","desktop")||FastClick.attach(el),window.profile_title&&$("#profile-title").text(window.profile_title),window.profile_resume&&$("#profile-resume").text(window.profile_resume),Uno.is("device","desktop")&&$("a").not('[href*="mailto:"]').click(function(){return-1===this.href.indexOf(location.hostname)?(window.open($(this).attr("href")),!1):void 0}),Uno.is("page","post")&&($("main").readingTime({readingTimeTarget:".post.reading-time > span"}),$(".content").fitVids()),Uno.is("page","error")?$("#panic-button").click(function(){var s;return s=document.createElement("script"),s.setAttribute("src","https://nthitz.github.io/turndownforwhatjs/tdfw.js"),document.body.appendChild(s)}):void 0})}.call(this),function(){"use strict";$(function(){var _animate,_expand,isOpen;return isOpen="#open"===location.hash,_animate=function(){return setTimeout(function(){return $(".cover").addClass("animated")},1e3)},_expand=function(options){return $("main, .cover, .links > li, html").toggleClass("expanded"),Uno.search.form(options.form)},$("#menu-button").click(function(){return $(".cover, main, #menu-button, html").toggleClass("expanded")}),$(".nav-blog > a, #avatar-link").click(function(event){return Uno.is("page","home")?(event.preventDefault(),location.hash=""===location.hash?"#open":"",Uno.is("device","desktop")?_expand({form:"toggle"}):$("#menu-button").trigger("click")):void 0}),Uno.is("device","desktop")&&Uno.is("page","home")&&(_animate(),!isOpen)?_expand({form:"hide"}):void 0})}.call(this),function(){"use strict";$(function(){var hideSearch,showSearch;return showSearch=function(){return $(".content").hide(),$("#search-results").addClass("active")},hideSearch=function(){return $(".content").show(),$("#search-results").removeClass("active")},$("#search-field").ghostHunter({results:"#search-results",zeroResultsInfo:!1,onKeyUp:!0,displaySearchInfo:!0,result_template:"<a class=\"result\" href='{{link}}'>\n  <h2>{{title}}</h2>\n  <h4>{{pubDate}}</h4>\n</a>",onComplete:function(query){return query.length>0?showSearch():hideSearch()}})})}.call(this);