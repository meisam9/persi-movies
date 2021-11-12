import styled from "styled-components";
import { palette } from "../../theme";

const Style =styled.div`
    max-width:1200px;
    background:${palette.white};
    margin:120px; auto;
    display:grid;
    place-content:center;
    text-align:center;
    h1 {
        margin:20px 0;
        font-size:120px;
        color:${palette.lightenBlack};
        
    }
    h3 {
        text-transform:capitalize;
        margin-bottom:45px;
    }
    p {
        text-transform:capitalize;
        margin-bottom:8px;
    }
    a {
        color:${palette.notFoundLinks};
        text-transform:uppercase;
        margin-bottom:21px;
        &:hover {
            opacity:.8;
            transform:scale(1.1);
        }
    }
`;

export default Style;