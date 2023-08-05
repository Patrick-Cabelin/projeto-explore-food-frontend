import { Container }from './style'

export {Tag}

function Tag({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}