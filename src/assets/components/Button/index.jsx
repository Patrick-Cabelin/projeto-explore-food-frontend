import { Conteiner } from './style';

function Button({title, loading = false, icon: Icon, orderNumber = false,...rest}){
    // const order = rest.orderNumber
    return(
       <Conteiner
            {...rest}
            disabled = {loading}
       >
        <button>
            {Icon &&<Icon size={20}/>}
            <span>{title}</span>{/*<span classname='order'>{order}</span>*/}</button>
       </Conteiner>
    )
}

export {Button}