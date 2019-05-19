import React from 'react';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOptions: true
        }
        this._renderOptions = this._renderOptions.bind(this);
    }

    _renderOptions = () => {
        return (
            <div>
                <button className='mt-2 d-block'>Create New Transaction</button>
                <button className='mt-2 d-block'>Mine Pending Transactions</button>
                <button className='mt-2 d-block'>View The Chain</button>
                <button className='mt-2 d-block'>View Node Balance</button>
            </div>
        )
    }

    render() {
        return (
            <div className='mt-4'>
                {this.state.showOptions ? this._renderOptions() : null}
            </div>
        );
    }
}