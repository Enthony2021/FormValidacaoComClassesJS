(()=>{"use strict";var r={63:function(r,e,t){function n(r){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(r)}function o(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(r,e):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){l=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw a}}}}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function a(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==n(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var o=t.call(r,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var u=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(e,"__esModule",{value:!0});var l=u(t(258)),c=document.querySelector(".formulario"),f=function(){function r(e){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.formulario=e,this.eventos()}var e,t;return e=r,(t=[{key:"eventos",value:function(){var r=this;this.formulario&&this.formulario.addEventListener("submit",(function(e){r.handleSubmit(e)}))}},{key:"handleSubmit",value:function(r){r.preventDefault();var e=this.camposSaoValidos(),t=this.senhasSaoValidas();e&&t&&this.formulario&&(this.formulario.submit(),alert("Formulário Enviado"))}},{key:"senhasSaoValidas",value:function(){var r=!0;if(this.formulario){var e=this.formulario.querySelector(".senha"),t=this.formulario.querySelector(".repetir-senha");e&&t&&e.value!==t.value&&(r=!1,this.criaErro(e,"senha e repetir senha precisam ser iguais!"),this.criaErro(t,"senha e repetir senha precisam ser iguais!")),e&&t&&(e.value.length<3||e.value.length>12)&&(r=!1,this.criaErro(e,"A senha precisa ter entre 3 e 12 caracteres!"))}return r}},{key:"camposSaoValidos",value:function(){var r=!0;if(this.formulario){var e,t=o(this.formulario.querySelectorAll(".erro-text"));try{for(t.s();!(e=t.n()).done;)e.value.remove()}catch(r){t.e(r)}finally{t.f()}var n,i=o(this.formulario.querySelectorAll(".validar"));try{for(i.s();!(n=i.n()).done;){var a=n.value,u=a.parentNode.innerText;a instanceof HTMLInputElement&&(a.value||(this.criaErro(a,"O campo ".concat(u," não pode estar vazio!")),r=!1),a.classList.contains("cpf")&&(this.validaCPF(a)||(r=!1)),a.classList.contains("usuario")&&(this.validaUsuario(a)||(r=!1)))}}catch(r){i.e(r)}finally{i.f()}}return r}},{key:"validaUsuario",value:function(r){var e=r.value,t=!0;return(e.length<3||e.length>12)&&(this.criaErro(r,"Usuário precisa ter entre 3 e 12 caracteres!"),t=!1),e.match(/^[a-zA-Z0-9]+$/g)||(this.criaErro(r,"Usuário precisa conter apenas letras e/ou números!"),t=!1),t}},{key:"validaCPF",value:function(r){return!!new l.default(r.value).valida()||(this.criaErro(r,"CPF Inválido!"),!1)}},{key:"criaErro",value:function(r,e){var t=document.createElement("div");t.innerHTML=e,t.classList.add("erro-text"),r.insertAdjacentElement("afterend",t)}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),r}();new f(c)},258:(r,e)=>{function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(r)}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function o(r,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,(void 0,i=function(r,e){if("object"!==t(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(e){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.cpfLimpo=e.replace(/\D+/g,"")}var e,t;return e=r,(t=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),e=this.geraDigito(r);return r+e+this.geraDigito(r+e)}},{key:"geraDigito",value:function(r){var e,t=0,o=r.length+1,i=function(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var o=0,i=function(){};return{s:i,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){l=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(l)throw a}}}}(r);try{for(i.s();!(e=i.n()).done;){var a=e.value;t+=o*Number(a),o--}}catch(r){i.e(r)}finally{i.f()}var u=11-t%11;return u<=9?String(u):"0"}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.geraNovoCpf()===this.cpfLimpo)}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),r}();e.default=i}},e={};!function t(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return r[n].call(i.exports,i,i.exports,t),i.exports}(63)})();
//# sourceMappingURL=bundle.js.map