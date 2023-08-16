import { Conteiner } from './style';

function Button({title, loading = false ,icon: Icon,...rest}){
    if(rest.orderNumber){
        console.log(rest.orderNumber)
    }

    return(
       <Conteiner
       type='button'
       disabled = {loading}
       >
        {Icon &&<Icon size={20}/>}
        <span>{title}</span><span>{rest.orderNumber}</span>
       </Conteiner>
    )
}

export {Button}