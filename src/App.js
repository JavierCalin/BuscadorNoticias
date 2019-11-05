import React, {Component, Fragment} from 'react';
import Header from'./component/Header'
import ListaNoticias from './component/ListaNoticias';
import Formulario from './component/Formulario';


class App extends Component {
  state = { 
    noticias : []
   }
  componentDidMount(){
    this.consultarApi()
  }
  consultarApi = async (categoria = 'general')=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=f69e45d9302e447fbb91fe3a68952ec7`
    const respuesta = await fetch(url);
    const noticias = await respuesta.json()
 
    this.setState({
      noticias : noticias.articles
    })
  }

  render() { 
    return (
      <Fragment>
        <Header
          titulo="Noticias React API"
        />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarApi = {this.consultarApi}
          />
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
      );
  }
}
 
export default App;
