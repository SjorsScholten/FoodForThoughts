import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";

function Layout() {
    const [token, setToken] = useState();

    return (
        <>
            <Navigation token={token}/>
            <br />
            <Outlet />
            <br />
        </>
    )
};

export default Layout;