/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { css } from "@emotion/react";

const Layout = (props: any) => {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div
        css={css`
          background: #0e0e0e;
          min-height: 100vh;
          @import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
        `}
      >
        <div
          css={css`
            align-items: center;
            justify-content: center;
            display: flex;

            padding-top: 2em;
          `}
        >
          <Image src="/logo.png" alt=" Logo" width={134} height={39} />
        </div>

        {props.children}
      </div>
    </div>
  );
};
export default Layout;
