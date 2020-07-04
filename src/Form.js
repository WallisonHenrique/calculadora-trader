import React from 'react';
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { minEntry: 2 };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let minEntry;
        if (event.target.value === "R$") {
            minEntry = 2;
        } else {
            minEntry = 1;
        }
        this.setState({minEntry: minEntry});
    }

    handleSubmit(event) {
        const form = event.target;
        const config = {
            entry: form.entry.value,
            currency: form.currency.value,
            entries: form.entries.value,
            payout: form.payout.value,
        };
        this.props.onCalcSubmit(config);
        event.preventDefault();
    }

    render() {
        const { entry, currency, entries, payout } = this.props.config;
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <div>
                    <label>1° Entrada:</label>
                    <input name="entry" type="number" defaultValue={entry} min={this.state.minEntry} max="20"/>
                </div>
                <div>
                    <label>Moeda:</label>
                    <select name="currency" defaultValue={currency} onChange={this.handleChange}>
                        <option value="R$">Real</option>
                        <option value="$">Dollar</option>
                    </select>
                </div>
                <div>
                    <label>Qtd. Entradas:</label>
                    <input  name="entries" type="number" defaultValue={entries} min="1" max="7"/>
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