import styled from "styled-components";
import media from "../../../theme/responsive";
import { palette } from "../../../theme";

const Style = styled.div`
    max-width: 800px;
    background: white;
    margin:0 auto;
    margin-top:120px;
    padding:35px 45px;
    border-radius: 8px;
    box-shadow:0px 0px 5px ${palette.black};
    margin-bottom:250px;
    z-index:5;
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width:100vw;
        height:100vh;
        background:${palette.darkGray};
        z-index:-1;
        opacity:.1;
    }
    hr{
        margin:20px 0;
        border:1px solid ${palette.lightGray};
    }
    .avatar {
        display: flex;

        &__img {
            img {
                width: 70px;
                height: 70px;
                border-radius: 6px;
                object-fit: cover;
            }
        }
        &__caption {
            margin-left: 20px;
            h5 {
                margin-bottom: 6px;
            }
            span {
                color:${palette.darkGray};
                display: block;
            }
            &-upload {
                padding:5px 8px;
                color: ${palette.primary};
                border: 1px solid ${palette.lightGray};
                border:1px solid ${palette.primary};
                display: inline-block;
                border-radius:4px;
                margin-top:8px;
                &:hover {
                    cursor: pointer;
                    background:${palette.primary};
                    color: ${palette.white};
                }
            }
        }
    }
    .notification {
        color: ${palette.profileStatus};
        margin-bottom: 10px;
        text-transform: capitalize;
    }
    .details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        ${media.tablet`
        grid-template-columns: 1fr;
            text-align:center;
            place-content: center;
        `}
        
        input {
            padding:5px 8px;
            border-radius:5px;
            outline:none;
            margin-top:5px;
            border:1px solid black;
            &:disabled {
                background:${palette.lightGray};
                &:focus,&:active {
                    border:1px solid black;
                }
            }
            &:focus,&:active {
                outline:none;
                border:1px solid ${palette.primary};
            }
        }
        p {
            color: red;
            margin-top: 5px;
            text-indent: 4px;
        }
    }

    .btn{
        padding:5px 8px;
        color: ${palette.primary};
        border: 1px solid ${palette.lightGray};
        border:1px solid ${palette.primary};
        display: inline-block;
        border-radius:4px;                
        margin-top:8px;
        text-transform:capitalize;
        &:hover {
            cursor:pointer;
        }
        &:active {
            transform:scale(.9)
        }
    }
    .buttons {
        margin-top: 25px;
        &__edit {
            &:hover {
                background:${palette.primary};
                color: ${palette.white};
            }
        }
        &__save {
            background: ${palette.primary};
            color:${palette.white} ;
            margin-right: 8px;
            padding-top: 9.8px;
            padding-bottom: 6.5px;
            transition:all .3s;
            visibility: hidden;
            opacity:0;
            
            &.show {
                visibility: visible;
                opacity:1;
                &:hover {
                    opacity:.9;
                }
            }
        }
        &__cancel {
            transition:all .3s;
            visibility: hidden;
            opacity:0;
            &:hover {
                border:1px solid ${palette.lightenBlack};
            }
            &.show {
                visibility: visible;
                opacity:1;
                &:hover {
                    opacity:.9;
                }
            }
        }
    }
    .deactive {
        display:flex;
        flex-wrap:wrap;
        gap:15px;
        justify-content:space-between;
        text-transform: capitalize;
        span {
            font-weight: bold;
            color:red;
        }
        p{
            margin-top:5px;
        }
        &__btn {
            color: red;
            border:1px solid ${palette.lightenBlack};
            &:hover{
                border:1px solid ${palette.red};
            }
        }
    }
    .modal {
        position: fixed;
        display:none;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.8);
        top: 0;
        left: 0;
        &__box {
            width: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: ${palette.white};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-transform: capitalize;
            h2 {
                margin:10px 0;
            }
            div {
                margin-bottom: 10px;
                .yes {
                    margin-right: 10px;
                    padding: 8px 15px;
                    vertical-align: top;
                    &:hover {
                        border:1px solid ${palette.darkGray};
                    }
                }
                .no {
                    &:hover {
                        background:${palette.primary};
                        color: ${palette.white};
                        border:1px solid ${palette.secondary};
                    }
                }
            }
        }
    }
`

export default Style;