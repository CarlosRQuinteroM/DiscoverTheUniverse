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
import { CelestialBodyProps, ShuttleProps } from "../../src/types";
import { BitIcon } from "../../components/icons";
import { Location } from "../../components/icons";
import Link from "next/link";

const Planet: NextPage<CelestialBodyProps[]> = (data: any) => {
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
            padding-top: 4em;
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
          {Destinations.shuttles.map((shuttle: ShuttleProps) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Row>
                <Col className="" md="12">
                  <div key={shuttle.id} id={`shuttle-${shuttle.name}`}>
                    <div className=" accordion my-3" id="accordionColapse">
                      <Card
                        css={css`
                          background: rgba(255, 255, 255, 0.1);
                          border: 1px solid grey;
                          color: white;
                        `}
                      >
                        <CardHeader
                          id="headingOne"
                          aria-expanded={openedCollapse === `${shuttle.id}`}
                        >
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
                            <Row>
                              <Col
                                sm={12}
                                lg={4}
                                css={css`
                                  display: flex;
                                  align-content: space-between;
                                `}
                              >
                                <Input
                                  type="radio"
                                  name="radio"
                                  className="mx-3"
                                />
                                <h3>{shuttle.name}</h3>
                              </Col>
                              <Col>
                                <h3>
                                  {shuttle.basePrice}
                                  <BitIcon />
                                </h3>
                              </Col>
                              <Col sm={12} lg={4}>
                                <div
                                  css={css`
                                    display: flex;
                                    justify-content: flex-end;
                                    align-content: space-between;
                                  `}
                                >
                                  <p>
                                    <Location />
                                    {shuttle.launchpadLocation}
                                  </p>
                                </div>
                                <div
                                  css={css`
                                    width: 5em;
                                    height: 2em;
                                    border-radius: 4px;
                                    border: 2px solid #e47004;
                                    background-color: transparent;
                                    color: #e47004;
                                    text-align: center;
                                  `}
                                >
                                  {`${shuttle.availableSeats.length} Seats`}
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={12} lg={12}>
                                <p>Etd-Time: {shuttle.etd}</p>
                                <p>Eta-Time: {shuttle.eta}</p>
                              </Col>
                              <Col></Col>
                            </Row>
                          </div>
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
                                    <p>
                                      Total: {shuttle.basePrice} <BitIcon />
                                    </p>
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
