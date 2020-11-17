(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(9),i=(n(1),n(327)),r={id:"contributing",title:"Contributing"},l={unversionedId:"custom-codegen/contributing",id:"custom-codegen/contributing",isDocsHomePage:!1,title:"Contributing",description:"So now when your new plugin is ready, you can either maintain it in your own repo and npm package, or you can contribute and make it part of the GraphQL Code Generator repo.",source:"@site/docs/custom-codegen/contributing.md",slug:"/custom-codegen/contributing",permalink:"/docs/custom-codegen/contributing",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/custom-codegen/contributing.md",version:"current",sidebar:"sidebar",previous:{title:"Visitor Pattern",permalink:"/docs/custom-codegen/using-visitor"},next:{title:"Migration to 1.0.0",permalink:"/docs/migration/from-0-18"}},c=[{value:"1. Requirements",id:"1-requirements",children:[]},{value:"2. Fork and Clone",id:"2-fork-and-clone",children:[]},{value:"3. Install Dependencies",id:"3-install-dependencies",children:[]},{value:"4. Make sure everything works",id:"4-make-sure-everything-works",children:[]},{value:"5. Add your plugin",id:"5-add-your-plugin",children:[]},{value:"6. Create your plugin",id:"6-create-your-plugin",children:[]},{value:"7. Test your plugin",id:"7-test-your-plugin",children:[]},{value:"8. Integration",id:"8-integration",children:[]},{value:"9. Documentation",id:"9-documentation",children:[]},{value:"10. Add it to the live demo (optional)",id:"10-add-it-to-the-live-demo-optional",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"So now when your new plugin is ready, you can either maintain it in your own repo and npm package, or you can contribute and make it part of the GraphQL Code Generator repo."),Object(i.b)("p",null,"Our repository contains plugins for all languages and platforms, and if your plugin could be helpful for other, please consider to create a PR and maintain it in our repo. This will also promise to run your tests against the latest core changes, and make sure that there are no breaking changes that effect your plugin."),Object(i.b)("h2",{id:"1-requirements"},"1. Requirements"),Object(i.b)("p",null,"To be able to clone, build and develop codegen, you'll need to have the following installed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com"}),"GitHub Account")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/downloads"}),"Git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"NodeJS")," (v10/v12/v13)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://yarnpkg.com/"}),"Yarn")," (v1)"),Object(i.b)("li",{parentName:"ul"},"Any code editor (we recommend ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/"}),"VSCode"),")")),Object(i.b)("p",null,"GraphQL Code Generator is using the following stack to manage the source code:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," - for writing the code"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kamilkisiela/bob"}),"Bob")," - for building, bundling and development workflow"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://jestjs.io/"}),"Jest")," - for running tests.")),Object(i.b)("h2",{id:"2-fork-and-clone"},"2. Fork and Clone"),Object(i.b)("p",null,"Start by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo"}),"creating a Fork in GitHub"),", this will allow you to make changes and push them easily later."),Object(i.b)("p",null,"Then, use Git ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github"}),"to clone")," your newly created fork repository."),Object(i.b)("p",null,"It's also recommended to create a new Git branch at this point, from ",Object(i.b)("inlineCode",{parentName:"p"},"master")," branch."),Object(i.b)("h2",{id:"3-install-dependencies"},"3. Install Dependencies"),Object(i.b)("p",null,"GraphQL Code Generator is built as a monorepo, using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/workspaces/"}),"Yarn Workspaces"),", so it means that all scripts and dependencies are located in the root ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," of the project."),Object(i.b)("p",null,"So now that you have a local copy of the project, start by installing the dependencies for all packages in the repo, by running the following in the root directory of the project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you make changes, add libraries or new packages, make sure to install the dependencies again, but always from the root directory, otherwise you'll break the monorepo structure.")),Object(i.b)("h2",{id:"4-make-sure-everything-works"},"4. Make sure everything works"),Object(i.b)("p",null,"To test the initial scripts and verify that you have a valid development environment, start by running thw following scripts from the root directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn build\nyarn test\n")),Object(i.b)("p",null,"The command above will make sure to build all common/core packages, and will make sure that all tests are passing."),Object(i.b)("h2",{id:"5-add-your-plugin"},"5. Add your plugin"),Object(i.b)("p",null,"To add your plugin, start by creating a directory for it. All existing plugins are located under ",Object(i.b)("inlineCode",{parentName:"p"},"packages/plugins/")," directory, so add it there."),Object(i.b)("p",null,"Now, create a simple ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," (or, you can ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator/blob/master/packages/plugins/typescript/typescript/package.json"}),"copy from other plugins"),"...)"),Object(i.b)("p",null,"Make sure to follow the following instructions:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Make sure the package name starts with ",Object(i.b)("inlineCode",{parentName:"li"},"@graphql-codegen/")," prefix.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "name": "@graphql-codegen/MY_PLUGIN_NAME",\n')),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Make sure that the version is aligned with all other existing packages.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "version": "X.Y.Z",\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The current version of the codegen is: ",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://img.shields.io/npm/v/@graphql-codegen/cli?color=%23e15799&label=",alt:"Codegen version"})))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Make sure that you have the following ",Object(i.b)("inlineCode",{parentName:"li"},"scripts")," configured;")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "scripts": {\n    "lint": "eslint **/*.ts",\n    "test": "jest --no-watchman --config ../../../../jest.config.js",\n    "prepack": "bob prepack"\n  },\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This will make sure that your plugin is compatible with our build and test system.")),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Make sure your basic plugin dependencies are configured this way:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'  "dependencies": {\n    "@graphql-codegen/plugin-helpers": "X.Y.Z",\n    "tslib": "~1.11.1"\n  },\n  "peerDependencies": {\n    "graphql": "^0.12.0 || ^0.13.0 || ^14.0.0 || ^15.0.0"\n  },\n')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"graphql")," must be a devDependency in order to allow develoeprs to choose their own version.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"tslib")," is required to compile plugins.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"@graphql-codegen/plugin-helpers")," contains helpful types and utils. Make sure it has the same version as your package.")),Object(i.b)("p",null,"Now that your plugin is configured, you need to make sure Yarn knows about it and links it to the monorepo, so run the following command again, in the root direcory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn\n")),Object(i.b)("h2",{id:"6-create-your-plugin"},"6. Create your plugin"),Object(i.b)("p",null,"To create your new plugin, simply create ",Object(i.b)("inlineCode",{parentName:"p"},"src/index.ts")," in your plugin directory, and start with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { PluginFunction, Types } from '@graphql-codegen/plugin-helpers';\n\nexport type MyPluginConfig = {\n  name: string;\n};\n\nexport const plugin: PluginFunction<Partial<MyPluginConfig>, MyPluginConfig> = (\n  schema: GraphQLSchema,\n  documents: Types.DocumentFile[],\n  config: TypeScriptDocumentsPluginConfig\n) => {\n  return `Hello ${config.name || 'anonymous'}!`;\n};\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"schema")," is the merged ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," object, from all sources. this will always be available for plugin.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"documents")," is an array of GraphQL operations (query/mutatation/subscription/fragment). This is optional, and you can use it only if your plugin needs it.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"config")," is the merged configuration passed in the ",Object(i.b)("inlineCode",{parentName:"p"},".yaml")," configuration file of the codegen.")),Object(i.b)("p",null,"You can follow the plugin tips in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-codegen/write-your-plugin"}),"Write Your Plugin"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-codegen/validate-configuration"}),"Validate Configuration")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/custom-codegen/using-visitor"}),"Using Visitor")," sections."),Object(i.b)("h2",{id:"7-test-your-plugin"},"7. Test your plugin"),Object(i.b)("p",null,"To test your plugin, create a test file - ",Object(i.b)("inlineCode",{parentName:"p"},"tests/plugin.spec.ts")," with the following content;"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { plugin } from '../src';\n\ndescribe('My Plugin', () => {\n  const schema = buildSchema(/* GraphQL */ `\n    type Query {\n      foo: String!\n    }\n  `);\n\n  it('Should greet', async () => {\n    const result = await plugin(schema, [], {\n      name: 'Dotan',\n    });\n\n    expect(result).toBe('Hello Dotan!');\n  });\n});\n")),Object(i.b)("p",null,"Now, to make sure it works, run the following in your plugin directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn test \n")),Object(i.b)("h2",{id:"8-integration"},"8. Integration"),Object(i.b)("p",null,"You can also test the integration of your plugin with the codegen core and cli, the integration with other plugins and the output for some complex schemas and operations."),Object(i.b)("p",null,"To do that, make sure everything is built by using ",Object(i.b)("inlineCode",{parentName:"p"},"yarn build")," in the root directory, then you can use it in ",Object(i.b)("inlineCode",{parentName:"p"},"./dev-test/codegen.yml"),", and run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn generate:examples")," in the project root directory, to run it. "),Object(i.b)("h2",{id:"9-documentation"},"9. Documentation"),Object(i.b)("p",null,"GraphQL Code Generator website has API Reference for all our plugins, most of the documentation is generated from code, and some of it is written manually."),Object(i.b)("p",null,"In order to add it to the website, do the following:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Add JSDoc annotations to your config object, it can also include default value, examples and type:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"\nexport type MyPluginConfig = {\n  /**\n   * @name name\n   * @description This allow you to generate a greeting with custom name\n   * @default anonymous\n   *\n   * @example Change the name\n   * ```yml\n   * generates:\n   * path/to/file.ts:\n   *  plugins:\n   *    - my-plugin\n   *  config:\n   *    name: Uri\n   * ```\n   */\n  name: string;\n};\n")),Object(i.b)("p",null,"Now, open ",Object(i.b)("inlineCode",{parentName:"p"},"./website/generate-config.js")," and add a record to the mapping in that filee, point the file with the configuration annotation, and the output file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mapping = {\n  '../packages/plugins/my-plugin/src/index.ts': BASE_DIR + '/my-plugin.md',\n}\n")),Object(i.b)("p",null,"Now, navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"website")," directory and run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn generate:config-docs")," -this will take a minute, and it will generate the ",Object(i.b)("inlineCode",{parentName:"p"},".md")," for all plugins. You should find your ",Object(i.b)("inlineCode",{parentName:"p"},"my-plugin.md")," file under ",Object(i.b)("inlineCode",{parentName:"p"},"website/docs/generated-config")," directory."),Object(i.b)("p",null,"Now, run ",Object(i.b)("inlineCode",{parentName:"p"},"yarn start")," to run the website. You markdown file is loaded, but it's not displayed yet, so let's create a new page for it first. "),Object(i.b)("p",null,"Create ",Object(i.b)("inlineCode",{parentName:"p"},"my-plugin.md")," under ",Object(i.b)("inlineCode",{parentName:"p"},"website/docs/plugins/")," and add the following content to it, and include the generated configuration API reference:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-md"}),"---\nid: my-plugin\ntitle: My Plugin\n---\n\nThis is my new plugin. \n\nAdd here some custom instructions, explainations, installation guide and more.\n\n{@import ../generated-config/my-plugin.md}\n\n")),Object(i.b)("p",null,"Your plugin page should be available in: ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/plugins/my-plugin")),Object(i.b)("p",null,"Now, just add it it to the website sidebar by updating ",Object(i.b)("inlineCode",{parentName:"p"},"website/sidebar.js")," file."),Object(i.b)("h2",{id:"10-add-it-to-the-live-demo-optional"},"10. Add it to the live demo (optional)"),Object(i.b)("p",null,"Our website has a live demo in the main page for most plugins, and you can add it there if you wish."),Object(i.b)("p",null,"To add a new example to the live demo, start by making sure that your plugin package is available for the website:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"website/package.json")," and add your plugin package under ",Object(i.b)("inlineCode",{parentName:"li"},"dependencies"),"."),Object(i.b)("li",{parentName:"ol"},"Edit ",Object(i.b)("inlineCode",{parentName:"li"},"website/src/components/live-demo/plugins.js")," and add a mapping for the name of your plugin and it's package. This is required in order to have lazy loading and dynamic imports in our website.")),Object(i.b)("p",null,"Now, add your example under ",Object(i.b)("inlineCode",{parentName:"p"},"website/src/components/live-demo/examples.js")," - you can add a custom schema, documents and configuration."))}b.isMDXComponent=!0},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(1),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(r,".").concat(d)]||u[d]||s[d]||i;return n?o.a.createElement(m,l({ref:t},p,{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);