//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'logo',
  props: {
    fillType: {
      type: String,
      required: true
    },
    fillBrand: {
      type: String,
      required: true
    },
    opacity: {
      type: Number,
      default: 1
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    staticClass: "logo",
    attrs: {
      "opacity": _vm.opacity,
      "width": "223",
      "height": "53",
      "viewBox": "0 0 223 53",
      "fill": "none"
    }
  }, [_c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M32.7389 0.385742V35.1685H39.2627V6.89296L32.7389 0.385742Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M43.6133 52.5613L26.2126 35.1667H32.7393L43.6133 46.0402V52.5613Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M0.11911 35.1685L17.5152 52.5613V41.6908L10.9889 35.1685H0.11911Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M13.16 35.1685L30.5582 52.5613V43.863L21.8642 35.1685H13.16Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M52.3112 35.1685L69.712 52.5613V50.3849L54.484 35.1685H52.3112Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M54.4953 0.385742V35.1685H65.3667V11.2306L54.4953 0.385742Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M21.8443 0.385742V35.1685H26.1831V4.72165L21.8443 0.385742Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M10.9918 0.385742V35.1685H13.1637V2.55369L10.9918 0.385742Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M39.2652 35.1685L56.6609 52.5613V48.214L43.6158 35.1685H39.2652Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M43.6133 0.385742V35.1685H52.3112V9.06218L43.6133 0.385742Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillBrand,
      "d": "M52.3112 35.1685L69.712 52.5613V50.3849L54.4882 35.1685H52.3112Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M86.4007 48.2754C86.4007 47.3109 86.0624 46.5504 85.385 45.9884C84.708 45.4273 83.4689 44.8935 81.6706 44.3883C79.8706 43.8848 78.5566 43.3292 77.7281 42.7348C76.55 41.8914 75.9622 40.7847 75.9622 39.4156C75.9622 38.086 76.5084 37.0049 77.6036 36.1712C78.6975 35.3417 80.097 34.9257 81.8027 34.9257C82.9564 34.9257 83.9898 35.1499 84.9016 35.5933C85.8133 36.0396 86.5185 36.66 87.0234 37.4563C87.5245 38.2538 87.7757 39.1396 87.7757 40.1197H86.2938C86.2938 38.9302 85.8874 37.9732 85.0741 37.2527C84.2633 36.5296 83.1723 36.1674 81.8027 36.1674C80.4714 36.1674 79.4128 36.4657 78.6256 37.0588C77.8379 37.6519 77.4424 38.4279 77.4424 39.3861C77.4424 40.269 77.7988 40.9917 78.5044 41.5482C79.2151 42.1068 80.3482 42.5998 81.9062 43.028C83.4689 43.4533 84.6521 43.8949 85.4565 44.3517C86.2593 44.8102 86.8669 45.3596 87.2729 45.9951C87.6781 46.6307 87.8809 47.3832 87.8809 48.2506C87.8809 49.6206 87.3339 50.7189 86.2383 51.5467C85.1452 52.3741 83.7011 52.7892 81.9062 52.7892C80.6814 52.7892 79.5588 52.5697 78.5351 52.1318C77.5114 51.6948 76.7368 51.0806 76.2058 50.2928C75.6748 49.5041 75.4115 48.6006 75.4115 47.5809H76.8816C76.8816 48.8075 77.3385 49.7754 78.2557 50.4837C79.1692 51.1929 80.3894 51.5463 81.9062 51.5463C83.2623 51.5463 84.3508 51.2472 85.1708 50.6524C85.9892 50.0547 86.4007 49.2614 86.4007 48.2754Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M92.216 45.4681V52.5516H90.7475V35.1647H96.6735C98.4806 35.1647 99.907 35.627 100.956 36.5519C102.001 37.474 102.526 38.7434 102.526 40.3591C102.526 41.992 102.023 43.2493 101.013 44.1372C100.007 45.026 98.5467 45.4681 96.6373 45.4681H92.216V45.4681ZM92.216 44.2281H96.6735C98.0969 44.2281 99.1833 43.887 99.9343 43.2102C100.68 42.5334 101.055 41.589 101.055 40.3759C101.055 39.1733 100.685 38.2151 99.9402 37.5021C99.1963 36.7887 98.1377 36.4224 96.766 36.4072H92.216V44.2281V44.2281Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M118.625 35.1605V46.6101C118.625 48.5123 118.03 50.0185 116.843 51.1261C115.65 52.2311 114.024 52.7842 111.959 52.7842C109.93 52.7842 108.318 52.2458 107.125 51.1723C105.93 50.0985 105.32 48.6208 105.297 46.7439V35.1605H108.879V46.6358C108.879 47.7745 109.15 48.6035 109.696 49.1239C110.243 49.6446 110.996 49.9058 111.959 49.9058C113.975 49.9058 114.999 48.8483 115.031 46.7296V35.16H118.625V35.1605Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M128.426 42.861C127.955 42.7975 127.54 42.7647 127.183 42.7647C125.876 42.7647 125.018 43.2072 124.614 44.0884V52.5453H121.163V39.6246H124.519V41.1642C125.213 39.9784 126.173 39.3878 127.399 39.3878C127.762 39.3878 128.104 39.4231 128.426 39.5258V42.861Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M142.078 46.2042C142.078 48.2754 141.637 49.8869 140.753 51.0461C139.869 52.2054 138.635 52.7872 137.049 52.7872C135.753 52.7872 134.698 52.3253 133.882 51.4037V52.5465H130.434V35.1634H133.882V40.7835C134.68 39.8526 135.73 39.387 137.025 39.387C138.604 39.387 139.839 39.9666 140.734 41.1234C141.632 42.2822 142.077 43.9126 142.077 46.0145V46.2042H142.078ZM138.626 45.9422C138.626 44.6327 138.419 43.6758 138.006 43.073C137.591 42.4719 136.973 42.1678 136.155 42.1678C135.055 42.1678 134.298 42.6208 133.882 43.5231V48.6355C134.307 49.5478 135.073 50.0025 136.178 50.0025C137.293 50.0025 138.024 49.4524 138.377 48.3469C138.544 47.8237 138.626 47.019 138.626 45.9422Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M151.465 52.5558L151.466 51.5404C150.648 52.3695 149.607 52.7867 148.345 52.7867C147.08 52.7867 146.033 52.4183 145.199 51.6847C144.366 50.954 143.95 50.0299 143.95 48.9131C143.95 47.5456 144.459 46.4957 145.474 45.7621C146.489 45.0323 147.958 44.6613 149.874 44.6534H151.464V43.9118C151.464 43.3157 151.309 42.8383 151.003 42.4766C150.696 42.122 150.214 41.9428 149.552 41.9428C148.972 41.9428 148.516 42.0807 148.187 42.3588C147.855 42.6377 147.688 43.0204 147.688 43.5046H144.237C144.237 42.7575 144.469 42.0639 144.931 41.4271C145.391 40.7915 146.045 40.2918 146.888 39.9284C147.731 39.567 148.681 39.3857 149.732 39.3857C151.324 39.3857 152.588 39.7849 153.525 40.5879C154.459 41.3867 154.925 42.5111 154.925 43.958V52.5554H151.465V52.5558ZM149.1 50.1456C149.607 50.1456 150.079 50.0337 150.509 49.8053C150.937 49.5781 151.258 49.2719 151.465 48.8908V46.6703H150.173C148.446 46.6703 147.526 47.2676 147.416 48.4618L147.402 48.6628C147.402 49.0944 147.554 49.4482 147.857 49.7283C148.16 50.0059 148.573 50.1456 149.1 50.1456Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M160.871 39.6259V41.0022C161.786 39.9267 162.991 39.3887 164.493 39.3887C165.859 39.3887 166.882 39.7891 167.551 40.5929C168.216 41.3972 168.562 42.5998 168.576 44.1969V52.5457H165.125V44.2638C165.125 43.5281 164.965 42.9973 164.647 42.6663C164.33 42.3356 163.799 42.167 163.059 42.167C162.087 42.167 161.359 42.5838 160.872 43.415V52.5457H157.424V39.6255H160.871V39.6259Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M170.995 36.2819C170.995 35.7649 171.168 35.338 171.515 35.0052C171.859 34.67 172.332 34.5043 172.929 34.5043C173.518 34.5043 173.987 34.6704 174.339 35.0052C174.691 35.338 174.863 35.7649 174.863 36.2819C174.863 36.8064 174.686 37.2371 174.334 37.572C173.976 37.9055 173.51 38.0738 172.929 38.0738C172.349 38.0738 171.88 37.9055 171.525 37.572C171.173 37.2367 170.995 36.8064 170.995 36.2819ZM174.662 52.5462H171.199V39.6259H174.662V52.5462Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M184.418 48.9758C184.418 48.5543 184.207 48.2204 183.79 47.9764C183.372 47.7354 182.701 47.5183 181.777 47.3261C178.703 46.6838 177.168 45.3769 177.168 43.4108C177.168 42.265 177.642 41.3072 178.594 40.5396C179.547 39.7719 180.791 39.3866 182.328 39.3866C183.967 39.3866 185.278 39.7719 186.264 40.545C187.244 41.3169 187.739 42.3209 187.739 43.5551H184.284C184.284 43.06 184.125 42.652 183.808 42.3327C183.489 42.0084 182.992 41.8482 182.316 41.8482C181.733 41.8482 181.284 41.9794 180.963 42.2414C180.644 42.5031 180.485 42.8392 180.485 43.2426C180.485 43.6266 180.668 43.9358 181.03 44.1696C181.394 44.4048 182.002 44.6058 182.865 44.7796C183.725 44.9508 184.448 45.1417 185.037 45.3567C186.861 46.0263 187.773 47.1839 187.773 48.8307C187.773 50.0101 187.265 50.9637 186.256 51.6914C185.243 52.42 183.94 52.7872 182.34 52.7872C181.255 52.7872 180.295 52.592 179.453 52.2054C178.611 51.8189 177.954 51.2893 177.476 50.6188C177 49.9445 176.76 49.2194 176.76 48.4382H180.034C180.063 49.0507 180.293 49.5222 180.713 49.8465C181.134 50.1734 181.7 50.3378 182.409 50.3378C183.07 50.3378 183.57 50.2095 183.909 49.9601C184.245 49.7111 184.418 49.383 184.418 48.9758Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M193.34 39.6259V41.0712C194.253 39.9494 195.493 39.3891 197.053 39.3891C198.717 39.3891 199.861 40.0432 200.48 41.3577C201.391 40.0432 202.683 39.3891 204.362 39.3891C205.766 39.3891 206.808 39.7942 207.492 40.611C208.177 41.4271 208.519 42.6541 208.519 44.2941V52.5461H205.057V44.2882C205.057 43.553 204.91 43.0171 204.623 42.6768C204.339 42.3403 203.833 42.1674 203.108 42.1674C202.074 42.1674 201.357 42.665 200.959 43.6548L200.97 52.5461H197.52V44.2992C197.52 43.5488 197.372 43.0066 197.076 42.6709C196.782 42.3361 196.281 42.1678 195.571 42.1678C194.593 42.1678 193.885 42.5763 193.443 43.3898V52.5466H189.994V39.6263H193.34V39.6259Z"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "fill": _vm.fillType,
      "d": "M210.546 45.9678C210.546 44.6832 210.794 43.5437 211.285 42.5397C211.781 41.5356 212.489 40.7616 213.42 40.211C214.346 39.6608 215.424 39.3866 216.65 39.3866C218.395 39.3866 219.816 39.9208 220.92 40.9875C222.024 42.0547 222.639 43.5038 222.764 45.3339L222.789 46.2181C222.789 48.1976 222.233 49.7914 221.129 50.9877C220.023 52.1869 218.538 52.7872 216.672 52.7872C214.809 52.7872 213.324 52.1882 212.213 50.9923C211.101 49.7994 210.546 48.1766 210.546 46.1222V45.9678ZM213.999 46.211C213.999 47.4401 214.227 48.3772 214.692 49.0259C215.153 49.6753 215.813 50.0017 216.672 50.0017C217.51 50.0017 218.161 49.6795 218.633 49.0397C219.102 48.4 219.337 47.3711 219.337 45.9582C219.337 44.7577 219.102 43.823 218.633 43.1605C218.161 42.5014 217.499 42.1674 216.65 42.1674C215.806 42.1674 215.152 42.4985 214.692 43.1572C214.227 43.8129 213.999 44.8317 213.999 46.211Z"
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'PreloaderVerticalizacao',
  props: {
    stroke: {
      type: String,
      default: 'white'
    }
  }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "width": "142",
      "height": "162",
      "viewBox": "0 0 142 64",
      "fill": "none"
    }
  }, [_c('path', {
    staticClass: "preloader-verticalizacao__plane-3 opacity-change",
    attrs: {
      "d": "M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z",
      "stroke": _vm.stroke
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "preloader-verticalizacao__plane-2 opacity-change",
    attrs: {
      "d": "M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z",
      "stroke": _vm.stroke
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "preloader-verticalizacao__plane-1 opacity-change",
    attrs: {
      "d": "M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z",
      "stroke": _vm.stroke
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1.14725 70.7112L70.7109 37.0554L140.275 70.7112L70.7109 104.444L1.14725 70.7112Z",
      "stroke": _vm.stroke
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-52fb3da7_0", {
    source: ".preloader-verticalizacao__plane-1[data-v-52fb3da7]{animation:translate-plane-1-data-v-52fb3da7 3.5s infinite}.preloader-verticalizacao__plane-2[data-v-52fb3da7]{animation:translate-plane-2-data-v-52fb3da7 3.5s infinite}.preloader-verticalizacao__plane-3[data-v-52fb3da7]{animation:translate-plane-3-data-v-52fb3da7 3.5s infinite}@keyframes translate-plane-1-data-v-52fb3da7{20%{transform:translateY(0);opacity:0}30%,70%{transform:translateY(-18px);opacity:1}80%{transform:translateY(0);opacity:0}}@keyframes translate-plane-2-data-v-52fb3da7{20%{transform:translateY(0);opacity:0}30%,70%{transform:translateY(-36px);opacity:1}80%{transform:translateY(0);opacity:0}}@keyframes translate-plane-3-data-v-52fb3da7{20%{transform:translateY(0);opacity:0}30%,70%{transform:translateY(-56px);opacity:1}80%{transform:translateY(0);opacity:0}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-52fb3da7";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: 'Combobox',

  data() {
    return {
      open: false,
      selected: ''
    };
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    type: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeBackground() {
      if (!this.type) {
        return 'default';
      } else {
        return 'forms';
      }
    },

    typeDisabled() {
      if (!this.disabled) {
        return '';
      } else {
        this.selected = this.options[0].title;
        return 'disabled';
      }
    }

  },

  created() {
    this.selected = this.options[0].title;
  },

  methods: {
    setSelectedValue(option) {
      this.selected = option.title;
      this.open = false;
      this.$emit('setOptionValue', option.value);
    }

  }
};

/* script */
const __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "select-options"
  }, [_c('button', {
    staticClass: "select-options__toggler",
    class: [_vm.typeBackground, _vm.typeDisabled],
    attrs: {
      "disabled": _vm.disabled
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        _vm.open = !_vm.open;
      }
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.selected))]), _vm._v(" "), _c('i', {
    staticClass: "icon icon-expandir",
    class: {
      open: _vm.open
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    staticClass: "select-options__select"
  }, _vm._l(_vm.options, function (option, index) {
    return _c('li', {
      key: index,
      staticClass: "select-options__options",
      attrs: {
        "value": option.value
      }
    }, [_c('button', {
      on: {
        "click": function ($event) {
          $event.preventDefault();
          return _vm.setSelectedValue(option);
        }
      }
    }, [_vm._v("\n          " + _vm._s(option.title) + "\n        ")])]);
  }), 0)])], 1);
};

var __vue_staticRenderFns__$2 = [];
/* style */

const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-5161e81c_0", {
    source: ".select-options__select[data-v-5161e81c]{list-style-type:none;margin:0 0 2rem 0;padding:0;box-shadow:0 4px 8px rgba(0,0,0,.24)}.select-options__select li[data-v-5161e81c]:first-child{display:none}.select-options button[data-v-5161e81c]{height:48px;width:100%;text-align:left;cursor:pointer;border:0;font-family:Roboto,'Segoe UI',Helvetica,Arial,sans-serif;font-size:1rem;padding-left:1.75rem;transition:background-color ease-in-out .35s}.select-options button.default[data-v-5161e81c]{background-color:rgba(255,255,255,.05);color:#fff}.select-options button.default[data-v-5161e81c]:hover{background-color:rgba(255,255,255,.15)}.select-options button.disabled[data-v-5161e81c]{cursor:not-allowed;background-color:#ccc}.select-options button.disabled[data-v-5161e81c]:hover{background-color:#ccc}.select-options button.forms[data-v-5161e81c]{background-color:rgba(0,0,0,.08);color:#000}.select-options button.forms[data-v-5161e81c]:hover{background-color:rgba(0,0,0,.1)}.select-options button[data-v-5161e81c]:focus{outline:0}.select-options__toggler[data-v-5161e81c]{display:flex;align-items:center;justify-content:space-between;border-radius:20px;margin-bottom:10px}.select-options__toggler .icon[data-v-5161e81c]{font-size:40px;transition:transform ease-in-out .15s}.select-options__toggler .icon.open[data-v-5161e81c]{transform:rotate(180deg)}.fade-enter-active[data-v-5161e81c],.fade-leave-active[data-v-5161e81c]{transition:opacity .25s}.fade-enter[data-v-5161e81c],.fade-leave-to[data-v-5161e81c]{opacity:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$2 = "data-v-5161e81c";
/* module identifier */

const __vue_module_identifier__$2 = undefined;
/* functional template */

const __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  name: 'Card',
  props: {
    headerClass: {
      type: String,
      default: 'px-6 py-4'
    },
    bodyClass: {
      type: String,
      default: 'px-6 py-4'
    },
    footerClass: {
      type: String,
      default: 'px-6 pt-4 pb-2'
    }
  }
};

/* script */
const __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "max-w-sm rounded overflow-hidden shadow-lg"
  }, [_c('div', {
    class: _vm.headerClass
  }, [_vm._t("header")], 2), _vm._v(" "), _c('div', {
    class: _vm.bodyClass
  }, [_vm._t("body")], 2), _vm._v(" "), _c('div', {
    class: _vm.footerClass
  }, [_vm._t("footer")], 2)]);
};

var __vue_staticRenderFns__$3 = [];
/* style */

const __vue_inject_styles__$3 = undefined;
/* scoped */

const __vue_scope_id__$3 = undefined;
/* module identifier */

const __vue_module_identifier__$3 = undefined;
/* functional template */

const __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  name: 'Galeria',
  props: {
    imagens: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    backgroundCover: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      currentImage: 0
    };
  },

  computed: {
    lengthImagens() {
      return this.imagens.length;
    },

    nextDisabled() {
      return this.lengthImagens - 1 == this.currentImage ? true : false;
    },

    previousDisabled() {
      return this.currentImage == 0 ? true : false;
    }

  },
  methods: {
    next() {
      this.currentImage = this.currentImage + 1;
    },

    previous() {
      this.currentImage = this.currentImage - 1;
    }

  }
};

/* script */
const __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "galeria",
    style: {
      'background-image': "url(" + _vm.imagens[_vm.currentImage] + ")",
      'background-size': _vm.backgroundCover ? 'cover' : '100% 100%',
      'background-repeat': 'no-repeat',
      width: _vm.width,
      height: _vm.height
    }
  }, [_vm._t("header"), _vm._v(" "), _c('section', {
    staticClass: "controles"
  }, [_c('span', {
    staticClass: "left",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        _vm.previousDisabled ? '' : _vm.previous();
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "20",
      "height": "30",
      "viewBox": "0 0 248 400",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M247.667 353L95.0001 200L247.667 47L200.667 0L0.666748 200L200.667 400L247.667 353Z",
      "fill": _vm.previousDisabled ? '#ccc' : '#fff'
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "right",
    on: {
      "click": function ($event) {
        $event.preventDefault();
        _vm.nextDisabled ? '' : _vm.next();
      }
    }
  }, [_c('svg', {
    attrs: {
      "width": "20",
      "height": "30",
      "viewBox": "0 0 247 400",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1.56015e-05 47L152.667 200L-1.11499e-05 353L47 400L247 200L47 -1.74846e-05L1.56015e-05 47Z",
      "fill": _vm.nextDisabled ? '#ccc' : '#fff'
    }
  })])])])], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-4dde83f8_0", {
    source: ".galeria[data-v-4dde83f8]{display:flex;flex-direction:column;padding:0 10px}.galeria .controles[data-v-4dde83f8]{height:100%;display:flex;align-items:center}.galeria .controles span[data-v-4dde83f8]{cursor:pointer;transition:transform .15s ease-in-out;position:absolute}.galeria .controles span.right[data-v-4dde83f8]{right:26px}.galeria .controles span.right[data-v-4dde83f8]:hover{-moz-transform:translate(3px,0);-webkit-transform:translate(3px,0);-o-transform:translate(3px,0);-ms-transform:translate(3px,0);transform:translate(3px,0)}.galeria .controles span.left[data-v-4dde83f8]:hover{-moz-transform:translate(-3px,0);-webkit-transform:translate(-3px,0);-o-transform:translate(-3px,0);-ms-transform:translate(-3px,0);transform:translate(-3px,0)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$4 = "data-v-4dde83f8";
/* module identifier */

const __vue_module_identifier__$4 = undefined;
/* functional template */

const __vue_is_functional_template__$4 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, createInjector, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
var script$5 = {
  name: 'Button',
  props: {
    actionText: {
      type: String,
      required: true
    },
    styleButton: {
      type: String,
      default: 'bg-blue-500 hover:bg-blue-700'
    }
  },
  methods: {
    actionButton() {
      this.$emit('buttonClick');
    }

  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "text-white font-bold py-2 px-4 rounded",
    class: _vm.styleButton,
    on: {
      "click": _vm.actionButton
    }
  }, [_vm._v("\n  " + _vm._s(_vm.actionText) + "\n")]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

const __vue_inject_styles__$5 = undefined;
/* scoped */

const __vue_scope_id__$5 = undefined;
/* module identifier */

const __vue_module_identifier__$5 = undefined;
/* functional template */

const __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Logo: __vue_component__,
  PreloaderVerticalizacao: __vue_component__$1,
  Combobox: __vue_component__$2,
  Card: __vue_component__$3,
  Galeria: __vue_component__$4,
  Button: __vue_component__$5
});

// Import vue components

const install = function installComponentes(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$5 as Button, __vue_component__$3 as Card, __vue_component__$2 as Combobox, __vue_component__$4 as Galeria, __vue_component__ as Logo, __vue_component__$1 as PreloaderVerticalizacao };
