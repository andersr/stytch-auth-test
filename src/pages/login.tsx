import { useRouter } from "next/router";
import React from "react";
import { Products } from "@stytch/vanilla-js";
import { StytchLogin } from "@stytch/nextjs";

const appUrl = process.env.NEXT_PUBLIC_APP_URL;

if (!appUrl) {
  throw new Error("Missing app url");
}

export default function Page() {
  // const router = useRouter();
  // const { next_path } = router.query;
  const styles = {
    container: {
      width: "100%",
    },
    buttons: {
      primary: {
        backgroundColor: "#4A37BE",
        borderColor: "#4A37BE",
      },
    },
  };

  const REDIRECT_URL = `http://localhost:3000/api/auth/authenticate`;

  const config: any = {
    products: [Products.oauth],
    // emailMagicLinksOptions: {
    //   loginRedirectURL: REDIRECT_URL,
    //   loginExpirationMinutes: 60,
    //   signupRedirectURL: REDIRECT_URL,
    //   signupExpirationMinutes: 60,
    // },
    oauthOptions: {
      providers: [{ type: "google" }],
      loginRedirectURL: REDIRECT_URL,
      signupRedirectURL: REDIRECT_URL,
    },
  };

  return <StytchLogin config={config} styles={styles} />;
}
