import { useEffect, useState } from "react";
import { api } from "../../api";
import { apiKey } from "../../helpers";
import MovieList2 from "../../components/movieList2";
import Style from "./style";

const Trends = () => {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        window.scrollTo(0,0);
        async function fetchData(){
            let respone = await api.get('/trending/movie/day',{api_key:apiKey})
            let data = respone.data
            setMovie(data)
        }
        fetchData()
    },[])
    document.title="PersiMovies / Trends";
    return(
        <Style>
            <MovieList2 data={movie} limit={20} title={"24h Trending Movies"}/>
        </Style>
    )
};

export default Trends;