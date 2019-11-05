import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        categoria: 'general'
     }
     cambiarCategoria = e=>{
         this.setState({
             categoria : e.target.value
         }, //añadimos callback para que no haya el retraso 
         ()=>{this.props.consultarApi(this.state.categoria)})
     }
    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoría</h2>
                        <div className ="input-fied col s12 m8 offset-m2">
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option vlaue="general">General</option>
                                <option vlaue="business">Business</option>
                                <option vlaue="entertainment">Entertainment</option>
                                <option vlaue="health">Health</option>
                                <option vlaue="science">Science</option>
                                <option vlaue="sports">Sports</option>
                                <option vlaue="technology">Technology</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Formulario;