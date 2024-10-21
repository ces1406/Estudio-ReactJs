import { useState } from "react";
import PropTypes from "prop-types"

const CompoHook= (props)=>{
    const[contador,setContador] = useState(0)
    return(
        <>
            <h3>contador: {contador}</h3>
            <button onClick={()=>setContador(contador+1)}>
                INCREMENTAR
            </button>
            <h4>propA:{props.propA}</h4>
            <h4>propB:{props.propB}</h4>
            <h4>childrens:</h4>
                {props.children}
        </>
    )
}

CompoHook.propTypes ={
    propA: PropTypes.string,
    propB: PropTypes.string,
    children: PropTypes.any
}
CompoHook.defaultProps={
    propA:'vacio',
    propB:'vacio'
}

export default CompoHook 