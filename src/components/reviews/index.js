import  get  from "lodash/get";
import ReadMore from "../readMore";
import Style from "./style";
const Reviews = ({reviews}) => {
    const getReviews=get(reviews,'results',[]);
    const renderFarm = () => {
        if(getReviews.length <1) {
            return <p style={{margin:'10px'}}>No Review</p>
        }
        return getReviews.map((review,index)=> {
            const {content, author_details} = review;
            return (
                <li key={`${index}_14`}>
                    <div>
                        <h4>reviewed by <span> {author_details.username}</span>
                         <span className="rating" style={author_details.rating ? {display:'inline-block'} : {display:'none'}}> <i className="fas fa-star"></i> {author_details.rating}/10</span></h4>
                         <ReadMore>
                            {content}
                         </ReadMore>
                    </div>
                </li>
                    )
        })
    }
    return(
        <Style>
            <h3><i className="fas fa-star"></i>  movie reviews : </h3>
            <ul >
                {renderFarm()}
            </ul>
        </Style>
    )
}

export default Reviews;