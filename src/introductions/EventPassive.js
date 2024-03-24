import {useRef, useEffect} from "react";

const EventPassive = () => {
  const handleWheel = e => {
    e.preventDefault()
  }

  const divRef = useRef(null)

  useEffect(() => {
    const div = divRef.current
    div.addEventListener('wheel', handleWheel, {passive: false})
    return () => {
      div.removeEventListener('wheel', handleWheel)
    };
  },);

  return (
      <div ref={divRef} onWheel={handleWheel}>例えばWheelイベントをハンドラで</div>
  )

}

export default EventPassive
