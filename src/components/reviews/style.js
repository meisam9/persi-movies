import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.div`
    padding: 15px;
    color:${palette.white};
    h3 {
        text-transform:capitalize;
        i {
            color:${palette.primary};
            
        }
    }
    li {
        width:95%;
        padding:5px;
        margin:0 auto;
        div {
            background:${palette.lightenBlack};
            padding:5px;
            h4 {
                margin: 10px 0;
                color:${palette.darkGray};
                span {
                    color: ${palette.lightGray};
                }
            }
            p {
                padding: 0 5px;
                color:${palette.darkGray};
            }
            i {
                margin:0 10px;
                margin-right: 2px;
                color:${palette.primary};
            }
        }
    }
`

export default Style;