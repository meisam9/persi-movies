import Slider from "react-slick";
import Style from './style';

const mainSlider = () => {
    
        const movies = [
            {
                title:'cry macho',
                img:'./imgs/movies/slider-1.jpg',
                year:2021,
                genre:'action',
                country:'USA'
            },
            {
                title:'life of pi',
                img:'./imgs/movies/slider-3.jpg',
                year:2021,
                genre:'animation',
                country:'USA'
            },
            {
                title:'life of pi',
                img:'./imgs/movies/slider-3.jpg',
                year:2021,
                genre:'drama',
                country:'USA'
            },
        ];
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const renderFarm = () => {
            return movies.map((item,index)=>{
                return (
                    <div key={index}  >
                        {/* <Link to={`/product/${id}`}> */}
                        <img src={item.img} alt={item.title} />

                        <div className="carousel__title">
                            <h2>{item.title}</h2>
                            <p>{`${item.year}, ${item.country}, ${item.genre}`}</p>
                        </div>
                  {/* </Link> */}
                
                    </div>
                )
            });
        }
        
        return (
            <Style>
                <Slider {...settings}>
                    {renderFarm()}
                </Slider>
            </Style>
        );
    
};

export default mainSlider;