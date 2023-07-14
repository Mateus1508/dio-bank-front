import Footer from "./Footer";
import Header from "./Hearder";

const Layout = ({ children }: any) => {
    return ( 
        <div>
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;