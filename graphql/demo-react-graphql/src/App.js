import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './Countries';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

  // providing client connection
  const client = new ApolloClient({
    // not available anymore
    // uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"

    // https://lucasconstantino.github.io/graphiql-online/
    uri: "https://countries.trevorblades.com/"
  });


const App = () => ( 
<ApolloProvider client={client}>
  <div className="container">
    <img src={logo} className="App-logo" alt="logo" />
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#/">React and GraphQL - Sample Application</a>
    </nav>
    <div>
      <Countries />
    </div>
  </div>
</ApolloProvider>
);

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to <b>reload</b>.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
