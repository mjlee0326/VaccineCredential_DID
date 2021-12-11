const Migrations = artifacts.require("Migrations");
const Vaccine = artifacts.require("VaccineCredential.sol");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Vaccine);
};
