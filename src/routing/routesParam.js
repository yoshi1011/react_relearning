import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import RouterParam from "./RouterParam";
import BookPage from "./BookPage";
import SearchPage from "./SearchPage";
import NotFoundPage from "./NotFoundPage";
import BookQueryPage from "./BookQueryPage";
import BookStatePage from "./BookStatePage";
import TopPage from "./TopPage";

const routesParams = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>}>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage/>} />
            <Route path="/bookQuery" element={<BookQueryPage/>}/>
            <Route path="/bookState" element={<BookStatePage/>}/>
        </Route>
    )
)

export default routesParams