import styled from "styled-components"

const Container = styled.textarea`
        display: flex;
        flex-direction: column;

        resize: none;
        width: 100%;
        height: 17.2rem;
        padding: 1.4rem;

        border: none;
        border-radius: .8rem;
        background: ${({theme})=> theme.COLORS.DARK_900};
        color: ${({theme})=> theme.COLORS.LIGHT_500};
        
        word-break: break-word;
        white-space: normal;
        
        
        &::placeholder{    
            font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
            color: ${({theme})=> theme.COLORS.LIGHT_500};
        }

`
    
export { Container }