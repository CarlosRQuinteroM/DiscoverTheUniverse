/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Card, CardColumns, Col, Container, Row } from "react-bootstrap";
import { CelestialBodyProps } from "../../src/components/types";

const Planet: NextPage<CelestialBodyProps> = (data: any) => {
  const router = useRouter();
  const { id } = router.query;
  const CelestialBody = data.dataBodies;
  const Destinations = data.dataDestination;
  console.log(Destinations);

  return (
    <>
      <section>
        <Container
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row style={{ display: "flex" }}>
            <Col sm={12} md={6} lg={6}>
              <div>
                <img
                  src={CelestialBody.images[0]}
                  alt="Image"
                  style={{ maxWidth: "500px", minWidth: "400px" }}
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <h1>{CelestialBody.name}</h1>
                <p>{CelestialBody.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              {Destinations.shuttles.map((shuttle: { id: React.Key | null | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <div key={shuttle.id}>
                  <p>{shuttle.name}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:3005/bodies`);
  const bodyData = await res.json();
  const paths = bodyData.map((planet: any) => ({
    params: { id: `${planet.id}` },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (params: any) => {
  const bodyResponse = await fetch(
    `http://localhost:3005/bodies/${params.params.id}`
  );
  const dataBodies = await bodyResponse.json();
  const bodyDestination = await fetch(
    ` http://localhost:3005/destinations/${params.params.id}`
  );

  const dataDestination = await bodyDestination.json();
  if (!bodyResponse || !bodyDestination) {
    return {
      notFound: true,
    };
  }
  return {
    props: { dataBodies, dataDestination },
  };
};

export default Planet;
