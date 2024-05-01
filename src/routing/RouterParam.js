import {NavLink, Outlet, useNavigation} from "react-router-dom";
import '../RouterNav.css'
import {useState} from "react";

export default function RouterParam() {
    const [count, setCount] = useState(0)
    const navigation = useNavigation()

    return (
        <>
            <p>アクセス数: {count}</p>
            <ul>
                <li><NavLink to="/">トップ</NavLink></li>
                <li><NavLink to="/book/978-4-7981-7613-0">これからはじめる</NavLink></li>
                <li><NavLink to="/book/978-4-297-13288-0">JavaScript</NavLink></li>
                <li><NavLink to="/book" end>規定の書籍</NavLink></li>
                <li><NavLink to="/search/react/router/remix">検索結果</NavLink></li>
                <li><NavLink to="/bookQuery?isbn=13288">JavaScriptクエリ版</NavLink></li>
                <li><NavLink to="/bookState" state="978-4-253">JavaScriptState版</NavLink></li>
                <li><NavLink to="/weather/Tokyo">東京の天気</NavLink></li>
                <li><NavLink to="/book/form">書籍登録フォーム</NavLink></li>
                <li><NavLink to="/books">書籍一覧</NavLink></li>
            </ul>
            <hr/>
            {
                navigation.state === 'loading' ?
                    <p>Loading...</p> :
                    <Outlet context={[count, setCount]} />
            }
        </>
    )
}
