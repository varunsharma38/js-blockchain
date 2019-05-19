import Block from './Block';
import Transaction from './Transaction';

export default class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }

    createGenesisBlock = () => new Block(new Date().getTime(), 'This is genesis block', '0');

    getLatestBlock = () => this.chain[this.chain.length - 1];

    minePendingTransactions = minerAddress => {
        const newBlock = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        newBlock.mineNewBlock(this.difficulty);
        this.chain.push(newBlock);
        this.pendingTransactions = [
            new Transaction(null, minerAddress, this.miningReward)
        ]
    }

    createTransaction = transaction => this.pendingTransactions.push(transaction);

    getBalanceOfAddress = address => {
        let balance = 0;

        for(const block of this.chain) {
            for(const trans of block.transactions) {
                if(trans.fromAddress === address) {
                    balance -= trans.amount;
                } else if(trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }

        return balance;
    }
}