System.register(["@angular/core"],function(exports_1,context_1){"use strict";var core_1,HomeComponent,__decorate=(context_1&&context_1.id,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};return{setters:[function(core_1_1){core_1=core_1_1}],execute:function(){HomeComponent=function(){function HomeComponent(){this.title="ap"}return HomeComponent=__decorate([core_1.Component({selector:"opengamelist",template:'<h1>{{title}}</h1>\n<item-list class="latest"></item-list>\n<item-list class="most-viewed"></item-list>\n<item-list class="random"></item-list>\n',styles:["\nitem-list{\n    min-width:230px;\n    border: 1px solid #aaaaaa;\n    display:inline-block;\n    margin: 0 10px;\n    padding: 10px;\n}\nitem-list.latest{\n    background-color:#f9f9f9;\n}\nitem-list.most-viewed{\n    background-color:#f0f0f0;\n}\nitem-list.random{\n    background-color:#e9e9e9;\n}\n"]}),__metadata("design:paramtypes",[])],HomeComponent)}(),exports_1("HomeComponent",HomeComponent)}}});
//# sourceMappingURL=home.component.js.map
