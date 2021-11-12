const YoutubeVideo = ({video}) => {
    return (
        <div style={{marginTop:"15px"}} key={`${video}_12`}>
            <h4 style={{color:"#fff", marginBottom:"10px"}}>Trailer :</h4>
            <iframe width="420" height="315" title="youtobe video"
                src={`https://www.youtube-nocookie.com/embed/${video}`}>
                    
            </iframe>
        </div>
    )

}
export default YoutubeVideo;