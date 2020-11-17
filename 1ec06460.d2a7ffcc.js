(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(9),p=(n(1),n(327)),o={id:"graphql-modules",title:"graphql-modules"},i={unversionedId:"presets/graphql-modules",id:"presets/graphql-modules",isDocsHomePage:!1,title:"graphql-modules",description:"The @graphql-codegen/graphql-modules-preset generates .ts file with TypeScript types, per each GraphQL-Modules module definition.",source:"@site/docs/presets/graphql-modules.md",slug:"/presets/graphql-modules",permalink:"/docs/presets/graphql-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/graphql-modules.md",version:"current",sidebar:"sidebar",previous:{title:"import-types",permalink:"/docs/presets/import-types"},next:{title:"Apollo Local State",permalink:"/docs/integrations/apollo-local-state"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage Example",id:"usage-example",children:[]}],l={rightToc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"@graphql-codegen/graphql-modules-preset")," generates ",Object(p.b)("inlineCode",{parentName:"p"},".ts")," file with TypeScript types, per each ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"http://graphql-modules.com/"}),"GraphQL-Modules")," module definition."),Object(p.b)("p",null,"The generates files will be generated based on each module definition, and based on the GraphQL schema defined in that specific module, allowing you to write type-safe resolvers, while keeping modules types boundaries."),Object(p.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("p",{parentName:"div"},"This preset generates code for ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-modules")," @ ",Object(p.b)("inlineCode",{parentName:"p"},"v1"),". Previous versions are not supported."))),Object(p.b)("h2",{id:"configuration"},"Configuration"),Object(p.b)("p",null,Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("img",{alt:"graphql-modules-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/graphql-modules-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(p.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/graphql-modules-preset\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"baseTypesPath")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",{parentName:"p"},"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"cwd")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"process.cwd()")),Object(p.b)("p",{parentName:"p"},"Optional, override the ",Object(p.b)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",Object(p.b)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execuion path is not your project root directory."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"importTypesNamespace")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Types")),Object(p.b)("p",{parentName:"p"},"Optional, override the name of the import namespace used to import from the ",Object(p.b)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"filename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",{parentName:"p"},"Required, sets the file name for the generated files."),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"encapsulateModuleTypes")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"namespace")),Object(p.b)("p",{parentName:"p"},"Configure how to encapsulate the module types, to avoid confusion."),Object(p.b)("p",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"p"},"namespace")," (default): will wrap all types in a TypeScript namespace, using the module name.\n",Object(p.b)("inlineCode",{parentName:"p"},"prefix"),": will prefix all types from a specific module with the module name.\n",Object(p.b)("inlineCode",{parentName:"p"},"none"),": will skip encapsulation, and generate type as-is.")),Object(p.b)("h2",{id:"usage-example"},"Usage Example"),Object(p.b)("p",null,"Here's a short example for generating types and resolvers for 2 modules:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"schema: './src/modules/**/typedefs/*.graphql'\ngenerates:\n  ./server/src/modules/:\n    preset: graphql-modules\n    presetConfig:\n      baseTypesPath: ../generated-types/graphql.ts # Where to create the complete schema types\n      filename: generated-types/module-types.ts # Where to create each module types\n    plugins:\n      - add:\n          content: '/* eslint-disable */'\n      - typescript\n      - typescript-resolvers\n")),Object(p.b)("p",null,"This will generate a file called ",Object(p.b)("inlineCode",{parentName:"p"},"module-types.ts")," under each module you have."),Object(p.b)("p",null,"To use the generates resolvers, you can use ",Object(p.b)("inlineCode",{parentName:"p"},"Resolvers")," signature and apply it to your resolvers object within the module:"),Object(p.b)("pre",null,Object(p.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// src/modules/user/resolvers.ts\nimport { MyModule } from './generated-types/module-types';\n\nexport const resolvers: MyModule.Resolvers = {\n  // Here you can implement only the types and fields defined in your module!\n};\n")),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},"You can find ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/tree/master/dev-test/modules"}),"an example project here"),".")))}c.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(1),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),c=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=c(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,u=b["".concat(o,".").concat(d)]||b[d]||m[d]||p;return n?r.a.createElement(u,i({ref:t},l,{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);