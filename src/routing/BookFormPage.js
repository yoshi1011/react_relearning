import {Form, useActionData} from "react-router-dom"

export default function BookFormPage() {
    const errors = useActionData()

    return (
        <Form method="POST" noValidate>
            <ul>
                {errors?.map(msg => <li key={msg}>{msg}</li>)}
            </ul>
            <div>
                <label htmlFor="title">書名：</label>
                <input type="text" id="title" name="title" size="20"/>
            </div>
            <div>
                <label htmlFor="price">価格：</label>
                <input type="number" id="price" name="price"/>円
            </div>
            <div>
                <label htmlFor="published">刊行日：</label>
                <input type="date" id="published" name="published"/>
            </div>
            <div>
                <button type="submit">登録</button>
            </div>
        </Form>
    )
}
