import {useState} from "react";

const FormCheckMulti = () => {
  const [form, setForm] = useState({
    animal: ['dog', 'hamster']
  });

  const handleFormMulti = e => {
    const fa = form.animal;

    if (e.target.checked) {
      fa.push(e.target.value)
    } else {
      fa.splice(fa.indexOf(e.target.value), 1)
    }

    setForm({
      ...form,
      [e.target.value]: fa
    })
  }

  const show = () => {
    console.log(`好きな動物: ${form.animal}`)
  }

  return (
      <form>
        <fieldset>
          <legend>好きな動物：</legend>
          <label htmlFor="animal_dog">イヌ</label>
          <input type="checkbox" id="animal_dog" name="animal_dog" value="dog" checked={form.animal.includes('dog')} onChange={handleFormMulti}/>
          <label htmlFor="animal_cat">猫</label>
          <input type="checkbox" id="animal_cat" name="animal_cat" value="cat" checked={form.animal.includes('cat')} onChange={handleFormMulti}/>
          <label htmlFor="animal_hamster">ハムスター</label>
          <input type="checkbox" id="animal_hamster" name="animal_hamster" value="hamster" checked={form.animal.includes('hamster')} onChange={handleFormMulti}/>
        </fieldset>
        <button type="button" onClick={show}>送信</button>
      </form>
  )
}

export default FormCheckMulti
