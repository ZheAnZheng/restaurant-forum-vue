(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66809078"],{"0cb2":function(e,t,r){var a=r("e330"),n=r("7b0b"),s=Math.floor,o=a("".charAt),i=a("".replace),c=a("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,d,p){var f=r+e.length,m=a.length,v=l;return void 0!==d&&(d=n(d),v=u),i(p,v,(function(n,i){var u;switch(o(i,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,f);case"<":u=d[c(i,1,-1)];break;default:var l=+i;if(0===l)return n;if(l>m){var p=s(l/10);return 0===p?n:p<=m?void 0===a[p-1]?o(i,1):a[p-1]+o(i,1):n}u=a[l-1]}return void 0===u?"":u}))}},"107c":function(e,t,r){var a=r("d039"),n=r("da84"),s=n.RegExp;e.exports=a((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,r){var a=r("da84"),n=r("c65b"),s=r("825a"),o=r("1626"),i=r("c6b6"),c=r("9263"),u=a.TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var a=n(r,e,t);return null!==a&&s(a),a}if("RegExp"===i(e))return n(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},5319:function(e,t,r){"use strict";var a=r("2ba4"),n=r("c65b"),s=r("e330"),o=r("d784"),i=r("d039"),c=r("825a"),u=r("1626"),l=r("5926"),d=r("50c4"),p=r("577e"),f=r("1d80"),m=r("8aa5"),v=r("dc4a"),g=r("0cb2"),b=r("14c3"),x=r("b622"),h=x("replace"),w=Math.max,C=Math.min,I=s([].concat),k=s([].push),y=s("".indexOf),E=s("".slice),P=function(e){return void 0===e?e:String(e)},R=function(){return"$0"==="a".replace(/./,"$0")}(),$=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),_=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,r){var s=$?"$":"$0";return[function(e,r){var a=f(this),s=void 0==e?void 0:v(e,h);return s?n(s,e,a,r):n(t,p(a),e,r)},function(e,n){var o=c(this),i=p(e);if("string"==typeof n&&-1===y(n,s)&&-1===y(n,"$<")){var f=r(t,o,i,n);if(f.done)return f.value}var v=u(n);v||(n=p(n));var x=o.global;if(x){var h=o.unicode;o.lastIndex=0}var R=[];while(1){var $=b(o,i);if(null===$)break;if(k(R,$),!x)break;var _=p($[0]);""===_&&(o.lastIndex=m(i,d(o.lastIndex),h))}for(var S="",A=0,N=0;N<R.length;N++){$=R[N];for(var O=p($[0]),D=w(C(l($.index),i.length),0),T=[],q=1;q<$.length;q++)k(T,P($[q]));var M=$.groups;if(v){var U=I([O],T,D,i);void 0!==M&&k(U,M);var K=p(a(n,void 0,U))}else K=g(O,i,D,T,M,n);D>=A&&(S+=E(i,A,D)+K,A=D+O.length)}return S+E(i,A)}]}),!_||!R||$)},"5c9c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-2"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"form-label-group mb-3"},[r("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",name:"passwordCheck",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(t){t.target.composing||(e.passwordCheck=t.target.value)}}})]),r("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"Registing":"Submit")+" ")]),r("div",{staticClass:"text-center mb-3"},[r("p",[r("router-link",{attrs:{to:"/signin"}},[e._v(" Sign In ")])],1)]),r("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center mb-4"},[r("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign Up")])])}],s=r("1da1"),o=(r("96cf"),r("b0c0"),r("ac1f"),r("5319"),r("2fa3")),i=r("be6c"),c={data:function(){return{email:"",password:"",name:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isProcessing=!0,e.isPasswordCorrect){t.next=6;break}return o["a"].fireWarning("密碼不相同!"),e.isProcessing=!1,t.abrupt("return");case 6:return t.next=8,i["a"].users.create({email:e.email,name:e.name,password:e.password,passwordCheck:e.passwordCheck});case 8:if(r=t.sent,a=r.data,"success"===a.status){t.next=14;break}throw new Error(a.message);case 14:o["a"].fireSuccess("註冊成功!");case 15:e.isProcessing=!1,e.$router.replace("/"),t.next=24;break;case 19:t.prev=19,t.t0=t["catch"](0),console.log(t.t0),e.isProcessing=!1,o["a"].fireError("註冊失敗，請稍後再試");case 24:case"end":return t.stop()}}),t,null,[[0,19]])})))()}},computed:{isPasswordCorrect:function(){return this.passwordCheck===this.password}}},u=c,l=r("2877"),d=Object(l["a"])(u,a,n,!1,null,null,null);t["default"]=d.exports},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("c65b"),n=r("e330"),s=r("577e"),o=r("ad6d"),i=r("9f7f"),c=r("5692"),u=r("7c73"),l=r("69f3").get,d=r("fce3"),p=r("107c"),f=c("native-string-replace",String.prototype.replace),m=RegExp.prototype.exec,v=m,g=n("".charAt),b=n("".indexOf),x=n("".replace),h=n("".slice),w=function(){var e=/a/,t=/b*/g;return a(m,e,"a"),a(m,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=i.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],k=w||I||C||d||p;k&&(v=function(e){var t,r,n,i,c,d,p,k=this,y=l(k),E=s(e),P=y.raw;if(P)return P.lastIndex=k.lastIndex,t=a(v,P,E),k.lastIndex=P.lastIndex,t;var R=y.groups,$=C&&k.sticky,_=a(o,k),S=k.source,A=0,N=E;if($&&(_=x(_,"y",""),-1===b(_,"g")&&(_+="g"),N=h(E,k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==g(E,k.lastIndex-1))&&(S="(?: "+S+")",N=" "+N,A++),r=new RegExp("^(?:"+S+")",_)),I&&(r=new RegExp("^"+S+"$(?!\\s)",_)),w&&(n=k.lastIndex),i=a(m,$?r:k,N),$?i?(i.input=h(i.input,A),i[0]=h(i[0],A),i.index=k.lastIndex,k.lastIndex+=i[0].length):k.lastIndex=0:w&&i&&(k.lastIndex=k.global?i.index+i[0].length:n),I&&i&&i.length>1&&a(f,i[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i&&R)for(i.groups=d=u(null),c=0;c<R.length;c++)p=R[c],d[p[0]]=i[p[1]];return i}),e.exports=v},"9f7f":function(e,t,r){var a=r("d039"),n=r("da84"),s=n.RegExp,o=a((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=o||a((function(){return!s("a","y").sticky})),c=o||a((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:i,UNSUPPORTED_Y:o}},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},be6c:function(e,t,r){"use strict";r("b0c0");var a=r("2fa3");t["a"]={users:{create:function(e){return a["b"].post("/signup",e)},getUsers:function(){return a["b"].get("/admin/users")},update:function(e){var t=e.userId,r=e.isAdmin;return a["b"].put("/admin/users/".concat(t),{isAdmin:r})}},categories:{get:function(){return a["b"].get("/admin/categories")},create:function(e){return a["b"].post("/admin/categories",e)},delete:function(e){var t=e.categoryId;return a["b"].delete("/admin/categories/".concat(t))},update:function(e){var t=e.categoryId,r=e.name;return a["b"].put("/admin/categories/".concat(t),{name:r})}},restaurants:{create:function(e){var t=e.formData;return a["b"].post("/admin/restaurants",t)},get:function(){return a["b"].get("/admin/restaurants")},delete:function(e){var t=e.restaurantId;return a["b"].delete("/admin/restaurants/".concat(t))},getDetail:function(e){var t=e.restaurantId;return a["b"].get("/admin/restaurants/".concat(t))},update:function(e){var t=e.restaurantId,r=e.formData;return a["b"].put("/admin/restaurants/".concat(t),r)}}}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("e330"),n=r("6eeb"),s=r("9263"),o=r("d039"),i=r("b622"),c=r("9112"),u=i("species"),l=RegExp.prototype;e.exports=function(e,t,r,d){var p=i(e),f=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=f&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!f||!m||r){var v=a(/./[p]),g=t(p,""[e],(function(e,t,r,n,o){var i=a(e),c=t.exec;return c===s||c===l.exec?f&&!o?{done:!0,value:v(t,r,n)}:{done:!0,value:i(r,t,n)}:{done:!1}}));n(String.prototype,e,g[0]),n(l,p,g[1])}d&&c(l[p],"sham",!0)}},fce3:function(e,t,r){var a=r("d039"),n=r("da84"),s=n.RegExp;e.exports=a((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-66809078.d2463685.js.map