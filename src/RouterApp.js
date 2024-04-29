import {Link, Outlet} from "react-router-dom";

export default function RouterApp() {
    return (
        <>
            <ul>
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/form">公開記事</Link></li>
                <li><Link to="/todo">このサイトについて</Link></li>
            </ul>

            <hr/>

            <Outlet/>
        </>
    )
}
