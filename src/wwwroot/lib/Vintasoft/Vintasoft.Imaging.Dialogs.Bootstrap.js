﻿// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
var Vintasoft;
(function(m){function a(a,m,n){a=H[a];for(var b="",C=m;C<m+n;C++)b+=String.fromCharCode(a[C]^4095);return b}if(void 0==m||void 0==m.Shared)throw Error("Vintasoft.Shared is not found.");if("4.4.0.1"!==m.version)throw Error("Wrong version of Vintasoft.Shared script.");if(void 0==m.Imaging)throw Error("Vintasoft.Imaging is not found.");if("14.0.4.1"!==m.Imaging.version)throw Error("Wrong version of Vintasoft.Imaging script.");var H=[];H.push([3998,3978,3979,3984,3977,3980,3978,3990,4050,3995,3990,3998,
3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,4063,3977,3980,3978,3990,4050,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4015,3998,3985,3994,3987,3977,3980,3978,3990,4050,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3986,3984,3995,3998,3987,4050,3995,3990,3998,3987,3984,3992,3998,3980,3974,3985,3996,4016,3983,3994,
3981,3998,3979,3990,3984,3985,4025,3990,3985,3990,3980,3991,3994,3995,3986,3984,3995,3998,3987,4050,3991,3994,3998,3995,3994,3981,4021,4029,4022,4024,4045,4063,3994,3985,3996,3984,3995,3994,3981,4063,3980,3994,3979,3979,3990,3985,3992,3980,3986,3984,3995,3998,3987,4050,3997,3984,3995,3974,3998,3983,3983,3987,3974,4029,3978,3979,3979,3984,3985,4028,3987,3984,3980,3994,3986,3984,3995,3998,3987,4050,3996,3984,3985,3979,3994,3985,3979,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,
3987,3984,3992,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4050,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,4026,3975,3983,3984,3981,3979,4063,3993,3990,3987,3994,4063,3980,3994,3979,3979,3990,3985,3992,3980,4030,3983,3983,3987,3974,4021,4015,4026,4024,4045,4047,4047,4047,4063,3994,3985,3996,3984,3995,3994,3981,4063,3980,3994,3979,3979,3990,3985,3992,3980,4022,3986,3998,3992,3994,4063,3977,3990,3994,3976,3994,3981,4063,
3980,3994,3979,3979,3990,3985,3992,3980,3998,3978,3979,3991,3994,3985,3979,3990,3996,3998,3979,3990,3984,3985,4012,3978,3996,3996,3994,3994,3995,3994,3995,3990,3985,3987,3990,3985,3994,4050,3993,3987,3994,3975,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3989,3983,3994,3992,4026,3985,
3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3990,3986,3998,3992,3994,4012,3994,3987,3994,3996,3979,3990,3984,3985,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3978,3983,3987,3984,3998,3995,4022,3986,3998,3992,3994,4025,3981,3984,3986,4010,3981,3987,4027,3990,3998,3987,3984,3992,4015,3981,3990,3985,3979,4063,3990,3986,3998,3992,3994,3980,3996,3987,3984,3980,3994,4029,3978,3979,3979,3984,3985,3986,3984,3995,3998,
3987,4050,3979,3990,3979,3987,3994,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3989,3983,3994,3992,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4027,3984,3996,3978,3986,3994,3985,3979,4063,3987,3998,3974,3984,3978,3979,4063,3980,3994,3979,3979,3990,3985,3992,3980,3977,3980,3978,3990,4050,
3995,3984,3996,3978,3986,3994,3985,3979,4015,3998,3980,3980,3976,3984,3981,3995,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3978,3990,4050,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3996,3987,3984,3980,3994,4029,3978,3979,3979,3984,3985,3986,3984,3995,3998,3987,4063,3993,3998,3995,3994,3998,3980,3974,3985,3996,4016,3983,3994,3981,3998,3979,3990,3984,3985,4025,3998,3990,
3987,3994,3995,3006,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3980,3994,3987,3994,3996,3979,3994,3995,4022,3985,3995,3994,3975,4028,3991,3998,3985,3992,3994,3995,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3977,3980,3978,3990,4050,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3994,3975,3983,3984,3981,3979,4025,3990,3987,3994,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,
3979,3987,3994,3995,3990,3998,3987,3984,3992,4012,3991,3984,3976,3985,4047,3983,3975,3977,3980,3978,3990,4050,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3995,3984,3996,3978,3986,3994,3985,3979,4019,3998,3974,3984,3978,3979,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,4042,3983,
3975,3997,3994,3992,3990,3985,4015,3981,3990,3985,3979,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4050,3984,3988,4029,3978,3979,3979,3984,3985,3998,3996,3979,3990,3977,3998,3979,3994,3995,4027,3984,3996,3978,3986,3994,3985,3979,4063,3983,3998,3980,3980,3976,3984,3981,3995,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,3990,3986,3998,3992,3994,4009,3990,3994,3976,3994,3981,4012,3994,
3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3995,3977,4050,3995,3984,3996,3978,3986,3994,3985,3979,4019,3998,3974,3984,3978,3979,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3995,3977,4050,3995,3990,3998,3987,3984,3992,4050,3984,3988,4029,3978,3979,3979,3984,3985,3983,3981,3984,3983,3994,3981,3979,3974,4024,3981,3990,3995,4012,3994,3987,3994,3996,3979,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,
3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3980,3994,3987,3994,3996,3979,3984,3981,3980,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3996,3998,3985,3985,3984,3979,4063,3997,3994,4063,3985,3978,3987,3987,4049,3984,3988,4029,3978,3979,3979,3984,3985,3977,3980,3978,3990,4050,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3996,3987,3984,3980,3994,4029,3978,3979,3979,3984,3985,4011,3991,3994,4063,
4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3979,3990,3979,3987,3994,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3986,3978,3980,3979,4063,3997,3994,4063,3998,4063,3980,3979,3981,3990,3985,3992,4049,4040,4047,3977,3991,4028,3998,3985,3996,3994,3987,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,4063,3977,3980,3978,3990,4050,3989,3983,3994,3992,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,
3990,3985,3992,3980,4015,3998,3985,3994,3987,4012,3994,3987,3994,3996,3979,4063,3990,3986,3998,3992,3994,3980,3995,3984,3996,3978,3986,3994,3985,3979,4015,3998,3980,3980,3976,3984,3981,3995,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3979,3991,3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4028,3984,3985,3979,3994,3985,3979,4063,3977,3980,3978,
3990,4050,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4015,3998,3985,3994,3987,3980,3991,3984,3976,4015,3987,3994,3998,3980,3994,4063,3978,3980,3994,4063,3979,3991,3994,4063,4008,3994,3997,4010,3990,4015,3981,3984,3983,3994,3981,3979,3974,4024,3981,3990,3995,4027,3990,3998,3987,3984,3992,4021,4012,4063,3996,3987,3998,3980,3980,4063,3990,3985,3980,3979,3994,3998,3995,4063,3984,3993,4063,4008,3994,3997,4010,3990,4018,3978,3987,3979,
3990,4015,3981,3984,3983,3994,3981,3979,3974,4024,3981,3990,3995,4027,3990,3998,3987,3984,3992,4021,4012,4063,3996,3987,3998,3980,3980,4063,3997,3994,3996,3998,3978,3980,3994,4063,3974,3984,3978,4063,3976,3998,3985,3979,4063,3979,3984,4063,3977,3990,3994,3976,4063,3984,3985,3987,3974,4063,4046,4063,3983,3981,3984,3983,3994,3981,3979,3974,4063,3992,3981,3990,3995,4049,3977,3980,3995,3977,4050,3978,3983,3987,3984,3998,3995,4022,3986,3998,3992,3994,4025,3981,3984,3986,4010,3981,3987,4027,3990,3998,3987,
3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3978,3990,4050,3989,3983,3994,3992,4045,4047,4047,4047,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3998,3983,3983,3987,3974,4029,3978,3979,3979,3984,3985,3977,3980,3978,3990,4050,3995,3990,3998,3987,3984,3992,4063,3977,3980,3978,3990,4050,3980,3994,3987,3994,3996,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,3994,3981,3981,3984,3981,4016,3996,3996,3978,3981,3994,3995,
3986,3984,3995,3998,3987,4050,3993,3984,3984,3979,3994,3981,3990,3986,3998,3992,3994,3980,4015,3981,3994,3983,3998,3981,3998,3979,3990,3984,3985,4025,3998,3990,3987,3994,3995,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,4028,3987,3990,3996,3988,3994,3995,3997,3979,3985,4063,3997,3979,3985,4050,3983,3981,3990,3986,3998,3981,3974,3977,3980,3978,3990,4050,3989,3983,3994,3992,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3998,
3983,3983,3987,3974,4029,3978,3979,3979,3984,3985,4046,3983,3975,4063,3980,3984,3987,3990,3995,4063,3992,3981,3998,3974,4010,3983,3987,3984,3998,3995,4063,3990,3986,3998,3992,3994,4063,3993,3981,3984,3986,4063,4010,4013,4019,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3996,3998,3985,3985,3984,3979,4063,3997,3994,4063,3985,3978,3987,3987,4049,3997,3979,3985,4063,3997,3979,3985,4050,
3995,3994,3993,3998,3978,3987,3979,3979,3991,3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3985,3984,3985,3994,3986,3984,3995,3998,3987,4063,3993,3998,3995,3994,4063,3980,3991,3984,3976,4011,3991,3978,3986,3997,3985,3998,3990,3987,4063,3977,3990,3994,3976,3994,3981,4063,3980,3994,3979,
3979,3990,3985,3992,3980,3989,3983,3994,3992,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3997,3987,3984,3996,3988,3980,3994,3987,3994,3996,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,3986,3984,3995,3998,3987,3977,3980,3978,3990,4050,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3998,3983,3983,3987,3974,4029,3978,3979,3979,3984,3985,
3998,3980,3974,3985,3996,4016,3983,3994,3981,3998,3979,3990,3984,3985,4012,3979,3998,3981,3979,3994,3995,4011,3991,3994,4063,4056,3980,3994,3987,3994,3996,3979,3984,3981,4012,3994,3979,3979,3990,3985,3992,3980,4049,3980,3994,3987,3994,3996,3979,3994,3995,4022,3985,3995,3994,3975,4056,4063,3983,3998,3981,3998,3986,3994,3979,3994,3981,4063,3986,3978,3980,3979,4063,3997,3994,4063,3998,4063,3985,3978,3986,3997,3994,3981,4049,4021,4015,4026,4024,4063,3994,3985,3996,3984,3995,3994,3981,4063,3980,3994,3979,
3979,3990,3985,3992,3980,3977,3980,3978,3990,4050,3989,3983,3994,3992,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3996,3987,3984,3980,3994,4029,3978,3979,3979,3984,3985,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3977,3980,3978,3990,4050,3979,3991,3978,3986,3997,3985,3998,3990,3987,4009,3990,3994,3976,3994,3981,4012,3994,3979,3979,3990,3985,3992,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3977,3980,3995,
3977,4050,3995,3990,3998,3987,3984,3992,4050,3996,3998,3985,3996,3994,3987,4029,3978,3979,3979,3984,3985,3984,3988,4029,3978,3979,3979,3984,3985,4028,3987,3990,3996,3988,3994,3995,3977,3980,3978,3990,4050,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,3994,3975,3983,3984,3981,3979,4025,3990,3987,3994,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,
4050,3995,3990,3998,3987,3984,3992,4063,3989,3997,3990,3992,4045,4026,3985,3996,3984,3995,3994,3981,4012,3994,3979,3979,3990,3985,3992,3980,4027,3990,3998,3987,3984,3992,3977,3980,3978,3990,4050,3983,3981,3990,3985,3979,4022,3986,3998,3992,3994,3980,4027,3990,3998,3987,3984,3992,4050,3979,3990,3979,3987,3994,4016,4020]);m.Imaging=m.Imaging;(function(q){q.UI=q.UI;(function(q){q.Dialogs={};(function(n){var b=m.Shared,q=m.Imaging.UI,g=q.UIElements,r=q.Panels,p=function(e,c,d,h){var f=p.prototype,k=p.superclass,
l=a(0,217,11);h.className=null==h.className?l:l+h.className;e=new g.WebUiElementContainerJS(e,{cssClass:a(0,127,12)});c=new g.WebUiElementContainerJS(c,{cssClass:a(0,161,10),css:{"max-height":a(0,1276,4),"overflow-y":a(0,0,4)}});d=new g.WebUiElementContainerJS(d,{cssClass:a(0,1729,12)});d=new g.WebUiElementContainerJS([e,c,d],{cssClass:a(0,187,13)});d=new g.WebUiElementContainerJS([d],{cssClass:a(0,93,12)});d=new g.WebUiElementContainerJS([d],{cssClass:a(0,2085,5)});k.constructor.call(this,[d],h);
this._30467=!1;f.dialogShown=function(a,b){};f.set_IsEnabled=function(a){var b=this._33106;k.set_IsEnabled.call(this,a);b===this._33106||a||this.hide()};f.isVisible=function(){return this._30467?b.suf47(this._32440.childNodes[0],a(0,1456,4)):k.isVisible.call(this)};f.render=function(a){var b=k.render.call(this,a);a.appendChild(b);this.hide();return b};f.show=function(){this._30467||this.init();var b=this._32440;b.className="";b.style.display=a(0,2062,5);b=b.childNodes[0];b.className=a(0,1997,15);
b.style.display=a(0,2062,5);this._17751(a(0,823,11),{dialog:this})};f.hide=function(){if(this._30467){var b=this._32440.childNodes[0];b.className=a(0,692,10);b.style.display=a(0,1993,4)}else k.hide.call(this)};f.init=function(){this._30467=!0};delete f.dialogShown};b.extend(p,g.WebUiElementContainerJS);var t=function(e){var c=t.prototype,d=t.superclass;c.asyncOperationStarted=function(a,b){};c.asyncOperationFinished=function(a,b){};c.asyncOperationFailed=function(a,b){};b.VintasoftLocalizationJS.setStringConstant(a(0,
613,33),a(0,961,17));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));var h=this,f=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,613,33)),cssClass:a(0,513,11)});f.set_HeaderIndex(5);this._11365=e=new r.WebUiDocumentPasswordPanelJS({cssClass:a(0,901,18)},e);b.suf23(e,a(0,2133,21),{a:this},function(b,c){b.data.a._10627(a(0,2133,21),c)});b.suf23(e,a(0,105,22),{a:this},function(b,
c){b.data.a._10627(a(0,105,22),c)});b.suf23(e,a(0,702,20),{a:this},function(b,c){b.data.a._10627(a(0,702,20),c)});b.subscribeToEvent(e,a(0,323,23),function(b,c){h._10627(a(0,323,23),c);b.target.hide()});var k=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,1169,8),onClick:{callback:function(){h._11365.authenticateFile()}}}),l=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
228,24)),localizationId:a(0,722,12),onClick:{callback:function(){h.hide()}}}),s={cssClass:a(0,217,11),localizationId:a(0,1347,22)};d.constructor.call(this,[f],[e],[k,l],s);delete c.asyncOperationStarted;delete c.asyncOperationFinished;delete c.asyncOperationFailed};b.extend(t,p);var D=function(e,c){var d=D.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));var h=this,f="";null!=c&&null!=c.title&&(f=c.title);f=new g.WebUiLabelElementJS({text:f,cssClass:a(0,513,11)});f.set_HeaderIndex(5);
var k={cssClass:a(0,901,18),css:{padding:a(0,834,3),border:a(0,1840,14),"overflow-x":a(0,0,4)}};null!=c&&(null!=c.hideNestedElements&&(k.hideNestedElements=c.hideNestedElements),null!=c.editable&&(k.editable=c.editable),null!=c.css&&(null!=c.css.width&&(k.css.width=c.css.width),null!=c.css.height&&(k.css.height=c.css.height)));var k=new r.WebUiPropertyGridPanelJS(e,k),l=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,
1169,8),onClick:{callback:function(){h.hide()}}});d.constructor.call(this,[f],[k],[l],c)};b.extend(D,p);var v=function(e,c){var d=v.prototype,h=v.superclass;d.get_SelectedPropertyGridIndex=function(){return this._5090.get_SelectedIndex()};d.set_SelectedPropertyGridIndex=function(a){this._5090.set_SelectedIndex(a)};if(null==e)throw Error(a(0,1875,48));if(null==e.selectors)throw Error(a(0,1111,58));if(1==e.selectors.length)throw Error(a(0,1460,141));var f=e.title;null==f&&(f="");if(!b.pv.iss(f))throw Error(a(0,
1220,56));d=e.selectedIndex;null==d&&(d=0);if(!b.pv.isn(d))throw Error(a(0,2154,64));this._25778=d;b.suf27(this,a(0,952,9),{a:this},function(a,b){var c=a.data.a;c._5090.set_SelectedIndex(c._25778)});b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));var k=this,d="";null!=c&&null!=c.title&&(d=c.title);d=new g.WebUiLabelElementJS({text:d,cssClass:a(0,513,11)});d.set_HeaderIndex(5);var l={cssClass:a(0,901,18),css:{padding:a(0,834,3),border:a(0,1840,14),"overflow-x":a(0,0,4)}};null!=
c&&(null!=c.hideNestedElements&&(l.hideNestedElements=c.hideNestedElements),null!=c.editable&&(l.editable=c.editable),null!=c.css&&(null!=c.css.width&&(l.css.width=c.css.width),null!=c.css.height&&(l.css.height=c.css.height)));var s=[],p=[];this._18118=[];for(var n=0;n<e.selectors.length;n++){var m=e.selectors[n],q=m.text;b.pv.iss(q)||b.pv.tae();var t=m.value;b.pv.iss(t)||b.pv.tae();var u=m.localizationId;b.pv.iss(u)||b.pv.tae();p.push({text:q,value:t,localizationId:u});m=m.propertyGrid;b.pv.ic(m,
b.WebPropertyGridJS)||b.pv.tae();m=new r.WebUiPropertyGridPanelJS(m,l);this._18118.push(m);s.push(m)}f=new g.WebUiLabelElementJS({text:f,css:{"margin-right":a(0,919,3)}});this._5090=new g.WebUiSelectElementJS({localizationId:a(0,1093,18),options:p});b.suf23(this._5090,a(0,734,20),{a:this},function(a,b){for(var c=b.selectedIndex,d=a.data.a._18118,e=0;e<d.length;e++)e==c?d[e].show():d[e].hide()});f=new g.WebUiElementContainerJS([f,this._5090],{css:{display:a(0,346,11),"margin-bottom":a(0,919,3)}});
s.splice(0,0,f);f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,1169,8),onClick:{callback:function(){k.hide()}}});h.constructor.call(this,[d],s,[f],c)};b.extend(v,p);var u=function(){var e=u.superclass,c=u.prototype;c.okButtonClicked=function(a){};c.cancelButtonClicked=function(a){};b.VintasoftLocalizationJS.setStringConstant(a(0,435,31),a(0,1334,13));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,
2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));var d=this;this._36421=!1;var h=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,435,31)),cssClass:a(0,513,11)});h.set_HeaderIndex(5);var f=new r.WebUiImageSelectionPanelJS({cssClass:a(0,901,18)});this._25507=f;var k=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,1169,8),onClick:{callback:function(){d.hide();d._36421=
!0;d._10627(a(0,2356,15));d._36421=!1}}}),l=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,228,24)),localizationId:a(0,722,12),onClick:{callback:function(){d.hide();d._36421||d._10627(a(0,1764,19))}}}),s={cssClass:a(0,1682,35),localizationId:a(0,2067,18)};e.constructor.call(this,[h],[f],[k,l],s);delete c.okButtonClicked;delete c.cancelButtonClicked;c.getSelectedImages=function(){return this._25507.getSelectedImages()}};b.extend(u,p);var E=function(){var e=
E.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,2470,28),a(0,490,12));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));var c=this,d=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,2470,28)),cssClass:a(0,513,11)});d.set_HeaderIndex(5);var h=new r.WebUiPrintImagesSettingsPanelJS({cssClass:a(0,901,18)});this._30819=h;var f={d:this};b.suf23(h,a(0,922,10),f,function(a){a.data.d.hide()});
b.suf23(h,a(0,1741,23),f,function(a){a.data.d.hide()});var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,1169,8),onClick:{callback:function(){c._30819.print()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,228,24)),localizationId:a(0,2281,12),onClick:{callback:function(){c.hide();c._30819.abort()}}}),l={cssClass:a(0,754,34),localizationId:a(0,200,17)};
e.constructor.call(this,[d],[h],[f,k],l)};b.extend(E,p);var w=function(){var e=w.prototype,c=w.superclass;e.get_SupportAnnotations=function(){return this._33053.get_SupportAnnotations()};e.set_SupportAnnotations=function(a){this._33053.set_SupportAnnotations(a)};e.show=function(){0!=this.get_RootControl().getImages().get_Count()&&(this._33053.update(),c.show.call(this))};b.VintasoftLocalizationJS.setStringConstant(a(0,788,35),a(0,252,20));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,
2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));e=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,788,35)),cssClass:a(0,513,11)});e.set_HeaderIndex(5);var d=new m.Imaging.UI.Panels.WebExportFileSettingsPanelJS({cssClass:a(0,901,18)});this._33053=d;var h=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,20)),localizationId:a(0,1169,8),onClick:{callback:function(a,b){var c=a.data.a;
c.hide();var d=c._33053.getExportFileSettings();null!=d&&c.get_RootControl().exportAndDownloadFile(d)},data:{a:this}}}),f=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,228,24)),localizationId:a(0,2281,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,2408,24)};c.constructor.call(this,[e],[d],[h,f],k)};b.extend(w,p);var F=function(){var e=F.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,837,
36),a(0,302,21));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));var c=this,d=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,837,36)),cssClass:a(0,513,11)});d.set_HeaderIndex(5);var h=new r.WebUiImageViewerSettingsPanelJS({cssClass:a(0,901,18),css:{padding:a(0,834,3),border:a(0,1840,14)}});this._879=h;var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,
932,20)),localizationId:a(0,1169,8),onClick:{callback:function(){c.hide();c._879.applySettings()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,228,24)),localizationId:a(0,722,12),onClick:{callback:function(){c.hide();c._879.resetSettings()}}}),l={cssClass:a(0,978,31),localizationId:a(0,1009,25)};e.constructor.call(this,[d],[h],[f,k],l)};b.extend(F,p);var G=function(){var e=G.superclass;b.VintasoftLocalizationJS.setStringConstant(a(0,2293,
39),a(0,2012,25));b.VintasoftLocalizationJS.setStringConstant(a(0,932,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,228,24),a(0,1280,6));var c=this,d=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,2293,39)),cssClass:a(0,513,11)});d.set_HeaderIndex(5);var h=new r.WebUiThumbnailViewerSettingsPanelJS({cssClass:a(0,901,18)});this._31267=h;var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,932,
20)),localizationId:a(0,1169,8),onClick:{callback:function(){c.hide();c._31267.applySettings()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,228,24)),localizationId:a(0,722,12),onClick:{callback:function(){c.hide();c._31267.resetSettings()}}}),l={cssClass:a(0,1369,35),localizationId:a(0,1938,29)};e.constructor.call(this,[d],[h],[f,k],l)};b.extend(G,p);var x=function(e){var c=x.prototype,d=x.superclass;c.setJpegEncoderSettings=function(a){this._2964.setJpegEncoderSettings(a)};
c.render=function(b){b=d.render.call(this,b);b.getElementsByClassName(a(0,2085,5))[0].style.zIndex=9999;return b};b.VintasoftLocalizationJS.setStringConstant(a(0,553,36),a(0,2218,21));b.VintasoftLocalizationJS.setStringConstant(a(0,1798,42),a(0,272,5));b.VintasoftLocalizationJS.setStringConstant(a(0,2239,42),a(0,182,5));var h=this,c=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,553,36)),cssClass:a(0,513,11)});c.set_HeaderIndex(5);this._2964=e=new r.WebUiJpegEncoderSettingsPanelJS({cssClass:a(0,
1286,48)},e);var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1798,42)),localizationId:a(0,171,11),onClick:{callback:function(){h.hide();h._2964.applySettings()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,2239,42)),localizationId:a(0,502,11),onClick:{callback:function(){h.hide()}}}),l={cssClass:a(0,398,37),localizationId:a(0,2037,25)};d.constructor.call(this,[c],[e],[f,k],l)};
b.extend(x,p);var y=function(e){var c=y.prototype,d=y.superclass;c.setJpeg2000EncoderSettings=function(a){this._24836.setJpeg2000EncoderSettings(a)};c.render=function(b){b=d.render.call(this,b);b.getElementsByClassName(a(0,2085,5))[0].style.zIndex=9999;return b};b.VintasoftLocalizationJS.setStringConstant(a(0,53,40),a(0,277,25));b.VintasoftLocalizationJS.setStringConstant(a(0,1636,46),a(0,272,5));b.VintasoftLocalizationJS.setStringConstant(a(0,646,46),a(0,182,5));var h=this,c=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,
53,40)),cssClass:a(0,513,11)});c.set_HeaderIndex(5);this._24836=e=new r.WebUiJpeg2000EncoderSettingsPanelJS({cssClass:a(0,1404,52)},e);var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1636,46)),localizationId:a(0,171,11),onClick:{callback:function(){h.hide();h._24836.applySettings()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,646,46)),localizationId:a(0,502,11),onClick:{callback:function(){h.hide()}}}),
l={cssClass:a(0,357,41),localizationId:a(0,524,29)};d.constructor.call(this,[c],[e],[f,k],l)};b.extend(y,p);var z=function(e){var c=z.prototype,d=z.superclass;c.setJbig2EncoderSettings=function(a){this._16772.setJbig2EncoderSettings(a)};c.render=function(b){b=d.render.call(this,b);b.getElementsByClassName(a(0,2085,5))[0].style.zIndex=9999;return b};b.VintasoftLocalizationJS.setStringConstant(a(0,2371,37),a(0,139,22));b.VintasoftLocalizationJS.setStringConstant(a(0,2090,43),a(0,272,5));b.VintasoftLocalizationJS.setStringConstant(a(0,
1177,43),a(0,182,5));var h=this,c=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,2371,37)),cssClass:a(0,513,11)});c.set_HeaderIndex(5);this._16772=e=new r.WebUiJbig2EncoderSettingsPanelJS({cssClass:a(0,4,49)},e);var f=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,2090,43)),localizationId:a(0,171,11),onClick:{callback:function(){h.hide();h._16772.applySettings()}}}),k=new g.WebUiButtonInputJS({cssClass:a(0,1923,
15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1177,43)),localizationId:a(0,502,11),onClick:{callback:function(){h.hide()}}}),l={cssClass:a(0,2432,38),localizationId:a(0,1967,26)};d.constructor.call(this,[c],[e],[f,k],l)};b.extend(z,p);var A=function(){var e=A.superclass;A.prototype.show=function(){this._4554.update();e.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,1601,35),a(0,1854,21));b.VintasoftLocalizationJS.setStringConstant(a(0,1073,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,
2332,24),a(0,1280,6));var c=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1601,35)),cssClass:a(0,513,11)});c.set_HeaderIndex(5);var d=new r.WebUiUploadImageFromUrlPanelJS({cssClass:a(0,901,18)});this._4554=d;b.suf23(d,a(0,1717,12),{a:this},function(a,b){a.data.a._10627(a.type,b)});var h=new g.WebUiButtonInputJS({cssClass:a(0,1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1073,20)),localizationId:a(0,1169,8),onClick:{callback:function(a,b){var c=a.data.a;
c.hide();c._4554.uploadImageFromUrl()},data:{a:this}}}),f=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,2332,24)),localizationId:a(0,2281,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,466,24)};e.constructor.call(this,[c],[d],[h,f],k)};b.extend(A,p);var B=function(){var e=B.superclass;B.prototype.show=function(){this._11997.update();e.show.call(this)};b.VintasoftLocalizationJS.setStringConstant(a(0,
1034,39),a(0,589,24));b.VintasoftLocalizationJS.setStringConstant(a(0,1073,20),a(0,2498,2));b.VintasoftLocalizationJS.setStringConstant(a(0,2332,24),a(0,1280,6));var c=new g.WebUiLabelElementJS({text:b.VintasoftLocalizationJS.getStringConstant(a(0,1034,39)),cssClass:a(0,513,11)});c.set_HeaderIndex(5);var d=new r.WebDocumentLayoutSettingsPanelJS({cssClass:a(0,901,18)});this._11997=d;b.suf23(d,a(0,1717,12),{a:this},function(a,b){a.data.a._10627(a.type,b)});var h=new g.WebUiButtonInputJS({cssClass:a(0,
1783,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,1073,20)),localizationId:a(0,1169,8),onClick:{callback:function(a,b){var c=a.data.a;c.hide();c._11997.applySettings()},data:{a:this}}}),f=new g.WebUiButtonInputJS({cssClass:a(0,1923,15),value:b.VintasoftLocalizationJS.getStringConstant(a(0,2332,24)),localizationId:a(0,2281,12),onClick:{callback:function(a,b){a.data.a.hide()},data:{a:this}}}),k={localizationId:a(0,873,28)};e.constructor.call(this,[c],[d],[h,f],k)};b.extend(B,p);n.WebUiDialogJS=
p;n.WebUiDocumentPasswordDialogJS=t;n.WebUiPropertyGridDialogJS=D;n.WebUiMultiPropertyGridDialogJS=v;n.WebImageSelectionDialogJS=u;n.WebPrintImagesDialogJS=E;n.WebExportFileSettingsDialogJS=w;n.WebImageViewerSettingsDialogJS=F;n.WebThumbnailViewerSettingsDialogJS=G;n.WebUiJpegEncoderSettingsDialogJS=x;n.WebUiJpeg2000EncoderSettingsDialogJS=y;n.WebUiJbig2EncoderSettingsDialogJS=z;n.WebUiUploadImageFromUrlDialogJS=A;n.WebDocumentLayoutSettingsDialogJS=B})(q.Dialogs)})(q.UI)})(m.Imaging)})(Vintasoft);
