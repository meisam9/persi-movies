import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.div`
    max-width: 1280px;
    background-color: ${palette.white};
    margin: 0 auto;
    margin-top: 110px;
    
    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 20px;
        position: relative;
        
        li{
            margin: 15px;
            position:relative;
            &:hover{
                .link {    
                    border:5px solid ${palette.secondary};
                }   
                img {
                    filter:brightness(.3);
                } 
                figcaption {
                    opacity:1;
                    h4 {
                        transform:translate(-50%,-50%);
                    }
                    span {
                        transform:translate(10px,-50px);
                    }
                }     
            }
        }
        img {
            max-height: 250px;
            width:100%;
            
            
        }
        a{
            color:${palette.black};
        }
        .link{      
            border:5px solid ${palette.lightGray};
            border-radius:3px;
            width:250px;

        }
        figcaption {
            text-align:center;
            opacity:0;
            color:${palette.white};
            i {
                position:absolute;
                color:${palette.secondary}; 
                font-size:23px;
                left:45%;
                top:18%;
                transition: all .2s ;
            }
            h4{
                position:absolute;
                left:50%;
                top:30%;
                transition: all .2s ;
                
            }
            span {
                position:absolute;
                background:${palette.primary};
                padding:5px 10px;
                border-radius:2px;
                left:25%;
                top:80%;
                transition: all .3s ease;
                &:hover{
                    opacity:.9;
                }
            }
        }
        p {
            color: ${palette.lightenBlack};
            font: 300 italic 14px/1.3em 'Open Sans', sans-serif;
        }
        h5 {
            margin:3px 0;
            &:hover {
                color: ${palette.darkGray};
            }
        }
    }

    .title {
        font: 2.5rem 'Source Code Pro', sans-serif;
        text-align:center;
        color: ${palette.primary};
        padding: 0 15px;
        padding-top: 30px;
        margin: 0 20px 10px 20px;
        text-transform: uppercase;
    }
`;
export default Style;