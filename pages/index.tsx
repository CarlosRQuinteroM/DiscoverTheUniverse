import { NextPage } from "next";
import _ from "lodash";
import React, { useEffect, useState } from "react";

import { CelestialBodyProps, DestinationProps } from "../src/components/types";
import { Container } from "react-bootstrap";

const Home = (data: any) => {
  const [bodies, setBodies] = useState<CelestialBodyProps[]>([]);

  useEffect(() => {
    setBodies(data.data);
  }, [setBodies]);
  console.log("Esto es ek cuerpo del DIV" + bodies);

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
            <div
              key={body.id}
              className="planet"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "2em",
              }}
            >
              <img src={imageUrl} style={{ maxWidth: "150px" }} />
              <p>{body.name}</p>
              <p>{body.type}</p>
            </div>
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
