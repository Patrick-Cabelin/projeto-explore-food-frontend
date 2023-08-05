import styled from "styled-components"

export { Container }
const Container = styled.textarea`
    resize: none;
    width: 100%;
    height: 27.4rem;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .8rem;
    
    padding: 1.9rem 1.6rem;
    background: ${({theme})=>theme.COLORS.GRAY_300};
    border-radius: 1rem;

    &placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;

        text-align: left;
        color: ${({theme})=>theme.COLORS.GRAY_100};
    }
`