/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Button, Card, Container } from "reactstrap";

const Corfirmation: NextPage = (data: any) => {
  console.log(data.data);
  return (
    <section
      css={css`
        height: 100vh;
        background-image: url("/images/marte_3.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        align-items: center;
        justify-content: center;
        display: flex;
      `}
    >
      <Container>
        <Card
          css={css`
            align-items: center;
            justify-content: center;
            display: flex;
            text-align: center;
            margin: auto;
            padding: 20px;
            max-width: 323px;
            max-height: 405px;
            background: rgba(0, 0, 0, 0.9);
            color: white;
          `}
        >
          <h1> THE ADVENTURE STARTS NOW </h1>
          <p>Thank you for your purchase </p>

          <Link href="/" passHref>
            <a
              css={css`
                color: white;
              `}
            >
              Return Home
            </a>
          </Link>
        </Card>
      </Container>
    </section>
  );
};

export default Corfirmation;
