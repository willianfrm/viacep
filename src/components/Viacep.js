import React, { Component } from 'react';
import axios from 'axios';

class Viacep extends Component {

	constructor(props){
    	super(props);
    	this.state = {
    		dados: [],
    		cep: '01001000'
    	}
  	}

  	componentDidMount(){
        this.carregar()
  	}

  	carregar(){
  		axios.get('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      	.then(result => (console.log(result)) (this.setState({dados: result.data})))
      	.catch(erro => console.log(erro))
  	}

  	render(){
		return(
			<div>
				<input onInput={(e) => this.setState({cep: e.target.value})} type="text" placeholder="Digite o cep"/>
            	<button onClick={this.carregar.bind(this)}>Pesquisar</button>
            	
				<h2>Informações para {this.state.dados.cep}</h2>
				<p><b>Logradouro: </b> {this.state.dados.logradouro}</p>
				<p><b>Bairro: </b> {this.state.dados.bairro}</p>
				<p><b>Cidade: </b> {this.state.dados.localidade}</p>
				<p><b>Estado: </b> {this.state.dados.uf}</p>
			</div>
		);
	}

}
export default Viacep;