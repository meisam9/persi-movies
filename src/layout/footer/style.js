import styled from "styled-components";
import media from '../../theme/responsive';
import { palette } from "../../theme";

const Style = styled.footer`
    color:${palette.footerLinks};
    z-index:88;
    padding-top:25px;
    .footer{
        display: flex;
        flex-wrap: wrap-reverse;
        gap: 22px;
        justify-content: space-around;
        margin-top: 30px;
        ${media.phone`
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
        `}
        a {
            color:${palette.white};
            &:hover {
                color: ${palette.darkGray2};
            }
        }
        &__logo {
            h3 {
                text-transform: uppercase;
                margin-bottom: 10px;
                letter-spacing: 5px;
            }
            &-socials {
                a{
                    display:inline-block; 
                    &:not(:first-child) {
                        margin-left: 10px;
                    }
                    &:hover {
                        cursor: pointer;
                        color:${palette.darkGray};
                    }
                }
            }    
    }

    nav {
        text-transform: capitalize;
        h4 {
            margin-bottom : 15px;
        }
        li {
            margin-bottom : 8px;
            &:hover {
                color:${palette.darkGray};
                cursor: pointer;
            }
            
        }
    }
    &__form {
        i{
            margin-right: 10px;
        }
        span {
            font-size : 15px;
            text-transform: capitalize;
        }
        input {
            margin-top: 25px;
            background: transparent;
            outline: transparent;
            border: transparent;
            border-bottom: ${palette.lightGray} 1px solid;
            display: block;
            padding: 10px 3px;
            text-indent: 5px;
            margin-bottom: 30px;
            color: white;
            width: 300px;
        }
        div {
            background: ${palette.primary};
            padding: 15px;
            width: 100px;
            display:inline-block;
            text-align: center;
            border-radius: 5px;
            cursor:pointer;
            text-transform: uppercase;
            &:hover {
                opacity:.8;
            }
        }
    }
    }
    hr {
        width: 98%;
        margin:0 auto;
        border: .5px solid ${palette.lightGray};
        margin-top: 75px;
        margin-bottom: 8px;
        
    }
    .copy {
        margin-left: 15px;
        padding-bottom: 25px;
    }
`

export default Style