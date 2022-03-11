//data creation from json file

var data = ({
    "date" : new Date(2022, 0,0,0,0,0,0),    
    "company" : {
        "name": "D McClements & Sons Ltd",
        "type": "Farm",
        "status": "Active",
        "dateOpened": "01011970",
        "money": 1000000,
        "annualInsurance":6000,
        "herdSize":10,
        "breed":{"name":"Salers","calvingEase":0.5, "calvesPerCow":8},        //lower calving ease the better

        "Employees": [

            {
                "employeeName": "Charlie McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Labourer",
                "contract": "PT",
                "gender": "M",
                "rate": 5,
                "hours":0,
                "fertCert":false
                
            },
            {
                "employeeName": "Joshua McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Labourer",
                "contract": "FT",
                "gender": "M",
                "rate": 10,                
                "hours":0,
                "fertCert": true
            },
            {
                "employeeName": "Andrew McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Owner",
                "contract": "M",
                "gender": "M",
                "rate": 20,                
                "hours":0,
                "fertCert":true
        }],

        "Bulls":[
            {
                "number":0,
                "age":300               
            },
            {
                "number":1,
                "age":300
            }
        ],

        "Cows":[
            {
                "number": 0,
                "age":700,
                "sire":-1,
                "weight": 300,
                "feedConversionRate": 0.08,
                "calfNumber":0,
                "pregnant":true,
                "calfSire":0,
                "noCalves":0,
                "dueMonth" : 1,
                "dueDay" : 25, 
                "appetite": 1.2,  
                "cull":false,  
                "culled":false,
                "location": "pen",
                "lame":false,
                "field":"0"
            },
            {
                "number":1,
                "age":700,
                "sire":-1,
                "weight":300,
                "feedConversionRate":0.08,
                "calfNumber":0,
                "pregnant":true,
                "calfSire":0,
                "noCalves":0,
                "dueMonth" : 1,
                "dueDay" : 25,
                "appetite": 1,
                "cull":false,
                "culled":false,
                "location": "house",
                "lame":false,
                "field":"0"
            },
            {
                "number":2,
                "age":700,
                "sire":-1,
                "weight":300,
                "feedConversionRate":0.08,
                "calfNumber":0,
                "pregnant":true,
                "calfSire":0,
                "noCalves":0,
                "dueMonth" : 1,
                "dueDay" : 25,
                "appetite": 0.9,
                "cull":false,
                "culled":false,
                "location": "house",
                "lame":false,
                "field":"0"
            },
            {
                "number":3,
                "age":1,
                "sire":-1,
                "weight":40,
                "feedConversionRate":0.08,
                "calfNumber":0,
                "pregnant":true,
                "calfSire":0,
                "noCalves":0,
                "dueMonth" : 1,
                "dueDay" : 25,
                "appetite": 0.9,
                "cull":true,
                "culled":false,
                "location": "house",
                "lame":false,
                "field":"0"
            }
        ],

        "Resources":{
            "straw":{
                "capacity":1000,
                "quantity":1000
            },
            "clampSilage":{
                "capacity":10000,
                "quantity":10000
            },
            "houseSilage":{
                "capacity":1000,
                "quantity":1000
            },
            "slurry":{
                "capacity":10000,
                "quantity":100
            },
            "houseSlurry":{
                "capacity":100,
                "quantity":0
            },
            "manure":{
                "capacity":10000,
                "quantity":100
            },
            "houseManure":{
                "capacity":100,
                "quantity":0
            },
            "houseBedding":{
                "type":"straw",
                "quantity":2,
                "capacity":2,
                "penCapacity":8 //more straw provided when calving
            },
            "fertiliser":{
                "quantity":1  //in kg
            }
        },

        "Fields":[
            {
                "name":"wee_field",
                "size":25,
                "crop":"grazing",
                "feed":100,
                "fertiliser":-1
            },
            {
                "name":"second_field",
                "size":25,
                "crop":"grazing",
                "feed":100,
                "fertiliser":-1
            },
            {
                "name":"pump_hill",
                "size":25,
                "crop":"grazing",
                "feed":100,
                "fertiliser":-1
            },
            {
                "name":"tank_hill",
                "size":25,
                "crop":"silage",
                "feed":100,
                "fertiliser":-1
            },
            {
                "name":"pit_field",
                "size":25,
                "crop":"silage",
                "feed":100,
                "fertiliser":-1
            }
        ]
    }
}
);

function populateHerd(){    //populates the herd with the desired number of cows from the start
    for(let step=0; step<data.company.herdSize * 1.5; step++){
        noCows = data.company.Cows.length;    
        data.company.Cows.push({number:noCows,age: 700,weight: 300,
            sire:-1, feedConversionRate: averageFeedConversionRate * ((getRndInteger(3) + 8) / 10),pregnant:false,
            calfSire: 0, dueMonth:0,dueDay:0, noCalves:0,calfNumber:-1,cull:false,field:0,
            appetite:(getRndInteger(4) + 7) / 10,culled:false,location:"house"});
        option = cow_loop("herdNo") //gives the number of cows in the replacement herd to see if this calf should join that heard or join the cull heard
        if (option >= data.company.herdSize){
            data.company.Cows[noCows].cull = true;
        } 
    }
      
}