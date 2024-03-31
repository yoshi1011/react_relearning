function sleep(delay) {
    let start = Date.now()
    while (Date.now() - start < delay);
}

// eslint-disable-next-line react/prop-types
export default function HeavyUI({delay}) {
    sleep(delay)
    return <p>遅延時間は{delay}ミリ秒</p>
}
