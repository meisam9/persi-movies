import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.p`
    display:inline-block;
    .read-or-hide{
        color:${palette.primary};
        margin-left: 4px;
        cursor: pointer;
        &:hover {
            opacity: .8;
        }
      }
`

export default Style;