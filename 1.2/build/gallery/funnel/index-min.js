/*! kcharts - v1.2 - 2013-10-29 2:58:18 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/gallery/funnel/index",function(t,e,l,i,r,n){function s(e,l){l&&(this.content=e,this.offset={},this.config=t.mix(o,l),this.initConfig(),this.paper=new r(this.content.replace("#","")),this.init())}var a=e.all,o={chart:{type:"funnel",marginRight:100},title:{text:"漏斗",color:"#274b6d"},plotOptions:{series:{dataLabels:{format:"<h4>{{title}}</h4>{{title}}:{{pointer}}"},neckWidth:"50%",neckHeight:"50%"}},legend:{enabled:!1},series:[{name:"",data:[]}]};return t.augment(s,l,{initConfig:function(){this.set("neckWidth",this.config.plotOptions.series.neckWidth),this.set("neckHeight",this.config.plotOptions.series.neckHeight),this.set("neckStep",this.config.plotOptions.series.neckStep)},setConfig:function(){var t=parseInt(this.get("neckWidth"))/100,e=parseInt(this.get("neckHeight"))/100,l=parseInt(this.get("neckStep")),i=a(this.content).width()-this.config.chart.marginRight,r=0,n=a(this.content).height();0==e&&(e=1),this.set("width",i),this.set("height",n-r-50),this.set("step",l),this.set("top",r),this.set("bottom",(i-i*t)/2),this.set("neckHeightt",e*(n-r-50))},_title:function(){var t=this.config.title,e=a("<h2></h2>").html(t.text).css({display:"block",position:"absolute",fontSize:14,fontFamily:"Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",left:t.x,top:-50,height:50,lineHeight:"50px",width:this.get("width"),textAlign:"center",color:t.color});e.appendTo(this.content)},_requsestArry:function(e){var l=this,i=[],r=0;return t.each(e,function(t){r+=t}),0!=r?t.each(e,function(t){i.push(t/r*l.get("height"))}):i=[0],i},_total:function(e){var l=0,i=[],r=this;return t.each(e,function(t){l+=t[1]}),t.each(e,function(t){i.push(t[1]/l*r.get("height"))}),i},_path:function(e){var l=this,i=this.get("width"),r=this.get("top"),n=this.get("bottom"),s=this.get("height"),a=this.get("neckHeightt")+r,o=r,c=r,h=this.config.series[0].data,x=this.config.plotOptions.background,f=this._nowNum(e);return 0==e[0]&&1==e.length?(l.destroy(),void 0):(t.each(e,function(t,e){c+=t;var r=l._countPage(o),y=l._countPage(t);a==s?l.paper.path("M"+r+","+o+"L"+(i-r)+","+o+"L"+(i-r-y)+","+c+"L"+(r+y)+","+c+"Z").attr({stroke:"#fff",fill:x[e],"stroke-width":l.get("step")}):f>e?l.paper.path("M"+r+","+o+"L"+(i-r)+","+o+"L"+(i-r-y)+","+c+"L"+(r+y)+","+c+"Z").attr({stroke:"#fff",fill:x[e],"stroke-width":l.get("step")}):e==f?l.paper.path("M"+r+","+o+"L"+(i-r)+","+o+"L"+(i-n)+","+a+"L"+(i-n)+","+c+"L"+n+","+c+"L"+n+","+a+"Z").attr({stroke:"#fff",fill:x[e],"stroke-width":l.get("step")}):(r=n,y=l._countPage(0),l.paper.path("M"+r+","+o+"L"+(i-r)+","+o+"L"+(i-r-y)+","+c+"L"+(r+y)+","+c+"Z").attr({stroke:"#fff",fill:x[e],"stroke-width":l.get("step")})),l.offset[h[e][0]]=[],l.offset[h[e][0]][0]={x:r,y:o},l.offset[h[e][0]][1]={x:i-r,y:o},l.offset[h[e][0]][2]={x:i-r-y,y:c},l.offset[h[e][0]][3]={x:r+y,y:c},e==f&&(l.offset[h[e][0]][2]={x:i-n,y:a},l.offset[h[e][0]][3]={x:i-n,y:c},l.offset[h[e][0]][4]={x:n,y:c},l.offset[h[e][0]][5]={x:n,y:a}),o+=t}),void 0)},_linePath:function(e){var l=this,i=this.get("width"),r=this.get("bottom"),n=this.get("top"),s=this.get("neckHeightt"),a=(this.get("height"),n),o=n;this._nowNum(e),t.each(e,function(t){if(0!=t){var e=o+t/2+a-n,c=i-l._countPage(e);e>s&&(c=i-r),l.paper.path("M"+c+","+e+"L"+(c+50)+","+e).attr({stroke:"#000",fill:"#000","stroke-width":.5}),o+=t}})},_nameSeat:function(e){var l=this,i=a(this.content),r=this.config,n=this.config.series[0],s=this.get("width"),o=this.get("bottom"),c=(this.get("height"),this.get("top")),h=this.get("neckHeightt"),x=c,f=c;this._nowNum(e),r.plotOptions.background,_html="",t.each(e,function(t,e){if(0!=t){({title:r.series[0].data[e][0],name:r.series[0].name,pointer:l._slice(r.series[0].data[e][1])});var y=f+t/2+x-c,u=s-l._countPage(y);y>h&&(u=s-o);var d='<strong style="font-weight:bold">'+n.data[e][0]+'</strong><span style="font-size:11px">('+l._slice(n.data[e][1])+")</span>";html=a("<div></div>").html(d).attr("data-num",e).addClass("ks-funnel-line").css({fontSize:"11px",left:u+55,top:y-8,fontFamily:"Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif",position:"absolute"}),html.appendTo(i)}f+=t})},_slice:function(t){var e=""+t,l=e.length;return l>3&&(e=e.slice(0,l-3)+","+e.slice(l-3)),e},_nowNum:function(e){var l=this.get("top"),i=l,r=l,n=0,s=this.get("neckHeightt")+l;return t.each(e,function(t,e){r+=t,s>i&&r>s&&(n=e),i+=t}),n},_countPage:function(t){var e=this.get("bottom"),l=this.get("neckHeightt"),i=t*e/l;return i},_template:function(e){var l="",i=this.get("width"),r=this.config.plotOptions.background,n=(this.config.plotOptions.backgroundHover,this.config.series[0]);t.each(e,function(t,i){var s="display:inline-block;margin-right:5px;width:10px;height:10px;background:"+r[i];l+='<span class="ks-funnel-legend" data-count='+e[i]+" data-num="+i+' style="margin:0 5px;cursor:pointer;color:'+r[i]+'"><i style='+s+"></i>"+n.data[i][0]+"</span>"}),a("<div></div>").addClass("ks-funnel-foot").html(l).css({width:i,position:"absolute",bottom:20,left:0,textAlign:"center"}).appendTo(a(this.content))},destroy:function(t){a(this.content).all("svg").empty(),a(".ks-funnel-line")&&a(".ks-funnel-line").remove(),t&&t()},_evt:function(){var e=this,l=this.config,i=l.plotOptions.background,r=l.plotOptions.backgroundHover,s=a(this.content).all("path");this.config.series[0];var o=new n({rootNode:e.content,boundry:{x:0,y:0,width:e.get("width"),height:e.get("height")}});s.on("click",function(l){var i=t.indexOf(this,s),r={toIndex:i,content:l};e.pathClick(r)}),s.on("mousemove",function(n){var c=t.indexOf(this,s);a(this).attr("fill",r[c]);var h={title:l.series[0].data[c][0],name:l.series[0].name,pointer:e._slice(l.series[0].data[c][1])};o.$tip.css({border:"1px "+i[c]+" solid"}),o.renderTemplate(l.plotOptions.series.dataLabels.format,h),o.animateTo(n.offsetX+10,n.offsetY+10,function(){})}),s.on("mouseleave",function(){var e=t.indexOf(this,s);a(this).attr("fill",i[e]),o.hide()})},_event:function(e){var l=this,i=this.config.plotOptions.background;this.config.plotOptions.backgroundHover,a(this.content).all("path"),this.config.series[0],t.Event.delegate(this.content,"click",".ks-funnel-legend",function(t){var r=a(t.currentTarget),n=parseInt(r.attr("data-num"));"1"!=r.attr("data-flag")?(r.attr("data-flag","1"),r.css({color:"#ccc"}),r.all("i").css({background:"#ccc"}),e[n]=0):(r.attr("data-flag","0"),r.css({color:i[n]}),r.all("i").css({background:i[n]}),e[n]=parseFloat(r.attr("data-count"))),l.set("data",l._requsestArry(e)),l._render(l._requsestArry(e))}),this.on("afterNeckHeightChange",function(){l.get("neckHeight"),l._rednderVal()}),this.on("afterNeckWidthChange",function(){l.get("neckWidth"),l._rednderVal()}),this.on("afterNeckStepChange",function(){l.get("neckStep"),l._rednderVal()})},_rednderVal:function(){var t=this;t.setConfig(),t._render(t.get("data"))},_render:function(t){this.destroy(),this._path(t),this._linePath(t),this._nameSeat(t),this._evt()},init:function(){a(this.content).css({marginTop:50}),this.setConfig(),this._title(),this.set("data",this._total(this.config.series[0].data)),this._render(this.get("data")),this._template(this.get("data")),this._event(this.get("data"))},pathClick:function(t){var e=this;e.fire("pathClick",t)}}),s},{attach:!1,requires:["node","base","template","gallery/kcharts/1.2/raphael/","gallery/kcharts/1.1/tip/index"]});