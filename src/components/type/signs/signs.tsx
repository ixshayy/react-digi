import React, { useEffect } from "react";
import { saveAs } from "file-saver";
import FontsData from "../../data/fonts.data";


interface ISignsProps {
    text : string
}

export const Signs : React.FC<ISignsProps> = ({text}) => {

    const loadFonts = async () => {
        try {
          const fontPromises = FontsData.map(({ name, url }) => {
            const font = new FontFace(name, `url(${url})`);
            return font.load().then(() => {
              document.fonts.add(font);
            });
          });
          await Promise.all(fontPromises);
        } catch (error) {
          console.error("Error loading fonts:", error);
        }
      };


    const generateSignatures = () => {
        // Simulate generating multiple signatures
        const signatureImages  = [];
        for (let i = 1; i <= FontsData.length; i++) {
            signatureImages.push(
            <img
              key={i}
              src={`data:image/png;base64,${generateSignatureImage(FontsData[i].name)}`}
              alt={`Signature ${i + 1}`}
            />
          );
        }
        return signatureImages;
      };

    const generateSignatureImage = (font : string) => {
        const canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 200;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.font = `100px ${font}`;
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


    useEffect(()=>{
        generateImages();
    }, [text]);


    return(<></>)
}