import React, { useState } from "react";
import "./input.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


interface IInputSignTextProps {
    setInputSign : React.Dispatch<React.SetStateAction<string>>
}

const InputSignText : React.FC <IInputSignTextProps> = ({setInputSign}) => {
  const [text, setText] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSign(text);
  };

  return (
    <div className="input-wrapper">
      <div className="enter-signature">Enter your signature</div>
      <Form onSubmit={handleFormSubmit}>
        <Form.Control
          size="lg"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputSignText;
