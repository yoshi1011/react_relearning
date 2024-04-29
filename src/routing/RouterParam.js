import {NavLink, Outlet} from "react-router-dom";
import '../RouterNav.css'
import {useState} from "react";

export default function RouterParam() {
    const [count, setCount] = useState(0)

    return (
        <>
            <p>アクセス数: {count}</p>
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
            <Outlet context={[count, setCount]} />
        </>
    )
}
