(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),p=n(9),r=(n(1),n(327)),i={id:"typescript-urql",title:"TypeScript Urql"},o={unversionedId:"plugins/typescript-urql",id:"plugins/typescript-urql",isDocsHomePage:!1,title:"TypeScript Urql",description:"{@import ../plugins/client-note.md}",source:"@site/docs/plugins/typescript-urql.md",slug:"/plugins/typescript-urql",permalink:"/docs/plugins/typescript-urql",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-urql.md",version:"current",sidebar:"sidebar",previous:{title:"TypeScript MongoDB",permalink:"/docs/plugins/typescript-mongodb"},next:{title:"TypeScript oclif",permalink:"/docs/plugins/typescript-oclif"}},b=[{value:"Usage Example",id:"usage-example",children:[]},{value:"Configuration",id:"configuration",children:[]}],c={rightToc:b};function m(e){var t=e.components,n=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-caution alert alert--warning"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Usage Requirements")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"In order to use this GraphQL Codegen plugin, please make sure that you have GraphQL operations (",Object(r.b)("inlineCode",{parentName:"p"},"query")," / ",Object(r.b)("inlineCode",{parentName:"p"},"mutation")," / ",Object(r.b)("inlineCode",{parentName:"p"},"subscription")," and ",Object(r.b)("inlineCode",{parentName:"p"},"fragment"),") set as ",Object(r.b)("inlineCode",{parentName:"p"},"documents: ...")," in your ",Object(r.b)("inlineCode",{parentName:"p"},"codegen.yml"),"."),Object(r.b)("p",{parentName:"div"},"Without loading your GraphQL operations (query, mutation, subscription and fragment), you won't see any change in the generated output.")))),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin generates ",Object(r.b)("inlineCode",{parentName:"p"},"urql")," (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/urql"}),"https://github.com/FormidableLabs/urql"),") components and HOC with TypeScript typings."),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"typescript-urql plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-urql?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(a.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/typescript-urql\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withComponent")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated Component."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"withHooks")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",{parentName:"p"},"Customized the output by enabling/disabling the generated React Hooks."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"urqlImportFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"urql")),Object(r.b)("p",{parentName:"p"},"You can specify module that exports components ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," and HOCs\nThis is useful for further abstraction of some common tasks (eg. error handling).\nFilepath relative to generated file can be also specified."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Deprecated. Changes the documentMode to ",Object(r.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag#gql")),Object(r.b)("p",{parentName:"p"},"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"graphql.macro"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(r.b)("h5",{parentName:"p"},"Gatsby"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentNodeImport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphql#DocumentNode")),Object(r.b)("p",{parentName:"p"},"Customize from which module will ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentNode")," be imported from.\nThis is useful if you want to use modules other than ",Object(r.b)("inlineCode",{parentName:"p"},"graphql"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"@graphql-typed-document-node"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"noExport")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(r.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Set this configuration to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Adds a suffix to generated operation result type names"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL operations variables prefix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Document")),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL operations variables suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables prefix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(r.b)("p",{parentName:"p"},"Changes the GraphQL fragments variables suffix."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(r.b)("p",{parentName:"p"},"Declares how DocumentNode are created:"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(r.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(r.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(r.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"This config should be used if ",Object(r.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(r.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(r.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(r.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(r.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(r.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"pureMagicComment")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"This config adds PURE magic comment to the static variables to enforce treeshaking for your bundler."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("h5",{parentName:"p"},"Override All Names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(r.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(r.b)("h5",{parentName:"p"},"Keep names as is"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(r.b)("h5",{parentName:"p"},"Remove Underscores"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),Object(r.b)("h2",{id:"usage-example"},"Usage Example"),Object(r.b)("p",null,"For the given input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query Test {\n  feed {\n    id\n    commentCount\n    repository {\n      full_name\n      html_url\n      owner {\n        avatar_url\n      }\n    }\n  }\n}\n")),Object(r.b)("p",null,"We can use the generated code like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"  <TestComponent variables={...}>\n    ...\n  </TestComponent>\n")),Object(r.b)("p",null,"Or if you prefer:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"  const [ result ] = useTestQuery(...);\n")),Object(r.b)("h2",{id:"configuration"},"Configuration"))}m.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(1),p=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var c=p.a.createContext({}),m=function(e){var t=p.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},l=function(e){var t=m(e.components);return p.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,u=l["".concat(i,".").concat(d)]||l[d]||s[d]||r;return n?p.a.createElement(u,o({ref:t},c,{components:n})):p.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return p.a.createElement.apply(null,i)}return p.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);