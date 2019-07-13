import React from 'react';
import NewTransaction from './views/NewTransaction';
import Mine from './views/Mine';
import Chain from './views/Chain';
import Balances from './views/Balances';
import BlockChain from './models/Blockchain';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            view: null
        }
        this.chain = props.chain || new BlockChain();
        this._renderOptions = this._renderOptions.bind(this);
        this._renderView = this._renderView.bind(this);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick = (view) => {
        this.setState({ view })
    }

    _renderView = () => {
        switch(this.state.view) {
            case 'new_trans': return <NewTransaction chain={this.chain} />;
            case 'mine': return <Mine chain={this.chain} />;
            case 'view_chain': return <Chain chain={this.chain} />;
            case 'view_bal': return <Balances chain={this.chain} />;
            default: return null;
        }
    }

    _renderOptions = () => {
        return (
            <div>
                <button className='mt-2 d-block' onClick={() => {this._handleClick('new_trans')}}>Create New Transaction</button>
                <button className='mt-2 d-block' onClick={() => {this._handleClick('mine')}}>Mine Pending Transactions</button>
                <button className='mt-2 d-block' onClick={() => {this._handleClick('view_chain')}}>View The Chain</button>
                <button className='mt-2 d-block' onClick={() => {this._handleClick('view_bal')}}>View Node Balance</button>
            </div>
        )
    }

    render() {
        return (
            <div className='mt-4'>
                {this.state.view ? this._renderView() : this._renderOptions()}
            </div>
        );
    }
}