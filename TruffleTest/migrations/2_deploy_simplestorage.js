var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(SimpleStorage, 42, {privateFor: ["Tz2ugLIi0UEiQpQ6BFqV0RFFXZ1zKO4buXm/rpxY/Gc="]})
};