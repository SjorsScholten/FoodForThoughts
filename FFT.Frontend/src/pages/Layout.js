import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navigation from "../components/Navigation";

function Layout(props) {

    return (
        <>
            <Navigation token={props.token}/>
            <br />
            <Outlet />
            <br />
        </>
    )
};

export default Layout;