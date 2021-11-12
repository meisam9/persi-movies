import './style.css'

function Loader(props) {
    const {isLoading} = props;
    return(
        <img src="/imgs/loading.gif" alt="loader" className="loader" style={{display: isLoading === true ? 'block' : 'none'}} />
    )
}
export default Loader;