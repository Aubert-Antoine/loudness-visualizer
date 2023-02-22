import React from 'react';
import {createRoot} from "react-dom/client";
import '../assets/tailwind.css';
import Clock from "../popup/clock";
import NavBar from "../popup/navBar";
import gif from "../popup/gif";
import VUMeter from "../popup/VUMeter";


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
    <>
        {gif}
        <Clock/>
        <NavBar title={"My App"}/>
        <VUMeter/>
    </>
)
