import get from 'lodash/get'
import { Link } from 'react-router-dom'
import { imgUrl } from '../../helpers'
import Style from './style'
const SimilarMovies = ({similars}) => {
    const similar = get(similars,'results',[])
    const renderFarm = () => {
        const four = similar.slice(0,4)
        return four.map((item,index)=>{
            const {poster_path,title,id} = item
            const defaulImage = "/imgs/no-image.jpg";
            const imageUrl = `${imgUrl}${poster_path}`
            const checkImage = (item.hasOwnProperty("poster_path") && poster_path !==null) ? imageUrl : defaulImage;
            return (
                <li key={id}>
                    <Link to={`/movie/${id}`}>
                        <img src={checkImage} alt={title}/>
                    </Link>
                </li>
            )
        })
    }
    return(

        <Style>
            <h3 style={similar.length >= 1 ? {display:'block'}: {display:'none'}}>similar movies :</h3>
            <ul>
                {renderFarm()}
            </ul>
        </Style>
    )
}

export default SimilarMovies;