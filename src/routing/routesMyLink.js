import {createBrowserRouter, createRoutesFromElements, Route, json, redirect} from "react-router-dom";
import RouterParam from "./RouterParam";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import BookStatePage from "./BookStatePage";
import TopPage from "./TopPage";
import InvalidParamsPage from "./InvalidParamsPage";
import WeatherPage from "./WeatherPage";
import CommonErrorPage from "./CommonErrorPage";
import yup from "../basic/yup.jp"
import {date, number, string} from "yup"
import BookFormPage from "./BookFormPage";
import RouterCustom from "./RouterCustom";
import AboutPage from "./AboutPage";

const routesMyLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterCustom/>}>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/article" element={<TopPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Route>
    )
)

export default routesMyLink
