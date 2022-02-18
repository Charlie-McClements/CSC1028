// time calculations

const daysinweek = 7;
const daysinmonth = daysinweek * 4;
const daysinyear = daysinmonth * 12;

//random number functions
function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
function xoshiro128ss(a, b, c, d) {
    return function() {
        var t = b << 9, r = a * 5; r = (r << 7 | r >>> 25) * 9;
        c ^= a; d ^= b;
        b ^= c; a ^= d; c ^= t;
        d = d << 11 | d >>> 21;
        return (r >>> 0) / 4294967296;
    }
}
let seedFunction = xmur3("Anything you like");
let seed0 = seedFunction();
let seed1 = seedFunction();
let seed2 = seedFunction();
let seed3 = seedFunction();
let seededRandFunction = sfc32(seed0,seed1,seed2,seed3);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


//standard constants
const feedRateOld = 5;
const feedRateYoung = 8;
const mealRateOld = 1;
const mealRateYoung = 5;
const hourly_rate = 10;
const averageConsumption = 10; //kg
const primeCarcassWeight = 345; //kg taken from statista
const priceperkg = 110 //pence per kg
const haulageFee = 10
const minFeed = 50;
var beddingValue = 10;
const fertiliserValue = 100;  //determines how much grass being fertilized increases it's growth rate
const summerValue = 2;      //determines how much the extra sun in summer increases the growth rate of grass
const grassGrowth = 20;     //determines the amount the grass grows before any other factors are applied
const fertilserPrice = 600; //pounds per tonne
const fertRate = 50; //kg per acre
const balePrice = 3;    //pounds per bale

//probability variables
var pastureLameProb = 0.1;
var housedLameProb = 0.5;
var cowPregnancyProbability = 1; //determines how easily a cow can fall pregnant

//job trackers
var beddingDone = false;
var scrapingDone = false;
var feedingDone = false;
//data variables
var noCows = data.company.Cows.length;
var surfaceQuality = 50; //can be used in the future to help calculate likelihood of cows becoming lame
var date = data.date;

function cow_tick(cow){
    if(cow.culled == false){
        numbersss = (getRndInteger(9,11) / 10);
        consumption = averageConsumption * cow.appetite * (getRndInteger(9,11) / 10); //calculates the consumption of food by the cow for the day
        gain = cow.feedConversionRate * consumption; //calculate weight gain for the day
        cow.weight += gain; //add weight gain to cows weight
        if(cow.location == "house"){
            data.company.Resources.houseSilage.quantity -= consumption; //remove silage eaten from the house
            data.company.Resources.houseSlurry.quantity += 10 * (getRndInteger(8,12) / 10); //adding amount of slurry produced by the cow to the total slurry in the house
            data.company.Resources.houseManure.quantity += 5 * (getRndInteger(8,12) / 10);  //adding amount of manure produced to the house
            surfaceQuality -= 1; //simulating the reduction of surface quality as the cows dung
            probLame = getRndInteger(0, 50) + surfaceQuality;
            if(probLame < housedLameProb){
                cow.cull = true;
                cow.location = "pen";
            }
        }
        if(cow.location == "field"){
            data.company.Fields[cow.field].feed -= consumption;
            cow_service(cow)
        }
        cow.age += 1; //adding to the age of the cow every day
    }
}

function abattoir_check(number){
	if(data.company.Cows[number].weight >= primeCarcassWeight || data.company.Cows[number].age >= 905){		//if its the correct weight it goes or if it's close to the optimum age it goes as after this the price is cut
        if(data.company.Cows[number].cull == true && data.company.Cows[number].pregnant == false && data.company.Cows[number].dueMonth){
            data.company.Cows[number].culled = true;
            data.company.money += priceperkg * data.company.Cows[number].weight / 10; // /10 in order to get from pence to pounds
            data.company.money -= haulageFee;
        }
	}
}

function cow_calve(number){
    data.company.Cows[number].pregnant = false;
    data.company.Cows[number].noCalves += 1;
    noCows = data.company.Cows.length;
    data.company.Cows.push({number:noCows + 1,age: 0,weight: 38 * (getRndInteger(9, 11) / 10),
        feedConversionRate: 0.17 * (getRndInteger(9, 11) / 10),pregnant:false,dueMonth:0,dueDay:0,
        appetite:getRndInteger(8,12) / 10,culled:false,location:"pen"});
    if(data.company.Cows[number].noCalves > data.company.breed.calvesPerCow){ //if the cow has had more than 5 calves it is rotated out of the replacements herd and into the cull heard
        data.company.Cows[number].cull = true;
    }    
}

function pregnant_check(number){
    if(data.company.Cows[number].pregnant == true){
        if(data.company.Cows[number].location == "pen"){
            daysAway = data.company.Cows[number].dueDay - data.date.getDay();
            probOfCalving = 4 + daysAway;
            rndNumber = getRndInteger(1,10);
            if(rndNumber > probOfCalving){
                if(getRndInteger(1,10) > data.company.breed.calvingEase){ //chance of cow needing assistance, if it does hours are added to the person who gives it
                    employee_loop("calving");
                }                
                if(getRndInteger(1,50) > 1){ //small chance of the cow throwing the calve
                    cow_calve(number)
                    if(getRndInteger(1,20) > 19){ //small chance of the cow having twins, if it does it will need additional assistance
                        cow_calve(number) 
                        employee_loop("calving");
                    }
                }
                else{
                    data.company.Cows[number].pregnant = false;
                    data.company.Cows[number].cull = true;  //if a cow throws their calf they are usually put to the cull group straight away as they are likely to throw their calf again next year
                }
                                
            }
        }
        if (data.date.getMonth() == data.company.Cows[number].dueMonth){
             if (data.date.getDay() > data.company.Cows[number].dueDay - 5 || data.date.getDay() < data.company.Cows[number].dueDay + 5){
                data.company.Cows[number].locaton = "pen";                
             }
        }        
    }
}

function empCalving(number){
    if(data.company.Employees[number].contract == "PT"){
        probability = 3;
    }
    else if(data.company.Employees[number].contract == "FT"){
        probability = 7;
    }
    else if(data.company.Employees[number].contract == "M"){ //manager will be last in line, if the job hasn't yet been done he has to do it therefore probability == 11
        probability = 11;
    }
    if(getRndInteger(1,10) < probability){
        data.company.Employees[number].hours += 0.5;
    }

}

function move_cows(number, field){
    data.company.Cows[number].field = field;
    data.company.Cows[number].location = "field"
    for(let step = 0; step < data.company.Employees.length; step++){    //require all staff to move cows for now
        data.company.Employees[step].hours += 2;                        //in future can implement probability of different number of staff coming to help and if theres too few the probability of cows breaking out increases
    }
}

function employee_tick(number){
    if(data.company.Employees[number].contract == "PT"){
        probability = 3;
    }
    else if(data.company.Employees[number].contract == "FT"){
        probability = 7;
    }
    else if(data.company.Employees[number].contract == "M"){ //manager will be last in line, if the job hasn't yet been done he has to do it therefore probability == 11
        probability = 11;
    }

    if(getRndInteger(1,10) < probability){
        feed_cows(number);
    }

    if(getRndInteger(1,10) < probability){
        scrape_houses(number);
    }

    if(getRndInteger(1,10) < probability){
        bed_houses(number);
    }
}

function employee_jobs(employee){
    if(employee.contract == "M"){ //jobs only the manager or owner will carry out
        if(data.date.getDay() == 1){ //wages are paid on the first of every month
            employee_loop("wages");
        }
    }

    if(data.date.getMonth() == 4 && data.date.getDay == 1){ //Once into april all cows should be moved to the fields
        cow_loop("move", 0)
    }

    if(data.date.getMonth() == 9 && data.date.getDay == 1){ //Once into november all cows should be moved to the houses
        cow_loop("house")
        for(let step = 0; step < data.company.Employees.length; step++){    //Always requires all staff to house cattle for the winter
            employee.hours += 10;                        
        }

    }

    if(employee.contract == "PT"){
        probability = 3;
    }
    else if(employee.contract == "FT"){
        probability = 6;
    }
    else if(employee.contract == "M"){
        probability = 7;
    }    

    if(getRndInteger(1,10) < probability){
        cow_loop("abattoir");
    }

    if(getRndInteger(1,10) < probability && employee.fertCert == true){ //spreading fertiliser requires the employee to have a license
        spread_fertiliser(employee);     
    }

    if(getRndInteger(1,10) < probability && employee.contract == "M"){ //only the manager is trusted to reorder consumables
        restock(employee);
    }
}

function cow_loop(type, number){ //number can be used for multiple functions in future hence generic name for now used to denote field to move cows into
    number = data.company.Cows.length;
        for(let step=0; step<number; step++){
            if (type == "daily"){
            cow_tick(data.company.Cows[step]);
            }
            if (type == "abattoir"){
                abattoir_check(step);
            }
            if (type == "checkPregnant"){
                pregnant_check(step);
            }

            if(type == "checkPastures"){
                if(data.company.Cows[step].location == "pastures"){
                    return data.company.Cows[number].field;
                }
            }

            if(type == "houseCheck"){
                if(data.company.Cows[step].location == "house"){
                    return true;
                }
            }

            if(type == "penCheck"){
                if(data.company.Cows[step].location == "pen"){
                    return true;
                }
            }

            if(type == "move"){
                move_cows(step,number);
            }

            if(type == "house"){
                data.company.Cows[step].location = "house";
            }
        }  

}

function employee_loop(type){
    number = data.company.Employees.length;
    for (let step=0; step<number; step++){
        if (type == "dailyJobs"){        
            employee_tick(step)
        }
        if(type=="wages"){
            pay_wages(step);
        }
        if(type =="calving"){
            empCalving(step);
        }
        employee = data.company.Employees[step];
        if(type=="jobs"){
            employee_jobs(data.company.Employees[step]);
        }
    }
}

function feed_cows(number){
    if(data.company.Resources.houseSilage < minFeed){
        if (data.company.Resources.clampSilage.quantity >= averageConsumption * noCows){
            data.company.Resources.houseSilage.quantity += averageConsumption * noCows;
            data.company.Resources.silageClamp.quantity -= averageConsumption * noCows;
            data.company.Employees[number].hours += 2;
        }
        else{
            data.company.Resources.houseSilage.quantity += data.company.Resources.silageClamp.quantity;
            data.company.Resources.silageClamp.quantity = 0;
            data.company.Employees[number].hours += 1
        }

    }
}

function scrape_houses(number){
    if(scrapingDone == false){
        data.company.Resources.manure.quantity += data.company.Resources.houseManure.quantity;
        data.company.Resources.houseManure.quantity = 0;
        surfaceQuality += 5;
        data.company.Employees[number].hours += 1;
        scrapingDone = true;
    }
}

function bed_houses(number){
    beddingType = data.company.Resources.houseBedding.type;	
    if(beddingDone == false){    
        if(beddingType == "straw"){
            beddingValue = 10;
            data.company.Resources.straw.quantity -= data.company.Resources.houseBedding.capacity;            
            if(cow_loop("penCheck") == true){   //if there are any cows in the calving pens they need bedded too
                data.company.Resources.straw.quantity -= data.company.Resources.houseBedding.penCapacity;
                data.company.Employees[number] += .5;
            }
            beddingDone = true
        }
        if(beddingType == "sawdust"){
            beddingValue = 8;
            data.company.Resources.sawdust.quantity -= data.company.Resources.houseBedding.capacity;
            if(cow_loop("penCheck") == true){   //if there are any cows in the calving pens they need bedded too
                data.company.Resources.sawdust.quantity -= data.company.Resources.houseBedding.penCapacity;
                data.company.Employees[number] += .5;
            }
            beddingDone = true
        }
        if(beddingType == "sand"){
            beddingValue = 12;
            data.company.Resources.sand.quantity -= data.company.Resources.houseBedding.capacity;
            if(cow_loop("penCheck") == true){   //if there are any cows in the calving pens they need bedded too
                data.company.Resources.sand.quantity -= data.company.Resources.houseBedding.penCapacity;
                data.company.Employees[number] += .5;
            }
            beddingDone = true            
        }            
        data.company.Employees[number].hours += .5;
        surfaceQuality += beddingValue;    
    }
}

function serve_cow(cow){
    prob = getRndInteger(1,10);
    for(let step = 0; step < data.company.Bulls.length; step++){        
        if(cow.cull == false && cow.pregnant == false && cow.sire != data.company.Bulls[step].number){
            if(cow.field == data.company.Bulls[step].field){
                if(prob < cowPregnancyProbability){
                    cow.pregnant = true;
                    cow.calfSire = data.company.Bulls[step].number;
                    due = data.date.getMonth() + 9 //9 months is the average gestation period of a cow
                    if(due > 12){ //if the due date rolls into next year correct the month accordingly
                        due -= 12;
                    }
                    cow.dueMonth = due;
                    cow.dueDay = data.date.getDay();
                }
            }
        }
    }
}

function spread_fertiliser(employee){
    for(let step = 0; step< data.company.Fields.length; step++){
        if(data.company.Fields[step].fertiliser < 1 && data.company.Fields[step].crop == "grazing"){    //only spread artificial fertiliser on grazing fields as cheaper slurry is used on silage fields
            amount = fertRate * data.company.Fields[step].size //50kg of fertiliser per acre of field
            if(data.company.Resources.fertiliser.quantity > amount){ //can only apply the fertiliser if you have it in stock         
                employee.hours += 1 + 1 * data.company.Fields[step].size;   //1 hour for setup pluse one hour per acre in the field
                data.company.Fields[step].fertiliser = fertiliserValue;
                data.company.Resources.fertiliser.quantity -= 50 * data.company.Fields[step].size
            }
            
        }
    }
    
}

function make_silage(){
    for(let step = 0; step < data.company.Fields.length; step ++){
        if(data.company.Fields[step].crop == "silage" && data.company.Fields[step].feed > 0){
            pass;
        }
    }
}

function pay_wages(number){
	amount = data.company.Employees[number].hours * data.company.Employees[number].rate
    data.company.money -= amount;
}

function restock(employee){
    acres = 0;
    for(let step =0; step<data.company.Fields.length; step++){
        acres += data.company.Fields[step].size
    }
    if(data.company.Resources.fertiliser.quantity < acres * fertRate / 2){    //ensure there's enough inventory at all times to fertilise half your fields
        required = acres * fertRate - data.company.Resources.fertiliser.quantity;
        cost = required * fertilserPrice;
        data.company.money -= cost;
        data.company.Resources.fertiliser.quantity += required;
        employee.hours += 1;
    }

    if(data.company.Resources.straw.quantity < (data.company.Resources.houseBedding.capacity + data.company.Resources.houseBedding.penCapacity) * 7){ //ensure there's a weeks worth of straw at all times
        cost = 300 * balePrice; //restock with 300 bales (a trailer load) each time
        data.company.money -= cost;
        data.company.Resources.straw.quantity += 300;
        employee.hours += 1;
    }    

}

function daily_job_reset(){
    scrapingDone = false;
    beddingDone = false;
    feedingDone = false;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

function grass_grow(){
    for(let step=0; step<data.company.Fields.length; step++){
        growthFactor = 1;
        growthFactor += data.company.Fields[step].fertiliser / 100;
        data.company.Fields[step].fertiliser -= fertiliserValue / 100; //if you divide by 100 fields are fertilised 3 times per year, increase the number and this goes down, decrease the number and it goes up
        if(data.date.getMonth() > 4 && data.date.getMonth() < 8){
            growthFactor += summerValue;
        }
        data.company.Fields[step].feed += grassGrowth * growthFactor * data.company.Fields[step].size;
        
    }
}

//tick simulation
function simulate_tick(data) {
    data.date = addDays(data.date, 1); //increment the date
    grass_grow();    
    //simulate cow actions (amount of hunger amount of muck produced)
    cow_loop("daily");                 //increment growth of grass
	//when in housing
	if(cow_loop("houseCheck") == true){

        //new day so mark all daily jobs as not done
            daily_job_reset();

        // human daily jobs
            //cows need fed      - implemented      
            //cows need scraped  - implemented
            //cows need bedded   - implemented         
            //cows need minerals if they are in calve
            //some cows need meal if they are close to finishing
            employee_loop("dailyJobs");


		//any cattle close to calving?
        if(data.date.getMonth() > 0 && data.date.getMonth() < 7){ //months between which cows calve on most beef farms
            cow_loop("checkPregnant")                             //may remove this validation later as could cause issues
        }                                                         //could be better off adding to daily jobs list with similar validation
			//watching for early signs of calving -implemented

			//help may be needed to calve the cow

			//calves sick? need treatment?

			//
    }
    //irregular jobs
            //cattle ready for abbatoir? - implemented

            //silage needs made three times per year
                    //time and machinery depreciation
                    //cost of contractors

            //meal needs made and fed to cows which are close to finishing
                    //cost of meal being delivered to farm
                    //time of person feeding the meal to the cows

            //cows need serviced
                    //choose which ones to serve and which ones to finish
                    //any cull cows (cows too old to be served again or lame cows who aren't likely to get better or angry cows)

            //machinery needs maintained

            //do cattle need vaccinated? 
                    //month before calving need rotavec
                    //once calved the calves get vaccinated against coronavirus and lepto

            //tb test?

            //any cattle fall ill?            

            //wages need paid once per month - implemented

            employee_loop("jobs");



    //when on pastures
    if(cow_loop("checkPastures") != null){
        //do the cattle need moved?
        field = cow_loop("checkPastures");
        if(data.company.Fields[field].feed < 1.5 * minFeed){    //take them off the grazing ground sooner than minFeed value or else the grass won't grow back at the same rate
            for(let step=0; step<data.company.Fields.length; step++){
                if(data.company.Fields[step].feed > 2*minFeed && data.company.Fields[step].crop == "grazing"){ //2xminFeed as it's not worth moving them to the field if they will eat it all in a few hours.
                    cow_loop("move", step); //if the field is suitable move all cows to the new field
                }
            }
        }

            //if no fields available silage needed
        //does the electric fencer need moved
            //time of person going to move the fencer
        //does the battery on the fencer need replaced
            //a battery needs charged which costs electric
            //time of person to go to field and switch batterys over
            //if not checked regularly cows may break out
        //spread slurry on silage ground
            //time and machinery depreciation
        //spread artificial fertilizer on grazing ground
            //time and machinery depreciation
            //more expensive to the farmer but cows won't graze grass which is fertilized by their own slurry
    }
}

function start(){
    for(let step=0;step<1000;step++)
    {
	    simulate_tick(data);
    }
}
//function for date/time comparison probably needed 


//get field from an object
function getFields(input, field) {
    var output = [];
    for (var i=0; i<input.length; i++) {
        output.push(input[i][field]);
    } return output;
}