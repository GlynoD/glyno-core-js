var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a4bbfec1'),
  addressVersion: 0x38,
  privKeyVersion: 0xd4,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488A24E,
  hkeyPrivateVersion: 0x0488BDA4,
  genesisBlock: {
    hash: hex('00000d63d1ed573a262752a4f56da531c58c2c43e77f3fa7cd988b0bf91c3d8e'),
    merkle_root: hex('28ab1b7ad72353df3ff93c8cd0fcec4d619f2972b12fbbfa68e8809a37e37e10'),
    height: 0,
    nonce: 1142222,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1529028000,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    '107.172.9.103',
    '72.11.129.12',
    '107.172.6.82'
  ],
  defaultClientPort: 7442
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
