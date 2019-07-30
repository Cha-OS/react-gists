# React - Tutorials.Info

1. A **component** (**React component type**) takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render` method.
2. `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called “**JSX**” which makes these structures easier to write.
3. JSX comes with the full power of JavaScript. You can put *any* JavaScript expressions within **braces** inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.
4. To “remember” things, components use **state**. React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it’s defined in.
5. All React component classes that have a `constructor` should start it with a `super(props)` call.
6. y calling `this.setState` from an `onClick` handler in the Components’s `render` method, we tell React to re-render that Component whenever its `<button>` is clicked.
7. When you call `setState` in a component, React **automatically updates the child components** inside of it too.
8. **Lifting state into a parent component**
   1. it is common when React components are refactored
   2. **if we want to manage/use states from child components in their parent component**, We may think that parent component should just ask each child component for its state. Although this approach is possible in React, **<u>we discourage it</u>** because the code becomes difficult to understand, susceptible to bugs, and hard to refactor. Instead, the best approach is to store that state in the parent  component instead of in each child.
   3. **To collect data from multiple children**, or **to have two child components communicate with each other**, you need to declare the **shared state in their parent component** instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.
   4. Since **state is considered to be private to a component** that defines it, we cannot update the parent’s state directly from its child. Instead, we’ll pass down a function from the parent to the child, and we’ll have child call that function when it wants to change the parent's state.
   5. Since the child components no longer maintain state, the child components receive values from the parent component and inform the parent component when they’re clicked. In React terms, the child components are now **controlled components**. The parent has full control over them.
9. In React, it’s conventional to use `on[Event]` names for props which represent events and `handle[Event]` for the methods which handle the events.
10. **Why Immutability Is Important**
   https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
   1. Complex Features Become Simple
   2. Detecting Changes
   3. Determining When to Re-Render in React
      The main benefit of immutability is that it helps you build **pure components** in React. You can learn more about `shouldComponentUpdate()` and how you can build *pure components* by reading [**Optimizing Performance**](https://reactjs.org/docs/optimizing-performance.html#examples).
11. 