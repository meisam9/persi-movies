import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { api } from "../../api";
import { apiKey } from "../../helpers";
import YoutubeVideo from "../../components/youtobeVideo";
import Reviews from "../../components/reviews";
import SimilarMovies from "../../components/similarMovies";
import Credits from "../../components/credits";
import Loader from '../../components/loader';
import { imgUrl,convertToHour, numberWithCommas } from "../../helpers";
import ReadMore from "../../components/readMore";
import Style from "./style";


const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({
        backdrop_path: "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
        poster_path: '',
        genres: [
            {
                name:' '
            }
        ],
        title: " ",
        vote_average: 8,
        release_date: "0000-09-23",
        runtime: 90,
        budget: 5000000,
        overview: "test",
    }) //setting movie details
    const [loading,setLoading] = useState(true)
    const [video, setVideo] = useState('')
    const [reviews, setReviews] = useState([])
    const [similars, setSimilars] = useState([])
    const [credits, setCredits] = useState([])
    const history = useHistory()
    const parames = {
        api_key:apiKey,
        language:'en-US',

    }

    useEffect(() => {
        window.scrollTo(0,0);
        setLoading(true)
        api.get(`/movie/${id}`,parames)
        .then((respone)=> respone)
        .then(data => {
            setLoading(false)
            setMovie(data.data);
            
        })
        .catch( error => { 
            history.push('/notFound')
            console.log(error)
            setLoading(false)

        })
    },[id]) // this hook gets movie details and rerender by ID

    useEffect(() => {
        api.get(`/movie/${id}/videos`,parames) 
        .then((respone)=> respone)
        .then((data) => {
            setLoading(false)
            setVideo(data.data.results[0].key)
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
           })
    },[id]) // this hook gets movie youtube video and rerender by ID
    useEffect(() => {
        api.get(`/movie/${id}/reviews`,parames)
        .then((respone)=> respone)
        .then((data) => {
            setLoading(false)
            setReviews(data.data)
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
            history.push('/notFound')
           })
    },[id]) // this hook gets movie reviews and rerender by ID
    useEffect(() => {
        api.get(`/movie/${id}/similar`,parames)
        .then((respone)=> respone)
        .then((data) => {
            setLoading(false)
            setSimilars(data.data)
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
            history.push('/notFound')
           })
    },[id]) // this hook gets similar movies and rerender by ID
    useEffect(() => {
        api.get(`/movie/${id}/credits`,parames)
        .then((respone)=> respone)
        .then((data) => {
            setLoading(false)
            setCredits(data.data.cast)
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
            history.push('/notFound')
           })
    },[id]) // this hook gets movie cast and rerender by ID

    const bgUrl = `${imgUrl}${movie.backdrop_path}` // concat const image address with backdrop image address
    const renderFarm = () => { // this function for Item get from server
        document.title=movie.title;
        const {vote_average, runtime, title, original_language, poster_path, release_date,genres,budget} = movie;
        const genresFarm = () => {
           return genres ?  genres.map((item, index)=>{
                return (
                    <span key={`${index}_10`}> {item.name}<span className="comma">,</span> </span>
                ) 
            }) : []
        } // map genres
        const defaulImage = "/imgs/no-image.jpg";
        const imageUrl = `${imgUrl}${poster_path}`
        
        const checkImage = (movie.hasOwnProperty("poster_path") && poster_path !==null) ? imageUrl : defaulImage;
        const year =release_date? release_date.split('-')[0] : ' '
        return (
            <div className="movie__container" key={id}>
                <div className="poster">
                    <img src={checkImage} alt={title}/>
                </div>
                <div  className="movie__details">
                    <p style={release_date ? {display:"block"}: {display:'none'}}><span>{year}</span></p>
                    <h2 >{title}</h2>
                    <p style={release_date ? {display:"block"}: {display:'none'}}>release date: <span>{release_date}</span></p>
                    <p className = "genres" >genres:{genresFarm()}</p>
                    <p className = "language" style={original_language ? {display:"block"}: {display:'none'}}>original language : <span>{original_language}</span></p>
                    <p className = "rate" style={vote_average ? {display:"block"}: {display:'none'}}>rating : <span>{vote_average} <i className="fas fa-star"></i></span></p>
                    <p className = "budget" style={budget ? {display:"block"}: {display:'none'}}>budget : <span>{budget? numberWithCommas(budget) : ''} <i className="fas fa-dollar-sign"></i></span></p>
                    <p className = "time" style={runtime ? {display:"block"}: {display:'none'}}>runtime : {convertToHour(runtime)} <i className="far fa-clock"></i></p>
                </div>
            </div>
        )
    }
    return (
        <Style  >
            <div className="loader-background" style={loading ? {display:'block'} : {display:'none'}}>

                <Loader isLoading={loading}/>
            </div>
            <div className="movie__top" style={{background:`url(${bgUrl}) no-repeat center center/cover`}}>
                <div className="movie__back"></div>
                {renderFarm()}
                <SimilarMovies similars={similars}/>
            </div>
            <div className="movie__bottom">
                <YoutubeVideo video={video}/>
                <Credits data={credits}/>
            </div>
            <div className="movie__overview">
                <h3>Synopsis :</h3>
                <ReadMore> 
                    {movie.overview ?  movie.overview : ""}
                </ReadMore>
            </div>
            <Reviews reviews={reviews}/>
        </Style>
    )
}

export default Movie;