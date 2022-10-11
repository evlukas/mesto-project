(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/plus-cohort-15",headers:{authorization:"d3efd322-579e-46e2-8334-d27c812c6b90","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.querySelector(".profile__photo"),o=document.querySelector(".profile__full-name"),r=document.querySelector(".profile__occupation");function c(e){n.src=e.avatar,o.textContent=e.name,r.textContent=e.about}var a=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.disabled=!1:t.disabled=!0};function i(e){"Escape"===e.key&&u(document.querySelector(".popup_opened"))}function l(e){e.classList.add("popup_opened"),document.addEventListener("keydown",i)}function u(e){e.classList.remove("popup_opened"),document.addEventListener("keydown",i)}var s=document.querySelector(".places__items");function p(n,o){n.userId=o,s.prepend(function(n){var o=document.querySelector(".popup_type_big-photo"),r=o.querySelector(".popup__big-img"),c=o.querySelector(".popup__title_type_big-photo"),a=document.querySelector("#templateCard").content.querySelector(".places-box").cloneNode(!0),i=a.querySelector(".places-box__del-card"),u=a.querySelector(".places-box__photo"),s=a.querySelector(".places-box__name"),p=a.querySelector(".places-box__like-num");u.src=n.link,u.alt=n.name,s.textContent=n.name,p.textContent=n.likes.length;var d=a.querySelector(".places-box__like");return n.likes.find((function(e){return e._id===n.userId}))&&d.classList.add("places-box__like_active"),d.addEventListener("click",(function(){var o;this.classList.contains("places-box__like_active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(n._id).then((function(e){d.classList.toggle("places-box__like_active"),p.textContent=e.likes.length})).catch((function(e){console.log(e)})):(o=n._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(o),{method:"PUT",headers:e.headers}).then(t)).then((function(e){d.classList.toggle("places-box__like_active"),p.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),n.owner._id!==n.userId?i.remove():i.addEventListener("click",(function(){var o;(o=n._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(e){a.remove()})).catch((function(e){console.log(e)}))})),u.addEventListener("click",(function(){r.src=n.link,r.alt=n.name,c.textContent=n.name,l(o)})),a}(n))}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f,_=document.querySelectorAll(".popup"),m=document.querySelector(".profile__edit-btn"),y=document.querySelector(".profile__edit-avatar"),h=document.querySelector(".profile__button-plus"),v=document.querySelector(".popup_type_profile"),b=document.querySelector(".popup_type_new-place"),S=document.querySelector(".popup_type_avatar"),q=S.querySelector(".popup__form"),g=v.querySelector(".popup__form"),C=b.querySelector(".popup__form"),E=v.querySelector(".popup__inp_field_fullname"),k=v.querySelector(".popup__inp_field_occupation"),x=b.querySelector(".popup__inp_field_newplacelink"),L=b.querySelector(".popup__inp_field_newplacename"),A=S.querySelector(".popup__inp_field_avatar"),w=document.querySelector(".profile__full-name"),U=document.querySelector(".profile__occupation");m.addEventListener("click",(function(){l(v),E.value=w.textContent,k.value=U.textContent})),g.addEventListener("submit",(function(n){var o;n.submitter.textContent="Сохранение...",n.preventDefault(),(o={name:E.value,about:k.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o.name,about:o.about})}).then(t)).then((function(e){c(e),u(v),n.target.reset()})).finally((function(e){n.submitter.textContent="Сохранить"})).catch((function(e){console.log(e)}))})),h.addEventListener("click",(function(){l(b)})),C.addEventListener("submit",(function(n){var o;n.submitter.textContent="Сохранение...",n.preventDefault(),(o={name:L.value,link:x.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:o.name,link:o.link})}).then(t)).then((function(e){p(e,e.owner._id),u(b),n.target.reset()})).finally((function(e){n.submitter.textContent="Создать"})).catch((function(e){console.log(e)}))})),y.addEventListener("click",(function(){l(S)})),q.addEventListener("submit",(function(n){var o;n.submitter.textContent="Сохранение...",n.preventDefault(),(o=A.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:o})}).then(t)).then((function(e){c(e),u(S),n.target.reset()})).finally((function(e){n.submitter.textContent="Обновить"})).catch((function(e){console.log(e)}))})),_.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target===e&&u(e)})),e.querySelector(".popup__close-btn").addEventListener("click",(function(){u(e)}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw r}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],a=o[1];c(r),a.forEach((function(e){p(e,r._id)}))})).catch((function(e){console.log(e)})),f={formSelector:".popup__form",inputSelector:".popup__inp",submitButtonSelector:".popup__save-btn",inputErrorClass:"popup__input_type_error",errorClass:"popup__inp-error_active"},Array.from(document.querySelectorAll(f.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);e.addEventListener("reset",(function(){setTimeout((function(){a(n,o)}),0)})),a(n,o),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n,r.classList.add(o.errorClass)}(e,t,t.validationMessage,n)}(e,r,t),a(n,o)}))}))}(e,f)}))})();