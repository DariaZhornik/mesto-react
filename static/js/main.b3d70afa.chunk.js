(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(4),i=n.n(o),r=(n(12),n(2));var p=function(e){return Object(a.jsx)("div",{className:e.isOpen?"popup popup_type_".concat(e.name," popup_is-opened"):"popup popup_type_".concat(e.name),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"button popup__close",type:"button",onClick:e.onClose}),Object(a.jsxs)("form",{className:"popup__content popup__content_".concat(e.name," form"),name:"".concat(e.name),noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("div",{children:e.children}),Object(a.jsx)("button",{className:"popup__save button",type:"submit",children:e.button})]})]})})},l=n(5),u=n(6);var h=new(function(){function e(t){Object(l.a)(this,e),this._cohort=t.cohort,this._authorization=t.authorization,this._url=t.url,this._id=t.id}return Object(u.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getInitialCards",value:function(){var e=this;return fetch(this._url+"/cards",{headers:{authorization:this._authorization}}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._url+"/users/me",{headers:{authorization:this._authorization}}).then((function(t){return e._checkResponse(t)}))}},{key:"changeUserInfo",value:function(e){var t=this;return fetch(this._url+"/users/me",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch(this._url+"/cards",{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._checkResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch(this._url+"/cards/likes/"+e,{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._checkResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch(this._url+"/cards/likes/"+e,{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._checkResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResponse(e)}))}}]),e}())({cohort:"cohort-17",authorization:"7a56e95e-8f95-4549-9d80-3f9b7d7f6e6c",url:"https://mesto.nomoreparties.co/v1/cohort-17"});var d=function(e){return e.card?Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("img",{src:e.card.src,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsx)("button",{className:"button element__delete",type:"button"}),Object(a.jsxs)("div",{className:"element__text",children:[Object(a.jsx)("h2",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:"button element__like",type:"button"}),Object(a.jsx)("p",{className:"element__like-count",children:e.card.likes.length})]})]})]}):null};var j=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(""),p=Object(r.a)(i,2),l=p[0],u=p[1],j=Object(c.useState)(""),_=Object(r.a)(j,2),m=_[0],b=_[1],O=Object(c.useState)([]),f=Object(r.a)(O,2),x=f[0],v=f[1];return Object(c.useEffect)((function(){h.getInitialCards().then((function(e){var t=e.map((function(e){return{id:e._id,src:e.link,name:e.name,likes:e.likes}}));v(t)}))}),[]),Object(c.useEffect)((function(){h.getUserInfo().then((function(e){o(e.name),u(e.about),b(e.avatar)}))}),[]),Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__person",children:[Object(a.jsx)("div",{className:"profile__image-wrap",onClick:e.onEditAvatar,children:Object(a.jsx)("img",{src:m,alt:s,className:"profile__image"})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__title",children:s}),Object(a.jsx)("p",{className:"profile__subtitle",children:l}),Object(a.jsx)("button",{className:"button profile__edit-btn",type:"button",onClick:e.onEditProfile})]})]}),Object(a.jsx)("button",{className:"button profile__add-btn",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:x.map((function(t){return Object(a.jsx)(d,{card:t,onCardClick:e.onCardClick},t.id)}))})]})};var _=function(e){return e.card?Object(a.jsx)("div",{className:"popup popup_type_photo ".concat(e.card&&"popup_is-opened"),children:Object(a.jsxs)("div",{className:"popup__container_type_photo",children:[Object(a.jsx)("img",{src:e.card.src,alt:e.card.name,className:"popup__image_type_photo"}),Object(a.jsx)("button",{className:"button popup__close popup__close_type_photo",type:"button",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title_type_photo",children:e.card.name})]})}):null};var m=function(){function e(){h(!1),o(!1),O(!1),k()}var t=Object(c.useState)(!1),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),u=l[0],h=l[1],d=Object(c.useState)(!1),m=Object(r.a)(d,2),b=m[0],O=m[1],f=Object(c.useState)(),x=Object(r.a)(f,2),v=x[0],k=x[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{onEditProfile:function(){o(!0)},onEditAvatar:function(){O(!0)},onAddPlace:function(){h(!0)},onCardClick:function(e){k(e)}}),Object(a.jsx)(p,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:s,onClose:e,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"name",type:"text",required:!0,placeholder:"\u0418\u043c\u044f",className:"popup__input popup__text_name",id:"person-name",minLength:2,maxLength:40}),Object(a.jsx)("span",{className:"popup__error",id:"person-name-error"}),Object(a.jsx)("input",{name:"about",type:"text",required:!0,placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",className:"popup__input popup__text_job",id:"person-job",minLength:2,maxLength:200}),Object(a.jsx)("span",{className:"popup__error",id:"person-job-error"})]})}),Object(a.jsx)(p,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:u,onClose:e,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"place-name",type:"text",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__text_title",id:"place-name",minLength:2,maxLength:30}),Object(a.jsx)("span",{className:"popup__error",id:"place-name-error"}),Object(a.jsx)("input",{name:"place-link",type:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__text_link",id:"place-link"}),Object(a.jsx)("span",{className:"popup__error",id:"place-link-error"})]})}),Object(a.jsx)(p,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-photo",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:b,onClose:e,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{name:"avatar",type:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",className:"popup__input popup__text_link",id:"place-link"}),Object(a.jsx)("span",{className:"popup__error",id:"place-link-error"})]})}),Object(a.jsx)(_,{name:"photo",card:v,onClose:e}),Object(a.jsx)("template",{className:"element-template"})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))},O=n.p+"static/media/header__logo.a307e1c4.svg";var f=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:O,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"})})};var x=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__author",children:["\xa9 ",(new Date).getFullYear()," \u0414\u0430\u0440\u044c\u044f \u0416\u043e\u0440\u043d\u0438\u043a"]})})};i.a.render(Object(a.jsxs)(s.a.StrictMode,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(m,{}),Object(a.jsx)(x,{})]}),document.getElementById("root")),b()}},[[13,1,2]]]);
//# sourceMappingURL=main.b3d70afa.chunk.js.map