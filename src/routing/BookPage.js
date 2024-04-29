import {useParams} from "react-router-dom";
import MyHeader from "./MyHeader";
import books from "../useHooks/books";

export default function BookPage() {
    const {isbn = '123-344'} = useParams()

    const {title, summary} = books.find(b => isbn === b.isbn)

    return (
        <>
            <MyHeader title={title} keywords={title} description={summary}/>
            <p>ISBNコード「{isbn}」のページです</p>
        </>
    )
}
