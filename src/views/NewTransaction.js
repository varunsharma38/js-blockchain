import React from 'react';
import Transaction from '../models/Transaction';
import App from '../App';

export default class NewTransaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        }

        this._handleSubmit.bind(this)
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const transaction = new Transaction(this.refs.fromAddress.value, this.refs.toAddress.value, +this.refs.amount.value);
        this.props.chain.createTransaction(transaction);
        this.setState({ isDone: true })
    }

    render = () => {
        return (
            <div>
                {
                    !this.state.isDone ? 
                        <form onSubmit={this._handleSubmit}>
                            <h1>New Transaction</h1>
                            <p style={{ width: '300px', marginTop: '20px' }}>
                                <label>From Address</label>
                                <input type='text' ref='fromAddress' style={{ float: 'right' }} /><br />
                            </p>
                            <p style={{ width: '300px' }}>
                                <label>To Address</label>
                                <input type='text' ref='toAddress' style={{ float: 'right' }} /><br />
                            </p>
                            <p style={{ width: '300px' }}>
                                <label>Amount</label>
                                <input type='number' ref='amount'  style={{ float: 'right' }}/><br />
                            </p>
                            <input type='submit' value='Submit'/>
                        </form> :
                        <App chain={this.props.chain} />
                }
            </div>
        )
        
    }
}