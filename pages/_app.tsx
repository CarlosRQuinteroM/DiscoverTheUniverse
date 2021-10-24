import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle="Universe">
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
