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

const sleep = ms => new Promise(res => setTimeout(res, ms))

const fetchWeather = async ({params}) => {
    await sleep(2000)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=ja&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);

    if (res.ok) {
        return res
    }
    switch (res.status) {
        case 404:
            throw json({message: 'city is invalid'}, {status: 404})
        case 401:
            throw json({message: 'api key is invalid'}, {status: 401})
        default:
            throw json({message: 'api server is in trouble...'}, {status: 501})
    }
}

const bookAction = async ({request}) => {
    const form = await request.formData();

    const bookSchema = yup.object({
        title: string().label('書名').required().max(100),
        price: number().label('価格').integer().positive(),
        published: date().label('刊行日').required().max(new Date(2100, 0, 1))
    })
    let info;

    try {
        info = await bookSchema.validate({
            title: form.get('title'),
            price: form.get('price') || 0,
            published: new Date(form.get('published') || Date.now())
        }, {
            abortEarly: false
        })
        console.log(info)
        return redirect('/')
    } catch (e) {
        return e.errors
    }
}

const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam/>} errorElement={<CommonErrorPage/>}>
            <Route path="/" element={<TopPage/>}/>
            <Route path="/book/:isbn?" element={<BookPage/>} errorElement={<InvalidParamsPage/>}/>
            <Route path="/search/*" element={<SearchPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="/bookQuery" element={<BookQueryPage/>}/>
            <Route path="/bookState" element={<BookStatePage/>}/>
            <Route path="/weather/:city" element={<WeatherPage/>} lazy={() => import('./WeatherLazyPage')}/>
            {/*<Route path="/weather/:city" element={<WeatherPage />} loader={fetchWeather} />*/}
            <Route path="/book/form" element={<BookFormPage/>} action={bookAction}/>
            <Route path="/books" lazy={async () => {
                const {BookListPage} = await import('./BookNest')
                return {Component: BookListPage}
            }}>
                <Route path=":isbn" lazy={async() => {
                    const {BookDetailsPage} = await import('./BookNest')
                    return {Component: BookDetailsPage}
                }} />
            </Route>
        </Route>
    )
)

export default routesParam
