export default function CVPage() {
  return (
    <div className="pdf-flex">
      <object className="pdf-cv"
      data="/imgs/cv.pdf"
      type="application/pdf"
      >
        <p>
        Your browser does not support PDFs.
          <a href="/imgs/cv.pdf">Download the PDF</a>.
        </p>
      </object>
    </div>
  );
}