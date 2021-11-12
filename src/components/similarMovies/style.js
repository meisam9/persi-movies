import styled from "styled-components";
import media from "../../theme/responsive";
import { palette } from "../../theme";

const Style = styled.div`
    padding-top:120px;
    color: ${palette.white};
    @media(min-width:100em){
        flex:1 1 5em;
    }
    flex:1 1 14em;
    z-index:2;
    ${media.tablet`
        padding-top:10px;
        margin-left:15px;
    `}
    h3 {
        text-transform:capitalize;
        margin-bottom:15px;
    }
    ul {
        display:flex;
        flex-wrap:wrap;
        gap: 15px;
        margin-bottom:15px;
        li {
            img {
                min-width:100px;
                max-height:140px;
                border:4px solid ${palette.white};
                &:hover {
                    border:4px solid ${palette.secondary};
                }
            }
        }
    }
`;

export default Style;