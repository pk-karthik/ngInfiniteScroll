(function(){var e;$(function(){var e,t;return e=function(){return location.hash="#download"},t=function(){return location.hash=""},location.hash==="#download"&&$("#download-modal").reveal({close:t}),$("[data-show-downloads]").click(function(n){return $("#download-modal").reveal({open:e,close:t})})}),e=angular.module("infiniteScrollSite",["infinite-scroll"]),e.controller("DownloadsController",["$scope",function(e){var t,n,r,i,s,o,u;return u=function(e){var t,n,r,i,s;e=e.replace("v",""),n=e.split("."),s=[];for(r=0,i=n.length;r<i;r++)t=n[r],s.push(parseInt(t,10));return s},s=function(e){var t;try{return t=u(e),t[1]%2===0}catch(n){return!1}},o=function(e){var t;try{return t=u(e),t[1]%2===1}catch(n){return!1}},e.versions=["master"],e.versions=_(e.versions).sort(function(e,t){var n,r,i,s,o,a;if(e==="master")return-1;if(t==="master")return 1;o=function(){var n,i,s,o;s=[e,t],o=[];for(n=0,i=s.length;n<i;n++)r=s[n],o.push(u(r));return o}(),e=o[0],t=o[1],a=[0,1,2];for(i=0,s=a.length;i<s;i++){n=a[i];if(e[n]>t[n])return-1;if(e[n]<t[n])return 1}return 0}),r=_(e.versions).filter(s),i=_(e.versions).filter(o),t=r[0],n=i[0],e.selectedVersion=t?t:"master",e.versionIsStable=s,e.versionIsUnstable=o,e.versionLabel=function(e){var r;return r=e,e===n&&(r+=" (latest unstable release)"),e===t&&(r+=" (latest stable release)"),e==="master"&&(r+=" (development head)"),r}}]),e.controller("DemoController",["$scope","$timeout",function(e,t){var n,r;return e.items=function(){r=[];for(n=1;n<=64;n++)r.push(n);return r}.apply(this),e.enabled=!0,e.loadMore=function(){var t,n,r,i;t=e.items[e.items.length-1],i=[];for(n=r=1;r<=8;n=++r)i.push(e.items.push(t+n));return i}}])}).call(this);