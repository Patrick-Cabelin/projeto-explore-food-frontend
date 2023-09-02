import { Container} from './style'

import { Icons } from '../../image/Icons'

function DishIngredients({value, onClick, isNew,...rest}){
    const {Plus, Close} = Icons()
    return(
        <Container isNew={isNew} {...rest}>
            <input type="text" value={value} readOnly={!isNew}/>

            <button type='button' onClick={onClick} className= {isNew? 'button-delete': 'button-add'}>
                {isNew? <Plus/>: <Close/>}
            </button>
        </Container>
    )
}

export {DishIngredients}