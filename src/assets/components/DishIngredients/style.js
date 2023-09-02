import styled from "styled-components";


const Container = styled.div`
    display: flex;
    align-items: center;

    background: ${({theme,isNew})=> isNew? 'transparent' : theme.COLORS.LIGHT_600};
    color: ${({theme})=> theme.COLORS.LIGHT_100};

    border: ${({theme, isNew})=> isNew? `.1rem dashed ${theme.COLORS.LIGHT_500}`: 'none'};
    border-radius: 1rem;

    margin-bottom: .8rem;
    padding-right: 1.6rem;
    width: 11.6rem;
    
    >button{
        border: none;
        background: none;
        cursor: pointer;
    }
    .button-add{
        color: ${({theme})=> theme.COLORS.LIGHT_500}
    }
    .button-delete{
        color: ${({theme})=> theme.COLORS.LIGHT_100}
    }

    >input{
        width: 100%;
        height: 5.6rem;

        padding: 1.2rem;
        
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        background: transparent;
        
        border: none;
        
        &::placeholder{
            color:${({theme})=> theme.COLORS.LIGHT_500}
        }
    }
`

export { Container }