import styled from "styled-components";
import { palette } from "../../theme";

const Style = styled.div`
margin-top:65px;
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
.pagination-btns{
    display: flex;
    flex-wrap:wrap;
    color:${palette.white};
    justify-content:center;
    margin:22px 0;
    li {
        a {
            padding:8px 14px;
            margin: 4px;
            border:1px solid ${palette.darkGray};
            &:hover {
                cursor: pointer;
                color:${palette.primary};
                border:1px solid ${palette.primary};
            }
        }
        &.pagination-disabled {
            display:none;
        }
        &.pagination-active {
            a{

                background: ${palette.primary};
                color:${palette.black};
                &:hover {
                    border:1px solid ${palette.darkGray};
                    cursor:unset;
                }
            }
        }
    }
}

form {
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    color:${palette.lightGray};
    background:${palette.lightenBlack};
    padding-bottom: 18px;
    padding-top:25px;
    div {
        p{
            letter-spacing: .8px;
            margin-bottom:10px;
            font-size:1.3rem;   
        }
        margin-right:20px;
        &:last-child {
            margin-right:0px;
        }
        select,input {
            background:transparent;
            color:${palette.lightGray};
            padding: 5px 9px;
            border:1px solid ${palette.darkGray};
            border-radius:3px;
            font-size:1.2rem;
            &:active,&:focus {
                border:1px solid ${palette.lightGray};
                outline:none;
            }
            option {
                background:${palette.lightenBlack};
            }
        }
    }
}
`;

export default Style;