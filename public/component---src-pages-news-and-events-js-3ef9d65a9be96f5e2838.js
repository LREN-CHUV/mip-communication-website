webpackJsonp([97520446298981],{210:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(t=t.filter(function(e){return null!=e}),0!==t.length)return 1===t.length?t[0]:t.reduce(function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}})}},63:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&u())}function u(){if(!m){var e=o(a);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,i(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var c,p,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,h=[],m=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||m||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},427:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(1),s=r(l),c=n(5),p=r(c),f=n(172),d=r(f),h=n(428),m=r(h),y=n(173),v=({transitionName:y.nameShape.isRequired,transitionAppear:p.default.bool,transitionEnter:p.default.bool,transitionLeave:p.default.bool,transitionAppearTimeout:(0,y.transitionTimeout)("Appear"),transitionEnterTimeout:(0,y.transitionTimeout)("Enter"),transitionLeaveTimeout:(0,y.transitionTimeout)("Leave")},{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}),b=function(e){function t(){var n,r,a;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=i(this,e.call.apply(e,[this].concat(l))),r._wrapChild=function(e){return s.default.createElement(m.default,{name:r.props.transitionName,appear:r.props.transitionAppear,enter:r.props.transitionEnter,leave:r.props.transitionLeave,appearTimeout:r.props.transitionAppearTimeout,enterTimeout:r.props.transitionEnterTimeout,leaveTimeout:r.props.transitionLeaveTimeout},e)},a=n,i(r,a)}return a(t,e),t.prototype.render=function(){return s.default.createElement(d.default,u({},this.props,{childFactory:this._wrapChild}))},t}(s.default.Component);b.displayName="CSSTransitionGroup",b.propTypes={},b.defaultProps=v,t.default=b,e.exports=t.default},428:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return w.length?w.forEach(function(n){return e.addEventListener(n,t,!1)}):setTimeout(t,0),function(){w.length&&w.forEach(function(n){return e.removeEventListener(n,t,!1)})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=n(272),c=r(s),p=n(274),f=r(p),d=n(138),h=r(d),m=n(279),y=n(1),v=r(y),b=n(5),g=r(b),T=n(92),E=n(173),w=[];m.transitionEnd&&w.push(m.transitionEnd),m.animationEnd&&w.push(m.animationEnd);var _=({children:g.default.node,name:E.nameShape.isRequired,appear:g.default.bool,enter:g.default.bool,leave:g.default.bool,appearTimeout:g.default.number,enterTimeout:g.default.number,leaveTimeout:g.default.number},function(e){function t(){var n,r,a;o(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=r=i(this,e.call.apply(e,[this].concat(l))),r.componentWillAppear=function(e){r.props.appear?r.transition("appear",e,r.props.appearTimeout):e()},r.componentWillEnter=function(e){r.props.enter?r.transition("enter",e,r.props.enterTimeout):e()},r.componentWillLeave=function(e){r.props.leave?r.transition("leave",e,r.props.leaveTimeout):e()},a=n,i(r,a)}return a(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach(function(e){clearTimeout(e)}),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var r=(0,T.findDOMNode)(this);if(!r)return void(t&&t());var o=this.props.name[e]||this.props.name+"-"+e,i=this.props.name[e+"Active"]||o+"-active",a=null,l=void 0;(0,c.default)(r,o),this.queueClassAndNode(i,r);var s=function(e){e&&e.target!==r||(clearTimeout(a),l&&l(),(0,f.default)(r,o),(0,f.default)(r,i),l&&l(),t&&t())};n?(a=setTimeout(s,n),this.transitionTimeouts.push(a)):m.transitionEnd&&(l=u(r,s))},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,h.default)(function(){return n.flushClassNameAndNodeQueue()}))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop,(0,c.default)(e.node,e.className)}),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=l({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,v.default.cloneElement(v.default.Children.only(this.props.children),e)},t}(v.default.Component));_.displayName="CSSTransitionGroupChild",_.propTypes={},t.default=_,e.exports=t.default},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(210),s=r(l),c=n(1),p=r(c),f=n(5),d=r(f),h=n(10),m=(r(h),n(430)),y=({component:d.default.any,childFactory:d.default.func,children:d.default.node},{component:"span",childFactory:function(e){return e}}),v=function(e){function t(n,r){o(this,t);var a=i(this,e.call(this,n,r));return a.performAppear=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(a._handleDoneAppearing.bind(a,e,t)):a._handleDoneAppearing(e,t)},a._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performEnter=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(a._handleDoneEntering.bind(a,e,t)):a._handleDoneEntering(e,t)},a._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)||a.performLeave(e,t)},a.performLeave=function(e,t){a.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(a._handleDoneLeaving.bind(a,e,t)):a._handleDoneLeaving(e,t)},a._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete a.currentlyTransitioningKeys[e];var n=(0,m.getChildMapping)(a.props.children);n&&n.hasOwnProperty(e)?a.keysToEnter.push(e):a.setState(function(t){var n=u({},t.children);return delete n[e],{children:n}})},a.childRefs=Object.create(null),a.state={children:(0,m.getChildMapping)(n.children)},a}return a(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,m.getChildMapping)(e.children),n=this.state.children;this.setState({children:(0,m.mergeChildMappings)(n,t)});for(var r in t){var o=n&&n.hasOwnProperty(r);!t[r]||o||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(var i in n){var a=t&&t.hasOwnProperty(i);!n[i]||a||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach(function(t){return e.performEnter(t,e.childRefs[t])});var n=this.keysToLeave;this.keysToLeave=[],n.forEach(function(t){return e.performLeave(t,e.childRefs[t])})},t.prototype.render=function(){var e=this,t=[],n=function(n){var r=e.state.children[n];if(r){var o="string"!=typeof r.ref,i=e.props.childFactory(r),a=function(t){e.childRefs[n]=t};i===r&&o&&(a=(0,s.default)(r.ref,a)),t.push(p.default.cloneElement(i,{key:n,ref:a}))}};for(var r in this.state.children)n(r);var o=u({},this.props);return delete o.transitionLeave,delete o.transitionName,delete o.transitionAppear,delete o.transitionEnter,delete o.childFactory,delete o.transitionLeaveTimeout,delete o.transitionEnterTimeout,delete o.transitionAppearTimeout,delete o.component,p.default.createElement(this.props.component,o,t)},t}(p.default.Component);v.displayName="TransitionGroup",v.propTypes={},v.defaultProps=y,t.default=v,e.exports=t.default},429:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(427),i=r(o),a=n(172),u=r(a);e.exports={TransitionGroup:u.default,CSSTransitionGroup:i.default}},430:function(e,t,n){"use strict";function r(e){if(!e)return e;var t={};return i.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e}),t}function o(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a=void 0,u={};for(var l in t){if(r.hasOwnProperty(l))for(a=0;a<r[l].length;a++){var s=r[l][a];u[r[l][a]]=n(s)}u[l]=n(l)}for(a=0;a<o.length;a++)u[o[a]]=n(o[a]);return u}t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o;var i=n(1)},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=o;var i=n(1),a=(r(i),n(5)),u=r(a);t.nameShape=u.default.oneOfType([u.default.string,u.default.shape({enter:u.default.string,leave:u.default.string,active:u.default.string}),u.default.shape({enter:u.default.string,enterActive:u.default.string,leave:u.default.string,leaveActive:u.default.string,appear:u.default.string,appearActive:u.default.string})])},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(1),i=r(o),a=n(61),u=r(a),l=n(60),s=(r(l),function(e){var t=e.news;return i.default.createElement("ul",{className:"three columns clear"},t.map(function(e,t){var n=e.node;return i.default.createElement("li",{className:"item",key:n.id},i.default.createElement("article",null,i.default.createElement("h3",{className:"bullet bullet-bg-orange no-margin"},n.title),i.default.createElement("div",{className:"subtitle"},n.subtitle),i.default.createElement("img",{className:"full-width",src:n.image.sizes.src,alt:n.image.title}),i.default.createElement("p",null,n.preview),i.default.createElement(u.default,{to:"/article/"+n.id,className:"read-more align-right clear"},"Read more")))}))});t.default=s,e.exports=t.default},282:function(e,t){},187:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),s=n(429);n(282);var c=function(e){function t(n){o(this,t);var r=i(this,e.call(this,n));return r.state={currentSlideIndex:0},r}return a(t,e),t.prototype.componentDidMount=function(){this.timer=setInterval(this.toNextSlide.bind(this),this.props.duration)},t.prototype.componentWillUnmount=function(){clearInterval(this.timer)},t.prototype.currentSlide=function(){var e=this.state.currentSlideIndex;return this.props.slides[e]},t.prototype.toNextSlide=function(){this.setState(function(e,t){return e.currentSlideIndex===t.slides.length-1?{currentSlideIndex:0}:{currentSlideIndex:e.currentSlideIndex+1}})},t.prototype.render=function(){var e=this.currentSlide();return l.default.createElement("div",{className:"slider"},l.default.createElement(s.CSSTransitionGroup,{transitionName:"slide",transitionEnterTimeout:300,transitionLeaveTimeout:300},l.default.createElement("article",{className:"slide",key:e.node.titile},l.default.createElement("img",{className:"slide-image",src:e.node.image.sizes.src,alt:e.node.titile}),l.default.createElement("h2",{className:"slide-title bullet bullet-bg-orange no-margin"},e.node.titile),l.default.createElement("div",{className:"subtitle"},e.node.subtitle),l.default.createElement("p",null,e.node.content))))},t}(l.default.Component);c.defaultProps={duration:4e3},t.default=c,e.exports=t.default},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),s=n(5),c=r(s),p=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){var e=document.createElement("script");e.src="https://platform.twitter.com/widgets.js",e.charSet="utf-8",e.async=!0,document.body.appendChild(e)},t.prototype.render=function(){return l.default.createElement("a",{className:"twitter-timeline",href:this.props.href,"data-height":"600"},"Tweets by HBPmedical")},t}(l.default.Component);p.propTypes={href:c.default.string.isRequired},t.default=p,e.exports=t.default},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=n(1),l=r(u),s=n(187),c=r(s),p=n(189),f=r(p),d=n(71),h=r(d),m=n(5),y=r(m),v={data:y.default.object.isRequired},b=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.data.us.edges;return l.default.createElement("div",null,l.default.createElement("h1",{className:"bullet bullet-outline bullet-border-red"},"News and events"),l.default.createElement("div",{className:"two columns clear"},l.default.createElement("section",{className:"item much-wider"},l.default.createElement("h2",{className:"hidden"},"Top news"),l.default.createElement(c.default,{duration:5e3,slides:e.filter(function(e){return e.node.isHeadline})})),l.default.createElement("section",{className:"item much-narrower"},l.default.createElement("h2",{className:"hidden"},"Twitter timeline"),l.default.createElement(f.default,{href:"https://twitter.com/HBPmedical"}))),l.default.createElement("section",null,l.default.createElement("h2",{className:"hidden"},"All news"),l.default.createElement(h.default,{news:e})))},t}(u.Component);b.propTypes=v,t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-news-and-events-js-3ef9d65a9be96f5e2838.js.map