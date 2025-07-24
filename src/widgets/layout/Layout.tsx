import { Outlet } from "react-router";
import { Footer, Header } from "..";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;