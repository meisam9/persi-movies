import styled from "styled-components";
import media from "../../theme/responsive";
import { palette } from "../../theme";

const Style = styled.div`
.carousel__title{
    position:absolute;
    top:390px;
    left:100px;
    opacity:.8;
    text-align:left;
    ${media.tablet`
        
        left:50px;
        top:250px;
    `}
    ${media.phone`
        
        top:150px;
    `}
    h2 {
        text-transform: uppercase;
        display: inline-block;
        margin: 0;
        color: ${palette.white};
        font-weight: 900;
        line-height: 1.3em;
        font-family: 'Open Sans', sans-serif;
        padding: 10px 20px 10px 10px;
        background: ${palette.black};
        font-size:36px;
        ${media.tablet`
            font-size:20px;
        `}
    }
    p {
        font: 300 italic 14px/1.3em 'Open Sans', sans-serif;
        color: ${palette.white};
        background: ${palette.black};
        padding: 10px 20px 10px 5px;
        margin-right:55px;
        margin-top:-5px;

    }
    
}

.slick-slider {
    overflow:hidden;
    position:relative;
    max-height:98vh;
     img {
         width:100%
     }
    
}
.slick-prev {
    &:before {  
        position:absolute;
        left : 60px;
        top:50%;
        z-index:99;
    }
}
.slick-next {
    &:before {  
        position:absolute;
        right : 60px;
        top:50%;
        z-index:99;
    }
}
`

export default Style