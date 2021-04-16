import Menu from "../../components/menu";
import Footer from "../../components/h-footer";

const Layout = ({ children }) => (
  <>
    <Menu />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
