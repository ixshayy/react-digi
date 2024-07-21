import React, { useState } from "react";
import DropZone from "./drop-zone/drop.zone";
import { PdfViewer } from "./pdf-viewer/pdf.viewer";
import "./sign.pdf.scss";


const SignPdf: React.FC = () => {
  const [fileData, setFileData] = useState<ArrayBuffer>();

  return (
      <div className="sign-pdf-wrapper">
        <DropZone setFileData={setFileData} />
        {fileData && <PdfViewer fileData={fileData} />}
      </div>
  );
};

export default SignPdf;
