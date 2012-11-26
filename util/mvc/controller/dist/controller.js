define("mix/core/util/mvc/controller/0.1.0/controller",["mix/core/base/reset/1.0.0/reset","mix/core/base/class/1.0.0/class","mix/core/base/message/1.0.0/message","mix/core/util/history/0.2.0/history","mix/core/util/router/0.2.0/router"],function(e,t,n){e("mix/core/base/reset/1.0.0/reset");var r=e("mix/core/base/class/1.0.0/class"),i=e("mix/core/base/message/1.0.0/message"),s=e("mix/core/util/history/0.2.0/history").singleton,o=e("mix/core/util/router/0.2.0/router").singleton,u=undefined,a=i.spliterReg,f=i.atReg,l=r.create({Implements:i,initialize:function(e,t){var n=this,r=n._options=Object.extend({routes:{},historyEvents:{"navigator:route":n._routeHandler},controllerEvents:{destroy:n.destroy}},t||{});i.prototype.initialize.call(n,"controller."+e),n._appname=e,n._views={},n.on("install",function(){n._bindRoutes(r.routes),n._bindHistoryEvents(r.historyEvents),n._bindControllerEvents(r.controllerEvents),s.match()})},_bindRoutes:function(e){var t=this,n=t._appname;Object.each(e,function(e,t){o.addRoute(n+"/"+t,e)})},_unbindRoutes:function(e){var t=this,n=t._appname;Object.each(e,function(e,t){o.removeRoute(n+"/"+t)})},_bindHistoryEvents:function(e){var t=this;Object.each(e,function(e,n){s.on(n,e,t)})},_unbindHistoryEvents:function(e){var t=this;Object.each(e,function(e,t){s.off(t,e)})},_bindControllerEvents:function(e){var t=this;Object.each(e,function(e,n){t.on(n,e,t)})},_routeHandler:function(e,t){var n=this,r=o.getState(),i=r.params.slice(0);if(n._appname!==e)return;i.unshift("route:"+t),n.trigger.apply(n,i)},getName:function(){var e=this;return e._appname},getViewport:function(){var e=this,t=e._appname;return"viewport-"+t},addView:function(e,t){var n=this,i,s;return e.superclass&&e.superclass instanceof r&&(i=e,e=new i(u,n,t)),s=e.getName(),n._views[s]=e,s},getView:function(e){var t=this;return t._views[e]},getParameter:function(e){var t=this,n=o.getState(),r=n.params,i=n.paramKeys,s=i[e];if(s!=u)return r[s]},getArgument:function(e){var t=this,n=o.getState(),r=n.args;return r[e]},trigger:function(e){var t=this,n=Array.make(arguments),r=(f.exec(e)||[])[1];r&&(n[0]=e.replace(a," @"+r+":")),i.prototype.trigger.apply(t,n)},destroy:function(){var e=this,t=e._options,n=t.routes,r=t.historyEvents;e._unbindRoutes(n),e._unbindHistoryEvents(r)}});n.exports=l});