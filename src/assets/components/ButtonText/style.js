import styled from "styled-components"

export {Container}

const Container = styled.button`
    font-size: 1.6rem;
    line-height: 2.1rem;

    border: none;
    background: none;
    cursor: pointer;

    display:flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem; 

    color:${({ theme }) => theme.COLORS.PINK};

    &:hover {
        filter: brightness(0.9);
    }
`