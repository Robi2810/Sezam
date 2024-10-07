import React from "react";
import "./App.css";
import Header from "./header/Header";
import MainScreen from "./main-screen/MainScreen";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import TokenHolder from "./TokenHolder";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ReactKeycloakProvider
      initOptions={{ onLoad: "login-required" }}
      authClient={keycloak}
      LoadingComponent={<div>Loading...</div>}
      onTokens={(tokens) => {
        if (tokens.token !== undefined) {
          TokenHolder.setToken(tokens.token);
        }
      }}
    >
      <React.StrictMode>
        <div className="App">
          <Toaster />
          {Header("Alexey", "Danilov")}
          <MainScreen />
        </div>
      </React.StrictMode>
    </ReactKeycloakProvider>
  );
};

export default App;
