const MerkleDistributor = artifacts.require("MerkleDistributor.sol");

module.exports = async function (deployer, _network, addresses) {
  let wflAddress = '0x4f3Ec89a44e8ec8D1Af0eecB774F37E8b79B69E6';
  let merkleRoot = '0x90c5d055a9774550ac6601e218c8cd52c42ad965a3909d1e2ddbb961a0b8cf1f';

  await deployer.deploy(MerkleDistributor, wflAddress, merkleRoot);
  const merkleDistributor = await MerkleDistributor.deployed(); 
};
