/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import {
  Col,
  Container,
  Row,
  Button,
  Collapse,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  CardFooter,
} from "reactstrap";
import { CelestialBodyProps } from "../../src/types";
import { BitIcon } from "../../components/icons";
import { Location } from "../../components/icons";
import Link from "next/link";

const Planet: NextPage<CelestialBodyProps> = (data: any) => {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");

  //
  const CelestialBody = data.dataBodies;
  const Destinations = data.dataDestination;

  return (
    <>
      <section>
        <Container
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          `}
        >
          <Row
            css={css`
              display: flex;
            `}
          >
            <Col sm={12} md={6} lg={6}>
              <div>
                <Image
                  src={CelestialBody.images[0]}
                  alt="Image"
                  width={400}
                  height={300}
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
          {Destinations.shuttles.map((shuttle: any) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Row>
                <Col className=" ml-auto" md="12">
                  <div key={shuttle.id} id={`shuttle-${shuttle.name}`}>
                    <div className=" accordion my-3" id="accordionColapse">
                      <Card>
                        <CardHeader
                          id="headingOne"
                          aria-expanded={openedCollapse === `${shuttle.id}`}
                        >
                          <h5 className=" mb-0">
                            <div
                              onClick={() =>
                                setOpenedCollapse(
                                  openedCollapse === `${shuttle.id}`
                                    ? ""
                                    : `${shuttle.id}`
                                )
                              }
                              className=" w-100 text-primary text-left"
                            >
                              <Input type="radio" name="radio" />
                              <p>{shuttle.name}</p>
                              {/* <Button disabled>
                                {shuttle.availableSeats.length} Seats
                              </Button> */}
                              <p>
                                {shuttle.basePrice}
                                <BitIcon />
                              </p>
                              <div>
                                <p>
                                  <Location />
                                  {shuttle.launchpadLocation}
                                </p>
                                <p>Etd-Time: {shuttle.etd}</p>
                                <p>Eta-Time: {shuttle.eta}</p>
                              </div>
                            </div>
                          </h5>
                        </CardHeader>

                        <Form>
                          <FormGroup>
                            <Collapse
                              isOpen={openedCollapse === `${shuttle.id}`}
                              aria-labelledby="headingOne"
                              id={shuttle.id}
                            >
                              <CardBody>
                                <Row>
                                  <Col>
                                    <Form as="select" custom>
                                      <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder="e.g. John"
                                        />
                                        <Label for="surname">Surname</Label>
                                        <Input
                                          type="text"
                                          name="surname"
                                          id="surname"
                                          placeholder="e.g. Smith"
                                        />
                                        <Label for="seat">Seat</Label>
                                        <Input
                                          type="select"
                                          name="seat"
                                          id="seat"
                                        >
                                          {shuttle.availableSeats.map(
                                            (seat: string) => (
                                              <option key={seat}>{seat}</option>
                                            )
                                          )}
                                        </Input>
                                      </FormGroup>
                                    </Form>
                                  </Col>
                                  <Col>Extras</Col>
                                </Row>
                              </CardBody>
                              <CardFooter>
                                <Row>
                                  <Col>
                                    <p>Total: {shuttle.basePrice}</p>
                                  </Col>
                                  <Col>
                                    <Link href="/bodies/confirmation" passHref>
                                      <Button type="submit" color="warning">
                                        Buy Now
                                      </Button>
                                    </Link>
                                  </Col>
                                </Row>
                              </CardFooter>
                            </Collapse>
                          </FormGroup>
                        </Form>
                      </Card>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
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
