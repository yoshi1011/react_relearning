import {useLocation} from "react-router-dom";

export default function BookStatePage () {
    const {state: isbn = '978-3-2434'} = useLocation()

    return <p>ISBNコード「{isbn}」のページです</p>
}
