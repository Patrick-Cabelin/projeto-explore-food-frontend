import styled from "styled-components"

export{Container}

const  Container = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 6.4rem;

    width: 100%;
    height: 11.6rem;
    padding: 2.4rem 12.3rem;

    border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY_200};
    background: ${({theme})=> theme.COLORS.GRAY_400};

    grid-area: header;
    
    h1{
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;    
        color: ${({theme})=> theme.COLORS.PINK};
    }
`