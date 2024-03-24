const EventPropagation = () => {
  const handleParent = () => alert('#parent')
  const handleMy = () => alert('#my')
  const handleChild = e => {
    e.preventDefault()
    alert('#child')
  }

  return (
      <div id="parent" onClick={handleParent}>
        親要素
        <div id="my" onClick={handleMy}>
          現在要素
          <a href="https://wings.msn.to" id="child" onClick={handleChild}>
            子要素
          </a>
        </div>
      </div>
  )
}
export default EventPropagation
