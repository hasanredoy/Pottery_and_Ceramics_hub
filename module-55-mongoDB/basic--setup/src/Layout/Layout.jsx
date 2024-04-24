import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <h1 className=' text-xl text-primary'>From Layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;