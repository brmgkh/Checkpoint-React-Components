import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import brmg from "../../../src/Images/Ibrahim Maghraoui.jpg";
import JfBzs from "../../../src/Images/Jeff-bezos-amazon.jpg";
import mrkzbrg from "../../../src/Images/zuckerberg.jpg";
import lrypg from "../../../src/Images/Larry Page.jpg";

const ProfilePhoto = () => {
  return (
    <div className="Cartes">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={brmg} />
        <Card.Body>
          <Card.Title>Ibrahim Maghraoui</Card.Title>
          <Card.Text>Web Developer.</Card.Text>
          <Button variant="primary">Contact Me</Button>
        </Card.Body>
      </Card>
      {/* première carte */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={JfBzs} />
        <Card.Body>
          <Card.Title>Jeff Bezos</Card.Title>
          <Card.Text>Founder Amazon.</Card.Text>
          <Button variant="primary">Contact Me</Button>
        </Card.Body>
      </Card>
      {/* deuxième carte */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={mrkzbrg} />
        <Card.Body>
          <Card.Title>Mark Zuckerberg</Card.Title>
          <Card.Text>Founder Meta.</Card.Text>
          <Button variant="primary">Contact Me</Button>
        </Card.Body>
      </Card>
      {/* troisième carte */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={lrypg} />
        <Card.Body>
          <Card.Title>Larry Page</Card.Title>
          <Card.Text>Founder Google.</Card.Text>
          <Button variant="primary">Contact Me</Button>
        </Card.Body>
      </Card>
      {/* 4ème carte */}
    </div>
  );
};

export default ProfilePhoto;
