import React from 'react';
import './Management.css';

const Management = (props) => {
    const {listOfEntries, expense, title, profit} = props.management;
    const { currency } = props;
    return(
        <tr className="Management">
            <td>{title}</td>
            <td>
                {listOfEntries.map((entry, index)=>{
                    return <span key={index}>{currency}{entry.toFixed(2).replace('.', ',')}</span>
                })}
            </td>
            <td>{currency}{expense.toFixed(2).replace('.', ',')}</td>
            <td>{currency}{profit.toFixed(2).replace('.', ',')}</td>
        </tr>
    );
}

export default Management; 