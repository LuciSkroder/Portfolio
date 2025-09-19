import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

export default function CVPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: "center", margin: "2rem" }}>
      <Document file="/imgs/cv.pdf">
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
}