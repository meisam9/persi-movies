import { createGlobalStyle } from "styled-components";
import media from "./responsive";

export const themeVar = {
	mainFont: 'Open Sans',
};

export const palette = {
	white: "#ffffff",
	black: "#000000",
    lightenBlack:'#181818',
	primary: "#007d99",
    secondary:"#00dbde",
	lightGray: '#EDEDED',
	darkGray: '#B7B7B7',
    darkGray2:"#3e3e3e",
    footerLinks: '#d5d5d5',
    notFoundLinks:"#2288ff",
    facebookBtn:"#3b5998",
    red:"#ff0000",
    profileStatus:"#027602",
    yellow:"#ffff00",
};

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

    ${media.xxDesktop`
        font-size:75%;
    `}
    ${media.tablet`
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    `}  
    

    ${media.phone`
        font-size:50%; 
    `}
    
}

body {
    background-image:url('/imgs/bg-body.jpg');
    background-color:black;
    background-repeat: repeat-x;
    background-position: center center;
    background-attachment: scroll;
    font-size:1.5rem;
    
}

::selection{
    background-color: $color-primary;
    color: $color-white
}
    a{
        text-decoration:none;
        display:block;
        &:visited {
            opacity:.2;
        }
    }
    ul,li {
            list-style:none;
        }
    img {
        display: block;
    }
    h1{
        font-size:2.5rem;
    }

`
export default GlobalStyle;