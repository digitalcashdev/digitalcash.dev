(()=>{var e={140:(e,t,r)=>{"use strict";r.r(t)},242:()=>{"use strict";var e,t=document.querySelector(".navbar");function r(){var r=window.innerWidth,d=!1;r===e&&(d=!0),e=r,d||(r>=function(){var e=[64],t=document.querySelector(".header h1 a");t&&e.push(Math.round(t.getBoundingClientRect().width));for(var r=document.querySelectorAll(".navbar a"),n=0;n<r.length;++n)e.push(Math.round(r[n].getBoundingClientRect().width)),e.push(26);var a=e.reduce((function(e,t){return e+t}));return a<=768?769:a}()?(t.classList.add("style-desktop"),t.classList.remove("style-revealed"),document.querySelector(".navbar-items-revealed")&&a.remove(),n=!1):(t.classList.remove("style-desktop"),t.classList.add("style-revealed")))}window.innerWidth,t&&(window.addEventListener("resize",(function(){r()})),r(),function(){var e=document.createElement("li");e.classList.add("revealer");var r=document.createElement("a");r.innerHTML="Menu",e.appendChild(r),t.querySelector("ul").appendChild(e),r.addEventListener("click",(function(){(n=!n)?(document.querySelector(".header").insertAdjacentElement("afterend",a),setTimeout((function(){a.classList.add("fadein")}),50)):(a.remove(),a.classList.remove("fadein")),setTimeout((function(){r.classList.remove("hover")}),100)})),r.addEventListener("mouseenter",(function(){r.classList.add("hover")})),r.addEventListener("mouseleave",(function(){r.classList.remove("hover")}))}());var n=!1,a=document.createElement("div");a.classList.add("navbar-items-revealed"),a.classList.add("section");var d=document.createElement("div");d.classList.add("container"),d.innerHTML=t.innerHTML,d.querySelector(".revealer").remove(),a.appendChild(d)}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,r),d.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(140),r(242)})();