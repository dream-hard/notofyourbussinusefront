import React, { useEffect, useState } from 'react';
import RightOptions from '../rightoptions/rightoptions';
import ProductCard from '../main/card/card';
import { Link } from 'react-router-dom';


const productss = [
  {
    badge: "الأكثر مبيعًا",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "قرص تخزين محمول",
    description: "سرعة عالية بفضل منفذ USB-C وتخزين 1 تيرابايت.",
    specs: ["1 تيرابايت", "USB-C", "محمول"],
    price: 89.99,
  },
  {
    badge: "جديد",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "شاحن سريع",
    description: "دعم الشحن السريع للهواتف والأجهزة اللوحية.",
    specs: ["18W", "USB-A", "خفيف الوزن"],
    price: 19.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة gog oggoog man  شسيب ",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  },
  {
    badge: "مميز",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s",
    title: "سماعة بلوتوث",
    description: "جودة صوت عالية واتصال مستقر بالبلوتوث.",
    specs: ["BT 5.0", "8 ساعات", "ميكروفون مدمج"],
    price: 29.99,
  }
];
const ProductList = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const[optionFilters,setOptionFilters]=useState([]);
    const [productsss, setProductsss] = useState([]);

  const handleFilterChange = (filterName, selected) => {
    const updated = { ...selectedFilters, [filterName]: selected };
    setSelectedFilters(updated);

  };





    const [page, setPage] = useState(1);
  const paginationData = {
    totalPages: 20, // 🔢 Change this to test different page counts
    totalItems: 100, // Just for reference — not required here
  };
  const [products, setProducts] = useState([]);
  const [orderbyoption, setOrderbyoption] = useState('default');
    const [orderby,setorderby]=useState(false)
  useEffect(()=>{
  setProducts(productss)

  },[])
    const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= paginationData.totalPages) {
      setPage(newPage);
    }
  };
//   useEffect(() => {
//     fetch('/api/products') // Replace with your real API endpoint
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

  const handelorder = (option) => {
    setOrderbyoption(option);
    // Add real sort logic here
  };

  return (
    <div className='container-fluid'>
      {/* Top: Sort Bar */}
    <div className="d-flex justify-content-between align-items-center flex-wrap py-3 "  style={{ paddingLeft: '1.5rem' }}>
  <h5 className="mb-2 mb-md-0">المنتجات</h5> {/* Arabic title "Products" */}


</div>


      {/* Main Grid Row: Filters + Products */}
      <div className="row ">
        
        {/* Filter Panel (Inside ProductList) */}
        <div className="d-none d-lg-block col-md-3 mb-3 p-2 pt-4  col-lg-2"  style={{ }}>
          <RightOptions
          optionFilters={optionFilters}
          onFilterChange={handleFilterChange} 
          selectedFilters={selectedFilters}/>
        </div>
           {/* Overlay background when open */}
      {orderby && (
        <div
          className="overlay d-lg-none"
          onClick={() => setorderby(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1040,
          }}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`d-block d-lg-none right-options-sidebar bg-white shadow d-md-block ${
          orderby ? 'open' : ''
        }`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '280px',
          maxWidth: '80vw',
          overflowY: 'auto',
          transition: 'transform 0.3s ease',
          zIndex: 1050,
          transform: orderby ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Close button */}
        <button
          className="btn btn-light d-lg-none m-3"
          onClick={() => setorderby(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Your options content here */}
        <div className="p-3">
                    <RightOptions 
                  optionFilters={optionFilters}
                  onFilterChange={handleFilterChange}
                  selectedFilters={selectedFilters} />

        </div>
      </div>
 

        {/* Product Cards */}
        <div className="col-md-12 col-lg-10 mt-3"  >
        <div className='container  '>
        <h2 className="fw-semibold mb-3 pb-3 container ps-0" 
  style={{
    textAlign:"start",
    fontSize: "1.8rem",
    color: "#4B5563",
    borderBottom: "2px solid #E5E7EB", // light gray underline
    display: "inline-block",
  }}>
      cortex1 category
    </h2>

    {/* Clean Description */}
    <p className="text-muted mb-4" style={{ fontSize: "1rem", maxWidth: "700px" }}>
      اكتشف مجموعة منتجاتنا المتنوعة ضمن هذه الفئة. تم اختيار كل منتج بعناية لتلبية احتياجاتك وتوفير أفضل تجربة شراء.
    </p>
        </div>             
              <div className="d-flex align-items-center gap-2 me-auto mb-5 pt-2">
         <div className='px-3' style={{display:"flex" ,flexFlow:"row nowrap",justifyContent:"space-around",alignItems:"center",margin:""}}>
    <label htmlFor="sort" className="me-2 fw-medium text-muted ">
      ترتيب حسب:
    </label>
    <select
      value={orderby}

      id="sort"
      className="form-select form-select-sm w-auto"
      onChange={(e) => handelorder(e.target.value)}
    >
      <option value="default">الافتراضي</option>
      <option value="price_asc">السعر: الأقل أولاً</option>
      <option value="price_desc">السعر: الأعلى أولاً</option>
      <option value="name_asc">الاسم: A-Z</option>
      <option value="name_desc">الاسم: Z-A</option>
    </select>
    </div>

          <button className="d-block d-lg-none btn btn-outline-primary d-flex align-items-center gap-2 ms-auto"
          onClick={()=>setorderby(true)}>
  <i className="bi bi-filter"></i>
  <span>تصفية</span>
</button>
  </div>
          {/* <div className="row g-4">
            {products.map((product) => (
              <div className="col-lg-4 col-md-6  col-6" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div> */}

               <div  className="container-fluid pb-2" style={{backgroundColor:"" ,borderBottom: '1px solid #ddd',}}>
<div className="row gy-2 gy-sm-3 gy-md-4 justify-content-start" >
        {productss.map((product, idx) => (
          <div style={{backgroundColor:''}} className="col-6 col-sm-6 col-md-4 mt-3 col-lg-3 px-1 px-sm-3 px-md-2 px-lg-3" key={product.id}>
            <Link style={{textDecoration:"none"}} to="/test2">
            <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
     {/* <div className="containe-fluid mt-4 d-flex" style={{flexFlow:"column nowrap",overflow:"auto",maxHeight:"fit-contant",justifyContent:"space-between",alignItems:"end"}}>
      <h5 className="text-start mb-4 col-12">الصفحة الحالية: <strong>{page}</strong></h5>

      <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center pagination-rounded shadow-sm">
          <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page - 1)}>
              <i className="bi bi-chevron-right"></i> السابق
            </button>
          </li>

          {[...Array(paginationData.totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <li key={pageNum} className={`page-item ${pageNum === page ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(pageNum)}>
                  {pageNum}
                </button>
              </li>
            );
          })}

          <li className={`page-item ${page === paginationData.totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(page + 1)}>
              التالي <i className="bi bi-chevron-left"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div> */}
    < Pagination
  page={page}
  totalPages={paginationData.totalPages}
  onPageChange={handlePageChange()}
/>

        </div>
        
        
      </div>
     
    </div>
  );
};

export default ProductList;


function Pagination({ page, totalPages, onPageChange }) {
  // How many page buttons to show around current page
  const siblingCount = 1;

  // Helper to create a range of numbers
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  // Calculate the pages to show
  const paginationRange = (() => {
    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!showLeftEllipsis && showRightEllipsis) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, '...', totalPages];
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, '...', ...rightRange];
    }

    if (showLeftEllipsis && showRightEllipsis) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  })();

  return (
    <div className="containe mt-3 col-11 d-flex g-0" style={{flexFlow:"row nowrap",justifyContent:"space-evenly",alignItems:"end"}}>
      <h5 className="text-start ">الصفحة الحالية: <strong>{page}</strong></h5>
    <nav aria-label="Page navigation ">
      <ul className="pagination  justify-content-center pagination-rounded shadow-sm m-0 p-0">


        {paginationRange.map((pageNum, idx) => {
          if (pageNum === '...') {
            return (
              <li key={`ellipsis-${idx}`} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
          }
          return (
            <li
              key={pageNum}
              className={`page-item ${pageNum === page ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => onPageChange(pageNum)}>
                {pageNum}
              </button>
            </li>
          );
        })}

   
      </ul>
    </nav>
    </div>
  );
}
