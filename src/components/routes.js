// routes.js
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import Layout from './adminlayout/Layout';
import NoNeedAuth from './noneedAuth/NoNeedAuth';
import Notfound from './notfound/Notfound';
import TableGenerator from './TableGenerator/TableGenerator';  
import CloudinaryUpload from './cloud/cloud';
import MainPage from './main/mainpage/main';


        <Route path='/*' element={<Notfound></Notfound>}></Route>
        <Route index element={<MainPage></MainPage>}></Route>
        <Route path='/dashboard' element={<NoNeedAuth></NoNeedAuth>}>
          <Route path='' element={<Layout> <div> adsfasdfsadfasdf</div></Layout>}>
            {/*this where we add the outlet or out look and the route that will apper inside it  */}
            <Route path='himan' element={<div style={{backgroundColor:"red", overflow:"auto",width:"100%"}}>sdfdsafdsaf</div>}></Route>
            <Route path='orders'/>
            <Route path='table' element={  <div className='container-fluid p-0 m-0'>
              <TableGenerator headers={headers} data={data} />
            </div>}/>
            <Route path='upload' element={<CloudinaryUpload/>}></Route>
            <Route path='*' element={<Notfound/>}/>
            <Route path='mainpage' element={<MainPage></MainPage>}/>
          </Route>
        <Route />


const routes = [
  {
    path: "/*",
    element: <NotFound />,
    label: "notfound",
  },
  {
    path: "/",
    element: <MainPage />,
    label: "main",
    isIndex: true,

  },
  {
    path: "products/:id",
    element: <ProductDetails />,
    label: "تفاصيل المنتج",
  },
  {
    path: "*",
    element: <NotFound />,
    hidden: true,
  },
];

export default routes;
