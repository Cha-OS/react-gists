# React - Tutorials.Info

1. A **component** (**React component type**) takes in parameters, called `props` (short for “properties”), and returns a hierarchy of views to display via the `render` method.
2. `render` returns a **React element**, which is a lightweight description of what to render. Most React developers use a special syntax called “**JSX**” which makes these structures easier to write.
3. JSX comes with the full power of JavaScript. You can put *any* JavaScript expressions within **braces** inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.
4. To “remember” things, components use **state**. React components can have state by setting `this.state` in their constructors. `this.state` should be considered as private to a React component that it’s defined in.
5. All React component classes that have a `constructor` should start it with a `super(props)` call.
6. y calling `this.setState` from an `onClick` handler in the Components’s `render` method, we tell React to re-render that Component whenever its `<button>` is clicked.
7. When you call `setState` in a component, React **automatically updates the child components** inside of it too.