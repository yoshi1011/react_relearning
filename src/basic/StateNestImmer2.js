import {useImmer} from "use-immer";

export default function StateNestImmer2() {
  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '広島市'
    }
  });

  const handleNest = e => {
    const ns = e.target.name.split('.');
    setForm(form => {
      if (ns.length === 1) {
        form[ns[0]] = e.target.value;
      } else {
        form[ns[0]][ns[1]] = e.target.value;
      }
    })
  }

  const show = () => {
    console.log(`${form.name} ${form.address.prefecture} ${form.address.city} `)
  }

  return (
      <form>
        <div>
          <label htmlFor="name">名前: </label>
          <input type="text" id="name" name="name" onChange={handleNest} value={form.name}/>
        </div>
        <div>
          <label htmlFor="prefecture">住所（都道府県）: </label>
          <input type="text" id="prefecture" name="address.prefecture" onChange={handleNest}
                 value={form.address.prefecture}/>
        </div>
        <div>
          <label htmlFor="city">住所（市区町村）: </label>
          <input type="text" id="city" name="address.city" onChange={handleNest} value={form.address.city}/>
        </div>
        <div>
          <button type="button" onClick={show}>送信</button>
        </div>
      </form>
  )
}
