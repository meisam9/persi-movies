import { useEffect, useState } from "react";
import {api} from '../../api';
import { Link } from "react-router-dom";
import get from 'lodash/get';
import { apiKey,imgUrl } from "../../helpers";
import Loader from "../loader";
import Style from './style';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const params = {
        api_key:apiKey,
        language: 'en-US',
        query: query,
        include_adult: false,
    };

    useEffect(() => {
        if(!query.length) {
            setLoading(false)
        }
        if(query.length === 1) {
            setLoading(true)
        }
        if(query.length < 3) {
             setMovies([])
            return
        }
         api.get('/search/movie',params)
        .then((response) => response )
        .then( data => {
            setLoading(false)
            setMovies(data.data);
          })
        .catch( error => { 
            console.log(error)
            setLoading(false)
           })
        
    },[query])

    const renderFarm = () => {
        const result = get(movies, 'results', []);
        const defaulImage = "./imgs/no-image.jpg";
        return result.map((item,index) => {
            const {poster_path, original_title, id} = item;
            const imageUrl = `${imgUrl}${poster_path}`
            const checkImage = (item.hasOwnProperty("poster_path") && poster_path !==null) ? imageUrl : defaulImage;
            return (
                <li key={index}>
                    <Link to={`/movie/${id}`}>
                        <img src={checkImage} alt={original_title}/>
                        <p>{original_title}</p>
                    </Link> 
                </li>
            )
        })
    }

    const handleChange = (e)=> {
        setQuery(e.target.value)
    }
    return (
        <Style>
            <div className="search__div">
                    <Loader isLoading={loading}/>
                <label htmlFor="search" className="search-label">search</label>
                <input type="search" id="search" onChange={handleChange}/>
            </div>
            <div className="search__result">
                <ul>
                    {renderFarm()}
                </ul>
            </div>
        </Style>
    )
}

export default Search;