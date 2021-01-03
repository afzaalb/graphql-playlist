import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Books & Authors</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
