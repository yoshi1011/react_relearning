import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import FormBasic from "./basic/FormBasic";
import StateForm from "./basic/StateForm";
import RouterNav from "./RouterNav";
import StateEffect from "./useHooks/StateEffect";
import AboutPage from "./routing/AboutPage";

const routesLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterNav/>}>
            <Route path="/" element={<FormBasic/>}/>
            <Route path="/form/978-1336" element={<StateEffect/>}/>
            <Route path="/form" element={<StateForm/>}/>
            <Route path="/about" element={<AboutPage/>}/>
        </Route>
    )
)

export default routesLink
