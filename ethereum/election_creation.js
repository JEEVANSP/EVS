import web3 from './web3';
//const {Web3} = require('web3');
import Electioncreation from '../ethereum/build/ElectionCreation.json';
//const Electioncreation = require("./build/Electioncreation.json");
//const web3 = new Web3("https://sepolia.infura.io/v3/840152b62f154721b04b828a8edcb024")
const instance = new web3.eth.Contract(
    Electioncreation.abi,
    "0x1BdcBf53afeABB780816CEdaB561BFdf2a07eD5a"
);
//console.log(instance);

export default instance;
