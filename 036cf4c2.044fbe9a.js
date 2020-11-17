(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(9),o=(r(1),r(327)),l={id:"apollo-local-state",title:"Apollo Local State"},c={unversionedId:"integrations/apollo-local-state",id:"integrations/apollo-local-state",isDocsHomePage:!1,title:"Apollo Local State",description:"If you are using apollo-client >2.5 (or older, with apollo-link-state) to manage your app state with GraphQL, you're probably using a client-side only GraphQL schema and client-side directives such as @client.",source:"@site/docs/integrations/apollo-local-state.md",slug:"/integrations/apollo-local-state",permalink:"/docs/integrations/apollo-local-state",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/integrations/apollo-local-state.md",version:"current",sidebar:"sidebar",previous:{title:"graphql-modules",permalink:"/docs/presets/graphql-modules"},next:{title:"Create-React-App",permalink:"/docs/integrations/create-react-app"}},i=[],p={rightToc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/essentials/local-state"}),"apollo-client")," >2.5 (or older, with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/link/links/state.html"}),"apollo-link-state"),") to manage your app state with GraphQL, you're probably using a client-side only GraphQL schema and client-side directives such as ",Object(o.b)("inlineCode",{parentName:"p"},"@client"),"."),Object(o.b)("p",null,"These types and directives are not part of your remote GraphQL schema."),Object(o.b)("p",null,"For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query myQuery {\n  todos {\n    id\n    title\n    checked\n    selected @client\n  }\n}\n")),Object(o.b)("p",null,"If you wish to get better integration and fully type-safe types for your client-side schema as well, you can create a ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file for your local schema, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"type Todo {\n  selected: Boolean!\n}\n")),Object(o.b)("p",null,"And then, you can merge this part of the schema with your remote schema, by specifying it as part of your ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," field:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"schema:\n  - http://my-remote-schema/graphql\n  - my-client-schema.graphql\n")),Object(o.b)("p",null,"This way, the GraphQL Code Generator will generate complete typings that matches both your client fields and server fields."))}s.isMDXComponent=!0},327:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(1),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);