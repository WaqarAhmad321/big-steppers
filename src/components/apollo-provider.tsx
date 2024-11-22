"use client";

import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import React from "react";

const ApoloContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApoloContextProvider;
