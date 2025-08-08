import { Outlet } from "react-router-dom";
import Navber from "../NavBer/Navber";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;