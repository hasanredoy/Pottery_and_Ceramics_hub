
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=' bg-base-100 ' >
       <div className=' sticky top-0 z-50'>
        <Navbar></Navbar>
       </div>
       <div className=' container min-h-screen mx-auto bg-base-100'>
        <Outlet></Outlet>
       </div>
       <div>
        <Footer></Footer>
       </div>
    </div>
  );
};

export default Layout;