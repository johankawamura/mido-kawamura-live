(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{344:function(o,t,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(81).default)("c904561c",content,!0,{sourceMap:!1})},345:function(o,t,n){"use strict";n(344)},346:function(o,t,n){var e=n(80)((function(i){return i[1]}));e.push([o.i,"html{background-color:#892cdc!important}body{background-color:#fff;min-height:100vh;position:relative}.content{padding-bottom:400px!important}footer{bottom:0;height:400px;position:absolute;width:100%}.anchor-component{font-weight:700;-webkit-text-decoration:none;text-decoration:none}@media(max-width:767px){.anchor-component{align-items:center;border-radius:15px;display:flex;font-size:1.25em;font-weight:500;height:4em;justify-content:center;width:var(--multiplier)}}@media(min-width:768px){.anchor-component{align-items:center;border-radius:15px;display:flex;font-size:1em;font-weight:500;height:4.5em;justify-content:center;width:var(--multiplier)}}.anchor-component.background-black{background-color:#000;color:#feffff;transition:all .3s ease}.anchor-component.background-clear{color:#000}.anchor-component.background-main{background-color:#892cdc;color:#feffff;transition:all .3s ease}@media(pointer:fine){.anchor-component.background-black:hover,.anchor-component.background-main:hover{box-shadow:0 10px 35px -10px #892cdc,5px 10px 15px 5px;transform:translateY(-5px)}}",""]),e.locals={},o.exports=e},352:function(o,t,n){"use strict";n.r(t);n(47),n(217);var e={props:{url:{required:!0,type:String},variant:{type:String,default:"background-black",validator:function(o){return["background-clear","background-black","background-main"].includes(o)}},multiplier:{default:13,type:Number}},computed:{cssProps:function(){return{"--multiplier":this.multiplier+"em"}}}},r=(n(345),n(67)),component=Object(r.a)(e,(function(){var o=this;return(0,o._self._c)("a",{class:["anchor-component",o.variant],style:o.cssProps,attrs:{href:o.url}},[o._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);