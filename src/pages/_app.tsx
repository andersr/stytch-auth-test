import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { StytchProvider } from "@stytch/nextjs";
import { createStytchUIClient } from "@stytch/nextjs/ui";

const publicToken = process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN;

if (!publicToken) {
  throw new Error("No public token");
}
const stytch = createStytchUIClient(publicToken);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StytchProvider stytch={stytch}>
      <Component {...pageProps} />
    </StytchProvider>
  );
}
