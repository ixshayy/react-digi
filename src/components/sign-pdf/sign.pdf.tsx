import React, { useState } from "react";
import DropZone from "./drop-zone/drop.zone";
import { PdfViewer } from "./pdf-viewer/pdf.viewer";
import "./sign.pdf.scss";
import { UploadSign } from "./upload-sign/upload.sign";


const SignPdf: React.FC = () => {
  const [fileData, setFileData] = useState<ArrayBuffer>();

  return (
      <div className="sign-pdf-wrapper">
        {fileData ? <PdfViewer fileData={fileData} /> : <DropZone setFileData={setFileData} />}
        <UploadSign/>
      </div>
  );
};

export default SignPdf;
