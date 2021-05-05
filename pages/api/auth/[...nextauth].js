import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Auth0({
      clientId: "W8yEnVnUUzmdw5YzB576Y5Da4KcYV8pt",
      clientSecret:
        "6voW7ebbxmO1SmDL7WKkM0k7T5mdDUu2ErV1IkbkDqYi-2UGgkoaz-dD_nsb0o45",
      domain: "dev-03ptdd3g.eu.auth0.com",
    }),
    // ...add more providers here
  ],
});
