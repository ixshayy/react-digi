import React, { useState } from "react";
import "./pdf.viewer.scss";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface IPdfviewerProps {
    fileData : ArrayBuffer
}


export const PdfViewer: React.FC<IPdfviewerProps> = ({fileData}) => {
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div className="document-viewer">
      <Document file={fileData} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};
