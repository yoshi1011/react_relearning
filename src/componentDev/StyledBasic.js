import css, {globalCss, resolveCss} from './StyledCss.css'

export default function StyledBasic () {
    return (
        <>
            <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>は、JSX式にスタイル定義を埋め込む形式のライブラリです。</div>
        </>
    )
}
