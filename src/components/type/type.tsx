import React, { useState } from "react";
import "./type.scss";
import { Container } from "react-bootstrap";
import InputSignText from "./input/input";
import { Signs } from "./signs/signs";

const Type: React.FC = () => {
  const [inputSign, setInputSign] = useState<string>("");

  return (
    <Container className="type-wrapper">
      <InputSignText setInputSign={setInputSign} />
      {inputSign && <Signs text={inputSign} />}
    </Container>
  );
};

export default Type;
