import styled from "styled-components";
import media from "../../theme/responsive";
import { palette } from "../../theme";

const Style = styled.header`
    background-color:${palette.black};
    background:url('/imgs/bg-header.jpg') repeat-x bottom center;
    display:flex;
    justify-content: space-between;
    padding:0 3.5rem;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 88;
    width: 100%;
    height:80px;
    box-shadow: 0px 0px 1px ${palette.white};
    a {
        color:${palette.white};
        &.active {
            opacity:.5;
        }
        &:hover{
            opacity:.8;
        }
    }
    
    .left__header {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        
        .logo{
            padding:.1rem .4rem;
            border-right:1px solid ${palette.darkGray};
            ${media.tablet`
                display:none;
            `}
            h1{
                text-transform: uppercase;
            }
        }
        .user {

            &__login {
                font-size:1.6rem;
                text-transform: uppercase;
                a {
                    padding:3.2rem 0;
                }
            }

            &__logged {
                cursor:pointer;
                &:hover{      
                    p {
                        transform:translateX(0);
                        font-size:1.6rem;
                        opacity:1;
                        visibility:visible;
                        color:${palette.white};
                        ${media.tablet`
                            display:none;
                        `}
                    }
                    img {
                        filter: brightness(0.8);
                    }
                }
                &-img {
                    display:flex;
                    align-items:center;
                    gap: 1.6rem;
                    img {
                        border-radius: 50%;
                        height: 50px;
                        
                    }
                    p {
                        visibility:hidden;
                        transform:translateX(-30px);
                        opacity:0;
                        transition:all .3s;
                    }
                }
                &-details {
                    font-size:1.5rem;
                    position: absolute;
                    background: ${palette.lightenBlack};
                    top: 80px;
                    left: 255px;
                    ${media.tablet`
                        left:20px;
                    `}
                    
                    height:0;
                    transition:height .5s ease;
                    &.show {
                        height:82px;
                        a{
                            display:block;
                        }
                        div {
                            display:block;
                        }
                    }
                    a {
                        width:100%;
                        padding:8px 8px;
                        margin-bottom:8px;
                        display:none;
                        &:hover {
                            background:${palette.darkGray};
                        }
                    }
                    div {
                        color: ${palette.white};
                        padding:8px 8px;
                        cursor: pointer;
                        display:none;
                        z-index: 10;
                        &:hover {
                            background:${palette.darkGray};
                        }
                        
                    }
                    
                }
                    
            }
        }
        
    }

    .navbar{
        ${media.tablet`
            display:none;
        `}
            display:flex;
            align-items: center;
        ul{
            display:flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
    
    .mobile__header {
        display:none;
        ${media.tablet`
            display:block;
        `}
        .logo {
            color: ${palette.white};
            position: absolute;
            right: 40%;
            top: 10px;

            span {
                font-size:4.5rem;
                color:${palette.primary};
            }

        }
        &__background {
            height: 3rem;
            width: 2rem;
            border-radius: 50%;
            position: fixed;
            top:20px;
            right: 3rem;
            background-image: radial-gradient(${palette.secondary},${palette.primary});
            z-index: 1000;
            transition: transform .8s cubic-bezier(0.83, 0, 0.17, 1);
        }
        &__icon{
            position: relative;
            margin-top: 2rem;
            &,
            &::before,
            &::after{
                width: 3rem;
                height: 2px;
                background-color: ${palette.lightenBlack};
                display: inline-block;
            }
    
            &::after,
            &::before{
                content: "";
                position: absolute;
                left: 0;
                transition: all .2s;
            }
    
            &::before{
                top: -.8rem;
            }
    
            &::after{top: .8rem;}
        }
        &__button {
            background-color: ${palette.white};
            height: 4rem;
            width: 4rem;
            position: fixed;
            top: 20px;
            right: 2rem;
            border-radius: 50%;
            z-index: 2000;
            box-shadow: 0 1rem 3rem rgba(${palette.lightGray}, .1);
            text-align: center;
            cursor: pointer;

            &:hover {
                span {
                    &:after {
                        top:1rem
                    }
                    &:before {
                        top: -1rem
                    }
                }
            }
        } 
            
    
        &__button:hover &__icon::before{
            top: -1rem;
        }

        .mobile__navbar {
            
            height: 100vh;
            position: fixed;
            top: 30%;
            left: 0;
            z-index: 1500;
            visibility:hidden;
            width: 0;
            opacity: 0;
            text-align:center;
            transition: all .8s cubic-bezier(0.34, 1.56, 0.64, 1);
            
            ul {
                li {
                    margin-bottom:1rem;
                    a{  
                        display:inline-block;
                        font-size: 3rem;
                        font-weight: 300;
                        color: ${palette.white};
                        padding: 1rem 2 rem;
                        text-transform: uppercase;
                        background-image: linear-gradient(
                        120deg, transparent 0%, transparent 50%, ${palette.white} 50%);
                        background-size: 230%;
                        transition: all .4s;
                        &:hover {
                            background-position: 100%;
                            color: ${palette.primary};
                            transform: translateX(1rem);
                        }
                    }
                }
            }
            
        }
        // functionality
        .show-nav {
            width:100%;
            opacity:1;
            visibility:visible;
        }
        .full {
            transform:scale(95);
        }
        .cross {
            span {
                background-color: transparent;
                &:before {
                    transform: rotate(135deg);
                    top:0;
                }
                &:after {
                    transform: rotate(-135deg);
                    top:0;
                }
            }
        }
    }
    
`
export default Style;