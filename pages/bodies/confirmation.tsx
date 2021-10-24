import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const Corfirmation: NextPage = (data: any) => {
  console.log(data.data);
  return (
    <section>
      <Container>
        <Card>
          <h1> THE ADVENTURE STARTS NOW </h1>
          <p>Thank you for your purchase </p>

          <Link href="/" passHref>
            <Button>Return Home</Button>
          </Link>
        </Card>
      </Container>
    </section>
  );
};

export default Corfirmation;
