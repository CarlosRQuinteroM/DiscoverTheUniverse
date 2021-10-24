/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";

const HeaderHome = () => {
  return (
    <div
      css={css`
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70vh;
        margin-top: 3em;
        margin-bottom: 10px;
      `}
    >
      <Row
        css={css`
          display: flex;
          align-content: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            display: flex;
            position: absolute;
            position: static;
          `}
        >
          <Image
            src="/marte_2.jpeg"
            alt="Marte_2"
            width={"250px"}
            height={"200px"}
          />
        </div>
        <div
          css={css`
            display: flex;
            position: relative;
            max-width: 20em;
            min-height: 5em;
            z-index: 10;
          `}
        >
          <h1
            css={css`
              justify-content: center;
              align-content: center;
              font-family: "Orbitron", sans-serif;
              font-size: 2.5em;
              text-align: center;
              letter-spacing: 0.05em;
              mix-blend-mode: hard-light;
              background: linear-gradient(66deg, #ffffff, #ff3d00);
              background-clip: text;
              -webkit-background-clip: text;
              -moz-background-clip: text;
              -moz-text-fill-color: transparent;
              -webkit-text-fill-color: transparent;
            `}
          >
            DISCOVER THE UNIVERSE
          </h1>
        </div>

        <div
          css={css`
            display: flex;
            position: relative;
            justify-content: flex-end;
            z-index: 0;
            height: 100%;
            width: 100%;
          `}
        >
          <Image
            src="/marte_1.jpg"
            alt="Marte_1"
            width={"250px"}
            height={"200px"}
          />
        </div>
      </Row>
    </div>
  );
};

export default HeaderHome;
