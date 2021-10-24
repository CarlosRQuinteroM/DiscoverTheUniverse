/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { CelestialBodyProps, ShuttleProps } from "../src/types";
import { Container, Form, Row } from "react-bootstrap";
import { NextPage } from "next";
import { BitIcon } from "../components/icons";
import HeaderHome from "../components/screens/HeaderHome";

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
        <HeaderHome />
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
                  position: static;
                  flex-direction: column;
                  align-items: flex-start;
                  padding: 24px;
                  background-color: #000000;
                  color: white;
                  width: 342.67px;
                  height: 315px;
                  left: 366.67px;
                  top: 0px;
                  margin: 8px;
                `}
              >
                <div>
                  <Image
                    src={imageUrl}
                    alt="Planets"
                    width={342.67}
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
