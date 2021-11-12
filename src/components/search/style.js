import styled from 'styled-components';
import { palette } from '../../theme';

const Style = styled.div`
    max-width: 1280px;
    background: ${palette.white};
    margin: 0 auto;
    margin-top: 10px;

    .search__div {
        position: relative;
        text-align: center;
        img {
            width: 25px;
            height: 20px;
            position: absolute;
            right: -55px;
            top: 23px;
        }
        label {
            text-transform:uppercase;
            font-weight:bold;
        }
        input {
            margin:10px auto;
            margin-left: 5px;
            width: 50%;
            padding: 5px;
            border:1.3px solid black; 
            border-radius: 5px;
        }
    }
    .search__result {
        margin:0 auto;
        max-height:200px;
        width:500px;
        overflow-y:scroll;
        background:${palette.lightGray};
        transition:all 1s;
        ul {

            li {
                a {
                    display:flex;
                    align-items:center;
                    margin-top:5px;
                    padding-left: 10px;
                    cursor: pointer;
                    img {
                        width:50px;
                    }
                }
                &:hover {
                    background: ${palette.darkGray};
                }
                
                p {
                    margin-left: 5px;
                    color: ${palette.black};
                }
            }
        }
    }
`;


export default Style;