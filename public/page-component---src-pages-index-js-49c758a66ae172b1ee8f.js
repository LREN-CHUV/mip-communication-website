webpackJsonp([4],{"./src/components/NewsList.js":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./node_modules/react/react.js"),i=n(l),s=a("./node_modules/gatsby-link/index.js"),o=n(s),r=a("./node_modules/prop-types/index.js"),u=n(r),c=function(e){var t=e.news;return i.default.createElement("ul",{className:"three columns clear"},t.map(function(e){return i.default.createElement("li",{className:"item",key:e.key},i.default.createElement("article",null,i.default.createElement("h3",{className:"bullet bullet-bg-orange no-margin"},e.title),i.default.createElement("div",{className:"subtitle"},e.subtitle),i.default.createElement("img",{className:"full-width",src:e.image,alt:"placeholder"}),i.default.createElement("p",null,e.content),i.default.createElement(o.default,{to:"/article/"+e.id,className:"read-more align-right clear"},"Read more")))}))};c.propTypes={news:u.default.arrayOf(u.default.shape({title:u.default.string.isRequired,subtitle:u.default.string.isRequired,content:u.default.string.isRequired,image:u.default.string.isRequired,id:u.default.number.isRequired})).isRequired},t.default=c,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-preset-env/lib/index.js","/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-preset-stage-0/lib/index.js","/home/kolesnikov_v/www/mipCommunication/mip-communication-website/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("./node_modules/react/react.js"),i=n(l),s=a("./src/components/NewsList.js"),o=n(s),r=[{id:1,title:'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',subtitle:"Jul. 2, 2017",image:"http://lorempixel.com/400/200/business/",content:"the MIP is excited to announce the subproject's upcoming Workshop that will takeplace in Málaga, Spain on February 20th, 2017. The event will focus on sharingknowledge about diseases cluster management."},{id:2,title:'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',subtitle:"Jul. 2, 2017",image:"http://lorempixel.com/400/200/business/",content:"the MIP is excited to announce the subproject's upcoming Workshop that will takeplace in Málaga, Spain on February 20th, 2017. The event will focus on sharingknowledge about diseases cluster management."},{id:3,title:'Announcing SP8 Workshop SGA2 "Diseases cluster HBP Platform Development"',subtitle:"Jul. 2, 2017",image:"http://lorempixel.com/400/200/business/",content:"the MIP is excited to announce the subproject's upcoming Workshop that will takeplace in Málaga, Spain on February 20th, 2017. The event will focus on sharingknowledge about diseases cluster management."}];t.default=function(){return i.default.createElement("div",null,i.default.createElement("h1",{className:"hidden"},"Home"),i.default.createElement("section",{className:"centered"},i.default.createElement("h2",{className:"large"},"Our mission"),i.default.createElement("p",{className:"medium"},"The ",i.default.createElement("strong",null,"Medical Informatics Platform")," is a Global Open-Source Platform allowing hospitals and research centers worldwide to share medical data. It enableds online users to access efficiently, accurate and relevant information on brain related diseases, strictly preserving patients' confidentiality")),i.default.createElement("section",{className:"centered"},i.default.createElement("h2",{className:"large"},"Our vision"),i.default.createElement("p",{className:"medium"},"The Medical Informatics Platform breaks down the traditional barriers between patient's care, brain science research and clinical research to accelerate the identification of brain diseases and the most effective treatments")),i.default.createElement("section",null,i.default.createElement("h2",{className:"bullet bullet-outline bullet-border-red"},"Latest news"),i.default.createElement(o.default,{news:r})))},e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-index-js-49c758a66ae172b1ee8f.js.map