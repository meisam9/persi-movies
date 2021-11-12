import { Fragment, useEffect, useState } from "react";
import { api } from "../../api";
import AutoPlay from "../../components/hero";
import Search from "../../components/search";
import MovieList from "../../components/movieList";
import { apiKey } from "../../helpers";

const Home = () => {
    const [suggest, setsuggest] = useState([]);
    const [download, setDownload] = useState([]);
    const [nowPlaying, setPlaying] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = {
        api_key:apiKey,
        language:'en-US',
    };
    const editorParams = {
        api_key:apiKey,
        language:'en-US',
        certification_country:"US",
        "certification": "R",
    };

    useEffect(() => {
        window.scrollTo(0,0)
        api.get('/movie/top_rated',editorParams)
        .then((respone)=> respone)
        .then(data => {
            setLoading(false)
            setsuggest(data.data);
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
        })
    },[]); // editor choice movies

    useEffect(() => {
        api.get('/movie/now_playing',params)
        .then((respone)=> respone)
        .then(data => {
            setLoading(false)
            setPlaying(data.data);
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
        })
    },[]); // now playing movies

    useEffect(() => {
        api.get('/movie/upcoming',params)
        .then((respone)=> respone)
        .then(data => {
            setLoading(false)
            setUpcoming(data.data);
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
        })
    },[]) // upcomming movies

    useEffect(() => {
        api.get('/movie/popular',params)
        .then((respone)=> respone)
        .then((data) => {
            setLoading(false)
            setDownload(data.data);
        })
        .catch( error => { 
            console.log(error)
            setLoading(false)
           })
    },[]) // popular movies
    document.title="Persi Movies";
    return (
        <Fragment>
            <AutoPlay />
            <Search />
            <MovieList data={download} limit={8} title={"popular"} isLoading={loading}/>
            <MovieList data={suggest} limit={8} title={"EDITOR'S CHOICE"} isLoading={loading}/>
            <MovieList data={nowPlaying} limit={8} title={"now playing"} isLoading={loading}/>
            <MovieList data={upcoming} limit={8} title={"upcoming"} isLoading={loading}/>
            
        </Fragment>
    )
}

export default Home;