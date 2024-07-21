import React, { useEffect, useRef, useState } from "react";
import FontsData from "../../../data/fonts.data";
import "./signs.scss";

interface ISignsProps {
  text: string
}

export const Signs: React.FC<ISignsProps> = ({ text }) => {

  const [imgsArr, setImgsArr] = useState<JSX.Element[]>([]);
  const [fonts, setFonts] = useState<string[]>(FontsData.map((data)=>data.name));
  const [inputText, setInputText] = useState<string>();

  const generateSignatureImgs = (): JSX.Element[] => {

    const signatureImages: JSX.Element[] = [];

    FontsData.map((item, index) => {
      signatureImages.push(
        <img
          key={index}
          src={`data:image/png;base64,${generateSignature(item.name)}`}
          alt={`Signature ${index + 1}`}
        />
      );
    })
    return signatureImages;
  };

  const generateSignature = (font: string) => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");
    console.log("fonts", font);
    if (ctx) {
      ctx.font = `50px ${font}`;
      ctx.fillStyle = "#000";
      ctx.fillText(text, 50, 50);
    }
    return canvas.toDataURL("image/png").split(",")[1];
  }


  useEffect(() => {
    // setImgsArr(generateSignatureImgs());
    setInputText(text);
  }, [text]);


  return (<>{imgsArr && <div className="sign-img-wrapper ">
    {fonts.map((font, index) => (<div key={index} className="font-container m-3"><span style={{fontFamily : `"${font}", sans-serif`}}>{inputText}</span></div>))}
  </div>
  }</>)
}