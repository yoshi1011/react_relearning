import {useRef} from "react";

const StateFormUC = () => {
  const name = useRef(null)
  const age = useRef(null);

  const show = () => {
    console.log(`こんにちは、${name.current.value} (${age.current.value}さん！`)
  }

  return (
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input type="text" name="name" id="name"
                 ref={name} defaultValue="あああ"/>
        </div>
        <div>
          <label htmlFor="age">年齢：</label>
          <input type="number" name="age" id="age"
                 ref={age} defaultValue="18"/>
        </div>
        <div>
          <button type="button" onClick={show}>
            送信
          </button>
        </div>
      </form>
  )
}

export default StateFormUC
