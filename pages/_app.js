import Auth0ProviderWithHistory from "../src/auth/auth0-provider-with-history";

export default function App({ Component, pageProps }) {
  return (
    <Auth0ProviderWithHistory>
      <Component {...pageProps} />
    </Auth0ProviderWithHistory>
  );
}
