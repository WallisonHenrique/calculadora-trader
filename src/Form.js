import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { entradaMinima: 2 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let entradaMinima;
        if (event.target.value == "R$") {
            entradaMinima = 2;
        } else {
            entradaMinima = 1;
        }
        this.setState({entradaMinima: entradaMinima});
    }

    handleSubmit(event) {
        const form = event.target;
        const config = {
            entrada: form.entrada.value,
            moeda: form.moeda.value,
            entradas: form.entradas.value,
            payout: form.payout.value,
        };
        this.props.onCalcSubmit(config);
        event.preventDefault();
    }

    render() {
        const { entrada, moeda, entradas, payout } = this.props.config;
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <div>
                    <label>1° Entrada:</label>
                    <input name="entrada" type="number" defaultValue={entrada} min={this.state.entradaMinima} max="20"/>
                </div>
                <div>
                    <label>Moeda:</label>
                    <select name="moeda" defaultValue={moeda} onChange={this.handleChange}>
                        <option value="R$">Real</option>
                        <option value="$">Dollar</option>
                    </select>
                </div>
                <div>
                    <label>Qtd. Entradas:</label>
                    <input  name="entradas" type="number" defaultValue={entradas} min="1" max="7"/>
                </div>
                <div>
                    <label>Payout:</label>
                    <input name="payout" type="number" defaultValue={payout} min="50" max="100"/>
                </div>
                <button type="submit">=</button>
            </form>
        );
    }
}

export default Form;