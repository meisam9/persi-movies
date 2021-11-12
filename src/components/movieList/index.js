import { Link } from 'react-router-dom';
import get from 'lodash/get'
import Loader from '../loader';
import Slider from "react-slick";
import { imgUrl } from '../../helpers';
import { textDots } from '../../helpers/textDots';
import Style from './style';

const MovieList = (props) => {    
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };
  
    const {data, limit,title, isLoading} = props;
    const defaulImage = "/imgs/no-image.jpg";
    const renderFarm = () => {
        const result = get(data, 'results', []);
        const temp = result.slice(0, limit);
        return temp.map((item, index) => {
            const {vote_average, id, release_date, title, original_language, poster_path} = item;
            const year =release_date ? release_date.split('-')[0] : "";
            const imageUrl = `${imgUrl}${poster_path}`
            const checkImage = (item.hasOwnProperty("poster_path") && poster_path !==null) ? imageUrl : defaulImage;
            return(
            <div key={index} className="movie-item">
                <Link to={`movie/${id}`}>
                <div className="img_holder">
                  <img src={checkImage} alt={title}/>
                </div>
                <h5>{textDots(title,25)}</h5>
                { <p>{`${year}, language: ${original_language}, vote average: ${vote_average}`}</p> }
                </Link>
            </div>
            )
        })
    }
    return (
        <Style>
            <h2 className='title'>{title}</h2>

                <Loader isLoading={isLoading}/>
                <Slider {...settings}>
                    {renderFarm()}            
                </Slider>
        </Style>
    )
}

export default MovieList