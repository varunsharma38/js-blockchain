import React from 'react';
import App from '../App';

export default class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        }

        this._handleSubmit = this._handleSubmit.bind(this);
        this._cancel = this._cancel.bind(this);
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.chain.minePendingTransactions(this.refs.minerAddress.value);
        this.setState({ isDone: true })
    }

    _cancel = () => {
        this.setState({ isDone: true })
    }

    render = () => {
        return (
            <div>
                {
                    !this.state.isDone ? 
                        <form onSubmit={this._handleSubmit}>
                            <h1>Mine</h1>
                            <p style={{ width: '300px', marginTop: '20px' }}>
                                Click the button to Mine Pending transactions.
                                <br />
                            </p>
                            <p style={{ width: '300px' }}>
                                <label>Miner Address</label>
                                <input type='text' ref='minerAddress' style={{ float: 'right' }} /><br />
                            </p>
                            <input type='submit' value='Mine Transactions'/>
                            <button style={{ marginLeft: '8px' }} onClick={this._cancel}>Cancel</button>
                        </form> :
                        <App chain={this.props.chain} />
                }
            </div>
        )
    }
}