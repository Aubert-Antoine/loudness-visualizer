import React from 'react';
import {createRoot} from "react-dom/client";
import '../assets/tailwind.css';
import Clock from "../components/clock";
import NavBar from "../components/navBar";
import gif from "../components/gif";
import FetchAudioAPI from "./fetchAudioAPI";
import BottomNav from "../components/bottomNav";


const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
    <>
        <BottomNav size={"Normal"}/>
        <NavBar title={"My App"}/>
        {gif}
        <Clock/>
    </>
)

