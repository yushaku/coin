rm -rf ../../packages/abi/contracts
rm -rf ../../packages/abi/address.json

cp -r ./artifacts/contracts ../../packages/abi/
cp ./address.json ../../packages/abi/
