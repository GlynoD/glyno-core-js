var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('66424153'),
  addressVersion: 0x23,
  privKeyVersion: 0xd4,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x056D2433,
  hkeyPrivateVersion: 0x0561322B,
  genesisBlock: {
    hash: hex('000007abe55c9a6be1a2ce2ed3b7b231074aa9e50a4af679efb5710bac0410ad'),
    merkle_root: hex('f367a1a6a353dce7db625afe59227cf45b87ffcb877849c1fb9404476636839d'),
    height: 0,
    nonce: 2115764,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1529018953,
    bits: 504365040,
  },
  dnsSeeds: [
    '107.172.234.62',
    '198.23.221.100',
    '107.172.234.59'
  ],
  defaultClientPort: 18843
};

exports.mainnet = exports.livenet;

exports.testnet = {  //not setup for litecoin yet
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 265310,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1392281929,
    bits: 486604799,
  },
  dnsSeeds: [
    'xx',
    'xx'
  ],
  defaultClientPort: 19333
};
