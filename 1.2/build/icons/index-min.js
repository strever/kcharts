/*! kcharts - v1.2 - 2013-10-29 2:58:18 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/icons/index",function(t){var l=t.merge,e=t.isArray,r=[10,6],i="M",n="L",s="Z",a={trianglePath:function(t,l,e){var r=Math.sqrt(3)/3*e,a=1/6*e,o=[t,l-2/3*e+a],h=[t-r,l+1/3*e+a],c=[t+r,l+1/3*e+a],x=[i,o[0],o[1],n,h[0],h[1],n,c[0],c[1],s];return x},lineThrouth:function(t,l,e,r){var n=r.paper,s=r.size[0];return n.path([i,t-1.1*s*e,l,t+1.1*s*e,l].join(","))}},o={rect:function(t,e,i){var n=i.width||r[0],s=i.height||r[1],a=t-n/2,o=e-s/2,h=i.paper.rect(a,o,n,s).attr(l({},i.attrs));return h},square:function(t,e,i){return this.rect(t,e,l({width:r[1]},i))},linesquare:function(t,l,e){var i=this.square(t,l,e),n=r[1],s=e.paper.set();s.push(i);var o=a.lineThrouth(t,l,n,e);return s.push(o),s},diamond:function(t,l,e){var r=this.square(t,l,e).attr("transform","r45");return r},linediamond:function(t,l,e){var i=this.square(t,l,e).attr("transform","r45"),n=r[1],s=e.paper.set();s.push(i);var o=a.lineThrouth(t,l,n,e);return s.push(o),s},circle:function(t,l,e){var i;return i=e.paper.circle(t,l,r[1]/2)},linecircle:function(t,l,e){var i=this.circle(t,l,e),n=r[1],s=e.paper.set();s.push(i);var o=a.lineThrouth(t,l,n,e);return s.push(o),s},triangle:function(t,l,e){var i=r[1],n=a.trianglePath(t,l,i);return e.paper.path(n.join(","))},linetriangle:function(t,l,e){var i=r[1],n=a.trianglePath(t,l,i),s=e.paper.set();s.push(e.paper.path(n.join(",")));var o=a.lineThrouth(t,l,i,e);return s.push(o),s}},h={};for(var c in o)(function(l){var r=o[l];h[l]=function(l,i,n){var s=r.call(o,l,i,n);n.size&&(e(n.size)||(n.size=[n.size,n.size]),s.scale(n.size[0],n.size[1]));var a,h,c=n.attrs||{};return s.clear?(a=s[0],h=s[1],h.attr({stroke:c.fill||"#000","stroke-width":2*n.size[1]})):a=s,a.attr(t.merge({"stroke-width":0},n.attrs)),s}})(c);return h.BASIC=r,h});