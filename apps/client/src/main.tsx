import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
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
          <Toaster />
          <App />
        </TransactionsProvider>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>
);
