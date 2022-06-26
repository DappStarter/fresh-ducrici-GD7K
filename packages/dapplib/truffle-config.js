require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stone deny miss essay gloom end army gift'; 
let testAccounts = [
"0x90f0adaead4978e8e4c97f2aedb33d3d1190987bc9d1e2ada2778cf7f535c27a",
"0x3dbe79b80512d391ade1f584eceabeaa0410579f3807a684190f05e4cc52e864",
"0x500cb39dc076484ac87364cba3aeb3b7deb785c365dc50423ff8a58eac5b9f00",
"0x4410de0322fbbc931a7189da0453abee4933c1f112acfa06b5aaa14e01c20c1c",
"0x00ee0f26505d44bcee8a79cb800d33b9520924cd7276eb62a66629b668bba3cf",
"0x9d57efafd6dc284e03ba1dd79e9c25cb572413d8c6fe5249b6f7c5c06b95a68d",
"0x4026a9dd6a6a0614a5c5a7245a94cb772c71733535206d228c92303d86e216ad",
"0x5c2d4edcfc5c5fd267ceae3a1666e0c1296cf43fabdc988a040546fe275d1706",
"0xb8f6bb059d2905cfa3e49f2a18c05ea44d9255861730b069da04333d7114ebec",
"0x70e7622360bea81c36df453c67b977837e85eaed15b642e6e75eea6c35367de8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

