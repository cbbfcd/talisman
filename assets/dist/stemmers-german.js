webpackJsonp([10],{0:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=l(2),a=r(n),u=l(17),c=l(10),o=r(c),d=l(398),f=r(d);(0,u.render)(a["default"].createElement(o["default"],{algorithm:f["default"]}),document.getElementById("caumanns-mount"))},10:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(2),a=r(n),u=l(14),c=l(12),o=r(c),d=function(e){return e},f=function(e,t){return e===t},i=(0,u.compose)((0,u.withState)("wordOne","setWordOne",""),(0,u.withState)("wordTwo","setWordTwo","")),s=i(function(e){var t=e.algorithm,l=e.codeRenderer,r=void 0===l?d:l,n=e.comparator,u=void 0===n?f:n,c=e.wordOne,i=e.wordTwo,s=e.setWordOne,g=e.setWordTwo,p=c?t(c):null,m=i?t(i):null,h=p?r(p):"",v=m?r(m):"",E="·",w="default";return p&&m&&(u(p,m)?(E="=~",w="success"):(E="!~",w="error")),a["default"].createElement("table",null,a["default"].createElement("tbody",null,a["default"].createElement("tr",null,a["default"].createElement("td",null,a["default"].createElement(o["default"],{placeholder:"Word 1",value:c,onChange:function(e){return s(e.target.value)},status:w})),a["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},a["default"].createElement("strong",null,E)),a["default"].createElement("td",null,a["default"].createElement(o["default"],{placeholder:"Word 2",value:i,onChange:function(e){return g(e.target.value)},status:w}))),a["default"].createElement("tr",null,a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},h," "),a["default"].createElement("td",null),a["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},v," "))))});t["default"]=s},398:function(e,t){"use strict";function l(e){if(!e)return"";var t=e[0]===e.toUpperCase();e=e.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss");for(var l=e[0],r=1,n=e.length;r<n;r++)l+=e[r]!==e[r-1]?e[r]:"*";for(l=l.replace(/sch/g,"$").replace(/ch/g,"§").replace(/ei/g,"%").replace(/ie/g,"&").replace(/ig/g,"#").replace(/st/g,"!");l.length>3;){var a=l.slice(-2),u=l[l.length-1];if(l.length>4&&("em"===a||"er"===a)||l.length>5&&"nd"===a)l=l.slice(0,-2);else{if("e"!==u&&"s"!==u&&"n"!==u&&(t||"t"!==u&&"!"!==u))break;l=l.slice(0,-1)}}l.length>5&&"erin*"===l.slice(-5)&&(l=l.slice(0,-1)),"z"===l[l.length-1]&&(l=l.slice(0,-1)+"x"),l=l.replace(/\$/g,"sch").replace(/§/g,"ch").replace(/%/g,"ei").replace(/&/g,"ie").replace(/#/g,"ig").replace(/!/g,"st");for(var c=l[0],o=1,d=l.length;o<d;o++)c+="*"===l[o]?c[o-1]:l[o];return c.length<4&&(c=c.replace("gege","ge")),c}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=l}});