import { Link } from 'react-router-dom';
import get from 'lodash/get'
import Loader from '../loader';
import { imgUrl } from '../../helpers';
import { textDots } from '../../helpers/textDots';
import Style from './style';

const MovieList2 = (props) => {
    const {data, limit,title, isLoading} = props;
    const defaulImage = "/imgs/no-image.jpg";
    const renderFarm = () => {
        const result = get(data, 'results', []);
        const temp = result.slice(0, limit);
        return temp.map((item, index) => {
            const {vote_average, id, release_date, title, poster_path} = item;
            const year =release_date ? release_date.split('-')[0] : "";
            const imageUrl = `${imgUrl}${poster_path}`
            const checkImage = (item.hasOwnProperty("poster_path") && poster_path !==null) ? imageUrl : defaulImage;
            return(
            <li key={index}>
                <Link to={`movie/${id}`} className="link">
                    <figure>
                        <img src={checkImage} alt={title}/>
                        <figcaption >
                            <i className="fas fa-star"></i>
                            <h4 >{vote_average} / 10</h4>
                            <span >View Details</span>
                        </figcaption>
                    </figure>
                </Link>
                <Link to={`movie/${id}`}>
                    <h5>{textDots(title,25)}</h5>
                </Link>
                { <p>{`${year}`}</p> }
            </li>
            )
        })
    }
    return (
        <Style>
            <h2 className='title'>{title}</h2>
            <ul>
            <Loader isLoading={isLoading}/>
            {renderFarm()}
            </ul>
        </Style>
    )
}

export default MovieList2;