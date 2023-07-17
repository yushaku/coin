import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { TransactionsProvider } from "./hooks/TransactionContext.tsx";
import "./main.css";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <TransactionsProvider>
          <App />
        </TransactionsProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
);
