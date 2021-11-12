import {useEffect, useState} from 'react';
import {apiKey} from '../../helpers';
import ReactPaginate from 'react-paginate';
import Loader from '../../components/loader';
import {api} from '../../api';
import Style from './style';
import MovieList2 from '../../components/movieList2';

const BrowseMovies = () => {
    let sortValue = localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')).sort_by:'popularity.desc' ;
    let yearValue = localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter'))["primary_release_year"] : new Date().getFullYear() ;
    let ratingValue = localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter'))["vote_average.gte"] : "";
    let genreValue = localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')).with_genres : "";
    let languageValue = localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')).with_original_language : "en";
    const [sortBy, setSortBy] = useState(sortValue);
    const [releaseDate, setReleaseDate] = useState(yearValue);
    const [rating, setRating] = useState(ratingValue);
    const [genre, setGenre] = useState(genreValue);
    const [language, setLanguage] = useState(languageValue)
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState ([]);
    const [pageCound, setPageCount] = useState('');
    

    const params = { // setting initial params
        api_key: apiKey,
        language:'en-US',
        sort_by: sortBy,
        include_adult: false,
        include_video: false,
        page: page,
        "primary_release_year": releaseDate,
        "vote_average.gte": rating,
        with_genres: genre,
        with_original_language:language,
    };

    useEffect(() => {
        window.scrollTo(0,0);
        setLoading(true)
        api.get(`/discover/movie`,params)
        .then((respone)=> respone)
        .then(data => {
            setLoading(false)
            setData(data.data)
            setPageCount(data.data.total_pages)
        })
        .catch( error => { 
            console.log(error)
            setLoading(false);
            setPageCount(0);
        })
    },[page,releaseDate,sortBy,rating,genre,language])

    const changePage = ({selected}) => {
        
        setPage(selected + 1);
    }

    const setFilterToStorage = (parameter, data) => {
        let filter = localStorage.getItem('filter') 
        filter = filter ? JSON.parse(filter) : params;
        filter[parameter] = data;
        localStorage.setItem('filter',JSON.stringify(filter))
    }

    const handleSortSelect = e => {
        setSortBy(e.target.value);
        setPage(1);
        setFilterToStorage("sort_by",e.target.value)
    }

    const handleYearChange = e =>{
        setReleaseDate(e.target.value);
        setPage(1);
        setFilterToStorage("primary_release_year", e.target.value);
    } 
        
    const handleRatingChange = e => {
        setRating(e.target.value);
        setPage(1);
        setFilterToStorage("vote_average.gte", e.target.value);
    }
    const handleGenreChange = e => {
        setGenre(e.target.value);
        setPage(1);
        setFilterToStorage('with_genres', e.target.value);
    }
    const handleLanguageChange = e => {
        setLanguage(e.target.value);
        setPage(1);
        setFilterToStorage('with_original_language', e.target.value)
    }

    document.title="PersiMovies / Browse Movies";
    return (
        
        <Style>

            <form onSubmit={(e)=>{
                    e.preventDefault();
                }}>
                <div className="selects-container">
                    <p>Genre:</p>
                    <select name="genre" onChange={handleGenreChange} defaultValue={genre}>
                    <option value="" >All</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="16">Animation</option>
                    <option value="35">Comedy</option>
                    <option value="80">Crime</option>
                    <option value="99">Documentary</option>
                    <option value="18">Drama</option>
                    <option value="10751">Family</option>
                    <option value="14">Fantasy</option>
                    <option value="36">History</option>
                    <option value="27">Horror</option>
                    <option value="10402">Music</option>
                    <option value="9648">Mystery</option>
                    <option value="10749">Romance</option>
                    <option value="878">Sci-Fi</option>
                    <option value="10770">Talk-Show</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                    </select>
                </div>
                <div className="selects-container">
                    <p>Rating:</p>
                    <select name="rating" onChange={handleRatingChange} defaultValue={rating}>
                    <option value="0" >All</option>
                    <option value="9">9+</option>
                    <option value="8">8+</option>
                    <option value="7">7+</option>
                    <option value="6">6+</option>
                    <option value="5">5+</option>
                    <option value="4">4+</option>
                    <option value="3">3+</option>
                    <option value="2">2+</option>
                    <option value="1">1+</option>
                    </select>
                </div>
                <div className="selects-container">
                    <p>Year:</p>
                    <input type="number" min="1900" max="2029" step="1" defaultValue={releaseDate} onChange={handleYearChange} />
                </div>
                <div className="selects-container">
                    <p>Sort By:</p>
                    <select id="sort_by" name="sort_by" defaultValue={sortBy} data-role="dropdownlist" onChange={handleSortSelect}>
                        <option value="popularity.desc">Popularity Descending</option>
                        <option value="popularity.asc">Popularity Ascending</option>
                        <option value="vote_average.desc">Rating Descending</option>
                        <option value="vote_average.asc">Rating Ascending</option>
                        <option value="primary_release_date.desc">Release Date Descending</option>
                        <option value="primary_release_date.asc">Release Date Ascending</option>
                        <option value="title.asc">Title (A-Z)</option>
                        <option value="title.desc">Title (Z-A)</option>
                    </select>
                </div>

                <div className="selects-container">
                    <p>Language:</p>
                    <select id="language" name="language"  data-role="dropdownlist"  onChange={handleLanguageChange} defaultValue={language}>
                        <option value="en" >English</option>
                        <option value="de" >German</option>
                        <option value="fr" >French</option>
                        <option value="es" >Spanish</option>
                        <option value="ja" >Japanese</option>
                        <option value="pt" >Portuguese</option>
                        <option value="it" >Italian</option>
                        <option value="ru" >Russian</option>
                        <option value="zh" >Chinese</option>
                        <option value="ko" >Korean</option>
                        <option value="hi" >Hindi</option>
                        <option value="tr" >Turkish</option>
                        <option value="ar" >Arabic</option>
                        <option value="fa" >Farsi</option>
                    </select>
                </div>
            </form>

            <div className="loader-background" style={loading ? {display:'block'} : {display:'none'}}>
                <Loader isLoading={loading}/>
            </div>
            <ReactPaginate 
                previousLabel={'prev'}
                nextLabel = {'next'}
                pageCount={pageCound}
                onPageChange={changePage}
                containerClassName={"pagination-btns"}
                disabledClassName={"pagination-disabled"}
                activeClassName={"pagination-active"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                forcePage={page-1}
                renderOnZeroPageCount={null}
                
            />
            
            <MovieList2 data={data} limit={20} />
            <ReactPaginate 
                previousLabel={'prev'}
                nextLabel = {'next'}
                pageCount={pageCound}
                onPageChange={changePage}
                containerClassName={"pagination-btns"}
                disabledClassName={"pagination-disabled"}
                activeClassName={"pagination-active"}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                forcePage={page-1}
                renderOnZeroPageCount={null}
            />

        </Style>
    )
};

export default BrowseMovies;