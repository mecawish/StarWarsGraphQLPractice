import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import React, { Component} from 'react'
import PersonList from './PersonList'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  }),
  connectToDevTools: true,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App-header">
            <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*sxMljQ8wgso4cG3PxufTmQ.png" className="App-logo" alt="logo"/>
            <h2>Your first GraphQL Component</h2>
          </div>
          <PersonList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App