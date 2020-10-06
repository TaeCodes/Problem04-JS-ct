class DogWalker {
    numberOfWalksCalculator(dogSizes){
        let numberOfWalks = -1;
        //Create a table to store each dog
        const hashTable = [];
        //Group same dog types
        let sameSize =[];
        //Check each object to see the type of dog
//console.log(dogSizes.length);
        for(let i=0; i<dogSizes.length; i++){
            //Check to see if dog size is in table
            let dS= dogSizes[i].toString();
            if(hashTable[dS]===undefined){
                //If it is not add it to the table
                hashTable[dS]=true;
            }
            //If it is in the table add duplicate to same size group
            else{
               
              sameSize.push(dogSizes[i]);
             // console.log(sameSize);
                numberOfWalks = sameSize.length;
            }
        }
        
        return numberOfWalks;
    }
}

module.exports = DogWalker;