import styled from "styled-components"

export {Container}

const Container = styled.button`

    border: none;
    background: none;
    cursor: pointer;

    display:flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem; 

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font:  ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};

    &:hover {
        filter: brightness(0.9);
    }
`