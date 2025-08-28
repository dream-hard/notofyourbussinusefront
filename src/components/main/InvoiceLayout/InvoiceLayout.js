


import React, { forwardRef } from "react";
import logo from "../layoutpage/cortex 7 final 1.png"; // غيّر المسار حسب موقع الشعار

const InvoiceLayout = forwardRef(({ cart, subtotal, discount, tax, total, customer, orderId, shippingAddress,currency }, ref) => {
  const date = new Date().toLocaleDateString("ar-EG");

  return (
    <div ref={ref} className="container my-4 " dir="rtl"   style={{
        backgroundColor:"#fff",
         minWidth: "210mm",
         maxWidth: "210mm",       // عرض صفحة A4 بالميليمتر
    minHeight: "283mm",      // ارتفاع صفحة A4 بالميليمتر
    maxHeight: "283mm", 
    padding: "10mm",
    paddingTop:'0',
    
    boxSizing: "border-box",
    overflow: "hidden",   // لمنع النزول لصفحة ثانية
    display: "flex",
    
    flexDirection: "column",
    justifyContent: "space-evenly" // ليشغل كل المساحة بشكل متوازن
        }}>
      {/* شعار */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <img src={logo} alt="شعار المتجر" style={{ maxWidth: "150px" }} />
        <div>
          <h4 className="mb-1">فاتورة الشراء</h4>
          <small >رقم الطلب: #{orderId}</small><br />
          <h6 className="mt-1"> التاريخ : {date}</h6>
        </div>
      </div>

      {/* معلومات الزبون والشحن */}
      <div className="row mb-1">
        <div className="col-md-6">
          <h6>معلومات الزبون:</h6>
          <p className="mb-1"><strong>{customer.name}</strong></p>
          <p>{customer.phone}</p>
        </div>
        <div className="col-md-6">
          <h6>عنوان الشحن:</h6>
          <p>{shippingAddress}</p>
        </div>
      </div>

      {/* جدول المنتجات */}

      <div className=" mb-1 ">
        <table className="table table-bordered text-center">
          <thead className="table-light ">
            <tr >
              <th>المنتج</th>
              <th>الكمية</th>
              <th>سعر الوحدة</th>
              <th>الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{currency} {item.price.toFixed(2)}</td>
                <td>{(item.price * item.quantity).toFixed(2)} {currency} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    
      {/* <div className="container-  m-0">
  {cart.length <= 10 ? (
    // جدول واحد فقط
    <div className="mb-1 w-100 ">
      <table className="table table-bordered text-center">
        <thead className="table-light">
          <tr>
            <th>المنتج</th>
            <th>الكمية</th>
            <th>سعر الوحدة</th>
            <th>الإجمالي</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    // جدولين إذا أكتر من 10
    <div className="d-flex justify-content-between gap-2">
      {[cart.slice(0, Math.ceil(cart.length / 2)), cart.slice(Math.ceil(cart.length / 2))].map((half, index) => (
        <div key={index} className="w-50 mb-1">
          <table className="table table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>المنتج</th>
                <th>الكمية</th>
                <th>سعر الوحدة</th>
                <th>الإجمالي</th>
              </tr>
            </thead>
            <tbody>
              {half.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )}
</div> */}
 

    
      {/* الإجماليات */}
  {/* <div className="card bg-white shadow-sm mt-0" dir="rtl">
  <div className="card-body">
    <ul className="list-unstyled mb-3">
      <li className="d-flex justify-content-between py-2 border-bottom">
        <span>المجموع:</span>
        <span className="text-success">${subtotal.toFixed(2)}</span>
      </li>
      <li className="d-flex justify-content-between py-2 border-bottom">
        <span>الخصم:</span>
        <span className="text-danger">- ${discount.toFixed(2)}</span>
      </li>
      <li className="d-flex justify-content-between py-2 border-bottom">
        <span>الضريبة:</span>
        <span>${tax.toFixed(2)}</span>
      </li>
    </ul>
    <div className="d-flex justify-content-between border-top pt-3">
      <strong>الإجمالي النهائي:</strong>
      <strong className="text-primary">${total.toFixed(2)}</strong>
    </div>
  </div>
</div> */}
<div className="card bg-white shadow-sm mt-0" dir="rtl">
  <div className="card-body p-2">
    <ul className="list-unstyled mb-2" style={{ fontSize: "0.85rem", lineHeight: "1.2" }}>
      <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
        <span>المجموع:</span>
        <span className="text-success">{subtotal.toFixed(2)} {currency}</span>
      </li>
      <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
        <span>الخصم:</span>
        <span className="text-danger">- {currency} {discount.toFixed(2)}</span>
      </li>
      <li className="d-flex justify-content-between align-items-center py-1 border-bottom">
        <span>الضريبة:</span>
        <span>{currency} {tax.toFixed(2)}</span>
      </li>
    </ul>
    <div className="d-flex justify-content-between border-top pt-2">
      <strong style={{ fontSize: "0.9rem" }}>الإجمالي النهائي:</strong>
      <strong className="text-primary" style={{ fontSize: "0.9rem" }}>
        {currency} {total.toFixed(2)}
      </strong>
    </div>
  </div>
</div>

      <div className="container-fluid text-start mt-2 pt-1 pb-0 mb-1 " >
        <strong className="d-block text-start ">شروط وأحكام :</strong>
        <ul dir="rtl" className="ps-2 pt-1 m-0 list-unstyled">
    <li>يرجى الاحتفاظ بهذه الفاتورة للرجوع إليها لاحقًا.</li>
    <li>المنتجات غير قابلة للاسترجاع بعد 7 أيام.</li>
        </ul>
      </div>
      {/* ملاحظة ختامية */}
       <footer className="mt-3  pt-1 border-top text-center text-muted small mt-auto" >
    
      <p className="mb-1"> 
        شكراً لتسوقكم معنا ❤️ 
      </p>
      <p className="mb-2">
        للتواصل: <a href="tel:+96170123456">70-123456</a> | <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <div className="mb-1">
        <a href="https://facebook.com" className="me-2 text-decoration-none text-muted">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://instagram.com" className="me-2 text-decoration-none text-muted">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://wa.me/96170123456" className="text-decoration-none text-muted ">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      <p className="mb-0">
        &copy; 2025   CORTEX 7   . جميع الحقوق محفوظة.
      </p>
   
    </footer>
    </div>
  );
});

export default InvoiceLayout;
