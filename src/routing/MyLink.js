import {Link, useMatch, useResolvedPath} from "react-router-dom";
import '../RouterNav.css'

export function MyLink({to, children, ...props}) {
    const resolvePath = useResolvedPath(to)
    const isMatch = !!useMatch({
        path: resolvePath.pathname, end: true
    })
    return isMatch ?
        <span className="active">{children}</span> :
        <Link to={to} {...props}>{children}</Link>
}
