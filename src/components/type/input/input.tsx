import React, { useEffect, useState } from "react";
import "./input.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


interface IInputSignTextProps {
    setInputSign : React.Dispatch<React.SetStateAction<string>>
}

const InputSignText : React.FC <IInputSignTextProps> = ({setInputSign}) => {
  const [text, setText] = useState<string>("React digi");

  useEffect(()=>{
    setInputSign(text);
  }, [])

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputSign(text);
  };

  return (
    <div className="input-wrapper">
      <div className="enter-signature-text">Enter your signature</div>
      <Form onSubmit={handleFormSubmit} className="form-wrapper">
        <Form.Control
          size="lg"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter"
          className="input-text"
        />
        <Button variant="primary" type="submit" className="submit-btn primary-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputSignText;
