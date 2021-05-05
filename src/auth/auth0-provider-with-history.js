import React from "react";
import { useRouter } from "next/router";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

  const history = useRouter();

  const onRedirectCallback = (appState) => {
    console.log("hi");
    console.log("hi2", appState);
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={"http://localhost:3000"}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
