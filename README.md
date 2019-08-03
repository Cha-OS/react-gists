# react-gists

https://reactjs.org/ gists, examples, demos, etc

# React Docs

## **Procedure**

1. Follow the [installation instructions for Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to make a new project:

   1. cd ..../development
2. mkdir react
   3. cd react
4. npx create-react-app tic-tac-toe
      this is the “Zero-Config Setup.
      (if you want to **customize** this configuration you can do “**npm run eject**”)
      It installs:
   
   1. light Dev Server
   
   2. Webpack
   
   3. Babel, etc

4)  cd tic-tac-toe

5)  npm start

6)  **Note**: When you’re ready to deploy to production, running npm run build will create an optimized build of your app in the build folder. You can learn more about Create React App from its README and the User Guide.

##Developer Tools

1. Installing IDE
   using VSC (**Visual Studio Code)**

2. 1. install VSC’s extension [**Simple React Snippets**](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
   2. **OPTION:** install VSC’s extension [**Prettier - Code formatter**](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
      1. open VSC’s Code/Preferences/Settings and in search type “on save” and you will find “Code Actions On Save“, then open the suggested option “Edit in settings.json”
         add the following entry in the json
         "editor.formatOnSave": true
   3. (https://babeljs.io/docs/en/editors/#visual-studio-code)
      **Babel- Syntax Highlighting**
      1. Install the [sublime-babel-vscode](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode) extension and follow the instructions.
      2. There seems to be one other way to get the syntax highlighting working and you can learn more about it in the [Visual Studio Code docs](https://code.visualstudio.com/Docs/languages/javascript#_writing-jsconfigjson).
   4. VS Code supports JSX and React Native. You will get IntelliSense for React/JSX and React Native from automatically downloaded type declaration (typings) files from the [npmjs](https://www.npmjs.com/) type declaration file repository. Additionally, you can install the popular [**React Native extension**](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native) (**INSTALL IT!**) from the Marketplace.
   5. To enable ES6 import statements for React Native, you need to set the `allowSyntheticDefaultImports` compiler option to true.

3. The React Devtools extension for [**Chrome**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) lets you inspect a React component tree with your browser’s developer tools.

   1. so add the extension: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

   2. The React DevTools let you check the props and the state of your React components.

      After installing React DevTools, you can right-click on any element on the page, click “Inspect” to open the developer tools, and the React tab will appear as the last tab to the right.

## About

1.  React can also render on the server using Node and power mobile apps using [React Native](https://facebook.github.io/react-native/).

## Tutorials

1. https://reactjs.org/tutorial/tutorial.html
2. https://codepen.io/gaearon/pen/gWWZgR?editors=0010
3. https://reactjs.org/docs/hello-world.html
4. https://www.youtube.com/watch?v=Ke90Tje7VS0
5. https://www.w3schools.com/whatis/whatis_react.asp
6. https://jobs.lever.co/rangle/d221e8e1-47f4-4dd6-83d0-bb53951f3753
7. https://www.edureka.co/blog/interview-questions/react-interview-questions/
8. https://reactjs.org/docs/glossary.html#single-page-application
9. https://facebook.github.io/jsx/
10.

##Tools

1. https://babeljs.io/docs/en/index.html
   2. Babel can convert JSX syntax! Check out our [React preset](https://babeljs.io/docs/en/babel-preset-react) to get started.
2. https://facebook.github.io/jsx/
3. https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
4. https://webpack.js.org/

## Additional Support

3. If you get stuck, check out the [**community support resources**](https://reactjs.org/community/support.html). In particular, [**Reactiflux Chat**](https://discord.gg/0ZcbPKXt5bZjGY5n) is a great way to get help quickly.
   If you don’t receive an answer, or if you remain stuck, please file an issue, and we’ll help you out.

## React PWAs

1. https://developers.google.com/web/progressive-web-apps/
2. https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
3. https://www.gistia.com/angular-progressive-web-app-native/

## Angular to React

1. https://dev.to/httpjunkie/angular-to-react-in-30-days-p5k
2. https://medium.com/javascript-in-plain-english/react-to-angular-some-helpful-tips-for-making-the-transition-c8463619e374
3. https://www.toptal.com/react/why-did-i-switch-from-angularjs-to-react
4. https://itnext.io/is-angular-dying-because-of-react-a8e885f09421
5. https://buttercms.com/blog/migrating-from-angularjs-to-react

## Using React Components in Angular

1. https://github.com/ngReact/ngReact
2. https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_component_in_angular_2.x.html
   3. https://github.com/gooddata/gooddata-react-components
3. https://github.com/Cha-OS/ng2-redux

## Testing

1. https://www.fullstackreact.com/30-days-of-react/day-22/
2. https://medium.com/dailyjs/testing-react-an-overview-56204839cbad
3. https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a

### Testing React — an overview

https://medium.com/dailyjs/testing-react-an-overview-56204839cbad

1. **The seven principles of software testing**

   1. **Testing shows the presence of defects**Testing can only assure you have bugs in your application, it can’t prove your application is error-free.
   2. **Exhaustive testing is impossible**You can’t cover each possible scenario, focus on the most important aspects to test.
   3. **Early testing**The sooner you start testing during an iteration or in your whole project lifetime the better you can direct your development flow. Earlier found bugs are cheaper to fix than those found later.
   4. **Defect clustering**Most of the reported defects will occur in clustered regions within your code e.g. 80% of the problems are found in 20% of the modules.
   5. **The pesticide paradox**Running the same tests over time will not detect new defects in your application. As your applications evolve your tests need to evolve too
   6. **Testing is context dependent**Testing can happen with different focus depending on your application. A medical application needs to be flawless whereby a professional website has to be performant
   7. **The absence of errors fallacy**Related to the first principle the absence of errors does not mean there are no errors that will occur in a shipped version

2. there a three separate levels of testing: **Unit**, **Integration,** and **End to End(E2E)** tests.

   1. The difference between those kinds of tests is mainly <u>the amount of code that is covered by a single test</u>. While you focus on the validity of a single component or function in a **unit test**. You want to ensure the manner of function between certain components/function in an **integration test** till you test a certain behavior of your system while imitating the actions a possible user may trigger in your system with an **E2E test**.

3. ## Distribution of your effort to test the different levels

   You may know the **testing pyramid**? Its shape defines the number of tests that should be written. As you are moving up on the pyramid the tests are getting larger and less frequent. Developers at Google suggest 70/20/10 distribution, 70% unit test, 20% integration and 10% end-to-end test.

   ![img](https://miro.medium.com/max/1400/0*8Uapgla-XhuHS6ph.png)testing pyramid from [Kent C. Dodds](https://medium.com/u/db72389e89d8?source=post_page---------------------------)’ slides