import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.div`
    max-width:1200px;
    background-color:${palette.lightenBlack};
    margin:0 auto;
    .loader-background {
        position: fixed;
        top:0;
        left:0;
        opacity:.7;
        width:100vw;
        height: 100vh;
        background:${palette.black};
        z-index: 5;
    }
    .movie__top {
        display:flex;
        flex-wrap:wrap;
        position:relative;
        .movie__back {
            position:absolute;
            background: ${palette.lightenBlack};
            background: radial-gradient(circle, ${palette.lightenBlack} 0%, ${palette.darkGray2} 100%);
            width:100%;
            height:100%;
            opacity:.92;
            z-index:1;
        }
        .movie__container {
            z-index:2;
            padding-top:150px;
            padding-left: 15px;
            margin-bottom:15px;
            display:flex;
            flex-wrap:wrap;
            gap: 15px;
            flex:1 1 45em;
            color:${palette.white};
            .poster {
                img {
                    max-height:390px;
                    border: 5px solid ${palette.white};
                }
            }
            .movie__details {
                &>* {
                    margin-bottom:8px;

                }
                span {
                    color :  ${palette.primary};
                    font-weight: bold;
                }
                p {
                    text-transform: capitalize;
                    
                }
                .rate {
                    i {
                        color: ${palette.yellow};
                    }
                }
                .budget {
                    i {
                        color:${palette.profileStatus};
                    }
                }
                .genres {
                    span {
                        &:last-child {
                            .comma {
                                display: none;
                            }
                        }
                    }
                }
                .language {
                    span {
                        text-transform: uppercase;
                    }
                }

            }
        }
    }
    .movie__bottom {
        max-width:1200px;
        display:flex;
        justify-content:space-around;
        align-items: center;
        flex-wrap:wrap;
        
    }
    .movie__overview {
        padding:15px;
        margin:10px 0;
        color:${palette.darkGray};
        background:${palette.lightenBlack};
        h3 {
            color:${palette.white};
        }
        p {
            margin-top:8px;
            line-height:1.45;
        }
    }
`

export default Style;