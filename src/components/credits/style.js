import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.div`

 h3 {
     color:${palette.white};
     margin-bottom:10px;
 }
 ul {
     display:flex;
     flex-wrap:wrap;
     flex-direction:column;
     gap:10px;
     li {
         display:flex;
         align-items: center;
         gap: 8px;
         p {
             color: ${palette.white};
             span {
                 color: ${palette.lightGray};
                 font-weight: bold;
                 &:hover{
                     color:${palette.darkGray};
                     cursor: pointer;
                 }
             }
         }
         img{
             width:70px;
             height:70px;
             border-radius:50%;
             border: 3px solid ${palette.primary};
         }
     }
 }
`

export default Style;