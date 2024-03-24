import {useState} from "react";

const StateForm = () => {
  const [form, setForm] = useState({
    name: '山田',
    age: 18
  })

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log(`こんにちは、${form.name} (${form.age}さん！`)
  }

  return (
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input type="text" name="name" id="name"
                 onChange={handleForm} value={form.name}/>
        </div>
        <div>
          <label htmlFor="age">年齢：</label>
          <input type="number" name="age" id="age"
                 onChange={handleForm} value={form.age}/>
        </div>
        <div>
          <button type="button" onClick={show}>
            送信
          </button>
          <p>こんにちは、{form.name} ({form.age} 歳) さん！</p>
        </div>
      </form>
  )
}

export default StateForm
