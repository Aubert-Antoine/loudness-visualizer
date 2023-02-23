import React from 'react';
import {createRoot} from "react-dom/client";
import '../assets/tailwind.css';
import Clock from "../components/clock";
import NavBar from "../components/navBar";
import gif from "../components/gif";


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

