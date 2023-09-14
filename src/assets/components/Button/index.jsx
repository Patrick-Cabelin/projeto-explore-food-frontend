import { Conteiner } from './style';

function Button({title, loading = false, icon: Icon, className,...rest}){
    return(
       <Conteiner
            {...rest}
            className={className}
       >
        <button  className={className} disabled={loading}>
            {Icon &&<Icon size={20}/>}
            <span>{title}</span>
            <span className='order'>{rest.orderNumber}</span>
        </button>
       </Conteiner>
    )
}

export {Button}