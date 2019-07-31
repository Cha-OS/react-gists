# React - Tutorials.Info

## Misc

1. A **component** (**React component type**) takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render` method.
2. `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called “**JSX**” which makes these structures easier to write.
3. **JSX** comes with the full power of JavaScript. You can put *any* JavaScript expressions within **braces** inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.
4. All React component classes that have a `constructor` should start it with a `super(props)` call.
5. To **render multiple items in React**, we can use an array of React elements.
   1. but we need to add a key e.g. (`<li key={user.id}>`), otherwise we'll get an error:
      **Warning**: Each child in an array or iterator should have a unique “key” prop. Check the render method of “Game”.
   2. Keys do not need to be globally unique; they only need to be unique between components and their siblings.
   3. **It’s strongly recommended that you assign proper keys whenever you build dynamic lists.** If you don’t have an appropriate key, you may want to consider restructuring your data so that you do.

## States

1. To “remember” things, components use **state**. React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it’s defined in.
2. **NEVER** mutate this.state directly (this.state = X), as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable."
3. https://medium.com/react-ecosystem/how-to-handle-state-in-react-6f2d3cd73a0c

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
3. 
