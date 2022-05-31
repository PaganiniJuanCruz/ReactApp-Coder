import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesConfig = () => (
    <BrowserRouter>
        <Routes>
            <Routes path="/" element = {<Home />} />
            
        </Routes>
    </BrowserRouter>
)