/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// I will be minting flight details as NFT.
let NFTs=[]; /*This variable to store the NFTs is of an array datatype which is further the type of an object.
-------------If we do "console.log(typeof(NFTs));" then the output would be "object".*/


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT (name, flightEngine, capacity,company) {
    const FLIGHT={ //This is a structure object to store the NFT's i.e. Flight's metadata
        modelName:name,
        engineName:flightEngine,
        _capacity:capacity,
        ownerCompany:company,
        flightCode:company.slice(0,2).toUpperCase()+name.slice(-5)+"#"+capacity
    }
    
    NFTs.push(FLIGHT);
    console.log(`The NFT named ${FLIGHT.modelName} was minted to NFTs`); // Here the "${}" along with backticks work as String Interpolators.

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    let i=0;
    while(i<NFTs.length){
        console.log("\nFlight Code:  \t\t"+NFTs[i].flightCode);
        console.log("Airlines Name:\t\t"+NFTs[i].ownerCompany);
        console.log("Model:\t\t\t\t"+NFTs[i].modelName);
        console.log("Engine:\t\t\t\t"+NFTs[i].engineName);
        console.log("Capacity:\t\t\t"+NFTs[i]._capacity+"\n");
        i++;
    }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Overall number of NFTs created: "+ NFTs.length);
}

// call your functions below this line

mintNFT("AirbusA320","CFM International",180,"US Airways");
mintNFT("AirbusA330","Pratt & Whitney PW4000",300,"Air India");
mintNFT("Boeing737","CFM56",190,"SpiceJet");
mintNFT("Bombardier CRJ900","CF34-8C5",76,"Lufthansa");
listNFTs();
getTotalSupply();