// import React from 'react';
// import './Sidebar.css';
// import { NavLink,useLocation } from 'react-router-dom';

// export default function Sidebar({ isOpen, toggleSidebar }) {
//   const location = useLocation()
//   const links =[];

//   const linkss = [
//     {name:"images upload",link:"upload"},{name:"table somthing",link:"table"},
//     {name:"main",link:"mainpage"},
//   {
//     name: 'Products',
//     link: 'products',
//     submenu: [
//       { name: 'All Products', link: 'products/all' },
//       {
//         name: 'Add Product',
//         link: 'products/new',
//         submenu: [
//           {
//             name: 'Digital Product',
//             link: 'products/new/digital',
//             submenu: [
//               { name: 'eBook', link: 'products/new/digital/ebook' },
//               { name: 'Course', link: 'products/new/digital/course' ,}
//             ]
//           },
//           { name: 'Physical Product', link: 'products/new/physical' }
//         ]
//       }
//     ]
//   },
//   { name: 'Orders', link: 'orders' },
//   { name: 'Users', link: 'users' },
//   {name:'Viewlayout',link:'productlayout'}
// ];


//   const renderLinks = (items,bool =false) => {
//   return items.map((item, index) => (
//     <>
//       <NavLink
//         to={item.link}
//         className={({ isActive }) =>
//           `nav-link d-block ${isActive ? 'active-link text-primary' : 'text-dark'}`
//         }
//       >
//         <li className={`${bool ? "sidebar-subitem":"sidebar-item" }  ${item.submenu ? 'has-submenu' : ''}`}>
//           {item.name}
          
//           {item.submenu && (
//             <ul className="sidebar-submenu list-unstyled ps-3">
//               {renderLinks(item.submenu,true)} {/* 🔁 recursion هنا */}
//             </ul>
//           )}
//         </li>
//       </NavLink>

//     </>
//   ));
// };




//   return (
//     <div className={`sidebar bg-light ${isOpen ? 'open' : ''}`}>
//       <div className="sidebar-header p-3 fw-bold border-bottom d-flex justify-content-between align-items-center">
//         category
//         <button className="btn btn-sm btn-outline-secondary" onClick={toggleSidebar}>
//   <i className="bi bi-x-lg"></i>
// </button>


//       </div>
//       <ul className="list-unstyled m-0 p-3 sidebar-list">
//         {/* <li className="sidebar-item ">Dashboard</li>
//         <li className="sidebar-item has-submenu  ">Products   <ul className="list-unstyled ps-3 sidebar-submenu">
//       <li className="sidebar-subitem">All Products</li>
//       <li className="sidebar-subitem">Add Product </li>
//     </ul></li>
//         <li className="sidebar-item">Orders</li>
//         <li className="sidebar-item">Customers</li>
//         <li className="sidebar-item">Settings</li> */}

        
//          {/* <NavLink
//     to="products"
//     className={({ isActive }) =>
//       `nav-link d-block ${isActive ? "active-link text-primary" : "text-dark"}`
//     }
//   >
// <li className="sidebar-item has-submenu">
 
//     Products

//   <ul className="sidebar-submenu list-unstyled ps-3">
//           <NavLink to="products/all" className="nav-link text-dark">

//     <li className="sidebar-subitem">
//         All Products
//     </li>
//           </NavLink>
//       <NavLink to="products/new" className="nav-link text-dark">

//     <li className="sidebar-subitem">
//         Add Product
//     </li>
//           </NavLink>

//   </ul>
// </li>
//   </NavLink> */}
//   <NavLink to='himan'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>himan</li>
//   </NavLink>
//     <NavLink to='suppliers'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>suppliers</li>
//   </NavLink>


//     <NavLink to='products' className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>products</li>
//   </NavLink>

//     <NavLink to='orders'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>orders</li>
//   </NavLink>

//     <NavLink to='users'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>users</li>
//   </NavLink>

//     <NavLink to='categories'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>categories</li>
//   </NavLink>

//     <NavLink to='ads'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>ADS</li>
//   </NavLink>

//     <NavLink to='coupones'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>coupones</li>
//   </NavLink>
  
//     <NavLink to='attributes'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>attributes</li>
//   </NavLink>

//     <NavLink to='currencies'className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//     <li className='sidebar-item '>currencies</li>
//   </NavLink>

//   {links?.map((link,key)=>{
//     return(
//       <>
//         <NavLink to={link.link} className={({isActive})=>`nav-link text dark ${isActive? 'active-link':""}`}>
//            <li className='sidebar-item '>{link.name}</li>
//         </NavLink>

//       </>
//     )
//   })}

//   {renderLinks(linkss)}



//       </ul>

//     </div>
//   );
// }

import React from "react";
import "./Sidebar.css";

export default function SidebarMenu({ onSelect,isOpen,toggleSidebar }) {
  const menu = [
    { name: "Dashboard", value: "dashboard" },
    { name: "Suppliers", value: "suppliers" },
    { name: "Products", value: "products" },
    { name: "Orders", value: "orders" },
    { name: "Users", value: "users" },
    {
      name: "Advanced",
      value: "advanced",
      submenu: [
        { name: "Upload Images", value: "upload" },
        { name: "Table Example", value: "table" },
        {
          name: "Add Product",
          value: "add_product",
          submenu: [
            {
              name: "Digital",
              value: "digital",
              submenu: [
                { name: "eBook", value: "ebook" },
                { name: "Course", value: "course" },
              ],
            },
            { name: "Physical", value: "physical" },
          ],
        },
      ],
    },
  ];

  const renderMenu = (items, level = 0) =>
    items.map((item, i) => (
      <li
        key={i}
        className={`menus-item level-${level}`}
        onClick={(e) => {
          e.stopPropagation(); // ✅ prevent parent click from firing
          onSelect(item.value);
        }}
      >
        <span className="menus-link">{item.name}</span>
        {item.submenu && (
          <ul className="submenus">{renderMenu(item.submenu, level + 1)}</ul>
        )}
      </li>
    ));

  return (
    <aside className={`sidebars ${isOpen ? "open" : ""}`}>
      <div className="sidebars-header">
        الاصناف
        <button className="btn btn-sm btn-outline-secondary" onClick={toggleSidebar}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
      <ul className="menus-list">{renderMenu(menu)}</ul>
    </aside>
  );
}