(this["webpackJsonprct-tut"]=this["webpackJsonprct-tut"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),l=n(3),u=n(6);function i(e){var t=e.todo,n=e.funcs;return c.a.createElement("div",{className:"todo"},c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",checked:t.complete,onChange:function(){n[0](t.id)}}),c.a.createElement("label",null,t.name)),c.a.createElement("button",{onClick:function(){n[1](t.id)},className:"delete"},"Delete"))}function m(e){var t=e.todos,n=e.funcs;return 0===t.length?c.a.createElement("label",{className:"todo"},"Nothing to do... yet"):t.map((function(e){return c.a.createElement(i,{key:e.id,todo:e,funcs:n})}))}n(12);var s=n(15);var d=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(a.useRef)();function i(e){var t=r.current.value;""!==t&&(o((function(e){return[{id:Object(s.a)(),name:t,complete:!1}].concat(Object(l.a)(e))})),r.current.value=null)}return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&o(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(n))}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement("header",{className:"name"},"Mini TodoList"),c.a.createElement("div",{className:"input"},c.a.createElement("input",{type:"text",ref:r,placeholder:"What do you want to do?",onKeyPress:function(e){"Enter"==e.key&&i()}}),c.a.createElement("button",{onClick:i},"Add Todo"),c.a.createElement("button",{onClick:function(){var e=n.filter((function(e){return!e.complete}));o(e)}},"Clear Completed")),c.a.createElement("div",{className:"remaining"},n.filter((function(e){return!e.complete})).length," left to do"),c.a.createElement(m,{todos:n,funcs:[function(e){var t=Object(l.a)(n),a=t.find((function(t){return t.id===e}));a.complete=!a.complete,o(t)},function(e){var t=Object(l.a)(n);o(t.filter((function(t){return t.id!==e})))}]})))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fc3f28a6.chunk.js.map