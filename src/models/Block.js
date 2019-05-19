import SHA256 from 'crypto-js/sha256';

export default class Block {

    constructor(timestamp, transactions, previousHash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash = () => {   
        return SHA256(this.timestamp + this.previousHash + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineNewBlock = difficulty => {
        while(this.hash.indexOf(Array(difficulty + 1).join('0')) !== 0) {
            this.hash = this.calculateHash();                    
            this.nonce++;
        }
        console.log('A new block was mined with hash:', this.hash);
    }
}