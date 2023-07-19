rm -rf ../../packages/abi/contracts
rm -rf ../../packages/abi/contractTypes
rm -f ../../packages/abi/address.json

cp -r ./artifacts/contracts ../../packages/abi/
cp -r ./typechain/ ../../packages/abi/contractTypes
cp ./address.json ../../packages/abi/
