import {NavLink, Outlet} from "react-router-dom";
import '../RouterNav.css'

export default function RouterParam() {
    return (
        <>
            <ul>
                <li><NavLink to="/">トップ</NavLink></li>
                <li><NavLink to="/book/978">これからはじめる</NavLink></li>
                <li><NavLink to="/book/13288">JavaScript</NavLink></li>
                <li><NavLink to="/book" end>規定の書籍</NavLink></li>
                <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
                <li><NavLink to="/bookQuery?isbn=13288">JavaScriptクエリ版</NavLink></li>
                <li><NavLink to="/bookState" state="978-4-253">JavaScriptState版</NavLink></li>
            </ul>
            <hr/>
            <Outlet/>
        </>
    )
}
