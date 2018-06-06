var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('54494D42'),
  addressVersion: 0x23,
  privKeyVersion: 0xd4,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x4653474D,
  hkeyPrivateVersion: 0x66736770,
  genesisBlock: {
    hash: hex('97894e894c3e6721fac5ec5cf0d8881587a5bb37d1572bd65c195958b806000064'),
    merkle_root: hex('02955549528d0bda6cf2910ab9e6d62690c9be41cc79a624743cbf57ecb4ef57'),
    height: 0,
    nonce: 1015505,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1509922046,
    bits: 504365040,
  },
  dnsSeeds: [
    'ec2-18-188-230-37.us-east-2.compute.amazonaws.com',
    'ec2-18-216-52-206.us-east-2.compute.amazonaws.com',
    'dec2-18-191-6-184.us-east-2.compute.amazonaws.com',
    'ec2-18-218-59-204.us-east-2.compute.amazonaws.com',
    'ec2-18-222-88-20.us-east-2.compute.amazonaws.com'
  ],
  defaultClientPort: 57810
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
