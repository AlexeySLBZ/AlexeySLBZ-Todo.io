(this.webpackJsonptodojs=this.webpackJsonptodojs||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(8),c=a.n(l),r=a(2),i=a(1),u=a(3),d=a(4),s=a(6),m=a(5),b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onItemAdd(e.state.label),e.setState({label:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"new-todo",onChange:this.onLabelChange,required:!0,placeholder:"What needs to be done?",value:this.state.label})))}}]),a}(n.Component),f=(a(16),a(10)),h=a(9),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){var a=e.props,n=a.id,o=a.onLabelChange;t.preventDefault();var l=e.state.label;e.setState({label:""}),o(n,l)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.onDeleted,n=e.onActiveCounter,l=e.done,c=e.checked,r=e.editing,i="";return l&&(i+="completed"),o.a.createElement("li",{className:i},o.a.createElement("div",{className:"view"},o.a.createElement("input",{className:"toggle",type:"checkbox",onClick:n,checked:c}),o.a.createElement("label",null,r?o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",onChange:this.onLabelChange,autoFocus:!0,required:!0,placeholder:t,value:this.state.label||t})):o.a.createElement("span",{className:"description"},t),o.a.createElement("span",{className:"created"},Object(h.a)(this.props.time))),o.a.createElement("button",{className:"icon icon-edit",type:"submit"}),o.a.createElement("button",{type:"button",className:"icon icon-destroy",onClick:a})))}}]),a}(n.Component),v=function(e){var t=e.todos,a=e.onDeletedId,n=e.onActiveCounter,l=e.onLabelChange,c=t.map((function(e){var t=e.id;Object(f.a)(e,["id"]);return o.a.createElement(p,Object.assign({},e,{key:e.id,onDeleted:function(){return a(t)},onActiveCounter:function(){return n(t)},onLabelChange:l}))}));return o.a.createElement("ul",{className:"todo-list"},c)},C=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"completed",label:"Completed"}],g=function(e){var t=e.filter,a=e.onFilterChange,n=C.map((function(e){var n=e.name,l=e.label,c="".concat(n===t?"selected":"");return o.a.createElement("li",null,o.a.createElement("button",{key:n,className:c,onClick:function(){a(n)},type:"submit"},l))}));return o.a.createElement("ul",{className:"filters"},n)},j=function(e){var t=e.onClearCompleted,a=e.label;return o.a.createElement("button",{className:"clear-completed",onClick:function(){return t()}},a)},E=function(e){var t=e.activeItem,a=e.onClearCompleted,n=e.onFilterChange,l=e.filter;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},t," items left"),o.a.createElement(g,{filter:l,onFilterChange:n}),o.a.createElement(j,{className:"clear-completed",label:"Clear Completed",onClearCompleted:a}))},O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).maxId=100,e.state={todoData:[e.createTodoItem("Completed task1"),e.createTodoItem("Completed task2"),e.createTodoItem("Completed task3")],filter:"all"},e.deleteItem=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t}));return{todoData:[].concat(Object(i.a)(a.slice(0,n)),Object(i.a)(a.slice(n+1)))}}))},e.addItem=function(t){var a=e.createTodoItem(t);e.setState((function(e){var t=e.todoData;return{todoData:[].concat(Object(i.a)(t),[a])}}))},e.onLabelChange=function(t,a){e.onItemEditButton(t),e.setState((function(e){var n=e.todoData.findIndex((function(e){return e.id===t})),o=Object(r.a)(Object(r.a)({},e.todoData[n]),{},{label:a});return{todoData:[].concat(Object(i.a)(e.todoData.slice(0,n)),[o],Object(i.a)(e.todoData.slice(n+1)))}}))},e.onActiveCounter=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t})),o=a[n],l=Object(r.a)(Object(r.a)({},o),{},{done:!o.done,checked:!o.checked});return{todoData:[].concat(Object(i.a)(a.slice(0,n)),[l],Object(i.a)(a.slice(n+1)))}}))},e.onEditToggle=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t})),o=a[n],l=Object(r.a)(Object(r.a)({},o),{},{editing:!o.editing});return{todoData:[].concat(Object(i.a)(a.slice(0,n)),[l],Object(i.a)(a.slice(n+1)))}}))},e.onClearCompleted=function(){e.setState((function(e){return{todoData:e.todoData.filter((function(e){return!1===e.done}))}}))},e.onFilterChange=function(t){e.setState({filter:t})},e.filterToDos=function(e,t){return"all"===t?e:"active"===t?e.filter((function(e){return!e.done})):"completed"===t?e.filter((function(e){return e.done})):void 0},e}return Object(d.a)(a,[{key:"createTodoItem",value:function(e){return{label:e,done:!1,id:this.maxId++,time:Date.now(),checked:!1,editing:!1}}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.filter,n=e.time,l=this.filterToDos(t,a),c=t.filter((function(e){return e.done})).length,r=t.length-c;return o.a.createElement("section",{className:"todoapp"},o.a.createElement(b,{activeItem:r,onItemAdd:this.addItem}),o.a.createElement(v,{time:n,todos:l,onDeletedId:this.deleteItem,onActiveCounter:this.onActiveCounter,onLabelChange:this.onLabelChange}),o.a.createElement(E,{filter:a,activeItem:r,onClearCompleted:this.onClearCompleted,onFilterChange:this.onFilterChange}))}}]),a}(o.a.Component);c.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.cd961342.chunk.js.map