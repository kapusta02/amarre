import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {ErrorPage} from "./components/ErrorPage/ErrorPage";
import {Main} from "./container/Main/Main";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}
