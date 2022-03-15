var simLameCows = 0;
var simNotInCalf = 0;
var silageProduction = 8; //tones per acre
var silageAcres; //number of acres dedicated to silage ground
var silageDry; //tonnes of dry matter made per year in silage
var simFeedMoney = 0;
var sampleLameCows = 10;
var sampleEmptyCows = 5;
var sampleFeedCost = 257;
var cowsCulled = 0;


function calculate(){
    
}

function createSampleData(){
    for(let step=0; step<data.company.Fields.length; step++){        //figure out how much silage should be produced on average per year based on number of acres set to silage in the simulation
        if(data.company.Fields[step].crop == "silage"){ //2xminFeed as it's not worth moving them to the field if they will eat it all in a few hours.
            silageAcres += data.company.Fields[step].size;
        }
    }
    silageDry = silageProduction * silageAcres * 0.2 * 3; //3 cuts of silage
    var array = [silageDry, sampleLameCows, sampleEmptyCows, sampleFeedCost];
    return array
}

function silageMade(){
    return silageProduction * acresSilage * 0.2; //20% of the fresh weight is dry matter
}