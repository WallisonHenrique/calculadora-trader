import React from 'react';
import Management from './Management';
import managementsList from './managemenstList';
import './Managements.css';

class Managements extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const results = managementsList(this.props.config);
        const { currency } = this.props.config;        
        return(
            <div className="Managements">
                <table>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Entradas</th>
                            <th>Banca</th>
                            <th>Lucro</th>
                        </tr>
                        {results.map((data, index) => 
                            <Management key={index} management={data} currency={currency} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Managements;