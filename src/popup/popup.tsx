import React from "react";
import {createRoot} from "react-dom/client";
import '../assets/tailwindcss.css'

const test = (
    <div>
        <h1 className="text-sm font-medium text-red-600">Hello World</h1>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Another test of the popup</p>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)