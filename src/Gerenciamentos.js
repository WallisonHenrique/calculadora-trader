import React from 'react';
import Gerenciamento from './Gerenciamento';
import listaGerenciamentos from './listaGerenciamentos';
import './Gerenciamentos.css';

class Gerenciamentos extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const resultados = listaGerenciamentos(this.props.config);
        const { moeda } = this.props.config;        
        return(
            <div className="Gerenciamentos">
                <table>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Entradas</th>
                            <th>Banca</th>
                            <th>Lucro</th>
                        </tr>
                        {resultados.map((dados, index) => 
                            <Gerenciamento key={index} gerenciamento={dados} moeda={moeda} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Gerenciamentos;