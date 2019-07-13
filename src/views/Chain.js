import React from 'react';
import App from '../App';

export default class Chain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        }

        this._switchView = this._switchView.bind(this);
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
                            <h1>Chain</h1>
                            <p style={{ marginTop: '20px' }}>{this.props.chain.getChain()}</p>
                            <button onClick={this._switchView}>Back</button>
                        </div> : 
                        <App chain={this.props.chain} />
                }
                
            </div>
        
        )
    }
}