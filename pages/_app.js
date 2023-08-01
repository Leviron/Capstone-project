import GlobalStyle from "../styles";
import Head from "next/head";
import NavigationBar from "../components/Navbar";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <GlobalStyle />
        <Head>
          <title>Recipe App</title>
        </Head>
        <Component {...pageProps} />
        <NavigationBar />
      </SWRConfig>
    </>
  );
}
