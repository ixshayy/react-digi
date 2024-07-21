import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./drop.zone.scss";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { GrDownload } from "react-icons/gr";



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface IDropZoneProps {
  setFileData : (fileData: ArrayBuffer) => void;
}

const DropZone: React.FC<IDropZoneProps> = ({setFileData}) => {

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const fileExtension = file.name.split(".").pop();
      console.log(`File name: ${file.name}, File extension: ${fileExtension}`);

      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result as ArrayBuffer;
        setFileData(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()} className="drope-zone-wrapper">
        <input {...getInputProps()} />
          <div className="drag-drop-instructions">
            <GrDownload/>
            <p className="mt-3">Drag 'n' drop some files here</p>
          </div>
      </div>
    </>
  );
};


export default DropZone;
