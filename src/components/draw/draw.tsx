import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { saveAs } from "file-saver";
import { ColorResult, SketchPicker } from "react-color";
import { IoIosColorPalette } from "react-icons/io";
import "./draw.scss";
import { Container, Button } from "react-bootstrap";
import { DIGI_SIGN } from "../../constants/sign.constant";

const Draw: React.FC = () => {
  
  const [imageURL, setImageURL] = useState<string | null>(null);
  const signCanvas = useRef<SignatureCanvas | null>(null);
  const [paletteColor, setpaletteColor] = useState<string>("#000");
  const [isColorPaletteVisibile, setColorPaletteVisibile] = useState<boolean>(false);

  useEffect(() => {
    const savedSign = localStorage.getItem(DIGI_SIGN);
    if (savedSign && signCanvas.current) {
      signCanvas.current.fromDataURL(savedSign);
    }
  }, []);


  // Clear canvas
  const clear = () => {
    if (signCanvas.current) {
      signCanvas.current.clear();
      localStorage.setItem(DIGI_SIGN, "");
    }
  };

  // Save canvas
  const save = () => {
    if (signCanvas.current) {
      const signImg = signCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");
      setImageURL(signImg);
      localStorage.setItem(DIGI_SIGN, signImg);
    }
  };

  const download = () => {
    if (signCanvas.current) {
      saveAs(
        signCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
        "sign.png"
      );
    }
  };

  const handleChange = (color: ColorResult) => {
    setpaletteColor(color.hex);
  };

  const handleColorPaletteBtnClick = () => {
    setColorPaletteVisibile(!isColorPaletteVisibile);
  };

  return (
    <Container className="home-wrapper">
      <Container className="sign-canva-wrapper">
        <SignatureCanvas
          penColor={paletteColor}
          ref={signCanvas}
          canvasProps={{ className: "sign-canvas" }}
        />
        <div className="controls-btn">
          <Button onClick={clear} className="me-2 primary-btn">
            Clear
          </Button>
          <Button onClick={save} className="me-2 primary-btn">
            Save
          </Button>
          <Button onClick={download} className="me-2 primary-btn">
            Download
          </Button>
        </div>
        <Button
          onClick={handleColorPaletteBtnClick}
          className="color-palette-btn primary-btn"
        >
          <IoIosColorPalette />
        </Button>
        {isColorPaletteVisibile && (
          <SketchPicker
            color={paletteColor}
            onChange={handleChange}
            className="color-palette-wrapper"
          />
        )}
      </Container>
    </Container>
  );
};

export default Draw;
