(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),s=n(3),l=n(4),u=n(7),d=n(6),i=(n(13),n(5)),p=n.n(i),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={selectedGood:"-"},e.handleClick=function(t){e.setState({selectedGood:t.target.textContent})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected good: ".concat(this.state.selectedGood)),c.a.createElement("div",{className:"products"},m.map((function(n){return c.a.createElement("button",{key:n,type:"button",className:p()({products__product:!0,products__product_active:n===t}),onClick:e.handleClick},n)}))),c.a.createElement("button",{type:"button",className:"product-clear",onClick:function(){return e.setState({selectedGood:"-"})}},"x"))}}]),n}(c.a.Component);r.a.render(c.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ae1f16e7.chunk.js.map