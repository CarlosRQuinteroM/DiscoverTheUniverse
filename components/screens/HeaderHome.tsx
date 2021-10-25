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
            width: 50%;
          `}
        >
          <Image
            src="/images/marte_1.jpg"
            alt="Marte_1"
            width={"256px"}
            height={"329px"}
          />
        </div>
        <div
          css={css`
            position: absolute;
            top: 25%;
            left: 20%;
            z-index: 10;
          `}
        >
          <Image
            src="/images/disc.png"
            alt="Title"
            width={"712px"}
            height={"152px"}
          />
        </div>

        <div
          css={css`
            align-content: flex-end;
            width: 50%;
          `}
        >
          <Image
            src="/images/marte_2.png"
            alt="Marte_2"
            width={"439px"}
            height={"565px"}
          />
        </div>
      </Row>
    </div>
  );
};

export default HeaderHome;
