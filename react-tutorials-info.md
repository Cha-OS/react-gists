# React - Tutorials.Info

## Misc

1. A **component** (**React component type**) takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render` method.
2. `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called “**JSX**” which makes these structures easier to write.
4. All React component classes that have a `constructor` should start it with a `super(props)` call.

## JSX. Renderer

1. **JSX** comes with the full power of JavaScript. You can put *any* JavaScript expressions within **braces** inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.
2. To **render multiple items in React**, we can use an array of React elements.
   1. but we need to add a key e.g. (`<li key={user.id}>`), otherwise we'll get an error:
      **Warning**: Each child in an array or iterator should have a unique “key” prop. Check the render method of “Game”.
   2. Keys do not need to be globally unique; they only need to be unique between components and their siblings.
   3. **It’s strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.
3. creating "loop-ed" UI in renderer
   1. React does not like for **loops** in its **render**() method
   2. you can put it out of it in a function and add the function result
   3. https://stackoverflow.com/questions/22876978/loop-inside-react-jsx

## States

1. To “remember” things, components use **state**. React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it’s defined in.
2. **NEVER** mutate this.state directly (this.state = X), as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable."
3. https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c
4. since `setState()` automatically [merges a partial state into the current state](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged), we only needed to call it with the changed parts. The merging is **shallow**.

### **Lifting state into a parent component**

1. it is common when React components are refactored
2. **if we want to manage/use states from child components in their parent component**, We may think that parent component should just ask each child component for its state. Although this approach is possible in React, **<u>we discourage it</u>** because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store that state in the parent  component instead of in each child.
3. **To collect data from multiple children**, or **to have two child components communicate with each other**, you need to declare the **shared state in their parent component** instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.
4. Since **state is considered to be private to a component** that defines it, we cannot update the parent’s state directly from its child. Instead, we’ll pass down a function from the parent to the child, and we’ll have child call that function when it wants to change the parent's state.
5. Since the child components no longer maintain state, the child components receive values from the parent component and inform the parent component when they’re clicked. In React terms, the child components are now **controlled components**. The parent has full control over them.

1. In React, it’s conventional to use `on[Event]` names for props which represent events and `handle[Event]` for the methods which handle the events.

### **Why Immutability Is Important**

   https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important

   1. Complex Features Become Simple
   2. Detecting Changes
   3. Determining When to Re-Render in React
      The main benefit of immutability is that it helps you build **pure components** in React. You can learn more about `shouldComponentUpdate()` and how you can build *pure components* by reading [**Optimizing Performance**](https://reactjs.org/docs/optimizing-performance.html#examples).
      4. Unlike the array `push()` method you might be more familiar with, the `concat()` method doesn’t mutate the original array, so we prefer it.

## **Props**

1. <u>**Props** should never be changed in a child component</u>, so if there’s something going on that alters some variable, that variable should belong to the component state.
2. Props are also used to **allow child components to access methods defined in the parent component**. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.
3. Most of your components will just display some kind of information based on the props they received, and stay **stateless**.

## Component Re-rendering

1. There are three things that cause a React component to re-render:
      (https://www.reddit.com/r/reactjs/comments/54gl72/why_use_state_vs_class_properties/)
      1. The parent component re-rendered
         1. So: When you call `setState` in a component, React **automatically updates the child components** inside of it too.
      2. The component called `this.setState()`
   3. The component called `this.forceUpdate()`
2. One of the core concepts of React is that a component's render output should be solely based on its props and state. So, if you want to use something for rendering, you should put it in state, and the correct way to do that is with `this.setState()`.

## Styling and CSS

1. https://reactjs.org/docs/faq-styling.html

2. The React documentation on [manipulating class names](https://facebook.github.io/react/docs/class-name-manipulation.html) suggests the [`classnames`](https://github.com/JedWatson/classnames) NPM package.
   The docs for the package are great.

   1. > If you often find yourself writing code like this, [classnames](https://www.npmjs.com/package/classnames#usage-with-reactjs) package can simplify it.

3. React can be used to power **animations**. See [React Transition Group](https://reactcommunity.org/react-transition-group/) and [React Motion](https://github.com/chenglou/react-motion), for example.

4. https://react.semantic-ui.com/

## React Material-UI
1. https://material-ui.com/

## Forms

1. https://reactjs.org/docs/forms.html
2. https://redux-form.com/6.7.0/examples/material-ui/
3. https://material-ui.com/components/text-fields/
4. https://material-ui.com/api/form-control/
5. https://itnext.io/keep-calm-and-handle-forms-in-react-js-52c67eea340e
6. **Controlled Components**
   1. In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with [`setState()`](https://reactjs.org/docs/react-component.html#setstate).
   2. We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.
   3. When you need to handle **multiple controlled `input` elements**, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.
7. **Uncontrolled Components**
   1. form elements whose values are read-only (e.g. `<input type="file" />`) are  **uncontrolled components** in React. They are discussed together with other uncontrolled components in https://reactjs.org/docs/uncontrolled-components.html
   2. **It can sometimes be tedious to use controlled components, because you need to write an event handler for every way your data can change** and pipe all of the input state through a React component. This can become particularly annoying when you are converting a preexisting codebase to React, or integrating a React application with a non-React library. In these situations, you might want to check out [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html), an alternative technique for implementing input forms.
8. **Fully-Fledged Solutions**
   1. If you’re looking for a complete solution including **validation**, **keeping track of the visited fields**, and **handling form submission**, [**Formik**](https://jaredpalmer.com/formik) is one of the popular choices. However, it is built on the same principles of controlled components and managing state — so don’t neglect to learn them.
## State Management. Flux. Redux. Relay
1. https://www.sitepoint.com/getting-started-with-react-graphql-and-relay-part-1-of-2/

2. https://www.quora.com/How-do-React-Flux-GraphQL-and-Relay-work-together

### Redux

1. ![Screen Shot 2019-08-01 at 11.58.39 PM](/Users/SR/Documents/data/development/react/react-gists/redux-diagram.png)
2. always be careful to **not accidentally mutate the original state** while working with redux app. Because in case you mutate state, store’s state may get updated but react will not detect it and you would not be able to witness changes in your react app. FYI 90% of errors in any redux app happens due to mutated state.

### Thoughts on State management

1. **STATE MANAGEMENT**
   For state management, I stick to redux because it has the largest community and support, as well as it has been around for as long state management libraries have been around. This provides many benefits.
   Another library used in state management that has gained a lot of popularity is Apollo. I’ve personally used Apollo more for making requests to my graphql API, and have used it very little for state management.
   The React context API has also been gaining traction as it has improved its functionality in the latest versions of react. **REDUX** uses the react.context API behind the scenes, so yea.
2. 

## Data Fetching

1. https://reactjs.org/community/data-fetching.html

## Testing

1. https://www.fullstackreact.com/30-days-of-react/day-22/

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
   2. **Distribution of your effort to test the different levels**
      You may know the **testing pyramid**? Its shape defines the number of tests that should be written. As you are moving up on the pyramid the tests are getting larger and less frequent. Developers at Google suggest 70/20/10 distribution, 70% unit test, 20% integration and 10% end-to-end test.
      ![img](https://miro.medium.com/max/1400/0*8Uapgla-XhuHS6ph.png)
      testing pyramid from [Kent C. Dodds](https://medium.com/u/db72389e89d8?source=post_page---------------------------)’ slides
   3. **Snapshots**
      Another neat feature **Jest** provides is the possibility to snapshot a certain state of your application. During each test run your previous snapshot will be compared with the current snapshot. If a difference occurs the snapshot test will fail. Snapshot tests are useful if you do not want your UI or certain function results to change unexpectedly.
   4. The tools you use for **integration testing** are the same as you use for Unit testing. The difference starts when you decide on what to render and test. In general, the best thing to do when writing integration tests is **to stop mocking** other components or functions. Also, <u>render every component which is defined on a global level</u> throughout your application, e.g. react-router or redux. If one of your components uses one of those libraries, eventually it would call a function of those libraries during execution. In this case, you want to validate whether the integration works out as planned.
   5. **Mocking server communication**
      So in general with an integration test, you literally test the integration between certain components within your frontend. Also, you want to be sure to mock all requests to a possible backend or third party with the expected output the request would result with.

## Hierarchy. Structuring

1. **Use Presentational and Container component pattern**
   1. **Presentational components** are those who don’t have internal state. Their role is to show certain pieces of UI. They are provided data via props or context api.
   2. **Container components** are those which deals with business logic. They usually have some state and only render presentational components based on the logic.
   3. This way Presentational and Container components complete the puzzle together. By dividing the responsibilities, code becomes easier to maintain and debug.