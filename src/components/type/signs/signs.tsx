import React, { useEffect, useRef, useState } from "react";
import FontsData from "../../data/fonts.data";
import "./signs.scss";

interface ISignsProps {
  text: string
}

export const Signs: React.FC<ISignsProps> = ({ text }) => {

  const [imgsArr, setImgsArr] = useState<JSX.Element[]>([]);




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
    if (ctx) {
      ctx.font = `50px ${font}`;
      ctx.fillStyle = "#000";
      ctx.fillText(text, 50, 50);
    }

    // console.log("images : ", canvas.toDataURL("image/png").split(",")[1]);
    return canvas.toDataURL("image/png").split(",")[1];
    // Convert canvas to a Blob and save it
    //   canvas.toBlob((blob) => {
    //     if (blob) {
    //       saveAs(blob, "sign.png");
    //     }
    //   }, "image/png");
  }


  useEffect(() => {
    setImgsArr(generateSignatureImgs());
  }, [text]);


  return (<>{imgsArr && <div className="sign-img-wrapper">
    {imgsArr.map((item, index) => (<div key={index} className="img-container">{item}</div>))}
  </div>
  }</>)
}