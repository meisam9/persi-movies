import styled from "styled-components";
import { palette } from "../../theme";
import media from '../../theme/responsive'

const Style = styled.div`
    max-width: 1280px;
    background-color: ${palette.white};
    margin: 0 auto;
    margin-top: 10px;
    .slick-dots{   
        margin:25px 0;
    }

    .movie-item {
        margin-left:10px;  
        margin-bottom:25px; 
        position: relative;
        ${media.tablet`
        margin-left:auto;  
        `}
        &:hover{
            div {
                &::before {
                    transform: scale(2.5);
                    opacity: 0;
                }
            }
        }
        p {
            color: ${palette.darkGray};
            font: 300 italic 14px/1.3em 'Open Sans', sans-serif;
            margin-bottom:10px;
        }
        h5 {
            margin:7px 0;
            &:hover {
                color: ${palette.darkGray};
            }
        }
        .img_holder {
            max-width:250px;
            img {
                width:100%;
                max-height:320px;
            }
            &::before {
                content: "";
                color: ${palette.lightGray};
                width: 60px;
                height: 60px;
                text-align: center;
                position: absolute;
                top: 40%;
                left: 40%;
                transform: translate(-50%, -50%);
                z-index: 10;
                font: 60px / 1em FontAwesome;
                font-family: "Font Awesome 6 Free";

                transition: all 0.3s ease 0s;
            }

        }
        a{
            color: ${palette.black};
            max-width:250px;
            
        }
    }
    

    .title {
        font: 17px 'Source Code Pro', sans-serif;
        color: ${palette.black};
        padding: 0 15px;
        padding-top: 30px;
        margin: 0 20px 10px 20px;
        text-transform: uppercase;
    }
` ;
export default Style;