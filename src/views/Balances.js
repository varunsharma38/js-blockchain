import React from 'react';
import App from '../App';

export default class Balances extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        }

        this._handleSubmit.bind(this);
        this._switchView = this._switchView.bind(this);
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const balance = this.props.chain.getBalanceOfAddress(this.refs.address.value);
        this.setState({ balance })
    }

    _switchView = () => {
        this.setState({ isDone: true })
    }

    render = () => {
        return (
            <div>
                {
                    !this.state.isDone ? 
                        <div>
                            <form onSubmit={this._handleSubmit}>
                                <h1>Check Balances</h1>
                                <p style={{ width: '300px', marginTop: '20px' }}>
                                    <label>Node Address</label>
                                    <input type='text' ref='address' style={{ float: 'right' }} /><br />
                                </p>
                                <input type='submit' value='Submit'/>
                            </form>
                            {
                                this.state.balance !== undefined ?
                                    (   
                                        <div>
                                                {
                                                    this.state.balance !== null ?
                                                    <p style={{ marginTop: '20px' }}>
                                                        Balance: {this.state.balance}
                                                    </p> :
                                                    <p style={{ marginTop: '20px' }}>
                                                        Not Found
                                                    </p>
                                                }
                                                <button onClick={this._switchView}>Back</button>
                                        </div>
                                    ) :
                                    null 
                            }
                            
                        </div> :
                        <App chain={this.props.chain} />
                }
            </div>
        )
        
    }
}