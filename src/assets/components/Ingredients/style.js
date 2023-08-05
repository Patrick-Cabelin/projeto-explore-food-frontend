import styled from "styled-components"

export {Container}

const Container = styled.span`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    color: ${({theme})=>theme.COLORS.ICE};

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem 1.6rem;
    gap: .8rem;

    height: 100%;

    background: ${({theme})=>theme.COLORS.GRAY_300};
    border-radius: .8rem
`