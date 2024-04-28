import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import FormBasic from "./basic/FormBasic";
import StateForm from "./basic/StateForm";
import StateTodo from "./basic/StateTodo";

const routesBasic = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<FormBasic/>} />
            <Route path="/form" element={<StateForm/>} />
            <Route path="/todo" element={<StateTodo/>} />
        </>
    )
)

export default routesBasic
