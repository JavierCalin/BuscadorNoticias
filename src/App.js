import React, {Component, Fragment} from 'react';
import Header from'./component/Header'
import ListaNoticias from './component/ListaNoticias';

class App extends Component {
  state = { 
    noticias : []
   }
  componentDidMount(){
    this.consultarApi()
  }
  consultarApi = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f69e45d9302e447fbb91fe3a68952ec7`
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
          <ListaNoticias
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
      );
  }
}
 
export default App;
