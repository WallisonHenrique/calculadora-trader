import React from 'react';
import './Gerenciamento.css';

const Gerenciamento = (props) => {
    const {listaEntradas, gasto, titulo, lucro} = props.gerenciamento;
    const { moeda } = props;
    return(
        <tr className="Gerenciamento">
            <td>{titulo}</td>
            <td>
                {listaEntradas.map((entrada, index)=>{
                    return <span key={index}>{moeda}{entrada.toFixed(2).replace('.', ',')}</span>
                })}
            </td>
            <td>{moeda}{gasto.toFixed(2).replace('.', ',')}</td>
            <td>{moeda}{lucro.toFixed(2).replace('.', ',')}</td>
        </tr>
    );
}

export default Gerenciamento; 