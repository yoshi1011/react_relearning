import {useEffect, useState} from "react";
import './HookTimer.css'

export default function HookTimer ({init}) {
    const [count, setCount] = useState(init)

    useEffect(() => {
        const t = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(t)
        }
        // []なので-1されて以降は動かない
    }, [])

    return (
        <div className={count < 0 ? 'warn' : ''}>
            現在のカウント: {count}
        </div>
    )
}
