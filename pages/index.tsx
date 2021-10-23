import Link from "next/link";
import _ from "lodash";
import React, { useEffect, useState } from "react";

import { CelestialBodyProps, DestinationProps } from "../src/components/types";
import { Container, Form } from "react-bootstrap";
import { NextPage } from "next";
import { BitIcon } from "../components/icons";

const Home: NextPage<CelestialBodyProps> = (data: any) => {
  const [bodies, setBodies] = useState<CelestialBodyProps[]>([]);

  useEffect(() => {
    setBodies(data.data);
  }, [setBodies]);

  return (
    <section>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2em",
                  backgroundColor: "black",
                  color: "white",
                  minHeight: "270px",
                }}
              >
                <div>
                  <img
                    src={imageUrl}
                    style={{ maxWidth: "160px", minHeight: "80px" }}
                  />
                </div>
                <div>
                  <p>{body.name}</p>
                  <p>
                    From 12
                    <BitIcon />
                  </p>
                  <p>{body.type}</p>
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
  const data = await bodyResponse.json();

  if (!bodyResponse) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export default Home;
