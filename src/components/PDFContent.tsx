import { useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ChartComponent, { PDFContentProps } from "./ChartComponent"; // import your chart componentimport html2canvas from 'html2canvas';
import "../style/PDFContent.css";

interface IProps {
  data: PDFContentProps;
  show: boolean;
  setShow: any;
}

const PDFContent = ({ data, show, setShow }: IProps) => {
  const myComponentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        handleDownload();
      }, 1000); // delay of 1 second
    }
    // eslint-disable-next-line
  }, [show]);

  const handleDownload = () => {
    if (myComponentRef.current) {
      const scale = 10; // Increase this value for a higher resolution
      html2canvas(myComponentRef.current, { scale }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF("p", "pt", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const aspectRatio = canvas.width / canvas.height;
        let imgWidth = pdfWidth;
        let imgHeight = pdfWidth / aspectRatio;
        if (imgHeight > pdfHeight) {
          imgHeight = pdfHeight;
          imgWidth = pdfHeight * aspectRatio;
        }
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("report.pdf");
        setShow(false);
      });
    }
  };

  return (
    <div className={`pdf-content-wrap ${show ? "show" : ""}`}>
      <p className="process">Processing...</p>
      <div ref={myComponentRef} className="pdf-content">
        <header>
          <div className="flex-wrap">
            <div className="flex-nojustify-wrap">
              <img
                src="/logoMark.png"
                width="15.02px"
                height="16px"
                alt="logoMark"
              />
              <p>RealAssist.AI</p>
            </div>
            <p>123 Main Street, Dover, NH 03820-4667</p>
          </div>
          <div className="header-line"></div>
        </header>

        <div className="box-header"></div>
        <div className="box-content">
          <div className="box-content-wrap1"></div>
        </div>

        <div className="box-header"></div>
        <div className="box-content">
          <div className="box-content-wrap2"></div>
        </div>

        <div className="box-header"></div>
        <div className="box-content">
          <div className="box-content-wrap3"></div>
        </div>

        <ChartComponent data={data.data} />
        <footer>
          <div className="footer-line"></div>
          <div className="flex-wrap">
            <p>Report Genereted on September 26, 2023</p>
            <p>
              RealAssist Property Report | Page 1 <span>of 25</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PDFContent;
