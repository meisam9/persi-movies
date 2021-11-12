import {useState} from 'react';
import Style from './style';

const ReadMore = ({children}) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const count = 300;
    return (
        <Style>
            {isReadMore ? text.slice(0,count) : text}
            <span onClick={toggleReadMore}   className="read-or-hide" style={text.length >= count ? {display:'inline-block'} : {display:'none'}}> 
                {isReadMore ? "...Read More" : " Show less"}
             </span>
        </Style>
    )
}

export default ReadMore;