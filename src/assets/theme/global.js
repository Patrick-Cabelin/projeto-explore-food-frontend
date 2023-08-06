import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        color: ${({theme}) => theme.COLORS.LIGHT_100 };
    }
    body{
        background: ${({theme}) => theme.COLORS.DARK_400 };
        overflow-y: auto;
        &::-webkit-scrollbar{
            background: none;
        }
    }
` 