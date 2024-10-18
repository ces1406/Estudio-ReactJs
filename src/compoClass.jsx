import { Component } from "react";
import PropTypes from "prop-types"

class CompoClase extends Component{
    constructor(props){
        super(props)
        this.state={
            contador:0
        }
        this.sum = this.sum.bind(this)
    }
    sum(){
        let aux = this.state.contador+1
        console.log('contador:'+aux)
        this.setState({contador:++aux})
    }
    render(){
        return(
            <>
                <h3>contador: {this.state.contador}</h3>
                <button onClick={this.sum}>
                    INCREMENTAR
                </button>
                <h4>prop:{this.props.propA}</h4>
                <h4>childrens:</h4>
                {this.props.children}
            </>
        )
    }
}
CompoClase.propTypes ={
    propA: PropTypes.string,
    children: PropTypes.any
}
export default CompoClase