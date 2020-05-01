require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strategy radar range purpose inner narrow equal gauge'; 
let testAccounts = [
"0x89a4c472f664b9ab9e9f01b69c1cc00655aa24d62be06ab3b00ff6f5c89b90e9",
"0x230a42aec9b5d47d311c897f1d518369e845ebb943d7a6f4f9af187bf872ca82",
"0x4ad8f538353b36f5af600edb5a40021ff19a30e6d8c1f52b9b50122de4970595",
"0xef254d99216df3e6a52558a50230cbe3b6f064fd227c5e5a542390112e99f562",
"0xd0addf0725821180c97f774b72b6735f7893412d02367288f7cfcb37a57fd377",
"0xa8cf0ea5f9e07d5705dacd0ec4b40497cb9404c4896bde8bc6575cdd6056f67b",
"0xd16e5e4a92f6535b787720581f540a7a6b08c51dc70a006efcbae21239d57dee",
"0x1fedc09de54489b8794b0c6a7cafe6cc05b075baf188536ad61220d53a5f9222",
"0x560f278fe1b6881f7a78848898e162d15d770c3ddf8db8c966626b230da6af25",
"0x1f9446bcbb5d4c9bc10099813862ae40ac445761e482b9ad7d06b8b9e88aca0c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
