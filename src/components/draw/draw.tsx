import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { saveAs } from "file-saver";
import { ColorResult, SketchPicker } from "react-color";
import { IoIosColorPalette } from "react-icons/io";
import "./draw.scss";
import { Container } from "react-bootstrap";

const Draw: React.FC = () => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const signCanvas = useRef<SignatureCanvas | null>(null);
  const [paletteColor, setpaletteColor] = useState<string>("#000");
  const [isColorPaletteVisibile, setColorPaletteVisibile] =
    useState<boolean>(false);
  const [typedName, setTypedName] = useState<string>("");

  useEffect(() => {
    const font = new FontFace(
      "signature-font",
      'url("./src/assets/fonts/AAutoSignature-1GD9j.ttf")'
    );
    console.log("font", font);
    font.load().then(() => {
      document.fonts.add(font);
    });
  }, []);

  // Clear canvas
  const clear = () => {
    if (signCanvas.current) {
      signCanvas.current.clear();
    }
  };

  // Save canvas
  const save = () => {
    if (signCanvas.current) {
      setImageURL(signCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
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

  const generateSignature = () => {
    if (signCanvas.current) {
      signCanvas.current.clear();
      const context = signCanvas.current.getCanvas().getContext("2d");
      if (context) {
        context.font = "100px signature-font";
        context.fillStyle = paletteColor;
        context.fillText(typedName, 50, 100); // Adjust positioning as needed
      }
    }
  };

  return (
    <Container className="home-wrapper">
      <div className="sign-canva-wrapper">
        <SignatureCanvas
          penColor={paletteColor}
          ref={signCanvas}
          canvasProps={{ className: "sign-canvas" }}
        />
        <div className="controls-btn">
          <button onClick={clear} className="me-2">
            Clear
          </button>
          <button onClick={save} className="me-2">
            Save
          </button>
          <button onClick={download} className="me-2">
            Download
          </button>
        </div>
        <button
          onClick={handleColorPaletteBtnClick}
          className="color-palette-btn"
        >
          <IoIosColorPalette />
        </button>
        {isColorPaletteVisibile && (
          <SketchPicker
            color={paletteColor}
            onChange={handleChange}
            className="color-palette-wrapper"
          />
        )}
        <div className="text-input-wrapper">
          <input
            type="text"
            value={typedName}
            onChange={(e) => setTypedName(e.target.value)}
            placeholder="Type your name"
          />
          <button
            onClick={generateSignature}
            className="generate-signature-btn"
          >
            Generate Signature
          </button>
        </div>
      </div>
    </Container>
  );
};


export default Draw;