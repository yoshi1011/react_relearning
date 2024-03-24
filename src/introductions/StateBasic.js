import {useState} from "react";

export default function StateBasic({init}){
  const [count, setCount] = useState(init);
  console.log(`count is ${count}`)

  const handleClick = () => {
    // イベントハンドラ終了後に更新されるため+2とはならない
    // setCount(count + 1)
    // setCount(count + 1)
    // 関数型の引数を渡すことで実現。stateは常に最新の値が入る
    setCount(c => c + 1)
    setCount(c => c + 1)
  }
  return (
      <>
        <button onClick={handleClick}>カウント</button>
        <p>{count}回、クリックされました</p>
      </>
  )
}
