import {memo} from "react";

// eslint-disable-next-line react/display-name
export const MyButton = memo(({id, handleClick, children}) => {
    console.log(`MyButton is called ${id}`)
    return (
        <button onClick={handleClick}>{children}</button>
    )
})

// eslint-disable-next-line react/display-name
export const MyCounter = memo(({id, value}) => {
    console.log(`MyCounter is called ${id}`)
    return (
        <p>現在地: {value}</p>
    )
})
