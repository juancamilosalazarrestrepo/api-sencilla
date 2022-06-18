import { Component } from 'react';










class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "",
      nombre: "",
      imagen: "",
      tipo: "",
      movimientos: []
    }
  }

  apiCall(url, consecuencia) {
    fetch(url)
      .then(response => response.json())
      .then(data => consecuencia(data))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    console.log("me monte");
    this.traerGifNuevo();
  }

  traerGifNuevo() {


    this.apiCall("http://localhost:3000/api/user", this.mostrarGif)


  }
  mostrarGif = (data) => {




    this.setState({
      nombre: data[0].name,



    })


    console.log(this.state.nombre)



  }

  componentDidUpdate() {
    console.log("me actualize")


  }
  render() {
    console.log("estoy renderizando");
    let contenido;



    if (this.state.gif === "") {
      contenido = <p>Cargando...</p>
    } else {
      contenido = <div>

        <h2>{this.state.nombre}</h2>

      </div>;

    }
    console.log("este es el nombre" + this.state.nombre);
    return (
      <div >




        <div className='contenedor'>


          <div className="card">
            <div className="card-image">
              <figure className="image">

              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">

                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{this.state.nombre}</p>

                </div>
              </div>

              <div className="content">



                <br />

              </div>

            </div>
          </div>
        </div>
        {contenido}
        <button className='button' onClick={() => this.traerGifNuevo()}>random Gif</button>
      </div>



    );

  }
}



export default App;