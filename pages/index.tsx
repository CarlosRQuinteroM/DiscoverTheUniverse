/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { CelestialBodyProps, ShuttleProps } from "../src/types";
import { Container, Form, Row } from "react-bootstrap";
import { NextPage } from "next";
import { BitIcon } from "../components/icons";
// import HeaderHome from "../components/screens/HeaderHome";

const Home: NextPage<CelestialBodyProps> = (data: any) => {
  const [bodies, setBodies] = useState<CelestialBodyProps[]>([]);
  const [destinations, setDestinations] = useState<ShuttleProps[]>([]);

  useEffect(() => {
    setBodies(data.dataBodies);
    setDestinations(data.dataDestination);
  }, [setBodies, setDestinations]);

  return (
    <section>
      <Container
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60vh;
            margin-bottom: 10px;
          `}
        >
          <Row css={css`
            display: flex;
            align-content: center;
            justify-content: center;
          `}>
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
                z-index: 10;
              `}
            >
              <h1
                css={css`
                  justify-content: center;
                  align-content: center;
                  font-family: "Orbitron", sans-serif;
                  font-size: 2em;
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
        {bodies.map((body) => {
          const imageUrl: string =
            body.images.length > 0
              ? body.images[0]
              : "https://invdes.com.mx/wp-content/uploads/2018/01/07-01-18-eris.jpg";
          return (
            <Link href="/bodies/[id]" as={`/bodies/${body.id}`}>
              <div
                key={body.id}
                className="planet"
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 24px;
                  background-color: #000000;
                  color: white;

                  position: static;
                  width: 342.67px;
                  height: 315px;
                  left: 366.67px;
                  top: 0px;
                  border-radius: 4px;
                `}
              >
                <div>
                  <Image
                    src={imageUrl}
                    alt="Planets"
                    width={150}
                    height={150}
                  />
                </div>
                <div
                  css={css`
                    flex: none;
                    order: 1;
                    flex-grow: 1;
                    margin: 0px 24px;
                  `}
                >
                  <div>
                    <h3>{body.name}</h3>
                    {`Type: ${
                      body.type.charAt(0).toUpperCase() + body.type.slice(1)
                    }`}
                  </div>
                  <p>
                    From: 12
                    <BitIcon
                      css={css`
                        max-width: 10px;
                      `}
                    />
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </Container>
    </section>
  );
};

export async function getStaticProps() {
  const bodyResponse = await fetch("http://localhost:3005/bodies");
  const dataBodies = await bodyResponse.json();

  const bodyDestination = await fetch("http://localhost:3005/destinations");

  const dataDestination = await bodyDestination.json();

  if (!bodyResponse) {
    return {
      notFound: true,
    };
  }
  return {
    props: { dataBodies, dataDestination },
  };
}

export default Home;
