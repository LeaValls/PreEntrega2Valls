import NavBar from "../NavBar";
import {Outlet as Page} from "react-router-dom";
import Footer from "../Footer";

function Layaout (){
    return (
        <main>
            <NavBar />
            <Page />
            <Footer />
            
        </main>
    )
}

export default Layaout;