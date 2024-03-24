const EventObj = () => {
  const handleClick = e => {
    console.log(e.target)
    console.log(e.timeStamp)
    console.log(e.isTrusted)
    console.log(e.cancelable)
    console.log(e.button)
  }

  return (
      <button onClick={handleClick}>クリック</button>
  )
}

export default EventObj
