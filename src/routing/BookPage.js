import {useParams} from "react-router-dom";

export default function BookPage () {
    const {isbn = '123-344'} = useParams()

    return <p>ISBNコード「{isbn}」のページです</p>
}
