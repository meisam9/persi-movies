import { Link } from "react-router-dom";
import Style from "./style";
const NotFound = () => {
    document.title="PersiMovies";
    return (
        <Style>
            <h1>404</h1>
            <h3>category not found</h3>
            <p>please try one the following page:</p>
            <Link to={'/'}>home page</Link>
        </Style>
    )
}

export default NotFound;