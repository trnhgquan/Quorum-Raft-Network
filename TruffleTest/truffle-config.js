

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      from: "0x54bf6edb014a7c988ff35216f1d6cb5f32c8b040",
      gasPrice: 0,
      gas: 3000000
    },
    node2:  {
      host: "127.0.0.1",
      port: 22001,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 3000000
    },
    node3:  {
      host: "127.0.0.1",
      port: 22002,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 3000000
    }
  }
};