!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire07d1;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire07d1=r);var i=r("6JpON"),u=document.querySelector(".form");function a(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,o=t.delay,r=t.step,l=t.amount;if(Number(o.value)<0||Number(r.value)<0||Number(l.value)<0)e(i).Notify.warning("❗ Please enter a positive number");else{for(var f=0;f<l.value;f++){a(f+1,Number(o.value)+f*Number(r.value)).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}u.reset()}}))}();
//# sourceMappingURL=03-promises.d75ab4e4.js.map
