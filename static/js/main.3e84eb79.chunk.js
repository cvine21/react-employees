(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=n(2),l=n(7),o=n(11),u=n(3),j=n(4),d=n(6),b=n(5),m=n(8),f=(n(16),n(0)),h=function(e){var t=e.employees,n=e.increased;return Object(f.jsxs)("div",{className:"app-info",children:[Object(f.jsx)("h1",{children:"\u0423\u0447\u0435\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 N"}),Object(f.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",t]}),Object(f.jsxs)("h2",{children:["\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",n]})]})},p=(n(18),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onUpdateSearch=function(e){var t=e.target.value;a.setState({term:t}),a.props.onUpdateSearch(t)},a.state={term:""},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430",value:this.state.term,onChange:this.onUpdateSearch})}}]),n}(m.Component)),O=(n(19),function(e){var t=e.filter,n=e.onFilterSelect,a=[{name:"all",label:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{name:"rise",label:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{name:"moreThan1000",label:"\u0417/\u041f \u0431\u043e\u043b\u044c\u0448\u0435 1000$"}].map((function(e){var a=e.name,r=e.label,c=t===a?"btn-light":"btn-outline-light";return Object(f.jsx)("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},children:r},a)}));return Object(f.jsx)("div",{className:"btn-group",children:a})}),g=n(12),x=(n(20),function(e){var t=e.name,n=e.salary,a=e.onDelete,r=e.onToggleProp,c="list-group-item d-flex justify-content-between";return e.increase&&(c+=" increase"),e.rise&&(c+=" like"),Object(f.jsxs)("li",{className:c,children:[Object(f.jsx)("span",{className:"list-group-item-label",onClick:r,"data-toggle":"rise",children:t}),Object(f.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:n+"$"}),Object(f.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(f.jsx)("button",{type:"button",className:"btn-cookie btn-sm ",onClick:r,"data-toggle":"increase",children:Object(f.jsx)("i",{className:"fas fa-cookie"})}),Object(f.jsx)("button",{type:"button",className:"btn-trash btn-sm ",onClick:a,children:Object(f.jsx)("i",{className:"fas fa-trash"})}),Object(f.jsx)("i",{className:"fas fa-star"})]})]})}),v=(n(21),["id"]),y=function(e){var t=e.data,n=e.onDelete,a=e.onToggleProp;return Object(f.jsx)("ul",{className:"app-list list-group",children:t.map((function(e){var t=e.id,r=Object(g.a)(e,v);return Object(f.jsx)(x,Object(l.a)(Object(l.a)({},r),{},{onDelete:function(){return n(t)},onToggleProp:function(e){return a(t,e.currentTarget.getAttribute("data-toggle"))}}),t)}))})},N=(n(22),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).onValueChange=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){var t=a.state,n=t.name,r=t.salary;e.preventDefault(),n.length&&r&&(a.props.onAdd(n,r),a.setState({name:"",salary:""}))},a.state={name:"",salary:""},a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.salary;return Object(f.jsxs)("div",{className:"app-add-form",children:[Object(f.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(f.jsxs)("form",{className:"add-form d-flex",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442?",name:"name",value:t,onChange:this.onValueChange}),Object(f.jsx)("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?",name:"salary",value:n,onChange:this.onValueChange}),Object(f.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component)),S=(n(23),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).deleteItem=function(e){a.setState((function(t){return{data:t.data.filter((function(t){return t.id!==e}))}}))},a.addItem=function(e,t){var n={name:e,salary:t,increase:!1,rise:!1,id:a.maxId++};a.setState((function(e){var t=e.data;return{data:[].concat(Object(o.a)(t),[n])}}))},a.onToggleProp=function(e,t){a.setState((function(n){return{data:n.data.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},t,!n[t])):n}))}}))},a.searchEmp=function(e,t){return t.length?e.filter((function(e){return-1!==e.name.indexOf(t)})):e},a.onUpdateSearch=function(e){a.setState({term:e})},a.filterPost=function(e,t){switch(t){case"rise":return e.filter((function(e){return e.rise}));case"moreThan1000":return e.filter((function(e){return e.salary>1e3}));default:return e}},a.onFilterSelect=function(e){a.setState({filter:e})},a.state={data:[{name:"John C.",salary:800,increase:!1,rise:!0,id:1},{name:"Alex M.",salary:3e3,increase:!1,rise:!1,id:2},{name:"Carl W.",salary:5e3,increase:!1,rise:!1,id:3}],term:"",filter:"all"},a.maxId=a.state.data.length+1,a}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,r=t.filter((function(e){return e.increase})).length,c=this.filterPost(t,a),s=this.searchEmp(c,n);return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(h,{employees:t.length,increased:r}),Object(f.jsxs)("div",{className:"search-panel",children:[Object(f.jsx)(p,{onUpdateSearch:this.onUpdateSearch}),Object(f.jsx)(O,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(f.jsx)(y,{data:s,onDelete:this.deleteItem,onToggleProp:this.onToggleProp}),Object(f.jsx)(N,{onAdd:this.addItem})]})}}]),n}(m.Component));n(24);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3e84eb79.chunk.js.map