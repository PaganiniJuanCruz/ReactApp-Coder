// eslint-disable-next-lin
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import  ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer";


const RoutesConfig = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<ItemListContainer />}></Route>
                <Route path="/sneakers/:id" element={<ItemDetailContainer />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default RoutesConfig;