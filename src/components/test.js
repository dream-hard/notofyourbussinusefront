import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js"; 


const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ padding: 20 }}>
    <h2>فاتورة</h2>
    <p>تفاصيل الطلب...</p>
  </div>
));

export default function Test() {



  const componentRef = useRef();


  
  const handleDownloadPDF = () => {
    const element = componentRef.current;
    const options = {
      margin: 0.5,
      filename: `invoice-${Date.now()}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>طباعة</button>
      <button onClick={handleDownloadPDF}>download</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
}