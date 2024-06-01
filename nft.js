let nfts = []; // this holds the value of nfts; we write it in let so it can update the value it holds.

function mintNFT(name, details, id) {
  let nft = { name, details, id };
  nfts.push(nft);
  /* Here we add a function that will take in some values as parameters (name and details of the transaction) and create an
     NFT object using the parameters passed to it for its metadata, and store it in the variable above.
     Here we use "nfts.push(nft);" to store the variable in the nfts array and update the values it pushes, allowing us to
     keep track of all the NFTs we’ve created. */
}

function listNFTs(nftsArray = nfts) {
  if (!Array.isArray(nftsArray) || nftsArray.length === 0) {
    console.log('No NFTs found.');
    return;
  }

  nftsArray.forEach(({ name, details, id }) => {
    console.log(`Name: {name}, Details: {details}, ID: {id}`);
  });
  /* Here we create a loop that will go through an array of NFTs and use exception handling.
     When nothing is found, it automatically prints 'No NFTs found.' If some are found, it will print the provided details. */
}

function getTotalSupply() {
  console.log(`Total supply: {nfts.length}`);
  /* getTotalSupply is defined as a function that performs a single task.
     Logging Total Supply, within the function, console.log is used to print a message that includes the length of the nfts array, which represents the total number of NFTs. */
}

// Call your functions below this line
mintNFT('pnb', 'it is fast', '121');
mintNFT('sbi', 'it is inter connection', '151');

// Here we give some data to the system that pnb and sbi (banks) are used for nfts with their id.
// Now it is time to call the data that we provided.
listNFTs();
getTotalSupply();
