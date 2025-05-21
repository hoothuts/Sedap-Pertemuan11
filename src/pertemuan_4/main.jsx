import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./FrameworkList";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root")).render (
    <>
    <FrameworkList/>
    <ResponsiveDesign/>
    </>
    
)