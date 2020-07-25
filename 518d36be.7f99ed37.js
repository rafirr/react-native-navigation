(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=(n(0),n(184));const i={id:"meta-contributing",title:"Contributing",sidebar_label:"Contributing"},o={id:"meta-contributing",isDocsHomePage:!1,title:"Contributing",description:"Thank you for showing interest in contributing to React-Native-Navigation! This project is developed and maintained by Wix in collaboration with the community.",source:"@site/docs/meta-contributing.mdx",permalink:"/react-native-navigation/docs/meta-contributing",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/meta-contributing.mdx",sidebar_label:"Contributing",sidebar:"docs",previous:{title:"React Context API",permalink:"/react-native-navigation/docs/third-party-react-context"}},b=[{value:"Stack Overflow",id:"stack-overflow",children:[]},{value:"Discord",id:"discord",children:[]},{value:"GitHub Issues",id:"github-issues",children:[{value:"Open an issue",id:"open-an-issue",children:[]},{value:"Respond to issues",id:"respond-to-issues",children:[]},{value:"Provide reproductions",id:"provide-reproductions",children:[]}]},{value:"Submitting PRs",id:"submitting-prs",children:[]},{value:"Workflow",id:"workflow",children:[{value:"Tests and the Playground app",id:"tests-and-the-playground-app",children:[]},{value:"Enable linter",id:"enable-linter",children:[]},{value:"Playground app Folder Structure",id:"playground-app-folder-structure",children:[]},{value:"Scripts",id:"scripts",children:[]}]}],c={rightToc:b};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Thank you for showing interest in contributing to React-Native-Navigation! This project is developed and maintained by Wix in collaboration with the community."),Object(r.b)("p",null,"There are various ways in which you can contribute to this library, not all require knowledge or expertise in native development. Listed below is all you need to get started with your first contribution."),Object(r.b)("h2",{id:"stack-overflow"},"Stack Overflow"),Object(r.b)("p",null,"Stack Overflow is used by developers to find answers and troubleshoot code. Users are encouraged to post questions on SO and tag them with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/wix-react-native-navigation"}),"wix-react-native-navigation")," tag. Answering issues on SO is very helpful and beneficial to the community, only this time, there's a personal angle - you can boost your SO ranking and rack up points quickly."),Object(r.b)("h2",{id:"discord"},"Discord"),Object(r.b)("p",null,"Another popular communication channel is our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/DhkZjq2"}),"Discord channel")," where users post questions and consult with each other. You're welcome to join the discussions and answer questions. This is also a great place to meet other community members and project maintainers."),Object(r.b)("h2",{id:"github-issues"},"GitHub Issues"),Object(r.b)("h3",{id:"open-an-issue"},"Open an issue"),Object(r.b)("p",null,"Found a bug? Missing a feature? Go ahead and open an issue! Make sure to add all details mentioned in the issue template. If you're interested in suggesting a big change, please speak to one of the admins on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#discord"}),"Discord")," to coordinate your effort."),Object(r.b)("h3",{id:"respond-to-issues"},"Respond to issues"),Object(r.b)("p",null,"Although the issue tracker is used solely for bug reports, issues are frequently opened for questions or to request assistance. As the project grows in popularity, more issues remain unanswered for long periods of time."),Object(r.b)("p",null,"Some issues can be trivial and easy to pinpoint - a missing import statement or apostrophe, wrong layout structure, etc. If you're an experienced user, helping out newcomers can be quite satisfying and allows maintainers to focus on features and bug fixes."),Object(r.b)("p",null,"Some issues are tagged as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/react-native-navigation/labels/user%3A%20looking%20for%20contributors"}),'"looking for contributors"'),". These issues have been recognized by the team, but aren't prioritized by Wix developers due to lack of time or for some other reason. We leave these issues to our community and you're more than welcome to take a crack at them. If you'd like to submit a PR, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#running-the-project"}),"these instructions")," on how to run the project locally."),Object(r.b)("h3",{id:"provide-reproductions"},"Provide reproductions"),Object(r.b)("p",null,"Reproducing bugs takes time. Lots of time. Usually that's because an issue is lacking important information, which then causes lots of back and forth communication between maintainers and users. Help us address more bugs and issues by providing reproductions."),Object(r.b)("p",null,"Providing reproductions improves the chances of an issue being prioritized by maintainers!"),Object(r.b)("p",null,"If an issue is reproduced with a specific combination of options, posting these options will usually suffice. If a specific layout structure is involved or specific actions need to be performed in a certain order - then we ask that you fork the project and push a branch with a reproduction to the Playground app."),Object(r.b)("p",null,"Check out the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/react-native-navigation/labels/user%3A%20requires%20reproduction"}),"list of issues requiring reproductions"),"."),Object(r.b)("h2",{id:"submitting-prs"},"Submitting PRs"),Object(r.b)("p",null,"So you've fixed a bug or added a feature and you're ready to submit a pull request \ud83c\udf89\ud83c\udf8a Make sure the title is clear and describes the reason for the PR. Please include any information you can which will help us understand the reasons for the PR, what it fixes and what it changes. Please include before/after pictures/gifs when appropriate."),Object(r.b)("h2",{id:"workflow"},"Workflow"),Object(r.b)("p",null,"This project is driven by tests. Before implementing any feature or fixing any bug, a failing test (e2e or unit or both) should be added, depending on the environment of where the fix should be implemented. For example, for an API change, a failing e2e should be written. For a small bug fix in Android, for example, a unit test in Android should be added."),Object(r.b)("p",null,"This will ensure good quality throughout the life of the project and will help avoid unexpected breakages."),Object(r.b)("p",null,"No PR will be accepted without adequate test coverage."),Object(r.b)("p",null,"If you need help running the project, have a look at the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"playground-app"}),"Playground app")," section. You can run the tests using the scripts below. "),Object(r.b)("h3",{id:"tests-and-the-playground-app"},"Tests and the Playground app"),Object(r.b)("p",null,"Besides an overview of basic React Native Navigation functionality, the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"playground-app"}),"Playground app")," can (and rather should) be used for e2e tests and reproductions. If your change requires an e2e, add it to the playground app, to the appropriate screen. Again, quick setup instructions available in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"playground-app"}),"Playground app")," section of these docs."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If a screen contains too many buttons, e2e tests might fail if the button is positioned out of screen bounds because Detox matchers detect it's invisible."))),Object(r.b)("h3",{id:"enable-linter"},"Enable linter"),Object(r.b)("p",null,"The project uses ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://prettier.io/"}),"Prettier")," to ensure code style consistency across the codebase. Make sure to install these plugins in your IDE."),Object(r.b)("p",null,"A pre-commit hook will verify that the linter passes when committing."),Object(r.b)("h3",{id:"playground-app-folder-structure"},"Playground app Folder Structure"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Folder"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The project itself composed of:")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib/android")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"android sources and unit tests")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib/ios")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS sources and unit tests")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib/src")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TypeScript sources and unit tests")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib/dist")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"compiled javascript sources and unit tests")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"lib/dist/index.js")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the entry point for ",Object(r.b)("inlineCode",{parentName:"td"},"import Navigation from 'react-native-navigation'"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"e2e")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/wix/detox"}),"detox")," e2e tests on both Android and iOS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"playground")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The end-user project all e2e tests run against. Contains its own ",Object(r.b)("inlineCode",{parentName:"td"},"src"),", ",Object(r.b)("inlineCode",{parentName:"td"},"android")," and ",Object(r.b)("inlineCode",{parentName:"td"},"ios"),". Does not have its own package.json, depends on the local ",Object(r.b)("inlineCode",{parentName:"td"},"<root>/lib")," for faster local development (no need to ",Object(r.b)("inlineCode",{parentName:"td"},"npm install")," locally).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"integration")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"misc javascript integration tests, proving integration with other libraries like redux")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"scripts")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"all scripts")))),Object(r.b)("h3",{id:"scripts"},"Scripts"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Command"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm install")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"installs dependencies")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run build")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"compiles TypeScript sources ",Object(r.b)("inlineCode",{parentName:"td"},"./lib/src")," into javascript ",Object(r.b)("inlineCode",{parentName:"td"},"./lib/dist"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run clean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cleans all build directories, stops packager, fixes flakiness by removing watchman cache, etc.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run start")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"starts the react-native packager for local debugging")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run xcode")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"for convenience, opens xcode in this project")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run install-android")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"builds playground debug/release version and installs on running android devices/emulators. ",Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"Options:")," ",Object(r.b)("inlineCode",{parentName:"td"},"-- --release"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run uninstall-android")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"uninstalls playground from running android devices/simulators")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-js")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs javascript tests and coverage report")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-unit-ios")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs ios unit tests in debug/release ",Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"Options:")," ",Object(r.b)("inlineCode",{parentName:"td"},"-- --release"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-unit-android")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs android unit tests in debug/release ",Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"Options:")," ",Object(r.b)("inlineCode",{parentName:"td"},"-- --release"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-e2e-ios")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs the ios e2e tests using ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/wix/detox"}),"detox")," in debug/release ",Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"Options:")," ",Object(r.b)("inlineCode",{parentName:"td"},"-- --release"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-e2e-android")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs the android e2e tests using ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"https://github.com/wix/detox"}),"detox")," in debug/release ",Object(r.b)("br",null)," ",Object(r.b)("strong",{parentName:"td"},"Options:")," ",Object(r.b)("inlineCode",{parentName:"td"},"-- --release"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"npm run test-all")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"runs all tests in parallel")))))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(m,b(b({ref:t},l),{},{components:n})):r.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,o[1]=b;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);