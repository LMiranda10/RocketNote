import { Routes, Route } from "react-router-dom";

import { SigIn } from "../pages/SigIn";
import { New } from "../pages/New";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/new" element={<New/>} />
        </Routes>
    )
}

