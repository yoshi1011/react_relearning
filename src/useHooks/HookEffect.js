import {useEffect, useState} from "react";

const sleep = delay => {
    const start = Date.now()

    while(true) {
        if (Date.now() - start > 1000) {break}
    }
}

export default function HookEffect({init}) {
    const [count, setCount] = useState(init)

    useEffect(() => {
        sleep(2000)
        setCount(init)
    }, [])

    const handleClick = () => setCount(count + 1)

    return (
        <>
            <button onClick={handleClick}>カウント</button>
            <p>{count}回クリックされました</p>
        </>
    )
}
