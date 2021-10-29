/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import { Row } from "reactstrap";

const HeaderHome = () => {
  return (
    <div
      css={css`
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 3em;
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          justify-content: center;
          align-items: center;
          margin-top: 3em;
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
              width={256}
              height={329}
            />
          </div>
          <div
            css={css`
              position: absolute;
              /* top: 25%; */
              /* left: -8%;  */
              z-index: 10;
              margin: auto;
            `}
          >
            <h1
              css={css`
                font-family: "Orbitron", sans-serif;
                font-size: 3.5em;
                letter-spacing: 0.02em;
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
              align-content: flex-end;
              width: 50%;
            `}
          >
            <Image
              src="/images/marte_2.png"
              alt="Marte_2"
              width={439}
              height={565}
            />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default HeaderHome;
