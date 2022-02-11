//data creation from json file

var data = ({
    "date" : new Date(),    
    "company" : {
        "name": "D McClements & Sons Ltd",
        "type": "Farm",
        "status": "Active",
        "dateOpened": "01011970",
        "money": 10000,
        "breed":{"name":"Salers","calvingEase":0.7, "calvesPerCow":8},        

        "Employees": [

            {
                "employeeName": "Charlie McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Labourer",
                "contract": "PT",
                "gender": "M",
                "rate": 10,
                "hours":0
                
            },
            {
                "employeeName": "Joshua McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Labourer",
                "contract": "PT",
                "gender": "M",
                "rate": 15,
                "hours":0
            },
            {
                "employeeName": "Andrew McClements",
                "status": "Active",
                "startDate" : "01012018",
                "leaveStatus": null,
                "employeeType": "Owner",
                "contract": "M",
                "gender": "M",
                "rate": 30,
                "hours":0

        }],

        "Cows":[
            {
                "number": 0,
                "age":1,
                "weight": 200,
                "feedConversionRate": 0.17   ,
                "pregnant":true,
                "noCalves":0,
                "dueMonth" : 1,
                "dueDay" : 2, 
                "appetite": 1.2,  
                "cull":false,  
                "culled":false,
                "location": "pen",
                "field":"0"
            },
            {
                "number":1,
                "age":1,
                "weight":170,
                "feedConversionRate":0.16,
                "pregnant":true,
                "noCalves":0,
                "dueMonth" : 2,
                "dueDay" : 10,
                "appetite": 1,
                "cull":false,
                "culled":false,
                "location": "house",
                "field":"0"
            },
            {
                "number":2,
                "age":1,
                "weight":210,
                "feedConversionRate":0.18,
                "pregnant":true,
                "noCalves":0,
                "dueMonth" : 2,
                "dueDay" : 15,
                "appetite": 0.9,
                "cull":false,
                "culled":false,
                "location": "house",
                "field":"0"
            }
        ],

        "Resources":{
            "straw":{
                "capacity":10000,
                "quantity":10000
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
                "quantity":100,
                "capacity":100
            }
        },

        "Fields":[
            {
                "name":"wee_field",
                "size":2,
                "crop":"grazing",
                "feed":0,
                "fertilized":false
            },
            {
                "name":"second_field",
                "size":6,
                "crop":"grazing",
                "feed":0,
                "fertilized":false
            },
            {
                "name":"pump_hill",
                "size":10,
                "crop":"silage",
                "feed":0,
                "fertilized":false
            }
        ]
    }
}
);