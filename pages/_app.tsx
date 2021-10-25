import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/screens/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Logo from "../components/screens/Logo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout pageTitle="Universe">
      <Logo />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
