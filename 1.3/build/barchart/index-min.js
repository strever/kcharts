/*! kcharts - v1.3 - 2014-01-04 9:39:16 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/barchart/theme",function(){var e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.3/barchart/cfg",function(){var e="ks-chart-",t=e+"default",r="{COLOR}";return{themeCls:t,autoRender:!0,colors:[],stackable:!1,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},bars:{isShow:!0,css:{background:r,border:"1px solid #fff"},barsRatio:.6,barRatio:.5},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}}}),KISSY.add("gallery/kcharts/1.3/barchart/index",function(e,t,r,a,n,o,i,s,c,l,d,h,f,p){var u,g,b=e.all,_="ks-chart-",m=_+"default",x=m+"-canvas",v=_+"evtlayout",w=v+"-bars",y="{COLOR}",C={initializer:function(){this.init()},init:function(){this._cfg||(this._cfg=this.userConfig);var t=this;if(t.chartType="barchart",n.prototype.init.call(t,t._cfg),t._$ctnNode[0]){t._bars={},t._finished=[],m=t._cfg.themeCls||p.themeCls,t._cfg=e.mix(e.mix(p,l[m],d,d,!0),t._cfg,d,d,!0),t.color=u=new i({themeCls:m}),t._cfg.colors.length>0&&u.removeAllColors();for(var r in t._cfg.colors)u.setColor(t._cfg.colors[r]);t._cfg.autoRender&&t.render(!0)}},drawBar:function(t,r,a){var o,i=this,s=i._cfg,c=i.paper,l=x+"-bars",d=i._innerContainer,h=i.color.getColor(t).DEFAULT,f=i.processAttr(s.bars.css,h),p="x"==s.zoomType?!1:!0,u=i._barsPos[t][r],g=(u.x-0).toFixed(2),b=(u.y-0).toFixed(2),_=(u.width-0).toFixed(2),m=(u.height-0).toFixed(2);if(s.anim){var v=s.anim.duration?e.isNumber(s.anim.duration)?s.anim.duration:.5:.5,w=s.anim.easing?s.anim.easing:"easeOut";if(p){var y=n.prototype.data2GrapicData.call(i,0,!0,!1);o=c.rect(y,b,0,m).attr({posx:g,posy:b}).addClass(l).css(f).animate({width:_,left:g-d.x},v,w,function(){a&&a()})}else{var C=n.prototype.data2GrapicData.call(i,0,!1,!0);o=c.rect(g,C,_,0).attr({posx:g,posy:b}).addClass(l).css(f).animate({height:m,top:b-d.y},v,w,function(){a&&a()})}}else o=c.rect(g,b,_,m).attr({posx:g,posy:b}).addClass(l).css(f),a&&a();return o},getBarsPos:function(){var e=this,t=e._cfg.zoomType,r=e._cfg.stackable,a=e._innerContainer,o="y"==t,i=r?1:n.prototype.obj2Array(e._clonePoints).length,s=e._cfg.bars.barsRatio,c=e._cfg.bars.barRatio,l=o?e._pointsY.length>1?e._pointsY[1].y-e._pointsY[0].y:a.height:e._pointsX.length>1?e._pointsX[1].x-e._pointsX[0].x:a.width,d=l*s,h=c>=1?0:(1-c)/c,f=d/(i+(i-1)*h),p=f*(1-c)/c,u=r?0:f+p,g=(e._innerContainer.bl.y,e._innerContainer.bl.x),b=(l*(1-s)-l)/2,_=[];e._barsPos={};for(var m in e._points){var x=[];if(o){var v=n.prototype.data2GrapicData.call(e,0,!0,!1);for(var w in e._points[m]){var y={},C=e._points[m][w].x,A=Math.abs(C-v);y.y=b+e._points[m][w].y,r?(y.x=g+(_[w]||0),_[w]=_[w]?_[w]+A:A):y.x=C>v?C-A:v-A,y.width=A,y.height=f,x.push(y)}}else{var L=n.prototype.data2GrapicData.call(e,0,!1,!0);for(var w in e._points[m]){var y={},k=e._points[m][w].y,E=Math.abs(L-k);y.x=b+e._points[m][w].x,r?(y.y=k-(_[w]||0),_[w]=_[w]?_[w]+E:E):y.y=k>L?L:k,y.width=f,y.height=E,x.push(y)}}b+=u,e._barsPos[m]=x}},drawBars:function(e){var t=this;t._cfg;for(var r in t._barsPos){var a=[],n=[];for(var o in t._barsPos[r]){var i=t._barsPos[r][o];n[o]=i,a[o]=t.drawBar(r,o,function(){t._finished.push(!0),e&&t._finished.length==t._cfg.series.length&&e()}).attr({barGroup:r,barIndex:o,defaultColor:u.getColor(r).DEFAULT,hoverColor:u.getColor(r).HOVER})}var s={bars:a,posInfos:n,color:u.getColor(r)};t._bars[r]=s}return t._bars},renderTip:function(){if(this._cfg.tip.isShow){var t=this,r=t._cfg,a=t._innerContainer,n=r.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{},o=e.mix(r.tip,{rootNode:t._$ctnNode,clsName:r.themeCls,boundry:n});return t.tip=new h(o),t.tip}},renderEvtLayout:function(){var e,t=this,r=t._innerContainer,a=(r.tl.y,t._points[0],r.height);t._multiple,t._evtEls._bars=[],e=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new s(t._$ctnNode,{clsName:v,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var n in t._barsPos){var o=[];for(var i in t._barsPos[n]){var c=t._barsPos[n][i];o[i]=e.rect(c.x,c.y,c.width,c.height).addClass(w).attr({barGroup:n,barIndex:i})}t._evtEls._bars.push(o)}return e},clearEvtLayout:function(){var e=this;if(e._evtEls._bars)for(var t in e._evtEls._bars)for(var r in e._evtEls._bars[t])e._evtEls._bars[t][r].remove()},renderLegend:function(){if(this._cfg.legend.isShow){var t=this,r=t._cfg.legend,a=r.container&&b(r.container)[0]?b(r.container):t._$ctnNode,n=t._innerContainer,o=t.color._colors,i=o.length,s=t._cfg,l=t._cfg.series,d=e.map(l,function(e,t){t%=i;var r={},a=o[t];return r.text=e.text,r.DEFAULT=a.DEFAULT,r.HOVER=a.HOVER,r}),h=e.merge({interval:20,iconright:5,showicon:!0},s.legend.globalConfig);return t.legend=new c({container:a,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:s.legend.align||"bc",offset:s.legend.offset||(/t/g.test(s.legend.align)?[0,0]:[0,20]),globalConfig:h,config:d}),t.legend.on("click",function(e){var t=e.index,r=(e.text,e.icon,e.el);1!=r.hide?(this.hideBar(t),r.hide=1,r.disable()):(this.showBar(t),r.hide=0,r.enable())},this),t.legend}},render:function(t){var r=this,a=r._cfg,i=r._innerContainer,c=a.themeCls;t&&r._$ctnNode.html(""),r.raphaelPaper=o(r._$ctnNode[0],a.width,a.height),r.paper=new s(r._$ctnNode,{clsName:x,width:i.width,height:i.height,left:i.tl.x,top:i.tl.y}),r._clonePoints=r._points,r.getBarsPos(),r.htmlPaper=new s(r._$ctnNode,{clsName:c}),n.Common.drawTitle.call(null,this,c),n.Common.drawSubTitle.call(null,this,c),r.renderEvtLayout(),r.renderTip(),n.Common.drawAreas.call(null,this),n.Common.drawGridsX.call(null,this),n.Common.drawGridsY.call(null,this),n.Common.drawAxisX.call(null,this),n.Common.drawAxisY.call(null,this),n.Common.drawLabelsX.call(null,this),n.Common.drawLabelsY.call(null,this),r.renderLegend(),r.drawBars(function(){r.afterRender(),r.fix2Resize()}),r.bindEvt(),e.log(r)},bindEvt:function(){var e=this,t=e._cfg;f.detach(b("."+w,e._$ctnNode),"mouseenter"),f.on(b("."+w,e._$ctnNode),"mouseenter",function(r){var a=b(r.currentTarget),n=a.attr("barIndex"),o=a.attr("barGroup");t.tip.isShow&&e.tipHandler(o,n),e.barChange(o,n)}),f.detach(b("."+w,e._$ctnNode),"click"),f.on(b("."+w,e._$ctnNode),"click",function(t){var r=b(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup");e.barClick(n,a)}),f.detach(b("."+w,e._$ctnNode),"mouseleave"),f.on(b("."+w,e._$ctnNode),"mouseleave",function(t){var r=b(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup"),o=e._bars[n].bars[a];o.css({background:o.attr("defaultColor")})}),f.detach(e._evtEls.paper.$paper,"mouseleave"),f.on(e._evtEls.paper.$paper,"mouseleave",function(){e.tip&&e.tip.hide(),e.paperLeave()})},paperLeave:function(){var e=this;e.fire("paperLeave",e)},barChange:function(t,r){var a=this,n=a._bars[t],o=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barChange",o)},barClick:function(t,r){var a=this,n=a._bars[t],o=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barClick",o)},tipHandler:function(t,r){var a=this,n=a._cfg,o=a.tip,i="y"==n.zoomType?!0:!1,s=(o.getInstance(),a._bars[t].bars[r]),c=s.attr("defaultColor"),l=a._cfg.tip.template,d=i?s.attr("posx")- -s.width()- -a._innerContainer.x:s.attr("posx"),h=s.attr("posy"),f=e.merge(a._points[t][r].dataInfo,n.series[t]);delete f.data,a._points[t][r].dataInfo,s.css({background:s.attr("hoverColor")}),l&&(e.mix(f,{groupindex:t,barindex:r}),o.fire("setcontent",{data:f}),o.fire("move",{x:d,y:h,style:a.processAttr(n.tip.css,c)}))},processAttr:function(t,r){var a=e.clone(t);for(var n in a)a[n]&&"string"==typeof a[n]&&(a[n]=a[n].replace(y,r));return a},showBar:function(t){var r=this,a=r._innerContainer;n.prototype.recoveryData.call(r,t),r._clonePoints[t]=r._points[t],n.Common.animateGridsAndLabels.call(null,r),r.getBarsPos();for(var o in r._bars)if(o!=t)for(var i in r._bars[o].bars)if(r._barsPos[o]){var s=r._barsPos[o][i];s&&r._bars[o].bars[i].stop().animate({height:s.height,width:s.width,top:s.y-a.y,left:s.x-a.x},.4,"easeOut",function(){}),r._bars[o].bars[i].attr({posx:s.x,posy:s.y})}var c=[],l=[];for(var i in r._barsPos[t]){var s=r._barsPos[t][i];c[i]=s,l[i]=r.drawBar(t,i).attr({barGroup:t,barIndex:i,defaultColor:u.getColor(t).DEFAULT,hoverColor:u.getColor(t).HOVER})}r._bars[t]={bars:l,posInfos:c,color:u.getColor(o)},r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var r=e.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,r()})},hideBar:function(t){var r=this,a=r._innerContainer;n.prototype.removeData.call(r,t),delete r._clonePoints[t],n.Common.animateGridsAndLabels.call(null,r),r.getBarsPos();for(var o in r._bars[t].bars)r._bars[t].bars[o].remove();for(var o in r._bars)if(o!=t)for(var i in r._bars[o].bars){var s=r._barsPos[o]?r._barsPos[o][i]:"";s&&r._bars[o].bars[i].stop().animate({height:s.height,width:s.width,top:s.y-a.y,left:s.x-a.x},.4,"easeOut",function(){}),r._bars[o].bars[i].attr({posx:s.x,posy:s.y})}r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},afterRender:function(){var e=this;e.fire("afterRender",e)},getHtmlPaper:function(){return this.paper},getRaphaelPaper:function(){return this.raphaelPaper},clear:function(){this._$ctnNode.html("")}};return r.extend?g=n.extend(C):(g=function(e){var t=this;t._cfg=e,t.init()},e.extend(g,n,C)),g},{requires:["node","base","gallery/template/1.0/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","event","./cfg"]});