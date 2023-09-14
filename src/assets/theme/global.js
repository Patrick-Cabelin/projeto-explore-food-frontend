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
    }

    @media (min-width: 769px) {
        &::-webkit-scrollbar{
            background: none;
            width: .4rem;
        }

        &::-webkit-scrollbar-thumb{
            background: ${({theme})=> theme.COLORS.CAKE_200};
            border-radius: 1rem;
        }
    }

    @keyframes animateDishIcons {
        0%{
            transform: scale(1);
            background-size: 0% 0%;
            fill: ${({theme}) => theme.COLORS.LIGHT_100 };
        }
        50%{
            transform: scale(1.1);
            background-size: 50% 50%;
            fill: ${({theme}) => theme.COLORS.LIGHT_100 };
        }
        100%{
            transform: scale(1);
            background-size: 100% 100%;
            fill: ${({theme}) => theme.COLORS.LIGHT_100 };
        }
    }

    @keyframes slideInLeft {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes slideOutLeft {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
` 