(this["webpackJsonpmonsters-rolodex-v2"]=this["webpackJsonpmonsters-rolodex-v2"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),l=n(4),i=n(6),h=n(5),u=(n(13),n(14),function(e){return r.a.createElement("div",{className:"card-container  hvr-grow-shadow hvr-rectangle-out  hvr-hollow"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set5&size=180x180"),alt:"robot"}),r.a.createElement("h1",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),m=(n(15),function(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e,t){return r.a.createElement(u,{key:t,id:t,monster:e})})))}),d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"search",placeholder:t,onChange:n}))}),f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleClick=function(){return e.setState({string:"Good"})},e.onHandleChange=function(t){var n=t.target.value;e.setState({searchField:n})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{id:"heading"},"Worker world"),r.a.createElement(d,{placeholder:"search Worker",handleChange:this.onHandleChange}),r.a.createElement(m,{monsters:a}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a5700b3f.chunk.js.map