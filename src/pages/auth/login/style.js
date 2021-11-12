import styled from "styled-components";
import media from '../../../theme/responsive';
import { palette } from "../../../theme";

const Style = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    max-width: 550px;
    background: ${palette.white};
    margin:0 auto;
    margin-top:90px;
    margin-bottom: 200px;
    border-radius:6px;
    text-align:center;
    padding:10px 30px; 
    h2 {
        width: 100%;
        display: block;
        font-size: 39px;
        color: ${palette.lightenBlack};
        line-height: 1.2;
        text-align: center;
        padding-bottom:40px;
    }
    .login-with{
        div {
            display: inline-block;
            font-size: 18px;
            line-height: 1.2;
            padding: 15px;
            padding-top: 20px;
            height: 70px;
            border-radius: 10px;
            transition: all .4s;
            position: relative;
            z-index: 1;
            text-transform: uppercase;
            ${media.tablet`
                    display:block;
                `}
            &:not(:last-child){
                margin-right: 20px;
                ${media.tablet`
                    margin-right:0;
                    margin-bottom: 20px;
                `}
            }
            &:before {
                content: "";
                display: block;
                position: absolute;
                z-index: -1;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                top: 0;
                left: 0;
                background: ${palette.primary};
                background: linear-gradient(
                    45deg,${palette.secondary},${palette.primary});
                opacity: 0;
                transition: all .4s;
            }
            &:hover {
                color:${palette.white};
                cursor:pointer;
                &:before {
                    opacity: 1;
                }
            }
            i{
                font-size: 30px;
                margin-right: 17px;
                padding-bottom: 3px;
                vertical-align: middle;
            }
            &.facebook {
                color: ${palette.white};
                background-color: ${palette.facebookBtn};
            }
            &.google {
                color: ${palette.lightenBlack};
                background-color: ${palette.white};
                box-shadow: 1px 1px 4px ${palette.lightenBlack};
            }
        }
    }
    h3 {
        margin: 15px 0;
    }
    .email__holder {
        margin-bottom:10px;
    }
    label {
        font-size: 16px;
        color: ${palette.lightenBlack};
        line-height: 1.5;
        margin-bottom: 5px;
        text-align: left;
        display:block;
        text-transform:capitalize;
    }
    .input__holder{
        position: relative;
        background-color: ${palette.lightGray};
        border: 1px solid ${palette.darkGray};
        border-radius: 10px;
        width:100%;
        input {
            line-height: 1.2;
            font-size: 18px;
            display: block;
            width: 100%;
            background: 0 0;
            height: 60px;
            padding: 0 20px;
            color:${palette.lightenBlack};
            overflow: visible;
            border: transparent;
            outline: none;
            &:focus {
                border-color: transparent ;
            }
        }
        span {
            position: absolute;
            display: block;
            width: calc(100% + 2px);
            height: calc(100% + 2px);
            top: -1px;
            left: -1px;
            pointer-events: none;
            border: 1px solid ${palette.primary};
            border-radius: 10px;
            visibility: hidden;
            opacity: 0;
            transition: all .4s;
            transform: scaleX(1.1) scaleY(1.3);
        }
    }
    input:focus+span {
        visibility: visible   ;
        opacity: 1;
        transform: scale(1)   ;
    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 60px;
        background-color: ${palette.primary};
        border-radius: 10px;
        font-size: 16px;
        color: ${palette.white};
        line-height: 1.2;
        transition: all 0.4s;
        position: relative;
        z-index: 1;
        outline: none;
        border: none;
        margin-top: 20px;
        &:active {
            transform:scale(.9)
        }
        &:before {
            content: "";
            display: block;
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            top: 0;
            left: 0;
            background: ${palette.primary};
            background: linear-gradient(
                45deg,  ${palette.secondary}, ${palette.secondary});
            opacity: 0;
            transition: all 0.4s;
            
        }
        &:hover {
            cursor: pointer;
            outline:none;
            border: none;

            &:before {
                opacity:1;
            }
            &:focus {
                outline:none;
            }
        }
    }
    .not__member {
        margin:15px 0;
        span {
            font-size: 14px;
            color: ${palette.darkGray};
            line-height: 1.5;
            &:last-child {
                border-bottom: 1px solid ${palette.darkGray};
                transition: all .4s;
                &:hover {
                    cursor: pointer;
                    color: ${palette.primary};
                }
            }
}
        }
    }

    p {
        color: ${palette.red};
        text-align: left;
        margin: 5px;
        font-size:14px;
    }
`

export default Style;