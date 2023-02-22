import React from 'react';
import {createRoot} from "react-dom/client";
import '../assets/tailwind.css';
import Clock from "./clock";
import NavBar from "./navBar";
import gif from "./gif";


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
    <>
        {gif}
        <Clock/>
        <NavBar title={"My App"}/>
    </>
)

