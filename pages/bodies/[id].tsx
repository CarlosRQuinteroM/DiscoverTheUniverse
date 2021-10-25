/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
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
import { CelestialBodyProps, ExtraProps, ShuttleProps } from "../../src/types";
import { BitIcon } from "../../components/icons";
import { Location } from "../../components/icons";
import Link from "next/link";

const Planet: NextPage<CelestialBodyProps[]> = (data: any) => {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  const [selectedhuttle, setSelectedShuttle] = React.useState("");
  console.log(selectedhuttle);

  const celestialBody = data.dataBodies;
  const destinations = data.dataDestination;
  const extras = data.dataExtras;

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
                  src={celestialBody?.images[0]}
                  alt="Image"
                  width={400}
                  height={300}
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div>
                <h1>{celestialBody?.name}</h1>
                <p>{celestialBody?.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          {destinations.shuttles.map((shuttle: ShuttleProps) => {
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
                            onClick={(event: any) => {
                              setSelectedShuttle(event.target.value);
                              setOpenedCollapse(
                                openedCollapse === `${shuttle.id}`
                                  ? ""
                                  : `${shuttle.id}`
                              );
                            }}
                            className=" w-100 text-primary text-left"
                          >
                            <Row>
                              <Col
                                xs={12}
                                sm={12}
                                md={3}
                                lg={3}
                                css={css`
                                  display: flex;
                                  align-content: space-between;
                                `}
                              >
                                <Input
                                  type="radio"
                                  name="radio"
                                  className="mx-3"
                                  value={shuttle.name}
                                />
                                <h3>{shuttle.name}</h3>
                              </Col>
                              <Col>
                                <h3>
                                  {shuttle.basePrice}
                                  <BitIcon />
                                </h3>
                              </Col>
                              <Col xs={12} sm={12} md={3} lg={3}>
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
                                    display: flex;
                                    position: relative;
                                    text-align: center;
                                    max-width: 6em;
                                    height: 2em;
                                    bottom: 50px;
                                    border-radius: 4px;
                                    border: 2px solid #e47004;
                                    background-color: transparent;
                                    color: #e47004;
                                    text-align: center;
                                  `}
                                >
                                  {shuttle.availableSeats.length <= 4
                                    ? `Only ${shuttle.availableSeats.length} Seats`
                                    : `${shuttle.availableSeats.length} Seats`}
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={12} sm={12} md={3} lg={3}>
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
                              id={openedCollapse}
                            >
                              <CardBody>
                                <Row>
                                  <Col xs={12} sm={12} md={6} lg={6}>
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
                                  <Col xs={12} sm={12} md={6} lg={6}>
                                    <Col>
                                      <h3>Choose Some Extras</h3>
                                    </Col>
                                    <FormGroup check>
                                      {extras.map((extra: ExtraProps) => {
                                        return (
                                          <>
                                            <Col
                                              key={extra.id}
                                              check
                                              className="my-3"
                                              id="extraForm"
                                            >
                                              <Label>
                                                <Input
                                                  type="checkbox"
                                                  id="checkbox2"
                                                />
                                                {extra.name}
                                              </Label>
                                              <p>
                                                {extra.price === "0.0"
                                                  ? "Free"
                                                  : extra.price}
                                                <BitIcon />
                                              </p>
                                            </Col>
                                          </>
                                        );
                                      })}
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </CardBody>
                              <CardFooter>
                                <Row>
                                  <Col>
                                    <h3
                                      css={css`
                                        color: gold;
                                      `}
                                    >
                                      Total: {shuttle.basePrice}
                                      <BitIcon />
                                    </h3>
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

  const extraResponse = await fetch("http://localhost:3005/extras");
  const dataExtras = await extraResponse.json();

  if (!bodyResponse || !bodyDestination || !dataExtras) {
    return {
      notFound: true,
    };
  }
  return {
    props: { dataBodies, dataDestination, dataExtras },
  };
};

export default Planet;
