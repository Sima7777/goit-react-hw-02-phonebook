(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a,r,c=n(1),i=n.n(c),o=n(9),s=n.n(o),u=(n(18),n(12)),l=n(4),b=n(5),d=n(7),h=n(6),j=n(10),m=n(2),O=n(3),f=O.a.form(a||(a=Object(m.a)([""]))),v=n(0),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({name:"",number:""})},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(j.a)({},a,r))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(v.jsxs)(f,{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{children:["Name",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:this.handleChange})]}),Object(v.jsxs)("label",{children:["Number",Object(v.jsx)("input",{type:"tel",name:"number",required:!0,value:n,onChange:this.handleChange})]}),Object(v.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(c.Component),x=O.a.li(r||(r=Object(m.a)([""])));var C,g=function(e){var t=e.name,n=e.number;return Object(v.jsxs)(x,{children:[t,": ",n]})},y=O.a.ul(C||(C=Object(m.a)([""])));var S,A=function(e){var t=e.children;return Object(v.jsx)(y,{children:t})},w=O.a.div(S||(S=Object(m.a)([""])));var F=function(e){var t=e.filter,n=e.handleFilterChange;return Object(v.jsx)(w,{children:Object(v.jsxs)("label",{children:["Find contacts by name",Object(v.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})})},k=n(26),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.name,a=t.number;e.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[{id:Object(k.a)(),name:n,number:a}])}}))},e.handleFilterChange=function(t){var n=t.target.value;e.setState({filter:n})},e.getFilteredNames=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredNames();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"Phonebook"}),Object(v.jsx)(p,{onSubmit:this.addContact}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(F,{filter:e,handleFilterChange:this.handleFilterChange}),Object(v.jsx)(A,{children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(v.jsx)(g,{name:n,number:a},t)}))})]})}}]),n}(c.Component);n(23);s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(z,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c8023896.chunk.js.map